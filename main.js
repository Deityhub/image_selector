var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');
var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/*create an array for the image gallery and the title of each image*/
var images = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg'];
var title = ['Human face with an eye', 'Probably a cloud', 'Some flowers', 'Egyptian images on the wall', 'A butterfly'];

/* Looping through images */
for (var i = 0; i < images.length; i++){
    var newImage = document.createElement('img');
    newImage.setAttribute('src', images[i]);
    newImage.setAttribute('title', title[i]);
    newImage.addEventListener('click', changeImg)
    thumbBar.appendChild(newImage);
}

/*Retrieving the src attribute of the clicked image*/
function changeImg(e){
    var src = e.target.getAttribute('src');
    displayedImage.setAttribute('src', src);
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function(e){
    var btnclass = e.target.getAttribute('class');
    if(btnclass === 'dark'){
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }else{
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}

