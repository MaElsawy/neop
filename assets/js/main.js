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




let div1 = document.getElementById('div-1');

let div2 = document.getElementById('div-2');

let div3 = document.getElementById('div-3');

let div4 = document.getElementById('div-4');

let all = document.getElementById('all');

let special = document.getElementById('special');

let best = document.getElementById('best');

let roasting = document.getElementById('roasting');

let coffee = document.getElementById('coffee');

let equipment = document.getElementById('equipment');

let products = document.querySelectorAll('#products > div');

document.addEventListener("DOMContentLoaded", showAll);

function showAll() {

  products.forEach(product => {

    product.classList.remove('opacity-0', 'translate-x-[-100%]');

    product.classList.add('opacity-100', 'translate-x-0');

    product.style.display = 'block';

  });
}

function showSpecial() {

  updateProductsVisibility(['div-3']);

}

function showBest() {

  updateProductsVisibility(['div-1']);

}

function showRoasting() {

  updateProductsVisibility(['div-2', 'div-4']);

}

function showCoffee() {

  updateProductsVisibility(['div-1', 'div-2', 'div-3', 'div-4']);

}

function showEquipment() {

  updateProductsVisibility(['div-1', 'div-2', 'div-3']);

}

function updateProductsVisibility(visibleIds) {

  products.forEach(product => {

    product.classList.add('opacity-0', 'translate-x-[-100%]');

    product.classList.remove('opacity-100', 'translate-x-0');

    product.style.display = 'none';

  });


  visibleIds.forEach(id => {

    let product = document.getElementById(id);

    product.classList.remove('opacity-0', 'translate-x-[-100%]');

    product.classList.add('opacity-100', 'translate-x-0');

    product.style.display = 'block';

  });

}

