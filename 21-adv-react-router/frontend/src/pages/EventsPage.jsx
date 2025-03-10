import { Suspense, lazy } from "react";
import { useLoaderData } from "react-router-dom";
const EventsList = lazy(() => import("../components/EventsList"));

function EventsPage() {
  const { events } = useLoaderData();

  console.log("////////////// events", events);

  if (!events) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }

  // return <EventsList events={events} />;

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <EventsList events={events} />
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
      status: 500
    });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export async function loader() {
  const events = await loadEvents();
  return { events };
}
