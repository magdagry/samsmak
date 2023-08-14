  import { menu } from "./data.js";

(function() {
  const dayNumber = new Date().getDay();
  const dailyMenuDay = menu.find(day => day.id === dayNumber);

  if (dailyMenuDay) {
    const cardHtml = createDailyCardHtml(dailyMenuDay.id, dailyMenuDay.data, dailyMenuDay.dayName, dailyMenuDay.dishes);
    $("#daily-menu-card").html(cardHtml);
  } else {
    $("#daily-menu-card").html("<p>Pracujemy od poniedziałku do piątku</p>");
  }
})();

// Tworzenie pojedynczej karty
function createDailyCardHtml(id, data, dayName, dishes) {
  let card = `<div class="card text-dark bg-light mb-3 bcg-card">
    <div class="card-body">
      <h5 class="card-title">${dayName}</h5>
      <p class="card-text">${data}</p>`;

  dishes.forEach(dish => {
    card += `<div class="card-text meal">
      <p class="mealName">${dish.name}</p>
      <hr class="mealSeparator">
      <span>${dish.price} zł</span>
    </div>
    <p class="mealDesc">${dish.description}</p>`;
  });

  card += `</div></div>`;
  return card;
}




