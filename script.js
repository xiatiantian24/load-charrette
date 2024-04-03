gsap.registerPlugin(ScrollTrigger)

//scroll trigger markers control
ScrollTrigger.defaults({
  // markers: true,
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
      s3.style.backgroundPositionY= "30%";

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
    console.log("leave");
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
b7.onclick = function() {
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
b8.onclick = function() {
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
    else{
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
b9.onclick = function() {
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
  handle.style.left = slider.value+"%";
	divisor.style.width = slider.value+"%";
}

window.onload = function() {
	moveDivisor();
};

