import Panda from "./panda-inn.jpg";

function getHomeContent() {
  const img = document.createElement("img");
  img.src = Panda;

  const h1 = document.createElement("h1");
  h1.textContent = "Welcome to Panda Inn";

  const p = document.createElement("p");
  p.textContent = "much yum";

  return [img, h1, p];
}

function createMenuItem(name, price) {
  const itemContainer = document.createElement("div");
  const itemName = document.createElement("h1");
  const itemPrice = document.createElement("p");
  itemName.textContent = name;
  itemPrice.textContent = price;

  const elements = [itemName, itemPrice];
  elements.forEach((element) => {
    itemContainer.appendChild(element);
  });

  return itemContainer;
}

function getMenuContent() {
  const orangeChicken = createMenuItem("Orange Chicken", "37");
  const pandaBeef = createMenuItem("Panda Beef", "43");
  const sweetSourPork = createMenuItem("Sweet & Sour Pork", "37");
  const honeyWalnut = createMenuItem("Honey Walnut", "49");

  return [orangeChicken, pandaBeef, sweetSourPork, honeyWalnut];
}

function getAboutContent() {
  const h1 = document.createElement("h1");
  h1.textContent = "About Panda Inn";

  const p = document.createElement("p");
  p.textContent =
    "IN 1973, ANDREW AND HIS FATHER, MASTER CHEF MING-TSAI CHERNG, OPENED THE DOORS TO THE FIRST PANDA INN IN PASADENA, CALIFORNIA.";

  return [h1, p];
}

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about");
const buttons = [homeButton, menuButton, aboutButton];

function clearContent() {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";
}

function displayContent(content) {
  const contentDiv = document.getElementById("content");
  content.forEach((element) => {
    contentDiv.appendChild(element);
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    clearContent();
    let content = [];

    if (button.id === "home") {
      content = getHomeContent();
    } else if (button.id === "menu") {
      content = getMenuContent();
    } else if (button.id === "about") {
      content = getAboutContent();
    }

    displayContent(content);
  });
});

displayContent(getHomeContent());
