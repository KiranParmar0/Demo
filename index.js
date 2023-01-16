//bootstrap popover 
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


// let previousPageVisibility = [false, false, false, false]
// let currentNavTickVisibility = [false, false, false, false]

// const section0 = document.getElementById("section0")
// const nav = document.getElementsByTagName("nav")
// const nav_ = nav[0]
// const navHeight = nav_.offsetHeight

// section0.style.marginTop=`${navHeight}px`

// const navListItems = document.getElementsByClassName("navListItem")
// const sections = document.getElementsByClassName("pageSection")

// function displayTick() {
//     console.log("inside display tick");
// }

// const observer = new IntersectionObserver((entries) => {
//     console.log("inside the observer callback");
//     if(entries[0].isIntersecting) {
//         displayTick()
//     }
// })

// console.log("sections are ", sections);

// for(let i=0; i<navListItems.length; i++) {
//     const currentSection = sections[i]
//     const currentNavItem = navListItems[i]
//     const currentNavAnchor = currentNavItem.childNodes[0]
//     console.log("current nav anchor is ", currentNavAnchor);
//     observer.observe(currentNavAnchor, {
//         attributes: true,
//         attributeFilter: ["class"],
//         childList: false,
//         characterData: false
//     })
// }

function introductionButtonClickHandler(e) {
   const buttonOfInterest = e.target
   let nextSibling = buttonOfInterest.nextSibling
   console.log("next next sibling is ", nextSibling.nextSibling.tagName);
   while(nextSibling && nextSibling.nodeType != 1 && nextSibling.tagName !== "IMG") {
       nextSibling = nextSibling.nextSibling
   }
   if(nextSibling.classList.contains("hidden")) {
       nextSibling.classList.toggle("hidden")
   }
}

const introButtons = document.getElementsByClassName("introButton");

for(let i=0; i<introButtons.length; i++) {
   const currentIntroButton = introButtons[i]
   currentIntroButton.addEventListener("click", introductionButtonClickHandler)
}





var firstScrollSpyEl = document.querySelector('[data-bs-spy="scroll"]')
firstScrollSpyEl.addEventListener('activate.bs.scrollspy', function (e) {
   let imageOfInterest = e.relatedTarget.childNodes[3]
   let classListOfImage = imageOfInterest.classList
   if (classListOfImage.contains("hidden")) {
       imageOfInterest.classList.toggle("hidden")
   }
})


MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});
