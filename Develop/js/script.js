// moment.js is linked so use below to show live US eastern date/time on top

function runClock() {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'))
};
setInterval(runClock, 1000);

// Since live clock is working, console log current hour that is necessary to figure out past, present and future later

var currentHour = moment().hour();
console.log(currentHour);

// Since currentHour is correct, add color to each row to indicate if it's past, present, or future

// Before the coloring, recognize that right now this array isn't grabbing a numerical value but the text inside the form-control class

var hourBlock = [
    $("#nine"),
    $("#ten"),
    $("#eleven"),
    $("#twelve"),
    $("#thirteen"),
    $("#fourteen"),
    $("#fifteen"),
    $("#sixteen"),
    $("#seventeen"),
]

// Guidance from tutor allowed me to manipulate i to assign numerical value to each time block

function pastPresent() {
    let currentHour = moment().hour();

    // first option in manipulating integer
    for (i = 9; i < hourBlock.length + 9; i++) {
        console.log(i, (hourBlock[i - 9]));
        if (i < currentHour) {
            hourBlock[i - 9].addClass("past");
        } else if (i == currentHour) {
            hourBlock[i - 9].addClass("present");
        } else {
            hourBlock[i - 9].addClass("future");
        }
    }
    // Second option in manipulating integer
    // for (i = 0; i < hourBlock.length; i++) {
    //     console.log((hourBlock[i]),(i+9));
    // }
}
// runs this colorBlock function separate from clicking save button first
pastPresent();

// Local storage function below
$(document).ready(function () {
    $(".btn").on("click", function () {
        for (i = 9; i < hourBlock.length + 9; i++) {
            let apptHistory = i;
            localStorage.setItem(apptHistory, JSON.stringify(hourBlock[i - 9].val()));
            console.log(hourBlock[i - 9].val());
        }
    })
})

// To keep all local storage items after refreshing page

$(document).ready(function () {
    for (i = 9; i < hourBlock.length + 9; i++) {
        let apptHistory = i;
        var savedApptHistory = localStorage.getItem(apptHistory);
        if (savedApptHistory == null) {
            savedApptHistory = "";
        } else {
            savedApptHistory = JSON.parse(savedApptHistory);
        };
        hourBlock[i - 9].val(savedApptHistory);
    }
})
