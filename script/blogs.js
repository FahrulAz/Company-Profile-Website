const itemsRegular = [
  {
    imgUrl: "img/car 6.png",
    year: 2023,
    title: "Regular 1",
    price: 100000,
  },
  {
    imgUrl: "img/car 6.png",
    year: 2023,
    title: "Regular 2",
    price: 200000,
  },
  {
    imgUrl: "img/car 6.png",
    year: 2023,
    title: "Regular 3",
    price: 300000,
  },
  {
    imgUrl: "img/car 6.png",
    year: 2023,
    title: "Regular 1",
    price: 400000,
  },
];

const itemsPremium = [
  {
    imgUrl: "img/car 7.png",
    year: 2023,
    title: "Premium 1",
    price: 500000,
  },
  {
    imgUrl: "img/car 7.png",
    year: 2023,
    title: "Premium 2",
    price: 600000,
  },
  {
    imgUrl: "img/car 7.png",
    year: 2023,
    title: "Premium 3",
    price: 700000,
  },
  {
    imgUrl: "img/car 7.png",
    year: 2023,
    title: "Premium 4",
    price: 800000,
  },
];

//bagian regular service
function parseItemsRegularToCard() {
  const regularCards = [];

  for (let index = 0; index < itemsRegular.length; index++) {
    const currentRegularCard = itemsRegular[index];

    const cardDiv = document.createElement("div");
    const imgDiv = document.createElement("div");
    const itemImg = document.createElement("img");
    const year = document.createElement("p");
    const titleH3 = document.createElement("h3");
    const priceH2 = document.createElement("h2");
    const span = document.createElement("span");
    const rentBtn = document.createElement("a");

    cardDiv.classList.add("box");
    imgDiv.classList.add("box-img");
    rentBtn.classList.add("btn");
    rentBtn.setAttribute("href", "#");
    itemImg.setAttribute("src", currentRegularCard.imgUrl);

    year.textContent = currentRegularCard.year;
    titleH3.textContent = currentRegularCard.title;

    const currentPriceH2 = Number(currentRegularCard.price).toLocaleString("en-US").replace(/,/g, ".");
    priceH2.textContent = `Rp${currentPriceH2}`;

    span.innerHTML = "/month";
    rentBtn.innerHTML = "Rent Now";

    cardDiv.append(imgDiv);
    imgDiv.appendChild(itemImg);
    cardDiv.append(year);
    cardDiv.append(titleH3);
    cardDiv.append(priceH2);
    priceH2.appendChild(span);
    cardDiv.append(rentBtn);

    regularCards.push(cardDiv);
  }

  return regularCards;
}

function regular() {
  const regularWrapper = document.createElement("div");
  regularWrapper.setAttribute("id", "regular-wrapper");
  regularWrapper.classList.add("regular");

  const parsedRegularCards = parseItemsRegularToCard();

  for (let index = 0; index < parsedRegularCards.length; index++) {
    regularWrapper.append(parsedRegularCards[index]);

    const regularSection = document.querySelector(".regular-container");
    regularSection.appendChild(regularWrapper);
  }
}

regular();

//bagian premium service
function parseItemsPremiumToCard() {
  const premiumCards = [];

  for (let index = 0; index < itemsPremium.length; index++) {
    const currentPremiumCard = itemsPremium[index];

    const cardDiv = document.createElement("div");
    const imgDiv = document.createElement("div");
    const itemImg = document.createElement("img");
    const year = document.createElement("p");
    const titleH3 = document.createElement("h3");
    const priceH2 = document.createElement("h2");
    const span = document.createElement("span");
    const rentBtn = document.createElement("a");

    cardDiv.classList.add("box");
    imgDiv.classList.add("box-img");
    rentBtn.classList.add("btn");
    rentBtn.setAttribute("href", "#");
    itemImg.setAttribute("src", currentPremiumCard.imgUrl);

    year.textContent = currentPremiumCard.year;
    titleH3.textContent = currentPremiumCard.title;

    const currentPriceH2 = Number(currentPremiumCard.price).toLocaleString("en-US").replace(/,/g, ".");
    priceH2.textContent = `Rp${currentPriceH2}`;

    span.innerHTML = "/month";
    rentBtn.innerHTML = "Rent Now";

    cardDiv.append(imgDiv);
    imgDiv.appendChild(itemImg);
    cardDiv.append(year);
    cardDiv.append(titleH3);
    cardDiv.append(priceH2);
    priceH2.appendChild(span);
    cardDiv.append(rentBtn);

    premiumCards.push(cardDiv);
  }

  return premiumCards;
}

function premium() {
  const premiumWrapper = document.createElement("div");
  premiumWrapper.setAttribute("id", "regular-wrapper");
  premiumWrapper.classList.add("regular");

  const parsedPremiumCards = parseItemsPremiumToCard();

  for (let index = 0; index < parsedPremiumCards.length; index++) {
    premiumWrapper.append(parsedPremiumCards[index]);

    const premiumSection = document.querySelector(".premium-container");
    premiumSection.appendChild(premiumWrapper);
  }
}

premium();
