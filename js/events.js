const events = [
  {
    id: 1,
    name: "Tech Conference 2025",
    date: "2025-07-13",
    city: "accra",
    category: "Tech",
    location: "ALU Campus",
    description: "A major tech innovation conference."
  },
  {
    id: 2,
    name: "Ghana Music Awards",
    date: "2025-07-14",
    city: "accra",
    category: "Music",
    location: "National Theatre",
    description: "Celebrating musical talent in Ghana."
  },
  {
    id: 3,
    name: "Art Expo",
    date: "2025-07-13",
    city: "kumasi",
    category: "Art",
    location: "Kumasi Gallery",
    description: "Art pieces from local creatives."
  }
];


function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    city: params.get("city")?.toLowerCase(),
    date: params.get("date"),
    category: params.get("category")
  };
}

function displayEvents(filteredEvents) {
  const container = document.getElementById("events-container");
  if (filteredEvents.length === 0) {
    container.innerHTML = '<p>No events found.</p>';
    return;
  }

  container.innerHTML = filteredEvents.map(event => `
    <div class="col-md-6 mb-4">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">${event.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${event.date} – ${event.location}</h6>
          <p class="card-text">${event.description}</p>
          <a href="event-details.html?id=${event.id}" class="btn btn-sm btn-outline-primary">View Details</a>
        </div>
      </div>
    </div>`).join('');
}

document.addEventListener("DOMContentLoaded", () => {
  const { city, date, category } = getQueryParams();

  const filtered = events.filter(event => {
    const matchCity = !city || event.city.toLowerCase().includes(city);
    const matchDate = !date || event.date === date;
    const matchCategory = !category || event.category.toLowerCase() === category.toLowerCase();

    return matchCity && matchDate && matchCategory;
  });

  displayEvents(filtered);
});
