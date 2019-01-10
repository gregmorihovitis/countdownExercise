var countdownGenerator = function (x) {
  return function (){
    x--;
    if(x === -1){
      console.log("Blast Off!!!");
    }

    else if(x < -1){
      console.log("Rocket is already gone bub!!")
    }

    else{
    console.log("T-minus " + (x + 1) + "...");
    }
  }
};

var countdown = countdownGenerator(3);

countdown();
countdown();
countdown();
countdown();
countdown();
countdown();