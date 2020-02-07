$(function () {

    $(".eat-burger").on("click", function (event) {
        var id = $(this).data("id");
        var newEaten = $(this).data("eaten");

        var newDevour = {
            devour: newEaten
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevour
        }).then(
            function () {
                console.log("Devour state changed to", newDevour);
                location.reload();
            }
        );
    });

    $(".burger-new").on("click", function (event) {
        console.log("this works")
        event.preventDefault();

        if(!$("#burger-name").val().trim()){
            return
        }else{
        var newBurger = {
            burger_name: $("#burger-name").val().trim(),
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("cooking up your new burger!");
                location.reload();
            }
        );
        }
    });

});