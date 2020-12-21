console.log(moment().format("LL"))
var newVar = $("#currentDay");
newVar.text(moment().format('dddd , MMMM Do YYYY'));

var currentHour = (moment().format("HH"));
 console.log(currentHour)
 for (i =9; i<=17; i++) {
     $("#"+i).val(localStorage.getItem(i))
    if (i<currentHour){
        $("#"+i).attr("class" , "form-control past");
        console.log("this is the past")
    } else if (i==currentHour) {
        $("#"+i).attr("class" , "form-control present");
        console.log("this is the present")
    } else {
        $("#"+i).attr("class", "form-control future");
        console.log("this is in the future")
    }
}
$(document).on("click", "button", function () {
    console.log(this);
    var value = $(this).prev().val();
    var hourKey = $(this).prev().attr("id");
    localStorage.setItem(hourKey, value);
})




// var resetBtn = document.createElement("resetBtn");
// resetBtn.textContent = "Reset Schedule";
// resetBtn.addEventListener("click", function(event) {
//     var element = event.target;
// });