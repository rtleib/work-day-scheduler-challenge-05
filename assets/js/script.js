// This will run once the DOM is ready for JavaScript code to load.
$(document).ready(function () {
    
    // To create current day and time. This is under the currentDay id. 
    // MMMM = month, Do = day, YYYY = year, h(hour):mm(minute), a = am/pm
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"));
    
    // To save description in textarea
    $(".saveBtn").on("click", function () {
        // desc is a varible for description. By using "this", it strictly selects the siblings element as description. Value is to return the value attribute.
        var desc = $(this).siblings(".description").val();
        // textBox is another varible for description. By using "this", it strictly selects the siblings element as description. Attribute is set specifically to id.
        var textBox = $(this).siblings(".description").attr("id");
        // This is to set up for saving storage using these two of the varibles, desc and textBox.
        localStorage.setItem(textBox, desc);
    });
    // Using "#" is selecting the id. Getting the vaulue using stand-alone numbers (9, 10, 11, 12, 13, 14, 15, 16, 17) to save and locate storage.
    $("#9").val(localStorage.getItem("9"));
    $("#10").val(localStorage.getItem("10"));
    $("#11").val(localStorage.getItem("11"));
    $("#12").val(localStorage.getItem("12"));
    $("#13").val(localStorage.getItem("13"));
    $("#14").val(localStorage.getItem("14"));
    $("#15").val(localStorage.getItem("15"));
    $("#16").val(localStorage.getItem("16"));
    $("#17").val(localStorage.getItem("17"));

    // This is the color-coded textarea.
    determineStatus();
});

// Function to color-coded the textarea.
function determineStatus() {
    // This function is to indicate to color code in each description class.
    $(".description").each(function(){
        // current is a varible. This equals to the current time by using moment().hour().
        var current = moment().hour();
        // textHour is a varible. By using "parseInt", it uses the first attribute id. 
        var textHour = parseInt($(this).attr("id"));
        // This if function is texthour strictly equals to current. This would color the present red.
        if (textHour === current){
            // This will activate present, by adding only present and removing past and future.
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
        }
        // If textHour is less than current time, then the past will be color gray.
        else if (textHour < current){
            // This will activate past by adding only past and removing future and present.
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        // If textHour is greater than current time, then the future will be color green
        else if (textHour > current){
            // This will activate future, by adding only future and removing present and past.
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
        }
    });
}