import { Schema, model, Model } from "mongoose";

const contactsSchema = new Schema({

    fullname: {
        type: String,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
    },
    message: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }


});

// Utiliza un patrón singleton para garantizar que solo se compile una instancia del modelo
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let Contacts: Model<any>;
try {
    // Intenta compilar el modelo solo una vez
    Contacts = model("contacts"); // es el nombre de la entidad donde esta apuntando al base de datos
// eslint-disable-next-line @typescript-eslint/no-unused-vars
} catch (error) {
    // Si el modelo ya está compilado, úsalo
    Contacts = model("contacts", contactsSchema);
}

export default Contacts;