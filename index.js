  import { menu } from "../data.js";

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
        <p class="card-text">${data}</p>
        <p class="card-text"><small>opcja1:</small>kiszone śledzie (opis) </p>
        <p class="card-text"><small>opcja2:</small>obierki z pyr (opis)</p>
        <p class="card-text"><small>opcja3:</small>zupa z trupa (opis)</p>

    </div>

</div>`;

    return card;
} 

// Tworzenie grupy kart na podstawie tablicy kategorii
function createGroupCardHtml(menuArray) {
    let group = "";
    menuArray.forEach((cat) => {
        group += createCardHtml(cat.id, cat.data, cat.dayName, cat.disches);
    } );

    return group;
}