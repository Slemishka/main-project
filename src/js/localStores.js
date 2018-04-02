
var londonBtn = $(".londonBtn"),
    newYorkBtn = $(".newYorkBtn"),
    parisBtn =$(".parisBtn");

londonBtn.click(function () {

    $(".londonMap").addClass("displayBlock");
    $(".newYorkMap").removeClass("displayBlock");
    $(".parisMaps").removeClass("displayBlock");


});
newYorkBtn.click(function () {

    $(".londonMap").removeClass("displayBlock");
    $(".newYorkMap").addClass("displayBlock");
    $(".parisMaps").removeClass("displayBlock");


});

parisBtn.click(function () {

    $(".londonMap").removeClass("displayBlock");
    $(".newYorkMap").removeClass("displayBlock");
    $(".parisMaps").addClass("displayBlock");


});






















// var londonBtn = document.querySelector(".londonBtn"),
//     newYorkBtn = document.querySelector(".newYorkBtn"),
//     parisBtn =document.querySelector(".parisBtn");
//
// londonBtn.addEventListener("click",function () {
//
//     document.querySelector(".londonMap").classList.add("displayBlock");
//     document.querySelector(".newYorkMap").classList.remove("displayBlock");
//     document.querySelector(".parisMaps").classList.remove("displayBlock");
//
//
// });
// newYorkBtn.addEventListener("click",function () {
//
//     document.querySelector(".londonMap").classList.remove("displayBlock");
//     document.querySelector(".newYorkMap").classList.add("displayBlock");
//     document.querySelector(".parisMaps").classList.remove("displayBlock");
//
//
// });
// parisBtn.addEventListener("click",function () {
//
//     document.querySelector(".londonMap").classList.remove("displayBlock");
//     document.querySelector(".newYorkMap").classList.remove("displayBlock");
//     document.querySelector(".parisMaps").classList.add("displayBlock");
//
//
// });