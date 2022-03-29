import {toHTML, headerCreator, footerCreator} from './global-functions.js'

function mainCreator() {
let docFrag = document.createDocumentFragment();
let names = ['Jennita', 'Jensen'];
let phones = ['555-555-1234', '555-555-1235'];
let emails = ['jennita@mailinator.com', 'jensen@mailinator.com'];

docFrag.appendChild(toHTML("<div class=\"main\"></div>"));
docFrag.lastChild.appendChild(createIntro());
docFrag.appendChild(toHTML("<div class=\"contact\"></div>"));
docFrag.querySelector('.contact').appendChild(createContactCard(
  names[0], phones[0], emails[0]));
docFrag.querySelector('.contact').appendChild(createContactCard(
  names[1], phones[1], emails[1]));

return docFrag;

}

function createIntro() {
  let docFrag = document.createDocumentFragment();

  docFrag.appendChild(toHTML("<div class=\"intro\">" +
  "<div class=\"contact_img\">" +
  "<img src=\"../images/contact-logo.png\" alt=\"Contacts\">" +
  "</div></div>"));

  return docFrag;
}

function createContactCard(name, phone, email) {
  let docFrag = document.createDocumentFragment();
  
  docFrag.appendChild(toHTML("<div class=\"contact_card\">"))
  docFrag.lastChild.appendChild(toHTML('<div class="item_title">' + name + 
  '</div>'));
  docFrag.lastChild.appendChild(toHTML('<div class="item_description"><p>' + 
  'Phone: ' + phone + '<br>Email: ' + email + '</p></div></div>'));

  return docFrag;
}

export function createContactTab() {
  let docFrag = document.createDocumentFragment();

  docFrag.appendChild(headerCreator());
  docFrag.appendChild(mainCreator());
  docFrag.appendChild(footerCreator());
  
  return docFrag;
}