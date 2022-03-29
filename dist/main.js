(()=>{"use strict";function e(e){return document.createRange().createContextualFragment(e.trim()).firstChild}function t(){let t=document.createDocumentFragment();return t.appendChild(e("<header></header>")),t.lastChild.appendChild(e('<div class="logo_header"></div>')),t.querySelector(".logo_header").appendChild(e('<img src="../images/logo-4.png" alt="Jennita\'s Juicery logo">')),["Home","Menu","Contact"].forEach((i=>{let n='<div class="tabs">'+i+"</div>";t.querySelector("header").appendChild(e(n))})),t}function i(){let t=document.createDocumentFragment();return t.appendChild(e("<footer></footer>")),t.lastChild.appendChild(e(' <p class="footer_text">NOT Copyright 2022<br>For entertainment purposes only</p>')),t}function n(){let n=document.createDocumentFragment();return n.appendChild(t()),n.appendChild(function(){let t=document.createDocumentFragment();return t.appendChild(e('<div class="main"></div>')),t.querySelector(".main").appendChild(e('<div class="intro"></div>')),t.querySelector(".intro").appendChild(function(){let t=document.createDocumentFragment();return t.appendChild(e('<div class="text_button"></div>')),t.querySelector(".text_button").appendChild(e('<h1 class="grid-item tagline">Turn vegetables into <span style="color:rgb(110, 199, 2)">victories</span></h1>')),t.querySelector(".text_button").appendChild(e('<p class="grid-item tagtext">At Jennita\'s Juicery, we know the power of vegetables to make anyone into a hero. Start your transformation today.</p>')),t.querySelector(".text_button").appendChild(e('<div class="grid-item"></div>')),t.querySelectorAll(".grid-item")[2].appendChild(e('<input type="button" class="response_button" value="Transform Me!">')),t.appendChild(e('<div class="grid-item"></div>')),t.querySelectorAll(".grid-item")[3].appendChild(e('<img src="../images/landing-page.jpeg" alt="A happy woman with lots of green vegetables in a blender, ready to make a green smoothie">')),t}()),t.querySelector(".main").appendChild(e('<div class="logo"></div>')),t.querySelector(".logo").appendChild(e('<img src="../images/logo-4.png" alt="Jennita\'s Juicery logo">')),t.querySelector(".main").appendChild(e('<p class="copy_text"></p>')),t.querySelector(".copy_text").innerHTML="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, amet dicta! Veniam repellendus debitis, cum voluptatibus perspiciatis voluptate, magni excepturi esse non totam at explicabo unde autem accusantium? Dolor saepe natus dolorem nobis ullam iure, iste cupiditate enim minus odio. Libero enim animi ut sed, omnis nam numquam quo error aperiam necessitatibus? Eos repudiandae error velit odio, ut dolores, eligendi, doloribus deserunt natus laboriosam quaerat unde molestiae. Nostrum impedit veniam delectus temporibus voluptate, eveniet neque libero, aperiam illum velit minus fugiat. Repudiandae corporis a eligendi perferendis, expedita, ad tenetur laudantium autem harum debitis recusandae fugit nobis ducimus architecto nulla dicta reprehenderit minima blanditiis error impedit alias rerum accusantium. Cumque beatae consequuntur tempora repellat dolorum quisquam praesentium labore, tempore possimus sunt ratione quasi odio necessitatibus, cupiditate perspiciatis animi nemo vitae! Natus quibusdam dignissimos ab obcaecati ipsum aspernatur, nam possimus placeat ut exercitationem accusantium cum quasi quia, distinctio similique sunt perspiciatis? Et vero fugit id odio ex dolorum aut voluptas sequi earum nihil, cum repellendus fuga quibusdam repellat vitae aperiam, veniam dolores odit. Asperiores inventore fuga sequi saepe blanditiis cumque voluptatem, accusamus non, voluptates illo iste dolorem a dolore quos provident perferendis vel. Impedit labore facilis dolorem, illum inventore architecto autem repudiandae?",t}()),n.appendChild(i()),n}function a(t,i,n){let a=document.createDocumentFragment();return a.appendChild(e('<div class="menu_card"></div>')),a.querySelector(".menu_card").appendChild(e('<img src="'+t+'" alt="'+i+'">')),a.querySelector(".menu_card").appendChild(e('<div class="item_text"></div>')),a.querySelector(".item_text").appendChild(e('<p class="item_title">'+i+"</p>")),a.querySelector(".item_text").appendChild(e('<p class="item_description">'+n+"</p>")),a}function o(t,i,n){let a=document.createDocumentFragment();return a.appendChild(e('<div class="contact_card">')),a.lastChild.appendChild(e('<div class="item_title">'+t+"</div>")),a.lastChild.appendChild(e('<div class="item_description"><p>Phone: '+i+"<br>Email: "+n+"</p></div></div>")),a}function r(){document.querySelector(".content").innerHTML=""}document.querySelector(".content").appendChild(n()),document.addEventListener("click",(function(d){console.log(d),"Home"==d.target.innerHTML?(r(),document.querySelector(".content").appendChild(n())):"Menu"==d.target.innerHTML?(r(),document.querySelector(".content").appendChild(function(){let n=document.createDocumentFragment();return n.appendChild(t()),n.appendChild(function(){let t=document.createDocumentFragment();return t.appendChild(e('<div class="main"></div>')),t.lastChild.appendChild(e('<div class="intro"></div>')),t.querySelector(".intro").appendChild(e('<div class="menu_img"></div>')),t.querySelector(".menu_img").appendChild(e('<img src="../images/menu-logo-2.png" alt="Menu">')),t.querySelector(".main").appendChild(e('<div class="menu"></div>')),t.querySelector(".menu").appendChild(function(){let e=document.createDocumentFragment();return e.appendChild(a("../images/avocado-veg-smoothie.png","Avocado Vegetable Smoothie","Say less! The smooth, creamy texture of avocado combined with a blend of fresh greens and a hint of strawberry is an instant winner with everyone.")),e.appendChild(a("../images/carrot-smoothie.png","Carrot Smoothie","A feast that your eyes will surely enjoy! Flood your body with sight-enhancing carrots and vitamin-rich greens while enjoying the tangy sweetness of orange.")),e.appendChild(a("../images/beet-ginger-smoothie.png","Blood Booster Smoothie","Defend and energize your body with this athlete's secret formula. Beets proven to improve oxygen levels are combined with invader-fighting ginger to ensure health.")),e.appendChild(a("../images/asparagus-smoothie.png","Asparagus Smoothie","Don't knock it 'til you try it! We've combined the mild flavor and superpowers of tender asparagus with a winning blend of kiwi and grapes to get you moving.")),e.appendChild(a("../images/tomato-veg-smoothie.png","Jennita Special","Discover the secret of longevity from the hardy farmers of Sasketchewan. Sweet tomatoes combined with freshly grown greens keeps you coming back for years to come.")),e}()),t}()),n.appendChild(i()),n}())):"Contact"==d.target.innerHTML&&(r(),document.querySelector(".content").appendChild(function(){let n=document.createDocumentFragment();return n.appendChild(t()),n.appendChild(function(){let t=document.createDocumentFragment(),i=["Jennita","Jensen"],n=["555-555-1234","555-555-1235"],a=["jennita@mailinator.com","jensen@mailinator.com"];return t.appendChild(e('<div class="main"></div>')),t.lastChild.appendChild(function(){let t=document.createDocumentFragment();return t.appendChild(e('<div class="intro"><div class="contact_img"><img src="../images/contact-logo.png" alt="Contacts"></div></div>')),t}()),t.appendChild(e('<div class="contact"></div>')),t.querySelector(".contact").appendChild(o(i[0],n[0],a[0])),t.querySelector(".contact").appendChild(o(i[1],n[1],a[1])),t}()),n.appendChild(i()),n}()))}))})();