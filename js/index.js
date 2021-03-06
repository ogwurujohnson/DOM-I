const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

const backupContent = {
  "main-content": {
    "features-h4": "Backup Feature",
    "about-h4": "Backup About",
    "services-h4": "Backup Services",
    "product-h4": "Backup Products",
    "vision-h4": "Backuo Vision"
  }
}

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// select elements and element children
const navHeader = document.querySelector('nav');
const navigation = document.querySelector('nav').children;
const snippetImage = document.querySelector('#cta-img');
const middleImage = document.querySelector('#middle-img');
const headerText = document.querySelector('h1');
const getStartedButton = document.querySelector('button');
const topContent = document.querySelector('.top-content').children;
const bottomContent = document.querySelector('.bottom-content').children;
const contact = document.querySelector('.contact').children;
const footer = document.querySelector('footer').children;

getStartedButton.style.background = 'teal'; 
getStartedButton.style.border = '2px dashed blue';
//when i do thus, the style is appended to the html element directly on the html page
//  and not on the css file like i would have naturally wanted to do


// set the content of the navigation menu children
navigation[0].textContent = siteContent.nav["nav-item-1"];
navigation[1].textContent = siteContent.nav["nav-item-2"];
navigation[2].textContent = siteContent.nav["nav-item-3"];
navigation[3].textContent = siteContent.nav["nav-item-4"];
navigation[4].textContent = siteContent.nav["nav-item-5"];
navigation[5].textContent = siteContent.nav["nav-item-6"];


// use appendChild() and prepend() to add items to the navigation
const blog = document.createElement('a');
blog.textContent = 'Blog';
navHeader.appendChild(blog);

const articles = document.createElement('a');
articles.textContent = 'Articles';
navHeader.prepend(articles);

// change the color of the navigation text to green
const navArray = Array.from(navigation);

navArray.forEach((item) => {
  item.style.color = 'green';
});



// set the image content of the snipper image
snippetImage.setAttribute('src', siteContent["cta"]["img-src"]);

// set the content of thd snippeth1
headerText.innerHTML = siteContent["cta"]["h1"].split(" ").map((item, index) => (index > 0 ? `<br>${item}`: item)).join("");
getStartedButton.innerHTML = siteContent["cta"]["button"];

// set the content of the top content children
topContent[0].children[0].textContent = siteContent["main-content"]["features-h4"];
topContent[0].children[1].textContent = siteContent["main-content"]["features-content"];

topContent[1].children[0].textContent = siteContent["main-content"]["about-h4"];
topContent[1].children[1].textContent = siteContent["main-content"]["about-content"];


// Add event listeners to trigger when there is a hover over certain h4 elements

topContent[0].children[0].addEventListener('mouseover', function(propertyName) {
  topContent[0].children[0].textContent = backupContent["main-content"]["features-h4"];
});
topContent[1].children[0].addEventListener('mouseover', function(propertyName) {
  topContent[1].children[0].textContent = backupContent["main-content"]["about-h4"];
});

// set the content of the middle image section
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// set the content of the botttom sections children
bottomContent[0].children[0].textContent = siteContent["main-content"]["services-h4"];
bottomContent[0].children[1].textContent = siteContent["main-content"]["services-content"];

bottomContent[1].children[0].textContent = siteContent["main-content"]["product-h4"];
bottomContent[1].children[1].textContent = siteContent["main-content"]["product-content"];

bottomContent[2].children[0].textContent = siteContent["main-content"]["vision-h4"];
bottomContent[2].children[1].textContent = siteContent["main-content"]["vision-content"];


// set the content of the textcontent children
contact[0].textContent = siteContent["contact"]["contact-h4"];
contact[1].textContent = siteContent["contact"]["address"];
contact[2].textContent = siteContent["contact"]["phone"];
contact[3].textContent = siteContent["contact"]["email"];

// set the content of the footer child
footer[0].textContent = siteContent["footer"]["copyright"];

