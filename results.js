const filters = JSON.parse(localStorage.getItem("aaoLoFilters"));

document.getElementById("selection-text").innerText =
  `Going with: ${filters.group} • Mood: ${filters.mood}`;

const restaurants = [
  {
    name: "The Olive Bistro",
    cuisine: "Italian • Continental",
    budget: "₹₹₹",
    rating: 4.6,
    vibe: "Calm, premium, romantic",
    image: "assests/resto1.jpg",
    suitableFor: ["couple", "friends"],
    mood: ["restaurant"]
  },
  {
    name: "Family Dhaba",
    cuisine: "North Indian",
    budget: "₹₹",
    rating: 4.3,
    vibe: "Spacious & family friendly",
    image: "assests/resto2.jpg",
    suitableFor: ["family"],
    mood: ["restaurant"]
  },
  {
    name: "Cafe BrewLab",
    cuisine: "Cafe • Coffee",
    budget: "₹₹",
    rating: 4.5,
    vibe: "Cozy & work-friendly",
    image: "assests/resto3.jpg",
    suitableFor: ["solo", "friends"],
    mood: ["cafe"]
  }
];

/* FILTER */
const filtered = restaurants.filter(r =>
  r.suitableFor.includes(filters.group) &&
  r.mood.includes(filters.mood)
);

/* RENDER */
const container = document.getElementById("resultsContainer");

if (filtered.length === 0) {
  container.innerHTML = "<p>No matching restaurants found.</p>";
}

filtered.forEach(r => {
  container.innerHTML += `
    <div class="restaurant-card">
      <img src="${r.image}">
      <div class="card-content">
        <h3>${r.name}</h3>
        <p class="cuisine">${r.cuisine}</p>

        <div class="tags">
          ${r.suitableFor.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>

        <p class="budget">Budget: ${r.budget}</p>
        <p class="rating">⭐ ${r.rating}</p>
        <p class="vibe">${r.vibe}</p>
      </div>
    </div>
  `;
});
