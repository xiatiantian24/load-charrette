gsap.registerPlugin(ScrollTrigger)

//scroll trigger markers control
ScrollTrigger.defaults({
  markers: true,
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

const s1 = document.querySelector('#s-1');
const l1 = document.querySelector('#l-1');
const s2 = document.querySelector("#s-2");
const l2 = document.querySelector('#l-2');
const s3 = document.querySelector("#s-3");
const s4 = document.querySelector("#s-4");
const a4 = document.querySelector("#a-4");
const l4 = document.querySelector('#l-4');
const a5 = document.querySelector("#a-5");
const l5 = document.querySelector('#l-5');
const i5 = document.querySelector('#i-5');
const s5 = document.querySelector("#s-5");
const s6 = document.querySelector("#s-6");
const b7 = document.querySelector("#b-7");
const s7 = document.querySelector("#s-7");
const b8 = document.querySelector("#b-8");
const s8 = document.querySelector("#s-8");
const b9 = document.querySelector("#b-9");
const s9 = document.querySelector("#s-9");
const b10 = document.querySelector("#b-10");
const s10 = document.querySelector("#s-10");
const s11 = document.querySelector("#s-11");
const l11 = document.querySelector("#l-11");
const s12 = document.querySelector("#s-12");
const l12 = document.querySelector("#l-12");
const b12 = document.querySelector("#b-12");
const s13 = document.querySelector("#s-13");
const b13 = document.querySelector("#b-13");
const b14 = document.querySelector("#b-14");
const b15 = document.querySelector("#b-15");
const b16 = document.querySelector("#b-16");
const b17 = document.querySelector("#b-17");
const s18 = document.querySelector("#s-18");
const b18 = document.querySelector("#b-18");
const l19 = document.querySelector("#l-19");
const p19 = document.querySelector("#p-19");
const s20 = document.querySelector("#s-20");
const l20 = document.querySelector("#l-20");
const p20 = document.querySelector("#p-20");
const w20 = document.querySelector("#wrapper-20");




//1 wait message
gsap.set("#l-1", { xPercent: -50, yPercent: -50 });

let xTo = gsap.quickTo("#l-1", "x", { duration: 0.2, ease: "power3" }),
  yTo = gsap.quickTo("#l-1", "y", { duration: 0.2, ease: "power3" });

s1.addEventListener('mouseover', () => {
  l1.style.visibility = "visible";
  // document.getElementById("p-1").innerHTML = "wait...";
  setTimeout(loadImage1, 1000);

  s1.addEventListener("mousemove", e => {
    xTo(e.clientX);
    yTo(e.clientY);
  });
});

s1.addEventListener('mouseout', () => {
  l1.style.visibility = "hidden";
  document.getElementById("p-1").innerHTML = "HAHA";
});

function loadImage1() {
  s1.style.backgroundImage = "url('https://media1.tenor.com/m/5SlE2G1B5zYAAAAC/nqrse-haha.gif')";
  document.getElementById("p-1").innerHTML = "HAHA";
}


//2 door open
s2.addEventListener("mouseover", toggleDoor);
s2.addEventListener("mouseout", toggleDoor);

function toggleDoor() {
  l2.classList.toggle("doorOpen");
}


//3 countdown
function startCountdown() {
  var count = 2;

  // Update countdown every second
  var countdownInterval = setInterval(function () {
    s3.innerText = count;
    count--;

    // If count reaches 0, stop countdown
    if (count < 0) {
      clearInterval(countdownInterval);
      s3.innerHTML = "";
      s3.style.backgroundImage = "url('https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/81/ae/87/81ae87a6-41f6-2eb6-7a06-502d11060e4b/859757105007_cover.png/1200x1200bf-60.jpg')";
      s3.style.backgroundPositionY = "30%";

    }
  }, 1000); // Update every second (1000 milliseconds)
}

ScrollTrigger.create({
  trigger: s3,
  start: 'top 80%',
  end: 'bottom top',
  onEnter: () => {
    startCountdown();
  },
  onLeave: () => {
    s3.style.background = "#fff";
  },
});


//4 spotlight
gsap.set("#l-4", { xPercent: -50, yPercent: -50 });

let xTo4 = gsap.quickTo("#l-4", "x", { duration: 0.2, ease: "power3" }),
  yTo4 = gsap.quickTo("#l-4", "y", { duration: 0.2, ease: "power3" });

s4.addEventListener('mouseover', () => {
  l4.style.visibility = "visible";
  s4.addEventListener("mousemove", e => {
    xTo4(e.clientX);
    yTo4(e.clientY);
  });
});

s4.addEventListener('mouseout', () => {
  l4.style.visibility = "hidden";
});

function toggleS4() {
  s4.classList.toggle("show");
}

a4.addEventListener("mouseover", toggleS4);
a4.addEventListener("mouseout", toggleS4);


//5 magnifying glass
gsap.set("#l-5", { xPercent: -50, yPercent: -50 });

let xTo5 = gsap.quickTo("#l-5", "x", { duration: 0.2, ease: "power3" }),
  yTo5 = gsap.quickTo("#l-5", "y", { duration: 0.2, ease: "power3" });

s5.addEventListener('mouseover', () => {
  l5.style.visibility = "visible";
  s5.addEventListener("mousemove", e => {
    xTo5(e.clientX);
    yTo5(e.clientY);
  });
});

s5.addEventListener('mouseout', () => {
  l5.style.visibility = "hidden";
});

function enlarge() {
  i5.style.transition = "transform 0.1s";
  i5.style.transformOrigin = "bottom right";
  i5.style.width = "100px";
  i5.style.height = "100px";
}

function shrink() {
  i5.style.transition = "transform 0.1s";
  i5.style.transformOrigin = "bottom right";
  i5.style.width = "20px";
  i5.style.height = "20px";
}

a5.addEventListener("mouseover", enlarge);
a5.addEventListener("mouseout", shrink);


//7 blink
b7.onclick = function () {
  toggleButtonVisibility();
}

function toggleButtonVisibility() {
  var button = document.getElementById("b-7");
  var toggleInterval = 700; // Initial interval in milliseconds
  var blinkCount = 20; // Total number of blinks
  var blinkCounter = 0; // Counter for the number of blinks

  // Define a function to toggle the visibility of the button
  function toggleVisibility() {
    button.style.visibility = (button.style.visibility === "visible") ? "hidden" : "visible";
    blinkCounter++;

    // Check if all blinks are done
    if (blinkCounter < blinkCount) {
      // Increase the speed of blinking
      toggleInterval *= 0.8; // Decrease the interval by 20% each time
      setTimeout(toggleVisibility, toggleInterval);
    } else {
      // If all blinks are done, set visibility to "hidden"
      button.style.visibility = "hidden";
      s7.style.backgroundImage = "url('https://www.excelsior.edu/wp-content/uploads/2021/12/TechDifficulties_0.jpg')";
    }
  }

  // Start the blinking
  setTimeout(toggleVisibility, toggleInterval);
}


//8 404 to 200
b8.onclick = function () {
  setTimeout(countdown(), 1000);
}

function countdown() {
  var count = 404; // Initial count

  // Function to update countdown
  function updateCount() {
    document.getElementById("p-8").innerHTML = count;

    // Decrement count
    count--;

    // Check if count has reached 200, if not, continue countdown
    if (count >= 200) {
      setTimeout(updateCount, 1); // Update every second (1000 milliseconds)
    }
    else {
      setTimeout(loadImage8, 300);
    }
  }

  // Start countdown
  updateCount();
}

function loadImage8() {
  document.getElementById("p-8").style.visibility = "hidden";
  b8.style.visibility = "hidden";
  s8.style.backgroundImage = "url('https://media1.tenor.com/m/tBtn5Sa48-4AAAAd/harry-potter.gif')";
}


//9 car dashboard
b9.onclick = function () {
  var needle = document.querySelector('.needle');
  needle.style.transition = 'transform 1s ease-in-out';
  needle.style.transform = 'translate(-50%, -100%) rotate(60deg)';
  setTimeout(loadImage9, 1100);
}

function loadImage9() {
  var meter = document.querySelector('.meter');
  b9.style.visibility = "hidden";
  meter.style.visibility = "hidden";
  s9.style.backgroundImage = "url('https://media1.tenor.com/m/D5i8SCyC_lQAAAAC/hot-af.gif')";
}


//10 filter
var divisor = document.getElementById("divisor"),
  handle = document.getElementById("handle"),
  slider = document.getElementById("slider");

function moveDivisor() {
  handle.style.left = slider.value + "%";
  divisor.style.width = slider.value + "%";
}

window.onload = function () {
  moveDivisor();
};


//11 right click
function openMenu(event) {
  // Prevent the default context menu from appearing
  event.preventDefault();

  // Get the menu panel element
  var menuPanel = document.getElementById("menuPanel");

  // Get the mouse position
  var mouseX = event.clientX;
  var mouseY = event.clientY;

  // Position the menu panel at the mouse position
  menuPanel.style.display = "block";
  menuPanel.style.left = mouseX + "px";
  menuPanel.style.top = mouseY + "px";

  // Add event listener to close the menu when clicking outside of it
  document.addEventListener("mousedown", closeMenuOnClickOutside);
}

function closeMenuOnClickOutside(event) {
  // Get the menu panel element
  var menuPanel = document.getElementById("menuPanel");

  // Check if the click occurred outside of the menu panel
  if (!menuPanel.contains(event.target)) {
    // Hide the menu panel
    menuPanel.style.display = "none";

    // Remove the event listener
    document.removeEventListener("mousedown", closeMenuOnClickOutside);
  }
}

// Attach the event listener to the right-click event on the button
s11.addEventListener("contextmenu", openMenu);

function loadImage11() {
  menuPanel.style.display = "none";
  document.getElementById("p-11").style.display = "none";
  s11.style.backgroundImage = "url('https://media1.tenor.com/m/RRhijk6pHAoAAAAd/good-morning.gif')";
}

l11.addEventListener("click", loadImage11);


//12 boxes
const boxes = [];

// Create the grid of boxes
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 5; j++) {
    const box = document.createElement("div");
    box.className = "box";
    l12.appendChild(box);
    boxes.push(box);
  }
}

// Function to toggle visibility of a random box
function toggleRandomBox() {
  // Filter out already invisible boxes
  const visibleBoxes = boxes.filter(box => box.style.visibility !== "hidden");
  // Check if there are any visible boxes left
  if (visibleBoxes.length > 0) {
    b12.innerHTML = "CLick Again";
    // Select a random visible box
    const randomIndex = Math.floor(Math.random() * visibleBoxes.length);
    const randomBox = visibleBoxes[randomIndex];
    // Toggle visibility of the random box
    randomBox.style.visibility = "hidden";
    console.log(visibleBoxes.length);
    if (visibleBoxes.length == 1) {
      b12.style.display = "none";
    }
  }
}

// Add event listener to the button
b12.addEventListener("click", toggleRandomBox);


//13 line merges
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const lines = document.getElementsByClassName('line');


// Function to adjust line positions when hovering over the button
b13.addEventListener("mouseover", function () {
  // Move the lines apart
  line1.style.transform = "translateX(250px)"; // Translate line1 50px to the right
  line2.style.transform = "translateX(-250px)"; // Translate line2 50px to the left
  setTimeout(loadImage13, 300);
});

// Function to reset line positions when unhovering the button
b13.addEventListener("mouseout", function () {
  // Move the lines back to their original positions
  line1.style.transform = "translateX(0)"; // Reset line1 translation
  line2.style.transform = "translateX(0)"; // Reset line2 translation
});

function loadImage13() {
  for (let i = 0; i < lines.length; i++) {
    lines[i].style.visibility = 'hidden';
  }
  b13.style.visibility = "hidden";
  s13.style.backgroundImage = "url('https://media1.tenor.com/m/Y0eBj_hBiUsAAAAC/linville-river-river.gif')";
}


//14 slides
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = "block"; // Show current slide
    } else {
      slide.style.display = "none"; // Hide other slides
    }
  });
}

function showNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function showPrevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// prevButton.addEventListener("click", showPrevSlide);
b14.addEventListener("click", showNextSlide);

// Show the first slide initially
showSlide(currentIndex);


//15 flicker slide
const slides15 = document.querySelectorAll("#s-15 .slide");
let currentIndex15 = 0;

function showNextSlide15() {
  // Add class to trigger animation
  slides15[currentIndex15].classList.add("crt");

  // Set timeout to remove class after animation duration
  setTimeout(() => {
    slides15[currentIndex15].classList.remove("crt");

    // Increment index for next slide
    currentIndex15 = (currentIndex15 + 1) % slides.length;

    // Hide current slide
    slides15[currentIndex15].style.display = "none";


    // Show next slide
    slides15[currentIndex15].style.display = "block";
  }, 300); // Adjust timing to match animation duration
}

b15.addEventListener("click", showNextSlide15);

// Show the first slide initially
slides15[currentIndex15].style.display = "block";


//16 old tv effect 
b16.addEventListener("click", function () {
  document.querySelector(".screen").classList.toggle("hidden");
});


//17 slide deck
const slides17 = document.querySelectorAll("#s-17 .slide");
let currentIndex17 = 0;

function showSlide17(index) {
  slides17.forEach((slide, i) => {
    slide.style.display = "block";
    if (i === index) {
      slide.classList.add("animate"); // Add animation class
      slide.style.zIndex = "1"; // Ensure current slide is on top
    } else {
      slide.classList.remove("animate"); // Remove animation class from other slides
      slide.style.zIndex = "0"; // Send other slides to bottom
    }
  });
}

function showNextSlide17() {
  currentIndex17 = (currentIndex17 + 1) % slides17.length;
  showSlide17(currentIndex17);
}

b17.addEventListener("click", showNextSlide17);

// Show the first slide initially
showSlide17(currentIndex17);


//18 filled rectangles
b18.addEventListener("click", function () {
  const rectangles = document.querySelectorAll(".rectangle");

  rectangles.forEach((rectangle, index) => {
    setTimeout(() => {
      rectangle.style.backgroundColor = "rgb(36, 36, 36)";
    }, index * 50);
  });
  setTimeout(loadImage18, 1000);

  function loadImage18() {
    b18.style.visibility = "hidden";
    document.querySelector(".rectangle-wrapper").style.visibility = "hidden";
    s18.style.backgroundImage = "url('https://media1.tenor.com/m/m9gNvwgASXsAAAAC/happy-dancing.gif')";
  }
});

//19 click to disappear box
const boxes19 = [];
var opacity19 = 1;

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 10; j++) {
    const box19 = document.createElement("div");
    box19.className = "box";
    l19.appendChild(box19);
    boxes19.push(box19);
  }
}

boxes19.forEach(box => {
  box.addEventListener("click", function () {
    box.style.visibility = "hidden";
    opacity19 -= 0.025;
    p19.style.opacity = opacity19;
  });
});


//20 sticky
function startCountdown() {
  var count = 2;

  // Update countdown every second
  var countdownInterval = setInterval(function () {
    s3.innerText = count;
    count--;

    // If count reaches 0, stop countdown
    if (count < 0) {
      clearInterval(countdownInterval);
      s3.innerHTML = "";
      s3.style.backgroundImage = "url('https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/81/ae/87/81ae87a6-41f6-2eb6-7a06-502d11060e4b/859757105007_cover.png/1200x1200bf-60.jpg')";
      s3.style.backgroundPositionY = "30%";

    }
  }, 1000); // Update every second (1000 milliseconds)
}
var tl = gsap.timeline({repeat:-1, yoyo:true});
var tween = gsap.to("#s-20", { 
  y: 40, 
  duration: 0.5,
  yoyo: true
});
tl.add(tween);

ScrollTrigger.create({
  trigger: w20,
  start: 'top bottom',
  end: 'bottom bottom',
  id: 20,
  onEnter: () => {
    tl.play();

  },
  onLeave: () => {
    tl.pause();
        p20.innerText = "Fine. Here you go!";
    s20.style.backgroundImage = "url('20.gif')";
  },
  onLeaveBack: () => {
    tl.resume();
    p20.innerText = "Hold on, still loading!!";
    s20.style.backgroundImage = "none";

  }
});

