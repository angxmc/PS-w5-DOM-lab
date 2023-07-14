// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
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
topMenuEl.classList.add("flex-around");
//---------------------------------------------------------------------------------------
//task 3.0 copied
//task 3.1
menuLinks.forEach((link) => {
  const anchorTag = document.createElement("a");
  anchorTag.setAttribute("href", link.href); //setting the new href attribute to equal to the href in the array object called: link
  anchorTag.textContent = link.text;
  topMenuEl.appendChild(anchorTag);
});

//---------------------------------------------------------------------------------------
//task 4.0
const subMenuEl = document.querySelector("#sub-menu");
//task 4.1
subMenuEl.style.height = "100%";
//task 4.2
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
//task 4.3
subMenuEl.classList.add("flex-around");
//task 4.4
subMenuEl.style.position = "absolute";
//task 4.5
subMenuEl.style.top = 0;
//task 5.1
const topMenuLink = topMenuEl.querySelectorAll("a");
let showingSubMenu = false;
//task 5.2
//Attach a delegated 'click' event listener to topMenuEl.
//The first line of code of the event listener function should call the event object's preventDefault() method.
//The second line of code function should immediately return if the element clicked was not an <a> element.
//console.log the content of the <a> to verify the handler is working.
topMenuEl.addEventListener =
  ("click",
  function (e) {
    e.preventDefault();
    if (e.target.tagName !== A) {
      return;
    }else if(topMenuLink.hasAttribute('.active') = true){
      topMenuLink.classList.remove('.active');
    }

    topMenuEl
  });
  console.log(topMenuLink);
  //task


  /**
   * e.target.Content === 'about'
   */