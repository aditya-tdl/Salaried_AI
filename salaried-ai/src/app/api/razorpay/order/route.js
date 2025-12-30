import Razorpay from "razorpay";
import { NextResponse } from "next/server";

const razorpay = new Razorpay({
  key_id: "rzp_test_Kotf5HyoWEo0bV",
  key_secret: process.env.RAZORPAY_KEY_SECRET, // Make sure to set this in .env
});

export async function POST(req) {
  try {
    const { amount, currency } = await req.json();

    const options = {
      amount: amount * 100, // amount in the smallest currency unit (paise)
      currency: currency || "INR",
      receipt: "receipt_" + Math.random().toString(36).substring(7),
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json(order, { status: 200 });
  } catch (error) {
    console.error("Razorpay order creation failed:", error);
    return NextResponse.json(
      { error: "Failed to create Razorpay order" },
      { status: 500 }
    );
  }
}
