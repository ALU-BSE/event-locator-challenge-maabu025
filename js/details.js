const eventList = [
  {
    id: 1,
    name: "Tech Conference 2025",
    date: "2025-07-13",
    location: "ALU Campus",
    description: "A major tech innovation conference."
  },
  {
    id: 2,
    name: "Ghana Music Awards",
    date: "2025-07-14",
    location: "National Theatre",
    description: "Celebrating musical talent in Ghana."
  },
  {
    id: 3,
    name: "Art Expo",
    date: "2025-07-13",
    location: "Kumasi Gallery",
    description: "Art pieces from local creatives."
  }
];

function getEventId() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get("id"));
}

function showEventDetails(id) {
  const event = eventList.find(e => e.id === id);
  if (!event) {
    document.body.innerHTML = "<div class='container py-5'><h2>Event not found</h2></div>";
    return;
  }

  document.getElementById("event-name").textContent = event.name;
  document.getElementById("event-info").textContent = `${event.date} – ${event.location}`;
  document.getElementById("event-desc").textContent = event.description;
}

document.addEventListener("DOMContentLoaded", () => {
  const eventId = getEventId();
  showEventDetails(eventId);
});
