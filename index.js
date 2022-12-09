// Parsing data from the source
const url = "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
const ul = document.getElementById('slides');
const points = document.getElementById('slide-points');
const list = document.createDocumentFragment();

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
    const response = await fetch(url)
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
      const legendText = '<div class="item-quote"> <div class="item-quote-text">'+item.name+'</div> <br /> <div class="item-quote-author">'+item.price+'</div> </div> ';
      const liItem = document.createElement('li');
      liItem.classList.add("slider-item")
      liItem.innerHTML = legendText;
      list.appendChild(liItem);
      const divpoint = document.createElement('div');
      divpoint.classList.add('slide-point');
      points.appendChild(divpoint);
    }
  });
  ul.appendChild(list);
  points.children[0].style.opacity = 1;
}

getData();

// Slider functionality

const buttonL = document.getElementById('lslide');
const buttonR = document.getElementById('rslide');

buttonR.onload = function(){
  points.children[0].style.opacity = 1;
}
let order = 0;
buttonR.addEventListener('click', ()=>{
  if(order==0){
    buttonL.style.visibility = "visible";
  }
  points.children[order].style.opacity = 0.3;
  order++;
  ul.style.marginLeft = "-"+(order*300+40)+"px";
  points.children[order].style.opacity = 1;
  if(order==ul.children.length-1){
    buttonR.style.visibility = "hidden";
  }
});

buttonL.addEventListener('click', ()=>{
  if(order==ul.children.length-1){
    buttonR.style.visibility = "visible";
  }
  points.children[order].style.opacity = 0.3;
  order--;
  ul.style.marginLeft = "-"+(order*300+40)+"px";
  points.children[order].style.opacity = 1;
  if(order==0){
    buttonL.style.visibility = "hidden";
  }
});



