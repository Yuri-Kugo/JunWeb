// Показ "hello world" при нажатие на боксик.
document.querySelector(".mini_box").onclick = sayHi

function sayHi () {
   console.log("helloy world")
};

//drag and drop
// dragStar - начало
// drahEnd draover drop

const dargAndDrop =  () => {
   const card = document.querySelectorAll('.js_card');
   const cellsBox = document.querySelectorAll('.cell-box');


   const dragStart = function () {
      setTimeout( () => {
         this.classList.add('hide');
      }, 0)
   };

   const dragEnd = function () {
      this.classList.remove('hide');
   };

   card.addEventListener("dragstart", dragStart);
   card.addEventListener("dragend", dragEnd);


    






} 
