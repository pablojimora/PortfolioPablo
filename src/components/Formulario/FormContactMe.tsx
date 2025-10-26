"use client";

import React, { useState } from "react";
import axios from "axios";
import styles from "./form.module.css";

export interface ContactFormData {
  fullname: string;
  phone: string;
  email: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });

  const [countryCode, setCountryCode] = useState("+57"); // 👈 Valor inicial (Colombia)
  const [errors, setErrors] = useState<string[]>([]);
  const [successMessage, setSuccessMessage] = useState<string>("");

  // Actualiza inputs del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validación básica
 const validateForm = (): string[] => {
  const validationErrors: string[] = [];

  // Nombre: obligatorio y al menos 3 caracteres
  if (!formData.fullname.trim()) {
    validationErrors.push("El nombre es obligatorio.");
  } else if (formData.fullname.trim().length < 3) {
    validationErrors.push("El nombre debe tener al menos 3 caracteres.");
  }

  // Teléfono: obligatorio, solo dígitos y entre 7 y 15 caracteres
  if (!formData.phone.trim()) {
    validationErrors.push("El teléfono es obligatorio.");
  } else if (!/^\d{7,15}$/.test(formData.phone.trim())) {
    validationErrors.push("El teléfono debe tener solo números y entre 7 y 15 dígitos.");
  }

  // Email: obligatorio y con formato válido
  if (!formData.email.trim()) {
    validationErrors.push("El correo es obligatorio.");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
    validationErrors.push("El correo electrónico no es válido.");
  }

  // Mensaje: obligatorio y con longitud mínima
  if (!formData.message.trim()) {
    validationErrors.push("El mensaje es obligatorio.");
  } else if (formData.message.trim().length < 10) {
    validationErrors.push("El mensaje debe tener al menos 10 caracteres.");
  } else if (formData.message.trim().length > 500) {
    validationErrors.push("El mensaje no puede superar los 500 caracteres.");
  }

  return validationErrors;
};


  // Envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("");
    const validationErrors = validateForm();

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    // 👇 Concatenamos el indicativo con el número antes de enviarlo
    const fullPhone = `${countryCode}${formData.phone}`;

    try {
      const response = await axios.post("/api/contactMe", {
        ...formData,
        phone: fullPhone, // se envía como string
      });

      if (response.data.ok) {
        setSuccessMessage("¡Mensaje enviado correctamente!");
        setFormData({ fullname: "", phone: "", email: "", message: "" });
        setErrors([]);
      } else {
        setErrors([response.data.error || "Error desconocido al enviar el mensaje."]);
      }
    } catch (error) {
      console.error(error);
      setErrors(["Error al enviar el formulario."]);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Contáctame</h2>

        <label className={styles.label}>Nombre completo:</label>
        <input
          type="text"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          className={styles.input}
        />

        <label className={styles.label}>Teléfono:</label>
        <div className={styles.phoneContainer}>
          <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className={styles.select}
          >
            <option value="+57">🇨🇴 +57</option>
            <option value="+1">🇺🇸 +1</option>
            <option value="+34">🇪🇸 +34</option>
            <option value="+52">🇲🇽 +52</option>
            <option value="+55">🇧🇷 +55</option>
            <option value="+44">🇬🇧 +44</option>
          </select>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={styles.phoneInput}
            placeholder="Número"
          />
        </div>

        <label className={styles.label}>Correo electrónico:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
        />

        <label className={styles.label}>Mensaje:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={styles.textarea}
        />

        <button type="submit" className={styles.button}>
          Enviar
        </button>

        {errors.length > 0 && (
          <ul className={styles.errorList}>
            {errors.map((err, idx) => (
              <li key={idx}>{err}</li>
            ))}
          </ul>
        )}

        {successMessage && <p className={styles.success}>{successMessage}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
