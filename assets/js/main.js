let nav = document.getElementById('nav');

let openNavIcon = document.getElementById('open-nav');

let closeNavIcon = document.getElementById('close-nav');

let navItems = document.querySelectorAll('#nav li a');

let marqueeContainer = document.getElementById('marquee');

let itemHTML = marqueeContainer.innerHTML;

let repeatCount = 100;

let sideBar = document.getElementById('sidebar');



function openNav(){

  nav.style.display = 'block';

  openNavIcon.style.display = 'none';

  closeNavIcon.style.display = 'block';

  sideBar.style.display = 'block';

  navItems.forEach(item => item.classList.remove('hidden'));

}

function closeNav(){

  nav.style.display = 'none';

  openNavIcon.style.display = 'block';

  closeNavIcon.style.display = 'none';

  sideBar.style.display = 'none';

  navItems.forEach(item => item.classList.add('hidden'));

}

document.addEventListener("DOMContentLoaded", function() {

  for (let i = 0; i < repeatCount; i++) {

    marqueeContainer.innerHTML += itemHTML;

  }

  document.querySelectorAll('#marquee > div').forEach(item => {

    item.classList.add('marquee-item');

  });

});






let mainImage = document.getElementById('mainImage');

let secondaryImage = document.getElementById('secondaryImage');

let prevButton = document.getElementById('prevButton');

let nextButton = document.getElementById('nextButton');

document.addEventListener('DOMContentLoaded', function() {

  function switchImage() {

    mainImage.style.opacity = '0';

    secondaryImage.style.opacity = '0';


    setTimeout(() => {

      mainImage.style.display = 'none';

      secondaryImage.style.display = 'none';

      let tempSrc = mainImage.src;

      mainImage.src = secondaryImage.src;

      secondaryImage.src = tempSrc;

      mainImage.style.display = 'block';

      secondaryImage.style.display = 'block';

      setTimeout(() => {

        mainImage.style.opacity = '1';

        secondaryImage.style.opacity = '1';

      }, 50);
      
    }, 1000);
  }

  prevButton.onclick = switchImage;

  nextButton.onclick = switchImage;
});

