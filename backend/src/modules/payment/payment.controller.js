import { prisma } from "../../config/db.js";
import ApiResponse from "../../utils/ApiResponse.js";
import catchAsync from "../../utils/catchAsync.js";
import Razorpay from "razorpay";

/**
 * CREATE SUBSCRIPTION (₹49 / MONTH)
 * One plan → multiple users → unique subscription per user
 */
export const createSubscription = catchAsync(async (req, res) => {
  const { userId } = req.body;
  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
  // 1️⃣ Check if user already has an active subscription
  // const existingSubscription = await prisma.subscription_plan.findUnique({
  //   where: { user_id: userId },
  // });

  // if (
  //   existingSubscription &&
  //   ["CREATED", "AUTHENTICATED", "ACTIVE"].includes(existingSubscription.status)
  // ) {
  //   return res
  //     .status(400)
  //     .json(
  //       new ApiResponse(400, null, "User already has an active subscription")
  //     );
  // }
  // 2️⃣ Create subscription in Razorpay
  const subscription = await razorpay.subscriptions.create({
    plan_id: process.env.RAZORPAY_MONTHLY_PLAN_ID,
    customer_notify: 1,
    total_count: 120, // 10 years (safe large number)
  });

  // 3️⃣ Save subscription in DB
  const dbSubscription = await prisma.subscription_plan.upsert({
    where: { user_id: userId },
    update: {
      razorpay_subscription_id: subscription.id,
      razorpay_plan_id: process.env.RAZORPAY_MONTHLY_PLAN_ID,
      status: "CREATED",
    },
    create: {
      user_id: userId,
      razorpay_subscription_id: subscription.id,
      razorpay_plan_id: process.env.RAZORPAY_MONTHLY_PLAN_ID,
      status: "CREATED",
    },
  });

  // 4️⃣ Send response to frontend
  return res.status(200).json(
    new ApiResponse(
      200,
      {
        subscriptionId: subscription.id,
        status: subscription.status,
      },
      "Subscription created successfully"
    )
  );
});
