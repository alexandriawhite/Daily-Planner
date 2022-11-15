const store = window.localStorage;
let currentDay = dayjs().format("dddd, MMMM DD, h:mma");
const currentDayText = $("#currentDay");
const hourText = $(".hourText");
currentDayText.text(currentDay);
// "HH" is the hour format (00-23)
const hourTime = dayjs().format("HH");
//For loop for making and designing time boxes

for  (var i = 9; i  < 18; i++){
// h is hour format for 12 hour day a is am and pm format    
    let timeSlot = dayjs().startOf("day").add(i, "hour").format("ha");
    let currentState;
    //If current hour equals i, box set to red. If later than i, sets box to green. If after i, sets time box to grey
    if (hourTime == i){
        currentState = "present";
    } else if (hourTime < i){
        currentState = "future";
    } else {
        currentState = "past";
    };

// Creates time box with specified values from above, and pre set values
    var container = `        
<div class="hour" id="hour-${i}">
    <label class="hourText">${timeSlot}</label>
    <textarea class="textarea ${currentState} inputText hour-${i}"></textarea>
    <button class="saveBtn"><img src="./assets/images/upload.png"></button>
</div>`
;
//Appends container 
$(".container").append(container)

};
// clicking creates value key of time box's hour id with value being the textarea's value. Then stores it
$(".saveBtn").on("click", function(){
    let value = $(this).siblings(".textarea").val();
    let time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
})
//Fills stored information in textareas.
for (var i = 9; i < 18; i++){
    $(`.hour-${i}`).val(localStorage.getItem(`hour-${i}`));
  }