import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
export const dynamic = "force-dynamic";
export async function POST(request: Request) {
  const { brand, model, price } = await request.json();
  const prompt = `Predict the price of a ${brand} ${model} (current price $${price}) after 5 years, assuming average depreciation and tech trends. Return only the predicted price as a number.`;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
    const result = await model.generateContent(prompt);
    const prediction = result.response.text();
    return NextResponse.json({ prediction });
  } catch (err: any) {
    return NextResponse.json(
      { error: 'Prediction failed', details: err.message },
      { status: 500 }
    );
  }
}