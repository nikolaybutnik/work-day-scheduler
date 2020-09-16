// Display current day time
$("#currentDay").html(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

// Create an interval that dynamically updates current day time and push it on the html
setInterval(() => {
  const currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  $("#currentDay").html(currentDay);
}, 1000);

// Define a function that creates a time block for each hour of the work day
function createRows() {
  let currentHourCompare = moment().format("HH:00");
  for (let i = 8; i < 17; i++) {
    let textArea = $("<textarea>");
    let hourToInsert = moment().hour(i).format("HH:00");
    // Dynamically assign an id to each created textarea, to be used when writing/reading data from local storage
    textArea.attr("id", `hour-${i}`);
    let timeBlock = $("<div>").addClass("row");
    let timeBlockHour = $("<div>").addClass("col-1 hour");
    timeBlockHour.text(hourToInsert);
    let timeBlockContent = $("<div>").addClass("col-10");
    // Compare current hour to hour on the time block to assign a proper past/present/future class
    if (currentHourCompare === hourToInsert) {
      timeBlockContent.addClass("present");
      textArea.addClass("present");
    } else if (currentHourCompare > hourToInsert) {
      timeBlockContent.addClass("past");
      textArea.addClass("past");
    } else {
      timeBlockContent.addClass("future");
      textArea.addClass("future");
    }
    timeBlockContent.append(textArea);
    let timeBlockSave = $("<div>").addClass("col-1 my-auto");
    timeBlockSave.append(createSaveButton());
    timeBlock.append(timeBlockHour, timeBlockContent, timeBlockSave);
    $(".container").append(timeBlock);
  }
}
createRows();

// Define a function that creates save buttons, which gets inserted into the rows in the createRows() function.
function createSaveButton() {
  let button = $("<button>").addClass("saveBtn");
  button.attr("type", "submit");
  let saveImg = $("<img src='assets/images/save.png'>");
  saveImg.width(30);
  saveImg.addClass("saveImgBtn");
  button.html(saveImg);
  return button;
}

// Create an event listener for the buttons that takes the contents of textarea and saves them to local storage.
$(".saveBtn").on("click", function (event) {
  let myTextAreaId =
    // Current target is used to make sure click event bubbles up if image is clicked.
    event.currentTarget.parentElement.parentElement.childNodes[1].childNodes[0]
      .id;
  let myTextArea =
    event.currentTarget.parentElement.parentElement.childNodes[1].childNodes[0]
      .value;
  localStorage.setItem(myTextAreaId, myTextArea);
});

// Define a function that loads data from local storage if it's present
function getData() {
  $("#hour-8").text(localStorage.getItem("hour-8"));
  $("#hour-9").text(localStorage.getItem("hour-9"));
  $("#hour-10").text(localStorage.getItem("hour-10"));
  $("#hour-11").text(localStorage.getItem("hour-11"));
  $("#hour-12").text(localStorage.getItem("hour-12"));
  $("#hour-13").text(localStorage.getItem("hour-13"));
  $("#hour-14").text(localStorage.getItem("hour-14"));
  $("#hour-15").text(localStorage.getItem("hour-15"));
  $("#hour-16").text(localStorage.getItem("hour-16"));
}
getData();
