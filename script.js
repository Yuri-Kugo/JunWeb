// Показ "hello world" при нажатие на боксик.
document.querySelector(".mini_box").onclick = sayHi

function sayHi () {
   console.log("helloy world")
};

//drag and drop
// dragStar - начало
// drahEnd draover drop 

let draggingCard = undefined;

const dragStart = (card) => () => {
  draggingCard = card;
}

const drop = (box) => () => {
  if (draggingCard) {
    box.appendChild(draggingCard);
    draggingCard = undefined;
  }
}

const dragOver = (event) => {
  event.preventDefault();
}

const dragEnter = (event) => {
  event.preventDefault();
}

const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
  box.addEventListener('drop', drop(box));
  box.addEventListener('dragover', dragOver);
  box.addEventListener('dragenter', dragEnter);
})

const cards = document.querySelectorAll('.js_card');
cards.forEach(card => {
  card.addEventListener('dragstart', dragStart(card));
})



//Добавление нового блока. 

function addDiv(el) {
  let link = el.parentElement;
  let element = document.createElement('div');
  element.innerHTML = `<div class="mini_box js_card" id="box2" draggable="true">
    <button type="button" class="bat" id="minus" onclick="removeDiv(this)">-</button>
  боксик</div>`

  link.appendChild(element);
}


//Удаление блока.
function removeDiv(el) {
  let revDiv = el.parentElement;
  revDiv.remove();
}
