import Contacts from "@/src/database/models/contacts";
import dbConnection from "@/src/lib/dbconnection";
import { appendToGoogleSheet } from "@/src/lib/googleSheets";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Conectar a MongoDB
    await dbConnection();

    // Obtener datos del body
    const { fullname, phone, email, message } = await request.json();

    // Crear nuevo contacto
    const newContact = new Contacts({
      fullname,
      phone,
      email,
      message,
    });
    await appendToGoogleSheet({
            fullname,
            phone,
            email,
            message,
            createdAt: new Date().toISOString(),
        });
    
    //Guardar en MongoDB
    const savedContact = await newContact.save();
    
    // Responder
    return NextResponse.json(
      { ok: true, data: savedContact },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error en POST /api/contactMe:", error);
    return NextResponse.json(
      { ok: false, error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

