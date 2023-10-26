//import "./styles.css";

// part one
const mainEl = document.querySelector("main") ;
mainEl.style.height = "100vh"
const h1Element = document.createElement("h1")
h1Element.textContent = "DOM Manipulation";

// join the h1 to the content
mainEl.appendChild(h1Element);
h1Element.style.color = "white";
mainEl.style.backgroundColor= "#4E4E4D";
console.log("hellow world")
mainEl.classList.add("flex-ctr");



//part two
const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "#0e9aa7";
topMenuEl.classList.add("flex-around");


//part three
// Menu data structure
const menuLinks = [
    { text: 'about', href: '/about' },
  { text: 'catalog', href: '#', subLinks: [
    { text: 'all', href: '/catalog/all' },
    { text: 'top selling', href: '/catalog/top' },
    { text: 'search', href: '/catalog/search' },
  ] },
  { text: 'orders', href: '#', subLinks: [
    { text: 'new', href: '/orders/new' },
    { text: 'pending', href: '/orders/pending' },
    { text: 'history', href: '/orders/history' },
  ] },
  { text: 'account', href: '#', subLinks: [
    { text: 'profile', href: '/account/profile' },
    { text: 'sign out', href: '/account/signout' },
  ] },
  ];

  menuLinks.forEach(link => {
    const linkElement = document.createElement("a");
    linkElement.textContent = link.text;
    linkElement.href = link.href;
    
    topMenuEl.appendChild(linkElement);
  });


  //Second Part
//part three

  const subMenuEl = document.querySelector("#sub-menu");
  subMenuEl.style.height = "100%";
  subMenuEl.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--sub-menu-bg');
  subMenuEl.classList.add("flex-around");
  subMenuEl.style.position = "absolute";
  subMenuEl.style.top = "0";

//part four

  const topMenuLinks = topMenuEl.querySelectorAll("a");
  topMenuEl.addEventListener("click", function(event) {
    event.preventDefault();
    if (!event.target.matches("a")) {
        return;
      }

      console.log(event.target.textContent);
    });



    // topMenuEl.addEventListener("click", function(event) {
    
    //     event.preventDefault();
      
    //     if (!event.target.matches("a")) {
    //       return;
    //     }

    //     topMenuLinks.forEach(function(link) {
    //       link.classList.remove("active");
    //     });
      
    //     event.target.classList.toggle("active");
      
    //     console.log(event.target.textContent);
    //   });


    topMenuEl.addEventListener("click", function(event) {
      event.preventDefault();
      if (!event.target.matches("a")) {
        return;
      }
    
      const clickedLink = event.target;
      const linkObject = findLinkObject(menuLinks, clickedLink.textContent);
    
      if (!clickedLink.classList.contains("active")) {
        if (linkObject && linkObject.subLinks) {
          subMenuEl.style.top = "100%";
          buildSubmenu(linkObject.subLinks);
        } else {
          subMenuEl.style.top = "0";
        }
      } else {
        subMenuEl.style.top = "0";
      }
    
      clickedLink.classList.toggle("active");
    });

    subMenuEl.addEventListener("click", function(event) {
      event.preventDefault();
      if (!event.target.matches("a")) {
        return;
      }
    
      subMenuEl.style.top = "0";
    
      topMenuLinks.forEach(function(link) {
        link.classList.remove("active");
      });
    
      mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
    });

    function findLinkObject(linksArray, linkText) {
      return linksArray.find(function(link) {
        return link.text === linkText;
      });
    }

    function buildSubmenu(subLinks) {
      subMenuEl.innerHTML = '';
      subLinks.forEach(function(link) {
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', link.href);
        linkElement.textContent = link.text;
        subMenuEl.appendChild(linkElement);
      });
    }