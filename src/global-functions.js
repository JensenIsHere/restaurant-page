export function toHTML(string) {
  return document.createRange().createContextualFragment(
  string.trim() ).firstChild;
}

export function headerCreator() {
  let docFrag = document.createDocumentFragment();
  let tabs = ['Home', 'Menu', 'Contact'];

  docFrag.appendChild(toHTML("<header></header>"))
  docFrag.lastChild.appendChild(toHTML("<div class=\"logo_header\"></div>"));
  docFrag.querySelector('.logo_header').appendChild(toHTML(
    "<img src=\"../images/logo-4.png\" alt=\"Jennita's Juicery logo\">"));
  
  tabs.forEach(element => {
    let newNode = "<div class=\"tabs\">" + element + "</div>"
    docFrag.querySelector("header").appendChild(toHTML(newNode));
  })

  return docFrag;
}

export function footerCreator() {
  let docFrag = document.createDocumentFragment();

  docFrag.appendChild(toHTML("<footer></footer>"));
  docFrag.lastChild.appendChild(toHTML(
    " <p class=\"footer_text\">NOT Copyright 2022<br>For entertainment purposes" +
    " only</p>"
  ));

  return docFrag;
}