import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";

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
    <>
      <h1
        id="contact"
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-600 border-b border-l rounded-xl border-neutral-300 py-2 px-4 w-full mb-12"
      >
        Contacto
      </h1>

      <div className="flex flex-col md:flex-row gap-6 justify-between items-center w-full">
        <div className="w-full md:w-1/2 text-neutral-600 text-2xl text-center">
          <p>Estoy interesado en trabajar como Desarrollador JavaScript Full Stack.</p>
          <p>Si tienes alguna pregunta o necesitas más información, no dudes en contactarme.</p>
        </div>

        <form
          id="contact-form"
          name="contact"
          className="contact-form contact bg-white/50 w-full md:w-1/2"
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
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
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
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
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
            className={`about-me-buttons justify-center shadow-md cursor-pointer ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
    </>
  );
}
