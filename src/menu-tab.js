import {toHTML, headerCreator, footerCreator} from './global-functions.js'

function mainCreator() {
  let docFrag = document.createDocumentFragment();

  docFrag.appendChild(toHTML("<div class=\"main\"></div>"));
  docFrag.lastChild.appendChild(toHTML("<div class=\"intro\"></div>"));
  docFrag.querySelector('.intro').appendChild(toHTML(
    "<div class=\"menu_img\"></div>"));
  docFrag.querySelector('.menu_img').appendChild(toHTML(
    "<img src=\"../images/menu-logo-2.png\" alt=\"Menu\">"));

  docFrag.querySelector('.main').appendChild(toHTML(
    "<div class=\"menu\"></div>"));
  docFrag.querySelector('.menu').appendChild(createMenuList());
  
  return docFrag;
}

function createMenuCard(path, title, description) {
  let docFrag = document.createDocumentFragment();

  docFrag.appendChild(toHTML("<div class=\"menu_card\"></div>"));
  docFrag.querySelector('.menu_card').appendChild(toHTML(
    "<img src=\"" + path + "\" alt=\"" + title + "\">"));
  docFrag.querySelector('.menu_card').appendChild(toHTML(
    "<div class=\"item_text\"></div>"));
  docFrag.querySelector('.item_text').appendChild(toHTML(
    "<p class=\"item_title\">" + title + "</p>"));
  docFrag.querySelector('.item_text').appendChild(toHTML(
    "<p class=\"item_description\">" + description + "</p>"));

  return docFrag;
}

function createMenuList() {
  let docFrag = document.createDocumentFragment();

  docFrag.appendChild(createMenuCard(
    "../images/avocado-veg-smoothie.png",
    "Avocado Vegetable Smoothie",
    "Say less! The smooth, creamy texture of avocado combined with a blend " +
    "of fresh greens and a hint of strawberry is an instant winner with " +
    "everyone."
  ));

  docFrag.appendChild(createMenuCard(
    "../images/carrot-smoothie.png",
    "Carrot Smoothie",
    "A feast that your eyes will surely enjoy! Flood your body with " +
    "sight-enhancing carrots and vitamin-rich greens while enjoying " +
    "the tangy sweetness of orange."
  ));

  docFrag.appendChild(createMenuCard(
    "../images/beet-ginger-smoothie.png",
    "Blood Booster Smoothie",
    "Defend and energize your body with this athlete's secret formula. " +
    "Beets proven to improve oxygen levels are combined with invader-" +
    "fighting ginger to ensure health."
  ));

  docFrag.appendChild(createMenuCard(
    "../images/asparagus-smoothie.png",
    "Asparagus Smoothie",
    "Don't knock it 'til you try it! We've combined the mild flavor and " +
    "superpowers of tender asparagus with a winning blend of kiwi and grapes " +
    "to get you moving."
  ));

  docFrag.appendChild(createMenuCard(
    "../images/tomato-veg-smoothie.png",
    "Jennita Special",
    "Discover the secret of longevity from the hardy farmers of Sasketchewan." +
    " Sweet tomatoes combined with freshly grown greens keeps you coming " +
    "back for years to come."
  ));

  return docFrag;
}

export function createMenuTab() {
  let docFrag = document.createDocumentFragment();

  docFrag.appendChild(headerCreator());
  docFrag.appendChild(mainCreator());
  docFrag.appendChild(footerCreator());
  
  return docFrag;
}