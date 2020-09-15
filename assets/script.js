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
  let hourToInsert = "";
  for (let i = 8; i < 17; i++) {
    let textArea = $("<textarea>");
    hourToInsert = moment().hour(i).format("HH:00");
    textArea.attr("id", JSON.parse(JSON.stringify(hourToInsert)));
    let timeBlock = $("<div>").addClass("row");
    let timeBlockHour = $("<div>").addClass("col-1 hour");
    timeBlockHour.text(hourToInsert);
    let timeBlockContent = $("<div>").addClass("col-10");
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
    console.log(currentHourCompare);
    console.log(hourToInsert);
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
  document.getElementById("08:00").textContent = localStorage.getItem("08:00");
  document.getElementById("09:00").textContent = localStorage.getItem("09:00");
  document.getElementById("10:00").textContent = localStorage.getItem("10:00");
  document.getElementById("11:00").textContent = localStorage.getItem("11:00");
  document.getElementById("12:00").textContent = localStorage.getItem("12:00");
  document.getElementById("13:00").textContent = localStorage.getItem("13:00");
  document.getElementById("14:00").textContent = localStorage.getItem("14:00");
  document.getElementById("14:00").textContent = localStorage.getItem("14:00");
  document.getElementById("15:00").textContent = localStorage.getItem("15:00");
  document.getElementById("16:00").textContent = localStorage.getItem("16:00");
}
getData();
