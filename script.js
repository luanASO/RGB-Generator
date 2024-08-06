let TelaPrincipal = document.getElementById("tela-principal");
let cores = document.getElementsByClassName("fill");
let button = document.getElementById("btn");
let buttonRandom = document.getElementById("btn-random");
let colorRandom = document.getElementById("color-random");
let colorStop = document.getElementById("color-stop");

let btns = [button, buttonRandom, colorRandom];

colorStop.style.display = "none";

let r = 0;
let g = 0;
let b = 0;

for (cor of cores) {
  cor.addEventListener("input", (e) => {
    if (e.target.placeholder == "R") {
      r = parseInt(e.target.value);
    }

    if (e.target.placeholder == "G") {
      g = parseInt(e.target.value);
    }

    if (e.target.placeholder == "B") {
      b = parseInt(e.target.value);
    }

    if (e.target.value == "") {
      e.target.value = 0;
      e.target.value = "";
    }

    if (e.target.value == "0") {
      for (btn of btns) {
        btn.style.backgroundColor = "white";
        btn.style.color = "black";
      }
    } else {
      for (btn of btns) {
        btn.style.backgroundColor = "black";
        btn.style.color = "white";
      }
    }

    if (e.target.value > 255) {
      e.target.value = "255";
    }

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  });

  button.addEventListener("click", () => {
    location.reload();
  });

  buttonRandom.addEventListener("click", () => {
    let r = Math.ceil(Math.random() * 255);
    let g = Math.ceil(Math.random() * 255);
    let b = Math.ceil(Math.random() * 255);
    console.log(r, g, b);

    cores[0].value = r;
    cores[1].value = g;
    cores[2].value = b;

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  });

  colorRandom.addEventListener(
    "click",
    (timering = () => {
      let timer = setInterval(() => {
        let r = Math.ceil(Math.random() * 255);
        let g = Math.ceil(Math.random() * 255);
        let b = Math.ceil(Math.random() * 255);
        // console.log(r, g, b);
        cores[0].value = r;
        cores[1].value = g;
        cores[2].value = b;
        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      }, 1500);
      console.log(timer);
      hideShowButton();
      let valueInterval = timer;
      return valueInterval;
    })
  );

  colorStop.addEventListener("click", () => {
    hideShowButton();
    // clearInterval(timering());
    console.log(timering());
  });
}
hideShowButton = () => {
  if (colorStop.style.display == "none") {
    colorRandom.style.display = "none";
    colorStop.style.display = "inline-block";
  } else {
    colorRandom.style.display = "inline-block";
    colorStop.style.display = "none";
  }
};
