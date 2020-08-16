var name= sessionStorage.getItem("name");
var point=sessionStorage.getItem("points")
document.querySelector(".na").innerHTML += name;
document.querySelector(".name").innerHTML += name;
// document.querySelector(".names").innerHTML
document.querySelector(".point").innerHTML += point;
perc=point*100/10;
document.querySelector(".per").innerHTML += perc+"%";
var grade=document.getElementById("grade")

 if(perc>=80){
    grade.innerHTML="A+"
}
 else if(perc<=79 && perc>=70){
    grade.innerHTML="A"
 }
 else if(perc<=69 && perc>=60){
    grade.innerHTML="B"
 }
 else if(perc<=59 && perc>=50){
    grade.innerHTML="C"
 }
