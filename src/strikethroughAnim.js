import gsap from "gsap";
import $ from "jquery"

const descriptions=["Developer", "Athlete", "Student"]
let i=0;

setTimeout(() =>{
    strikeThrough();
    setInterval(strikeThrough, 7000);
}, 3500)

//Animates the strike through animation and changes the text
function strikeThrough(){
    gsap.to(".strike", {opacity: 0, duration: 1}).then(() =>
        $(".strike").text(descriptions[i])
    ).then(  () =>   
    gsap.to(".strike", {opacity: 1, duration: 1})
    )
    i=(i+1)%descriptions.length;
}