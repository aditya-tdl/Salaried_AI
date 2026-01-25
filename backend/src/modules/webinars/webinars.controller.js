import { prisma } from "../../config/db.js";
import catchAsync from "../../utils/catchAsync.js";
import ApiResponse from "../../utils/ApiResponse.js";
import ApiError from "../../utils/ApiError.js";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
import { getPagination, getSearch } from "../../utils/query.js";

dayjs.extend(customParseFormat);

export const createWebinar = catchAsync(async (req, res) => {
  const {
    title,
    agenda,
    speakers,
    date,
    time,
    duration,
    platform,
    link,
    type,
    price,
    capacity,
    imageUrl,
    imageKey,
  } = req.body;

  if (!title || !date || !time) {
    throw new ApiError(400, "Title, date and time are required");
  }

  // ✅ Validate & convert DATE
  const parsedDate = dayjs(date, "YYYY-MM-DD", true);
  if (!parsedDate.isValid()) {
    throw new ApiError(400, "Invalid date format. Use YYYY-MM-DD");
  }

  // Convert to full ISO DateTime (required by Prisma)
  const webinarDate = parsedDate.toDate();

  // ✅ Validate & convert TIME
  const parsedTime = dayjs(time, "hh:mm A", true);
  if (!parsedTime.isValid()) {
    throw new ApiError(400, "Invalid time format. Use hh:mm AM/PM");
  }

  // Convert to 24h time and attach dummy date (required for JS Date)
  const time24 = parsedTime.format("HH:mm:ss");
  const webinarTime = new Date(`1970-01-01T${time24}`);

  /* -------------------- CREATE WEBINAR -------------------- */
  const webinar = await prisma.webinars.create({
    data: {
      title,
      agenda,
      speakers,
      webinar_date: webinarDate,
      webinar_time: webinarTime,
      duration: Number(duration),
      platform,
      link,
      type,
      price: price ? Number(price) : null,
      capacity: Number(capacity),
      image_url: imageUrl,
      image_key: imageKey,
    },
  });

  return res
    .status(201)
    .json(new ApiResponse(201, webinar, "Webinar created successfully"));
});

export const getAllWebinars = catchAsync(async (req, res) => {
  const webinars = await prisma.webinars.findMany({
    orderBy: {
      created_at: "desc", // Latest created first
    },
  });

  return res
    .status(200)
    .json(new ApiResponse(200, webinars, "Webinars fetched successfully"));
});
export const deleteWebinar = catchAsync(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    throw new ApiError(400, "Webinar ID is required");
  }

  // Prisma BigInt support → convert safely
  const webinarId = BigInt(id);
  console.log("webinarId", webinarId);
  // Check if webinar exists
  const existingWebinar = await prisma.webinars.findUnique({
    where: { id: webinarId },
  });
  console.log("existingWebinar", existingWebinar);
  if (!existingWebinar) {
    throw new ApiError(404, "Webinar not found");
  }

  // 🗑 Delete webinar
  await prisma.webinars.delete({
    where: { id: webinarId },
  });


  // (Optional future) delete image from S3 using existingWebinar.image_key

  return res
    .status(200)
    .json(new ApiResponse(200, null, "Webinar deleted successfully"));
});

export const updateWebinar = catchAsync(async (req, res) => {
  const { id } = req.params;
  const {
    title,
    agenda,
    speakers,
    date,
    time,
    duration,
    platform,
    link,
    type,
    price,
    capacity,
    imageUrl,
    imageKey,
  } = req.body;

  if (!id) {
    throw new ApiError(400, "Webinar ID is required");
  }

  // ✅ Validate & convert DATE
  const parsedDate = dayjs(date, "YYYY-MM-DD", true);
  if (!parsedDate.isValid()) {
    throw new ApiError(400, "Invalid date format. Use YYYY-MM-DD");
  }

  // Convert to full ISO DateTime (required by Prisma)
  const webinarDate = parsedDate.toDate();

  // ✅ Validate & convert TIME
  const parsedTime = dayjs(time, "hh:mm A", true);
  if (!parsedTime.isValid()) {
    throw new ApiError(400, "Invalid time format. Use hh:mm AM/PM");
  }

  // Convert to 24h time and attach dummy date (required for JS Date)
  const time24 = parsedTime.format("HH:mm:ss");
  const webinarTime = new Date(`1970-01-01T${time24}`);

  const webinarId = BigInt(id);

  const existingWebinar = await prisma.webinars.findUnique({
    where: { id: webinarId },
  });

  if (!existingWebinar) {
    throw new ApiError(404, "Webinar not found");
  }

  const updatedWebinar = await prisma.webinars.update({
    where: { id: webinarId },
    data: {
      title,
      agenda,
      speakers,
      webinar_date: webinarDate,
      webinar_time: webinarTime,
      duration: Number(duration),
      platform,
      link,
      type,
      price: price ? Number(price) : null,
      capacity: Number(capacity),
      image_url: imageUrl,
      image_key: imageKey,
    },
  });

  return res
    .status(200)
    .json(
      new ApiResponse(200, updatedWebinar, "Webinar updated successfully")
    );
});
