// Add class open & fa-spin Settings Box
document.querySelector(".fa-gear").onclick = function () {
  this.classList.toggle("fa-spin");
  document.querySelector(".settings-box").classList.toggle("open");
  //   document.querySelector(".fa-gear").classList.toggle("fa-spin");
};

//Check Local Storage
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {
  // console.log(localStorage.getItem("color_option"));
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("color_option")
  );
  // Remove Active Class From All Colors List Item
  document.querySelectorAll(".colors-list li").forEach((element) => {
    element.classList.remove("active");
    //Add Active Class == Local Storage
    if (element.dataset.color === mainColors) {
      element.classList.add("active");
    }
  });
}

// Check Local storage backgroundrandom
// let backgroundLocalItem = localStorage.getItem("background_option");

// Check if Random background local storage is not emty
// if (backgroundLocalItem === !null) {
//   console.log("is not emty");
// }
// Switch Color
const colorsLi = document.querySelectorAll(".colors-list li");
colorsLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    // Set Color On Local Storage
    localStorage.setItem("color_option", e.target.dataset.color);

    // Remove Active Class From all children
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });

    // Add Active Class
    e.target.classList.add("active");
    // image About Us
    if (e.target.dataset.color === "#ffa500") {
      document.querySelector("img").src = "/img/orange.png";
    }
    if (e.target.dataset.color === "#0000ff") {
      document.querySelector("img").src = "/img/blue.png";
    }
    if (e.target.dataset.color === "#ff0000") {
      document.querySelector("img").src = "/img/red.png";
    }
    if (e.target.dataset.color === "#008000") {
      document.querySelector("img").src = "/img/green.png";
    }
    if (e.target.dataset.color === "#ff00ff") {
      document.querySelector("img").src = "/img/pink.png";
    }
  });
});
// Random Background Option
let backgroundOption = true;

// Variable To control the interval
let backgroundInterval;
// Control Background
const ctrlBack = document.querySelectorAll(".background-span span");
ctrlBack.forEach((span) => {
  span.addEventListener("click", (e) => {
    // Remove Active Class From all children
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    // Add Active Class
    e.target.classList.add("active");
    // Ctrl background Random
    if (e.target.dataset.background === "yes") {
      backgroundOption = true;
      randomizeImags();
      // Set Local Storage
      // localStorage.setItem("background_option", true);
    } else {
      backgroundOption = false;
      clearInterval(backgroundInterval);
      // Set Local Storage
      // localStorage.setItem("background_option", false);
    }
  });
});
// Landing Page

function randomizeImags() {
  if (backgroundOption === true) {
    backgroundInterval = setInterval(() => {
      // Select Landing Page
      let landingPage = document.querySelector(".landing-page");

      //  Get Array Of Images
      let imgsArray = ["01.jpeg", "02.jpeg", "03.jpeg", "04.jpeg"];
      // Get Random Number
      let randomNumber = Math.floor(Math.random() * imgsArray.length);
      // Change Background Img Url
      landingPage.style.backgroundImage =
        'url("img/' + imgsArray[randomNumber] + '")';
    }, 1000);
  }
}

// Skills Selector

let ourSkills = document.querySelector(".skills");

window.onscroll = function () {
  // Skills Offset Top => Distance between top the page & the top the section
  let skillsOffsetTop = ourSkills.offsetTop;

  // => Distance the section with padding & border without margin
  let skillsOuterHeight = ourSkills.offsetHeight;

  // => Distance height the page the view
  let windowHeight = this.innerHeight;

  // => Distance between top scroller & the top of the page
  let windowScrollTop = this.pageYOffset;

  // console.log(windowHeight);

  // Animation Barre Skills
  if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight) {
    let allSkills = document.querySelectorAll(
      ".skills-box .skill-progress span"
    );
    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
  // console.log("yes");
};

// Gallery IMG

let allimg = document.querySelectorAll(".gallery img");

allimg.forEach((img) => {
  img.addEventListener("click", (e) => {
    // background the page on click
    let ovelaydiv = document.createElement("div");
    ovelaydiv.className = "popup-ovelay";
    document.body.appendChild(ovelaydiv);

    // Create The Popup
    let popupbox = document.createElement("div");
    popupbox.className = "popup-box";

    // Create Heading Imgs
    if (img.alt !== null) {
      //Create Heading
      let head = document.createElement("h3");

      // Create Text
      let imgText = document.createTextNode(img.alt);
      head.appendChild(imgText);
      popupbox.appendChild(head);
    }

    //Set Image
    let popupImage = document.createElement("img");
    popupImage.src = img.src;
    popupbox.appendChild(popupImage);
    document.body.appendChild(popupbox);

    // Create Close Span
    let closeButton = document.createElement("span");
    let textCloseButton = document.createTextNode("X");
    closeButton.appendChild(textCloseButton);
    closeButton.className = "close-button";
    popupbox.appendChild(closeButton);

    // Close Popup When you Click on X
    document.addEventListener("click", (e) => {
      if (e.target.className == "close-button") {
        document.querySelector(".popup-box").remove();
        document.querySelector(".popup-ovelay").remove();
      }
    });
  });
});

// Scroller Barre TOP
let el = document.querySelector(".scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / height) * 100}%`;
});

// Nav Bulletes
const allnav = document.querySelectorAll(".bullet");

allnav.forEach((bullet) => {
  bullet.addEventListener("click", (e) => {
    console.log(e.target.dataset.section);
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
  });
});
