window.onload = function() {

    var buttonG = document.getElementById("G");
    var buttonGr = document.getElementById("Gr");
    var buttonC = document.getElementById("C");
    var buttonCI = document.getElementById("CI");
    var buttonSH = document.getElementById("SH");
  
  
    buttonG.addEventListener("click", function() {
      var x = 100;
    var y = Math.log10(x);
  alert("Результат обчислення десяткового логарифма від числа 100 = " + y);
    });
  
    buttonGr.addEventListener("click", function() {
     var x = 8;
  var y = Math.log2(x);
  
  alert("Результат обчислення двійкового логарифма від числа 8 = " + y);
   });
  
    buttonC.addEventListener("click", function() {
     var x = 45; 
    var y = Math.cos(x);
    var Rounded = y.toFixed(0);
  
  alert("Тангенс 45 градусів (з округленням) =  " + Rounded);
  
    });
  
    buttonCI.addEventListener("click", function() {
     var x = 1.00123;
  var y = Math.ceil(x);
  
  alert("Результат округлення числа 1,00123 у більшу сторону = " + y);
   });
  
    buttonSH.addEventListener("click", function() {
     var x = -3.1234;
  var y = Math.ceil(x);
  
  alert("Результат округлення числа -3.1234 у більшу сторону =  " + y);
  
    });
  };