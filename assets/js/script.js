$(document).ready(function () {
    // To create current day and time
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"));
    
    // To save description in textarea
    $(".saveBtn").on("click", function () {
        var desc = $(this).siblings(".description").val();
        var textBox = $(this).parent().attr("id");
        localStorage.setItem(textBox, desc);
    });
    $("#9").val(localStorage.getItem("9"));
    $("#10").val(localStorage.getItem("10"));
    $("#11").val(localStorage.getItem("11"));
    $("#12").val(localStorage.getItem("12"));
    $("#13").val(localStorage.getItem("13"));
    $("#14").val(localStorage.getItem("14"));
    $("#15").val(localStorage.getItem("15"));
    $("#16").val(localStorage.getItem("16"));
    $("#17").val(localStorage.getItem("17"));

    determineStatus();
});

// Function to color-coded the textarea
function determineStatus() {
    $.each($(".description"), function(){
        var current = moment().hour();
        var textHour = parseInt($(this).attr("id"));
        if (textHour === current){
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
        }
        else if (textHour < current){
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (textHour > current){
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
        }
    }, this);
}