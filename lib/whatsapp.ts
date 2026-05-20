const ipmesPhone = "212600000000";
const defaultWhatsAppMessage = "Bonjour IPMES, je souhaite avoir plus d'informations.";
const maxMessageLength = 500;

function sanitizeWhatsAppMessage(message: string) {
  return message
    .normalize("NFC")
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxMessageLength);
}

export function createWhatsAppUrl(message = defaultWhatsAppMessage) {
  const safeMessage = sanitizeWhatsAppMessage(message) || defaultWhatsAppMessage;

  return `https://wa.me/${ipmesPhone}?text=${encodeURIComponent(safeMessage)}`;
}
