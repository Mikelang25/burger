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
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});