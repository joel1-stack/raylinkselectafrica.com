export function generateWhatsAppUrl(phone: string, message: string): string {
  const cleanPhone = phone.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

export function generateQuoteMessage(data: {
  name: string;
  phone: string;
  service: string;
  quantity: string;
}): string {
  return `Hi Raylink, I'd like a quote for:
  
Name: ${data.name}
WhatsApp: ${data.phone}
Service: ${data.service}
Quantity/Size: ${data.quantity}

Please contact me to discuss.`;
}