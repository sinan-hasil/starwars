let characters = [
      {
        "id": 1,
        "name": "Luke Skywalker",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
        "homeworld": "tatooine"
      },
      {
        "id": 2,
        "name": "C-3PO",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
        "homeworld": "tatooine"
      },
      {
        "id": 3,
        "name": "R2-D2",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
        "homeworld": "naboo"
      },
      {
        "id": 4,
        "name": "Darth Vader",
        "pic": "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
        "homeworld": "tatooine"
      },
      {
        "id": 5,
        "name": "Leia Organa",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
        "homeworld": "alderaan"
      },
      {
        "id": 6,
        "name": "Owen Lars",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
        "homeworld": "tatooine"
      },
      {
        "id": 7,
        "name": "Beru Whitesun lars",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
        "homeworld": "tatooine"
      },
      {
        "id": 8,
        "name": "R5-D4",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
        "homeworld": "tatooine"
      },
      {
        "id": 9,
        "name": "Biggs Darklighter",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
        "homeworld": "tatooine"
      },
      {
        "id": 10,
        "name": "Obi-Wan Kenobi",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
        "homeworld": "stewjon"
      },
      {
        "id": 11,
        "name": "Anakin Skywalker",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
        "homeworld": "tatooine"
      },
      {
        "id": 12,
        "name": "Wilhuff Tarkin",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
        "homeworld": "eriadu"
      },
      {
        "id": 13,
        "name": "Chewbacca",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
        "homeworld": "kashyyyk"
      },
      {
        "id": 14,
        "name": "Han Solo",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
        "homeworld": "corellia"
      },
      {
        "id": 15,
        "name": "Greedo",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
        "homeworld": "Rodia"
      },
      {
        "id": 16,
        "name": "Jabba Desilijic Tiure",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
        "homeworld": "tatooine"
      },
      {
        "id": 18,
        "name": "Wedge Antilles",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
        "homeworld": "corellia"
      },
      {
        "id": 19,
        "name": "Jek Tono Porkins",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
        "homeworld": "bestine"
      },
      {
        "id": 20,
        "name": "Yoda",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png"
      },
      {
        "id": 21,
        "name": "Palpatine",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
        "homeworld": "naboo"
      }
    ]
    

let btn = document.getElementById("btn");
let row = document.querySelector(".row");

function renderCharacters(){
  if (row.innerHTML === ""){
    for (const character of characters){
      row.innerHTML += `
      <div class="col-md-4 card">
        <img src="${character.pic}"></img>
        <h4>${character.id}</h4>
        <p>${character.name}</p>
        <p>${character.homeworld}</p>
      </div>
      `
    };

    btn.textContent = "gizle";

  } else {
    row.innerHTML = "";
    btn.textContent = "göster";
  }
};

let homeworldRaw = characters.map((item) => item.homeworld);

// console.log(homeworldRaw);

let filtered = homeworldRaw.map((item) => item ?? "other");

// console.log(filtered);

let homeworldsUnique = [...new Set(filtered)];

 //console.log(homeworldsUnique);

let homeworldsLowercase = homeworldsUnique.map((item) => item.toLowerCase());

// console.log(homeworldsLowercase);

let homeworlds = homeworldsLowercase; 

// console.log(homeworlds);

let checkbox = document.querySelector(".checkbox");

for (homeworld of homeworlds){
  checkbox.innerHTML += `<div class="form-check">
  <input type="radio" class="form-check-input" name="homeworld" value="${homeworld}" id="homeworld-${homeworld}">
  <label class="form-check-label" for="homeworld-${homeworld}">${homeworld}</label>
</div>`
};

// let filteredHomeworld = homeworlds.filter((item) => item.homeworld == homeworlds[0].value);

// console.log(filteredHomeworld);

const filteredHomeworld = document.querySelectorAll(".form-check-input");

for (let k = 0; k < filteredHomeworld.length; k++) {
  filteredHomeworld[k].addEventListener("click", function () {
    const selectedHomeworlds = characters.filter(
      (selectedHomeworld) =>
        selectedHomeworld.homeworld == filteredHomeworld[k].value
    );

    if (row.innerHTML == "") {
      for (const selected of selectedHomeworlds) {
        row.innerHTML += `
                    <div class="col-lg-3 col-md-4 charactersCard">
                      <img src="${selected.pic}">
                      <h4>${selected.id}</h4>
                      <p>${selected.name}</p>
                      <p>${selected.homeworld}</p>
                    </div>`;
      }
    } else if (row.innerHTML != "") {
      row.innerHTML = "";
      for (const selected of selectedHomeworlds) {
        row.innerHTML += `
                    <div class="col-lg-3 col-md-4 charactersCard">
                      <img src="${selected.pic}">
                      <h4>${selected.id}</h4>
                      <p>${selected.name}</p>
                      <p>${selected.homeworld}</p>
                    </div>`;
      }
    }
  });
}