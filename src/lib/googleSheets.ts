import { google } from "googleapis";

export async function appendToGoogleSheet(data: {
    fullname: string;
    phone: string;
    email: string;
    message: string;
    createdAt: string;
}) {
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const range = "A:D"; // columnas a usar
    const values = [[data.fullname, data.email, data.message, data.createdAt]];

    await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range,
        valueInputOption: "USER_ENTERED",
        requestBody: { values },
    });

    return { success: true };
}