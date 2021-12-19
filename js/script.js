const callButton = document.querySelector(".button-transparent.open-popup")
const callPopup = document.querySelector(".modal-wrapper")
const callPopupCloseButton = callPopup.querySelector(".close-feedback-white") 

callButton.addEventListener("click", function(){
    callPopup.classList.remove("hide")
})

callPopupCloseButton.addEventListener("click", function(){
    callPopup.classList.add("hide")
})






const countButton = document.querySelector(".welcome-orange-button")
const countPopup = document.querySelector(".modal-cection")
const countPopupCloseButton = countPopup.querySelector(".close-feedback-white") 

countButton.addEventListener("click", function(){
    countPopup.classList.remove("hide")
})

countPopupCloseButton.addEventListener("click", function(){
    countPopup.classList.add("hide")
})





const inguiryButton = document.querySelector(".price")
const inguiryPopup = document.querySelector(".second hide")
const inguiryPopupCloseButton = inguiryPopup.querySelector(".close-feedback-black") 

inguiryButton.addEventListener("click", function(){
    inguiryPopup.classList.remove("hide")
})

inguiryPopupCloseButton.addEventListener("click", function(){
    inguiryPopup.classList.add("hide")
})






const submitButton = document.querySelector(".orange-inguiry")
const submitPopup = document.querySelector(".orange hide")
const submitPopupCloseButton = submitPopup.querySelector(".close-feedback-white") 


submitButton.addEventListener("click", function(){
    submitPopup.classList.remove("hide")
})

submitPopupCloseButton.addEventListener("click", function(){
    submitPopup.classList.add("hide")
})

