// import { menu } from "../data.js";

// $(function(){

//     const dailyMenu = menu;
   
//     const groupCardHtml = createGroupCardHtml(dailyMenu);
//     $("#cards").append(groupCardHtml);
    
//   });
  
//   // Tworzenie pojedynczej karty
//   function createCardHtml(id, data, dayName, disches) {
//       let card = `  <div class="card border-dark mb-3" style="max-width: 18rem;">
//       <div class="card-body text-dark">
//           <h5 class="card-title">${data}</h5>
//           <p class="card-text">${dayName}</p>
//       </div>
//   </div>`;
  
//       return card;
//   }

//   // Tworzenie grupy kart na podstawie tablicy kategorii
// function createGroupCardHtml(categoriesArray) {
//     let group = "";
//     categoriesArray.forEach((cat) => {
//         group += createCardHtml(cat.name, cat.description, cat.price);
//     } );

//     return group;
// }

// $(function(){

//     const carCategories = categories;
   
//     const groupCardHtml = createGroupCardHtml(carCategories);
//     $("#cards").append(groupCardHtml);
    
//   });
  
//   // Tworzenie pojedynczej karty
//   function createCardHtml(id, name, desc, image) {
//       let card = `<div class="col">
//       <div class="card">
//         <img src="${image}" class="card-img-top card-img" alt="${name}">
//         <div class="card-body">
//           <h5 class="card-title card-title-margin">${name}</h5>
//           <p class="card-text card-text-line text-muted">
//             ${desc}
//           </p>
//           <a href="cars.html?id=${id}" class="btn btn-outline-secondary btn-sm">Więcej...</a>
//         </div>
//       </div>
//     </div>`;
  
//       return card;
//   } 
  
//   // Tworzenie grupy kart na podstawie tablicy kategorii
//   function createGroupCardHtml(categoriesArray) {
//       let group = "";
//       categoriesArray.forEach((cat) => {
//           group += createCardHtml(cat.id, cat.name, cat.description, cat.image);
//       } );
  
//       return group;
//   }
  

  import { menu } from "../data.js";

$(function(){

  const dailyMenu = menu;
 
  const groupCardHtml = createGroupCardHtml(dailyMenu);
  $("#cards").append(groupCardHtml);
  
});

// Tworzenie pojedynczej karty
function createCardHtml(id, data, dayName, disches) {
    let card = `<div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title card-title-margin">${dayName}</h5>
        <p class="card-text card-text-line text-muted">
          ${data}
        </p>
        <p class="card-text card-text-line text-muted">
        ${disches}
      </p>
        <a href="cars.html?id=${id}" class="btn btn-outline-secondary btn-sm">Więcej...</a>
      </div>
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