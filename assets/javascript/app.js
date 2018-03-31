/* BEGIN JAVASCRIPT*/
$(document).ready(function(){
var topics = ["Kim Kardashian", "Paris Hilton", "Lindsay Lohan", "Leonardo DiCaprio", "Brad Pitt"];
console.log(topics);


function renderButtons (){
    $("#topics-view").text("");
    for (i = 0; i < topics.length; i++) {
    var button = $("<button>");
    button.attr("class", "button");
    button.attr("data-name", topics[i])
    button.text(topics[i]);
    $("#topics-view").append(button);
    console.log(button);
}
}
renderButtons ();

$("#add-topic").on("click", function (event){
    event.preventDefault();
    var input = $("#topics-input").val();
    topics.push(input);
    console.log(topics);
    function renderButtons (){
        $("#topics-view").text("");
        for (i = 0; i < topics.length; i++) {
        var button = $("<button>");
        button.attr("class", "button");
        button.attr("data-name", topics[i])
        button.text(topics[i]);
        $("#topics-view").append(button);
        console.log(button);
    }
}
renderButtons();
showGifs ();
})

function showGifs () {
$("button").on("click", function (){
var button = $(this).attr("data-name");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
button + "&api_key=4E6ZWhl3kjr7jApYIWgPeN5FvtUoAVIB&limit=10";

$.ajax ({
    url: queryURL,
    method: "GET"
})
.then(function(response){ 
var results = response.data;

for (var i=0; i < results.length; i++) {
 var gifDiv = $("<div class='item'>");
 var rating = results[i].rating;
 var p = $("<p>").text("Rating:" + rating);

 var personImage = $("<img>");

personImage.attr("src", results[i].images.fixed_height_still.url);
personImage.attr("data-still", results[i].images.fixed_height_still.url);
personImage.attr("data-animate", results[i].images.fixed_height.url);
personImage.attr("data-state", "still");
personImage.attr("class", "gif");

 gifDiv.append(p);
 gifDiv.append(personImage);
 $("#gifs-appear-here").prepend(gifDiv);


$(".gif").on("click", function() {
    var state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate"); 
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }

})
}
});
})
}
showGifs ();
})
/* END JAVASCRIPT*/