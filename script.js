"use strict";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerTravels = document.querySelector(".travels");
const inputTravel = document.querySelector(".form-input--travel");
const inputAccomodationType = document.querySelector(
  ".form-input--accomodation-type"
);
//const inputMessage = document.querySelector(".form-input--message");
const inputPropertyName = document.querySelector(".form-input--name");
const inputPrice = document.querySelector(".form-input--price");
const inputActivities = document.querySelector(".form-input--activities");
const inputRating = document.querySelector(".form-input--rating");

class Travel {
  date = new Date();
  id = (Date.now() + "").slice(-10);

  constructor(coords, price, rating) {
    this.coords = coords;
    this.price = price;
    this.rating = rating;
    //this.message = message;
  }
}

class Accomodation extends Travel {
  constructor(coords, price, rating, name) {
    super(coords, price, rating);
    this.name = name;
  }
}
class Activity extends Travel {
  constructor(coords, price, rating, type) {
    super(coords, price, rating);
    this.type = type;
  }
}
// const acc = new Accomodation([39, -12], 25, 2, "robinson");
// const act = new Activity([40, -12], 35, 5, "hinikg");
// console.log(acc);
// console.log(act);

class App {
  // private instance properties.
  // So properties that are gonna be present
  // on all the instances created through this class.
  #map;
  #mapEvent;
  //#travels = [];

  constructor() {
    this.getPosition();

    form.addEventListener("submit", this.newTravel.bind(this));

    inputTravel.addEventListener("change", this.toggleTravel);
  }

  getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(this.loadMap.bind(this), () => {
        alert("Cound not get your position");
      });
  }

  loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;

    //console.log(position);
    const coords = [latitude, longitude];
    this.#map = L.map("map").setView(coords, 13);

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        attribution:
          '&copy; <a href="https://carto.com/">CARTO</a> contributors',
      }
    ).addTo(this.#map);

    //handling clicks on map
    this.#map.on("click", this.renderForm.bind(this));
  }

  renderForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove("hidden");
    inputPropertyName.focus();
  }
  toggleTravel() {
    inputPropertyName.closest(".form-row").classList.toggle("form-row--hidden");

    inputActivities.closest(".form-row").classList.toggle("form-row--hidden");
    //inputSource.closest(".form-row").classList.toggle("form-row--hidden");
  }

  newTravel(e) {
    e.preventDefault();

    function isNotEmpty(value) {
      return (
        value !== null &&
        value !== undefined &&
        (typeof value === "string" ? value.trim() !== "" : true)
      );
    }

    function isValidRating(value) {
      return value >= 1 && value <= 5;
    }

    //get data from form
    const travel = inputTravel.value;
    const rating = inputRating.value;
    const price = inputPrice.value;
    //const message = inputMessage.value;

    // //let t;

    //if travel accomodaion, create accomodation object
    if (travel === "accomodation") {
      const name = inputPropertyName.value;
      //check is data is valid

      if (
        !isNotEmpty(name) ||
        !isNotEmpty(price) ||
        //     !isNotEmpty(message) ||
        !isValidRating(rating)
      )
        return alert("Please fill the inputs");
      //   t = new Accomodation([lat, lng], price, rating, message, name);
    }
    //if travel activity, create activity object
    if (travel === "activities") {
      const type = inputActivities.value;
    }
    //add new obect to travel array
    //this.#travels.push(t);
    // console.log(t);
    //render travel on a map as marker
  }
}

const app = new App();
// app.getPosition();
const stars = document.querySelectorAll(".star");

stars.forEach((star) => {
  star.addEventListener("click", function () {
    let value = this.getAttribute("data-value");
    inputRating.value = value;

    // Reset all stars
    stars.forEach((s) => s.classList.remove("active"));

    // Highlight selected stars
    for (let i = 0; i < value; i++) {
      stars[i].classList.add("active");
    }
  });
});
