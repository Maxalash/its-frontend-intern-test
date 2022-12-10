// Parsing data from the source
const url = "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
const ul = document.getElementById('slides');
const points = document.getElementById('slide-points');
const list = document.createDocumentFragment();

const buttonL = document.getElementById('lslide');
const buttonR = document.getElementById('rslide');

const initial = {
  0: {
    name: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    price: "4.55"
  },
  1: {
    name: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    price: "5.55"
  },
  2: {
    name: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    price: "2.25"
  },
  3: {
    name: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    price: "3.15"
  },
  4: {
    name: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    price: "7.15"
  },
  5: {
    name: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    price: "1.15"
  },
  6: {
    name: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    price: "4.64"
  }
};

listData(initial);

async function getData() {
  try {
    await fetch(url)
      .then(data => {
        const result = data.json();
        listData(result);
      })
      .catch(err => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
  }
}

function listData(obj) {
  Object.keys(obj).map(function (key) {
    const item = initial[key];
    if (parseFloat(item.price) < 5.00) {
      const legendText = '<div class="item-quote"> <div class="item-quote-text">' + item.name + '</div> <br /> <div class="item-quote-author">' + item.price + '</div> </div> ';
      const liItem = document.createElement('li');
      liItem.classList.add("slider-item")
      liItem.innerHTML = legendText;
      list.appendChild(liItem);
      const divpoint = document.createElement('div');
      divpoint.classList.add('slide-point');
      points.appendChild(divpoint);
    }
  });  
  ul.innerHTML = "";
  ul.appendChild(list);
  points.children[0].style.opacity = 1;
  buttonL.style.visibility = "hidden";
}

getData();

// Slider functionality


buttonR.onload = function () {
  points.children[0].style.opacity = 1;
}
let order = 0;
buttonR.addEventListener('click', () => {
  if (order == 0) {
    buttonL.style.visibility = "visible";
  }
  points.children[order].style.opacity = 0.3;
  order++;
  ul.style.marginLeft = "-" + (order * 300 + 40) + "px";
  points.children[order].style.opacity = 1;
  if (order == ul.children.length - 1) {
    buttonR.style.visibility = "hidden";
  }
});

buttonL.addEventListener('click', () => {
  if (order == ul.children.length - 1) {
    buttonR.style.visibility = "visible";
  }
  points.children[order].style.opacity = 0.3;
  order--;
  ul.style.marginLeft = "-" + (order * 300 + 40) + "px";
  points.children[order].style.opacity = 1;
  if (order == 0) {
    buttonL.style.visibility = "hidden";
  }
});

// Menu burger toggle

const burger = document.getElementById('menu-burger');
const menuSlide = document.getElementById('menu-slide');
let toggle = true;

burger.addEventListener('click', () => {
  if (toggle) {
    menuSlide.style.transform = "translateX(0%)";
    toggle = false;
  } else {
    menuSlide.style.transform = "translateX(100%)";
    toggle = true;
  }
})

// Store menu dropdown

// Menu bar store:
// const select = document.getElementsByClassName('menu-select');
const store1 = document.getElementById('bar-store');
let selectToggle1 = true;

store1.addEventListener('click', () => {
  if (selectToggle1) {
    store1.nextSibling.nextSibling.style.height = "max-content";
    selectToggle1 = false;
  } else {
    store1.nextSibling.nextSibling.style.height = "0";
    selectToggle1 = true;
  }
});

// Menu burger store:
// const select = document.getElementsByClassName('menu-select');
const store2 = document.getElementById('burger-store');
let selectToggle2 = true;

store2.addEventListener('click', () => {
  if (selectToggle2) {
    store2.nextSibling.nextSibling.style.height = "max-content";
    selectToggle2 = false;
  } else {
    store2.nextSibling.nextSibling.style.height = "0";
    selectToggle2 = true;
  }
});
