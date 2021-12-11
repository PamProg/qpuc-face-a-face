let dateDebut;

let start = false;

let currentInterval = -1;
let currentNumber = -1;
let pause = false;

start4 = () => {
  currentNumber = 4;
  dateDebut = new Date();
  const bg4 = document.getElementById("bg4");
  let bg4Height = 100;

  let dateBefore4 = new Date();
  currentInterval = setInterval(() => {
    if (!pause) {
      bg4.setAttribute("style", "height: " + bg4Height + "%");
      bg4Height -= 1.365;

      if (bg4Height <= 0) {
        bg4.setAttribute("style", "height: 0%");
        document
          .getElementById("chiffre4")
          .setAttribute("style", "color: gray;");

        const dateAfter4 = new Date();
        console.log("Temps passé 4 : ", (dateAfter4 - dateBefore4) / 1000);
        clearInterval(currentInterval);

        this.start3();
      }
    }
  }, 100);
};

start3 = () => {
  currentNumber = 3;
  const bg3 = document.getElementById("bg3");
  let bg3Height = 100;

  const dateBefore3 = new Date();
  currentInterval = setInterval(() => {
    if (!pause) {
      bg3.setAttribute("style", "height: " + bg3Height + "%");
      bg3Height -= 1.85;

      if (bg3Height <= 0) {
        bg3.setAttribute("style", "height: 0%");
        document
          .getElementById("chiffre3")
          .setAttribute("style", "color: gray;");

        const dateAfter3 = new Date();
        console.log("Temps passé 3 : ", (dateAfter3 - dateBefore3) / 1000);
        clearInterval(currentInterval);

        this.start2();
      }
    }
  }, 100);
};

start2 = () => {
  currentNumber = 2;
  const bg2 = document.getElementById("bg2");
  let bg2Height = 100;

  const dateBefore2 = new Date();
  currentInterval = setInterval(() => {
    if (!pause) {
      bg2.setAttribute("style", "height: " + bg2Height + "%");
      bg2Height -= 2.75;

      if (bg2Height <= 0) {
        bg2.setAttribute("style", "height: 0%");
        document
          .getElementById("chiffre2")
          .setAttribute("style", "color: gray;");

        const dateAfter2 = new Date();
        console.log("Temps passé 2 : ", (dateAfter2 - dateBefore2) / 1000);
        clearInterval(currentInterval);

        this.start1();
      }
    }
  }, 100);
};

start1 = () => {
  currentNumber = 1;
  const bg1 = document.getElementById("bg1");
  let bg1Height = 100;

  const dateBefore1 = new Date();
  currentInterval = setInterval(() => {
    if (!pause) {
      bg1.setAttribute("style", "height: " + bg1Height + "%");
      bg1Height -= 5.5;

      if (bg1Height <= 0) {
        bg1.setAttribute("style", "height: 0%");
        document
          .getElementById("chiffre1")
          .setAttribute("style", "color: gray;");

        const dateAfter1 = new Date();
        console.log("Temps passé 1 : ", (dateAfter1 - dateBefore1) / 1000);
        clearInterval(currentInterval);

        console.log("Temps final : ", (new Date() - dateDebut) / 1000);
      }
    }
  }, 100);
};

document.addEventListener("keyup", (k) => {
  switch (k.code) {
    case "Space":
      if (!start) {
        start = true;
        start4();
      } else {
        pause = !pause;
      }
      console.log("Space");
      break;
    case "ArrowLeft":
      switch (currentNumber) {
        case 4:
          document
            .getElementById("bar4")
            .setAttribute("style", "margin-right: 0px;");
          break;
        case 3:
          document
            .getElementById("bar3")
            .setAttribute("style", "margin-right: 0px;");
          break;
        case 2:
          document
            .getElementById("bar2")
            .setAttribute("style", "margin-right: 0px;");
          break;
        case 1:
          document
            .getElementById("bar1")
            .setAttribute("style", "margin-right: 0px;");
          break;
      }
      console.log("ArrowLeft");
      break;
    case "ArrowRight":
      switch (currentNumber) {
        case 4:
          document
            .getElementById("bar4")
            .setAttribute("style", "margin-left: 60px;");
          break;
        case 3:
          document
            .getElementById("bar3")
            .setAttribute("style", "margin-left: 60px;");
          break;
        case 2:
          document
            .getElementById("bar2")
            .setAttribute("style", "margin-left: 60px;");
          break;
        case 1:
          document
            .getElementById("bar1")
            .setAttribute("style", "margin-left: 60px;");
          break;
      }
      console.log("ArrowRight");
      break;
  }
});

mainAGauche = () => {
  document.getElementById("bar4").setAttribute("style", "margin-left: 0px;");
  document.getElementById("bar3").setAttribute("style", "margin-left: 60px;");
  document.getElementById("bar2").setAttribute("style", "margin-left: 0px;");
  document.getElementById("bar1").setAttribute("style", "margin-left: 60px;");
};

mainADroite = () => {
  document.getElementById("bar4").setAttribute("style", "margin-left: 60px;");
  document.getElementById("bar3").setAttribute("style", "margin-left: 0px;");
  document.getElementById("bar2").setAttribute("style", "margin-left: 60px;");
  document.getElementById("bar1").setAttribute("style", "margin-left: 0px;");
};
