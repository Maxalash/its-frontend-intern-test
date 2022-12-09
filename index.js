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
      console.log(divpoint);
      points.appendChild(divpoint);
    }
  });
  ul.appendChild(list);
  console.log(points);
}

getData();

