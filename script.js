let wrapper = document.querySelector(".wrapper");
let boxs = document.querySelectorAll(".box");

let colors = ["#eb4034", "#34eb62", "#344feb", "#ae34eb", "#34ebd0", "#adb8b6"];
let fill = [...colors, ...colors];

fill.sort(() => Math.random() - 0.5);

let firstbox = null;
let secondbox = null;

boxs.forEach((box, index) => {
  box.addEventListener("click", () => {
    if (box === firstbox) return; 

    boxs[index].style.backgroundColor = fill[index];

    if (firstbox === null) {
      firstbox = box;
      return;
    } else {
      secondbox = box;
      if (firstbox.style.backgroundColor === secondbox.style.backgroundColor) {
        reset();
      } else {
        setTimeout(() => {
          firstbox.style.backgroundColor = "";
          secondbox.style.backgroundColor = "";
          reset();
        }, 600);
      }
    }
  });
});

function reset() {
  firstbox = null;
  secondbox = null;
}
