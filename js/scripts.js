//Back end logic
var unLuckyArray = [];
var luckyArray = [];
var unLucky =0;
var lucky =0;


//Front end logic
$(document).ready(function() {
  $("form#fortuneQuiz").submit(function(event) {
  event.preventDefault();
  $("input:checkbox[name=un-lucky]:checked").each(function() {
    // debugger;
    var unLucky = $(this).val();
    unLuckyArray.push(unLucky);
  }); //End of un-lucky checked array.
  console.log("un-lucky aray: "+unLuckyArray);

  $("input:checkbox[name=lucky]:checked").each(function() {
    // debugger;
    var lucky = $(this).val();
    luckyArray.push(lucky);
  }); //End of lucky checked array.
  console.log("lucky array: "+luckyArray);

  unLucky = unLuckyArray.length;
  lucky = luckyArray.length;

  if(unLucky > lucky) {
    $("#luckResultOutput").text("You are very unlucky");
    console.log("You are very unlucky");
  } else if (unLucky === lucky) {
    $("#luckResultOutput").text("Nothing happens");
    console.log("Nothing happens");
  } else if (unLucky < lucky) {
    $("#luckResultOutput").text("You are very lucky");
    console.log("You are very lucky");
  } else {
    console.log("Error! Evaluate your fortune-teller logic.");
  }



}); //End of fortuneQuiz submit function.
}); //End document reerady function.
  // alert(luckyArray);
