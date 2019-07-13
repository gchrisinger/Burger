// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-hungry").on("click", function(event) {
      var id = $(this).data("id");
      var newHungry= $(this).data("newhungy");
  
      var newHungryState = {
        Hungry: newHungry
      };l
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newHungryState
      }).then(
        function() {
          console.log("changed hunger to", newHungry);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim(),
        hungry: $("[name=hungry]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  