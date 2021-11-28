const arr = ['../assets/images/img1.jpg', '../assets/images/img2.jpg', '../assets/images/img3.jpg', '../assets/images/img4.jpg',
    '../assets/images/img5.jpg', '../assets/images/img6.jpg', '../assets/images/img6.jpg'
]
let imgs = document.querySelector('.imgs-list');

for (let i = 0; i < arr.length; i++) {

    let newLi = document.createElement('li');
    newLi.innerHTML = `<img  src="${arr[i]}" alt="" height="40px" width="40px">`
    imgs.appendChild(newLi)
}
imgs = document.querySelector('.imgs-list');

// big image Change
let temp = document.querySelector('.imgs-list');
let img = document.querySelector('#img-xx');
temp.addEventListener('mouseover', function(event) {
    if (!event.target.src) {
        img.src = '../assets/images/img1.jpg';
    }
    img.src = event.target.src;
});