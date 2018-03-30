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

$("button").on("click", function (){
var button = $(this).attr("data-name");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
button + "&api_key=4E6ZWhl3kjr7jApYIWgPeN5FvtUoAVIB";

$.ajax ({
    url: queryURL,
    method: "GET"
})
.then(function(response){ 
    
})

})

})
/* END JAVASCRIPT*/