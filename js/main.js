// Show - Hide search-area

const openBtn = document.querySelector('.js-menu-open')
const modal = document.querySelector('.js-modal')
const closeBtn = document.querySelector('.js-btn-close')

function showSearchArea() {
    modal.classList.add('open');
    dropdownToggle[1].style.display = "none";
    dropdownToggle[0].style.display = "none";
}
function hideSearchArea() {
    modal.classList.remove('open');
}

openBtn.addEventListener('click', showSearchArea)
closeBtn.addEventListener('click', hideSearchArea)

// Show - Hide Dropdown-menu 
let btnDropdownMenu = document.querySelectorAll('.js-dropdown-toggle');
let dropdownToggle = document.querySelectorAll('.dropdown-menu');
let dropdownDemo = document.querySelector('.dropdown-demo');
let dropdownPage = document.querySelector('.dropdown-page');
function showhideDropdownMenuDemo() {
    if(dropdownToggle[0].style.display == "none") {
        dropdownToggle[0].style.display = "block";
        dropdownToggle[1].style.display = "none";
    } else {
        dropdownToggle[0].style.display = "none";
    }
}
function showhideDropdownMenuPage() {
    if(dropdownToggle[1].style.display == "none") {
        dropdownToggle[1].style.display = "block";
        dropdownToggle[0].style.display = "none";
    } else {
        dropdownToggle[1].style.display = "none";
    }
}
btnDropdownMenu[0].addEventListener("click", showhideDropdownMenuDemo);
btnDropdownMenu[1].addEventListener("click", showhideDropdownMenuPage);


//Faq
let accordionBtn = document.querySelectorAll('.accordion-btn');
let listBtnFaq = accordionBtn.children;
console.log(listBtnFaq);
let accordionText = document.querySelectorAll('.accordion-content');
let iconFaq = document.querySelectorAll('.js-icon-faq');

function onclickBtn(idActive){

    accordionBtn[0].style.color = "#fff";
    accordionBtn[1].style.color = "#fff";
    accordionBtn[2].style.color = "#fff";
    accordionBtn[3].style.color = "#fff";
    iconFaq[0].classList.remove('fa-minus');
    iconFaq[1].classList.remove('fa-minus');
    iconFaq[2].classList.remove('fa-minus');
    iconFaq[3].classList.remove('fa-minus');
    iconFaq[0].classList.remove('fa-plus');
    iconFaq[1].classList.remove('fa-plus');
    iconFaq[2].classList.remove('fa-plus');
    iconFaq[3].classList.remove('fa-plus');

    iconFaq[0].classList.add('fa-plus');
    iconFaq[1].classList.add('fa-plus');
    iconFaq[2].classList.add('fa-plus');
    iconFaq[3].classList.add('fa-plus');

    if(accordionText[idActive].style.display === "block"){
        accordionText[0].style.display = "none";
        accordionText[1].style.display = "none";
        accordionText[3].style.display = "none";
        accordionText[2].style.display = "none";  
        
        iconFaq[idActive].classList.remove('fa-minus');
        iconFaq[idActive].classList.add('fa-plus');

        return;
    }


    accordionText[0].style.display = "none";
    accordionText[1].style.display = "none";
    accordionText[3].style.display = "none";
    accordionText[2].style.display = "none";    
    


    accordionText[idActive].style.display = "block";
    accordionBtn[idActive].style.color = "#7e0cf8";
    
    iconFaq[idActive].classList.remove('fa-plus');
    iconFaq[idActive].classList.add('fa-minus');
}

accordionBtn[0].addEventListener("click", function() {
    onclickBtn(0);
});
accordionBtn[1].addEventListener("click", function() {
    onclickBtn(1);
});
accordionBtn[2].addEventListener("click", function() {
    onclickBtn(2);
});
accordionBtn[3].addEventListener("click", function() {
    onclickBtn(3);
});