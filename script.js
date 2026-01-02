let wrapper = document.querySelector(".wrapper");
let boxs = document.querySelectorAll(".box");
let para = document.querySelector(".para");
let clickpara = document.querySelector(".click");
let startbtn = document.querySelector(".start");

let colors = ["#eb4034", "#34eb62", "#344feb", "#ae34eb", "#34ebd0", "#adb8b6"];
let fill = [...colors, ...colors];

fill.sort(() => Math.random() - 0.5);

let firstbox = null;
let secondbox = null;
let clickcount = 0;
let interval;
boxClick();
startbtn.addEventListener("click", () => {
  timer();

  time = 20;
  clickcount = 0;
  firstbox = null;
  secondbox = null;
   clickpara.innerText = "Click count:0"
  boxs.forEach((e) => {
    e.style.backgroundColor = "";
    e.style.display = "block";
  });

  wrapper.style.display = "block";
});

function boxClick() {
  boxs.forEach((box, index) => {
    box.addEventListener("click", () => {
      clickcount++;
      clickpara.innerText = `Click count: ${clickcount}`;

      if (box === firstbox) return;
      box.style.backgroundColor = fill[index];

      if (firstbox === null) {
        firstbox = box;
        return;
      }
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
    });
  });
}

function reset() {
  firstbox = null;
  secondbox = null;

}

let time = 20;
function timer() {
  interval = setInterval(() => {
    para.innerText = `Time: ${time}`;
    time--;
    if (time === 0) {
      para.innerText = `Time:${time}`;
      wrapper.style.display = "none";
      clearInterval(interval);
    }
  }, 1000);
}
