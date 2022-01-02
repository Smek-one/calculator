(function myCalculator() {
  //Keys
  const keys = document.getElementsByTagName("button");
  //For clicks
  for (const key of keys) {
    key.onclick = handleClick;
  }

  //For display
  const output = document.getElementById("output");
  //Number input before operator
  let numOut = "",
    //Number input after operator
    numOutNew = "",
    //Operator
    op = "",
    //Result
    int = 0;

  //Click function
  function handleClick() {
    let num = this.innerText;
    if (this.classList.contains("number")) {
      numOut += num;
      output.innerText = numOut;
    } else {
      doCalc(num);
    }
  }

  function doClear() {
    output.innerText = "";
    numOut = "";
    numOutNew = "";
    op = "";
    int = 0;
  }

  //Calculation
  function doCalc(calc) {
    if (calc === "C") {
      //Clear
      doClear();
    } else if (numOutNew !== "") {
      //Transform string intp integer
      numOut = parseFloat(numOut);
      switch (op) {
        //Divide
        case "/":
          if (numOut !== 0) {
            int = numOutNew / numOut;
          } else {
            int = "error";
          }
          break;
        //Multiply
        case "*":
          int = numOutNew * numOut;
          break;
        //Subtract
        case "-":
          int = numOutNew - numOut;
          break;
        //Add
        case "+":
          int = numOutNew + numOut;
          break;
        //Equal
        case "=":
          int = parseFloat(output.innerText);
          break;
      }
      if (isNaN(int)) {
        output.innerText = "error";
        setTimeout(function () {
          doClear();
        }, 2000);
      } else {
        output.innerText = int;
        numOutNew = int;
      }
    } else if (numOut !== "") {
      numOutNew = parseFloat(numOut);
    }
    op = calc;
    numOut = "";
  }
})();
