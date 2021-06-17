/*const navbar = ["home","about","Contact me","Guyheadd blogs","Theorical work","Side works"]*/
/*element = document.querySelector();*/
/*const matches = container.querySelectorAll("li[Home-active=1]","li[About-active=1]","li[Contact-active=1",
"li[Guyheadd blog-active=1]","li[Theoretical work-active=1]", "li[Side works-active=1]");
const matches = container.querySelectorAll("li[data-active=1]");*/
/*const container = document.querySelector("#userlist");*/

/*function setup(){
 var navigationbar =[];
 var bar ={};

 bar.home = welcomepage;
 bar.about = about;
 bar.push(bar);


 return navigationbar;

}
var temp = setup();
alert(temp[0].home),*/
document.getElementById("guyheadd").addEventListener("click",displayDate);


function displayDate(){
    document.getElementById("demo").innerHTML=Date();
}