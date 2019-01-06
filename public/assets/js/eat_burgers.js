$(function () {

  //This should work for eating/devouring a burger
  //as well as reordering a burger so that it will
  //show up in the column to eat it again
  $(".change-eaten").on("click", function (event) {

    var id = $(this).data("id");
    var devoured = $(this).data("neweaten");
    console.log(`id ${id}`);
    console.log(`devoured ${devoured}`);
    console.log(this.data);

    var newIsEaten = {
      devoured: devoured
    };

    if (devoured) {
      alert("Move To Devoured");
    } else {
      alert("Reorder - Move to Devour");
    }

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newIsEaten
    }).then(
      function () {
        console.log("changed devoured to", newIsEaten);
        //Reload the page to get the updated list
        location.reload();
      }
    );
  });


  $("#add-burger").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var burger = document.getElementById("new-burger");
    // Check that a value was input by the user -
    // Currently takes gibberish
    if (burger && burger.value && !burger.value.trim() == '') {
      //console.log(`Burger: ${burger.value}`);
      var newBurger = {
        burger_name: burger.value,
        devoured: 0
      };

      $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
      }).then(
        function () {
          console.log("Added A Burger to Devour", burger);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    }
    else {
      alert("Enter a Real Burger");
    }

  });

});
