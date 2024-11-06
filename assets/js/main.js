let nav = document.getElementById('nav');
  
let mainImage = document.getElementById('mainImage');

let secondaryImage = document.getElementById('secondaryImage');

let prevButton = document.getElementById('prevButton');

let nextButton = document.getElementById('nextButton');

let navItems = document.querySelectorAll('#nav li a');

let marqueeContainer = document.getElementById('marquee');

let itemHTML = marqueeContainer.innerHTML;

let repeatCount = 100;

let openNavIcon = document.getElementById('open-nav');

let closeNavIcon = document.getElementById('close-nav');

let sideBar = document.getElementById('sidebar');


function openNav() {
  sideBar.classList.remove('translate-x-full');

  sideBar.classList.add('translate-x-0');
  
  openNavIcon.classList.add('hidden');
  
  closeNavIcon.classList.remove('hidden');

}


function closeNav() {

  sideBar.classList.add('translate-x-full');

  sideBar.classList.remove('translate-x-0');

  openNavIcon.classList.remove('hidden');

  closeNavIcon.classList.add('hidden');

}


document.addEventListener("DOMContentLoaded", function() {

  for (let i = 0; i < repeatCount; i++) {

    marqueeContainer.innerHTML += itemHTML;

  }

  document.querySelectorAll('#marquee > div').forEach(item => {

    item.classList.add('marquee-item');

  });

});




document.addEventListener('DOMContentLoaded', function() {

function swapImages() {

    mainImage.classList.add('translate-x-[100%]');
      
    secondaryImage.classList.add('-translate-x-[100%]');

    setTimeout(() => {

      let tempSrc = mainImage.src;
      
      mainImage.src = secondaryImage.src;
      
      secondaryImage.src = tempSrc;

      
      mainImage.classList.remove('translate-x-[100%]');
      
      secondaryImage.classList.remove('-translate-x-[100%]');
    
    }, 2500);
  
  }

  prevButton.addEventListener('click', swapImages);
  
  nextButton.addEventListener('click', swapImages);

});



