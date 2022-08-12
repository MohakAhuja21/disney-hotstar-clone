let movies = [
  {
    name: "The falcon and the winter soldier",
    des:
      "The Falcon and the Winter Soldier is an American television miniseries created by Malcolm Spellman for the streaming service Disney+, based on Marvel Comics!",
    image: "images/slider 2.PNG"
  },
  {
    name: "loki",
    des:
      "Loki Laufeyson, known by adoption as Loki Odinson and by his title as the God of Mischief, is a fictional character portrayed by Tom Hiddleston!",
    image: "images/slider 1.PNG"
  },
  {
    name: "wanda vision",
    des:
      "WandaVision is an American television miniseries created by Jac Schaeffer for the streaming service Disney+, based on Marvel Comics featuring the characters!",
    image: "images/slider 3.PNG"
  },
  {
    name: "Raya And The Last Dragen",
    des:
      "The Last Dragon Posters designed and sold by artists. Shop affordable wall art to hang in dorms, bedrooms, offices, or anywhere blank walls aren't !",
    image: "images/slider 4.PNG"
  },
  {
    name: "Luca",
    des:
      "Unique Luca Posters designed and sold by artists. Shop affordable wall art to hang in dorms, bedrooms, offices, or anywhere blank walls aren't welcome!",
    image: "images/slider 5.PNG"
  }
];

// creating slider
const carousel = document.querySelector(".carousel");
// let slider = an empty array
let sliders = [];

let slideIndex = 0; // to track current slide index.
const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  // creating DOM element
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  // attaching all elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  // setting up image
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  // setting elements classnames same as we did in html file
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  // we wil end this function by putting the slider elements to slider array[].
  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};
// we want to call this function for more than 1 time because we want this function to be sliding.
for (let i = 0; i <3; i++) {
  createSlide();
}
// we are using setInterval because we don't want the slider to slide everyTime we want to move it after some seconds.
setInterval(() => {
  createSlide();
}, 3000);

// video cards-> when we hover on any video card. it should play video.
const videoCards= document.querySelectorAll('.video-card');

// when we hover on card it will start playing video
videoCards.forEach(item=>{
  item.addEventListener('mouseover',()=>{
    let video=item.children[1];
    video.play();
  })
  // when we take our mouse out of that card it will stop playing the video
  item.addEventListener('mouseleave',()=>{
    let video=item.children[1];
    video.pause();
  })
})

// card sliders
let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
