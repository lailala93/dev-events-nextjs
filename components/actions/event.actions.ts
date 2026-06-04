// /actions/event.actions.ts

// Server actions - executed on the server - to securely handle mutations/side-effects/ any other server-side logic, without exposing sensitive code. SO it's a POST request without a lot of code.

"use server";

import connectDB from "@/lib/mongodb";
import Event from "@/database/event.model";

export const getSimiliarEventsBySlug = async (slug: string) => {
  try {
    await connectDB();
    const event = await Event.findOne({ slug });

    return await Event.find({
      // $ne = mongoDB query operator = not equal
      _id: {
        $ne: event._id,
      },
      // find docs whose id != to event._id
      tags: { $in: event.tags },
    }).lean();
  } catch {
    return [];
  }
};
