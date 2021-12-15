const callButton = document.querySelector(".button-transparent.open-popup")
const callPopup = document.querySelector(".modal-wrapper")
const callPopupCloseButton = callPopup.querySelector(".close-feedback-white") 

callButton.addEventListener("click", function(){
    callPopup.classList.remove("hide")
})

callPopupCloseButton.addEventListener("click", function(){
    callPopup.classList.add("hide")
})






const callButton = document.querySelector(".welcome-orange-button.open-popup")
const callPopup = document.querySelector(".modal-cection")


const callButton = document.querySelector(".price.open-popup")
const callPopup = document.querySelector(".second hide")


const callButton = document.querySelector(".orange-inguiry.open-popup")
const callPopup = document.querySelector(".orange hide")