export const WHATSAPP_NUMBER = "56987017328";
export const CONTACT_PHONE = "+56 9 8701 7328";

export function createWhatsAppUrl(service?: string) {
  const message = [
    "Hola Titan Pulido, quisiera cotizar " + (service ? `${service}.` : "un trabajo para mi piso."),
    "", "Comuna:", "Superficie aproximada (m²):", "Tipo y estado del piso:", "",
    "Puedo enviar fotos para la evaluación.",
  ].join("\n");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
