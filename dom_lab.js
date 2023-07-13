// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

//task 1.0
const mainEl = document.querySelector("main");
//task 1.1
mainEl.style.backgroundColor = "var(--main-bg)";
//task 1.2
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
//task1.3
mainEl.classList.add("flex-ctr");
//--------------------------------------------------------------------------------------
//task 2.0
const topMenuEl = document.querySelector("#top-menu");
//task 2.1
topMenuEl.style.height = "100%";
//task 2.2
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
//task 2.3
topMenuEl.classList.add("flex-round");
//---------------------------------------------------------------------------------------
//task 3.0 copied
//task 3.1
menuLinks.forEach((link) => {
  const anchorTag = document.createElement("a");
  anchorTag.setAttribute("href", link.href); //setting the new href attribute to equal to the href in the array object called: link
  anchorTag.textContent = link.text;
  topMenuEl.appendChild(anchorTag);
});
