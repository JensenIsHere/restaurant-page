import {toHTML, headerCreator, footerCreator} from './global-functions'

function bodyCreator() {
  let docFrag = document.createDocumentFragment();

  docFrag.appendChild(toHTML("<div class=\"main\"></div>"));
  docFrag.querySelector('.main').appendChild(toHTML(
    "<div class=\"intro\"></div>"));
  docFrag.querySelector('.intro').appendChild(introCreator());

  docFrag.querySelector('.main').appendChild(toHTML("<div class=\"logo\"></div>"));
  docFrag.querySelector('.logo').appendChild(toHTML("<img " +
  "src=\"../images/logo-4.png\" alt=\"Jennita\'s Juicery logo\">"));

  docFrag.querySelector('.main').appendChild(toHTML(
    "<p class=\"copy_text\"></p>"));
  docFrag.querySelector('.copy_text').innerHTML = fillCopyText();

  return docFrag;
}

function introCreator() {
  let docFrag = document.createDocumentFragment();

  docFrag.appendChild(toHTML("<div class=\"text_button\"></div>"))
  docFrag.querySelector('.text_button').appendChild(toHTML(
    "<h1 class=\"grid-item tagline\">Turn vegetables into <span style=\"" +
    "color:rgb(110, 199, 2)\">victories</span></h1>"));
  docFrag.querySelector('.text_button').appendChild(toHTML(
    "<p class=\"grid-item tagtext\">At Jennita's Juicery, we know the power" +
    " of vegetables to make anyone into a hero. Start your transformation " +
    "today.</p>"));
  docFrag.querySelector('.text_button').appendChild(toHTML(
    "<div class=\"grid-item\"></div>"));
  docFrag.querySelectorAll('.grid-item')[2].appendChild(toHTML(
    "<input type=\"button\" class=\"response_button\" value=\"Transform Me!\">"
  ));
  docFrag.appendChild(toHTML("<div class=\"grid-item\"></div>"));
  docFrag.querySelectorAll('.grid-item')[3].appendChild(toHTML(
    "<img src=\"../images/landing-page.jpeg\" alt=\"A happy woman with lots of " +
    "green vegetables in a blender, ready to make a green smoothie\">"));

  return docFrag;
}

function fillCopyText() {
  let copyText = "Lorem, ipsum dolor sit amet consectetur " +
  "adipisicing elit. Nemo, amet dicta! Veniam repellendus debitis, cum " +
  "voluptatibus perspiciatis voluptate, magni excepturi esse non totam at " +
  "explicabo unde autem accusantium? Dolor saepe natus dolorem nobis ullam " +
  "iure, iste cupiditate enim minus odio. Libero enim animi ut sed, omnis " +
  "nam numquam quo error aperiam necessitatibus? Eos repudiandae error " +
  "velit odio, ut dolores, eligendi, doloribus deserunt natus laboriosam " +
  "quaerat unde molestiae. Nostrum impedit veniam delectus temporibus " +
  "voluptate, eveniet neque libero, aperiam illum velit minus fugiat. " +
  "Repudiandae corporis a eligendi perferendis, expedita, ad tenetur " +
  "laudantium autem harum debitis recusandae fugit nobis ducimus architecto" +
  " nulla dicta reprehenderit minima blanditiis error impedit alias rerum " +
  "accusantium. Cumque beatae consequuntur tempora repellat dolorum " +
  "quisquam praesentium labore, tempore possimus sunt ratione quasi odio " +
  "necessitatibus, cupiditate perspiciatis animi nemo vitae! Natus " +
  "quibusdam dignissimos ab obcaecati ipsum aspernatur, nam possimus " +
  "placeat ut exercitationem accusantium cum quasi quia, distinctio " +
  "similique sunt perspiciatis? Et vero fugit id odio ex dolorum aut " +
  "voluptas sequi earum nihil, cum repellendus fuga quibusdam repellat " +
  "vitae aperiam, veniam dolores odit. Asperiores inventore fuga sequi " +
  "saepe blanditiis cumque voluptatem, accusamus non, voluptates illo iste" +
  " dolorem a dolore quos provident perferendis vel. Impedit labore facilis" +
  " dolorem, illum inventore architecto autem repudiandae?";

  return copyText;
}

function createHomeTab() {
  let docFrag = document.createDocumentFragment();
  
  docFrag.appendChild(headerCreator());
  docFrag.appendChild(bodyCreator());
  docFrag.appendChild(footerCreator());
  
  return docFrag;
}

export default createHomeTab;
