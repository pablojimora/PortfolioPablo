import { ApiResponse, Contact } from "@/src/interfaces/contact";
import axios from "axios";


const API_URL = "/api/contactMe";

/* ==========================
   POST - Crear contacto
   ========================== */
export const createProduct = async (contact: Omit<Contact, "_id">): Promise<ApiResponse<Contact>> => {
  try {
    const response = await axios.post(API_URL, contact);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return { error: "Error al crear contacto" };
    }
    return { error: "Error desconocido" };
  }
};


