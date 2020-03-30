$(document).ready(function() {
  var groceries = [];

  $("form#groceries-list").submit(function(event) {

    var item = $("#grocery-item").val();
    groceries.push(item);

    groceries.map(function(grocery) {
      console.log(grocery);
    });

    
    event.preventDefault();
  });

  $("#generate-list").click(function() {
    // needs to alphabatize list, and then capitalize it. 
    groceries.sort();
    
    var sortedGroceries = groceries.map(function(item) {
      return item.toUpperCase();
    })

    sortedGroceries.map(function(item) {
      $("#grocery-list").append(item);
      $("#grocery-list").append("</br>")
    })
  });
});