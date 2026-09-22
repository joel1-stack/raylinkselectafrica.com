import { NextRequest, NextResponse } from "next/server";
import { generateQuoteMessage, generateWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, service, quantity } = body;

    if (!name || !phone || !service || !quantity) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const message = generateQuoteMessage({ name, phone, service, quantity });
    const whatsappUrl = generateWhatsAppUrl(siteConfig.whatsapp, message);

    return NextResponse.json({
      success: true,
      whatsappUrl,
      message: "Quote request prepared successfully",
    });
  } catch (error) {
    console.error("Quote submission error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}