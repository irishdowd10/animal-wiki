$(document).ready(function() {
var animal = (prompt("Which animal would you like to learn about?"));

if (animal === "bats") {
  $("#bats").show();
} else if (animal === "turtles") {
  $("#turtles").show();
} else if (animal === "snakes") {
  $("#snakes").show();
}
});



//  var favoriteBat = $("input[value="bat"]").val();
//  var favoriteSnake = $("input[value="snakes"]").val();
//  var favoriteTurtle = $("input[value="turtles"]").val();


 //$("form").submit(function(event) {
//  var favoriteBat = $("input[value="bat"]").val();
//  if (favoriteBat) {
//    $('#bats').show();
// });
