import React from "react";

const EventDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  return (
    <section id="event">
      <h1>Event details </h1>
      <p>{slug}</p>
    </section>
  );
};

export default EventDetails;
