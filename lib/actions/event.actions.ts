// lib/actions/event.actions.ts

// Server actions - executed on the server - to securely handle mutations/side-effects/ any other server-side logic, without exposing sensitive code. SO it's a POST request without a lot of code.

"use server";

import connectDB from "@/lib/mongodb";
import Event from "@/database/event.model";
import { IEvent } from "@/database/event.model";

export const getSimilarEventsBySlug = async (
  slug: string,
): Promise<IEvent[]> => {
  try {
    await connectDB();

    const event = await Event.findOne({ slug });

    if (!event) return [];

    return await Event.find({
      // $ne = mongoDB query operator = not equal
      _id: {
        $ne: event._id,
      },
      tags: { $in: event.tags },
    }).lean<IEvent[]>();
  } catch {
    return [];
  }
};
