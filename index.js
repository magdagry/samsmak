  import { menu } from "./data.js";

$(function(){

  const dailyMenu = menu;
 
  const groupCardHtml = createGroupCardHtml(dailyMenu);
  $("#cards").append(groupCardHtml);
  
});

// Tworzenie pojedynczej karty
function createCardHtml(id, data, dayName, dishes) {
    
    let card = `<div class="card text-dark bg-light mb-3 bcg-card">
    <div class="card-body">
        <h5 class="card-title">${dayName}</h5>
        <p class="card-text">${data}</p>`

        let optionNumber = 1

        dishes.forEach(dish => {
          card += `<div class="card-text meal">  <p class="mealName">${dish.name}</p> <hr class="mealSeparator"> <span>${dish.price} zł</span> </div>
           <p class="mealDesc">${dish.description} blebleblebelbelbe blebele bleeb</p>`;
          optionNumber++; 
      });

        card += `</div></div>`;


    return card;
} 

// Tworzenie grupy kart na podstawie tablicy kategorii
function createGroupCardHtml(menuArray) {
    let group = "";
    menuArray.forEach((cat) => {
        group += createCardHtml(cat.id, cat.data, cat.dayName, cat.dishes);
    } );

    return group;
}








// $(function() {
//   const today = new Date();
//   const currentDayName = days[today.getDay()];
//   const dailyMenuDay = daylyMenu.find(day => day.dayName === currentDayName);

//   if (dailyMenuDay) {
//     // Pokazanie odpowiedniej karty menu
//     displayDailyMenuCard(dailyMenuDay);
//   } else {
//     $("#day-card").html("<p>Brak menu na dzisiaj.</p>");
//   }
// });s

(function() {
  const today = new Date();
  const currentDayName = menu[0].dayName;
  const dailyMenuDay = menu.find(day => day.dayName === currentDayName);

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




