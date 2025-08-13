import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from '@emailjs/browser';

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre no puede exceder los 50 caracteres")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "El nombre solo puede contener letras"),
  email: z
    .string()
    .email("Correo electrónico inválido")
    .min(5, "El correo es demasiado corto")
    .max(50, "El correo no puede exceder los 50 caracteres"),
  message: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(500, "El mensaje no puede exceder los 500 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  emailjs.init("Ffb8bBPp71LGwl6Yo");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const serviceID = "default_service";
      const templateID = "template_d9xq9bb";
      const formData = {
        contact_name: data.name,
        contact_email: data.email,
        contact_message: data.message,
      };
      emailjs.send(serviceID, templateID, formData).then(
        function (response) {
          console.log("Correo enviado con éxito:", response);
          alert("¡Gracias! Tu mensaje ha sido enviado.");
          reset();
        },
        function (error) {
          console.error("Error al enviar el correo:", error);
          alert(
            "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo."
          );
        }
      );
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <div className="flex flex-col items-center contact bg-white/50">
      <h1
        className="text-8xl font-bold text-gray-600 mb-8"
        style={{ lineHeight: "0.9" }}
      >
        Contacto
      </h1>
      <form
        id="contact-form"
        name="contact"
        className="contact-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            placeholder="Tu nombre"
            className={`${errors.name ? "border-red-500" : ""}`}
            {...register("name")}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            placeholder="Tu correo"
            className={`${errors.email ? "border-red-500" : ""}`}
            {...register("email")}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            rows={4}
            placeholder="Escribe tu mensaje"
            className={`${errors.message ? "border-red-500" : ""}`}
            {...register("message")}
          ></textarea>
          {errors.message && (
            <span className="text-red-500 text-sm">
              {errors.message.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className={`about-me-buttons justify-center shadow-md ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
}
