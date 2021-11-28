const arr = [{
        img: "../assets/images/img1.jpg",
        text: 'HSEFURNI Neon Sign for Bedroom, Gaming Neon Lights LED Wall Sign USB Powered Light-Up Blue LED Signs, for Gamer Room Decor, Boys, Kids, Teen Gifts and Party Decorations, 16"',
        rating: 5,
        price: '32.99$'
    },
    {
        img: "../assets/images/img1.jpg",
        text: 'HSEFURNI Neon Sign for Bedroom, Gaming Neon Lights LED Wall Sign USB Powered Light-Up Blue LED Signs, for Gamer Room Decor, Boys, Kids, Teen Gifts and Party Decorations, 16"',
        rating: 4,
        price: '35.99$'
    },
    {
        img: "../assets/images/img1.jpg",
        text: 'HSEFURNI Neon Sign for Bedroom, Gaming Neon Lights LED Wall Sign USB Powered Light-Up Blue LED Signs, for Gamer Room Decor, Boys, Kids, Teen Gifts and Party Decorations, 16"',
        rating: 3.5,
        price: '32.99$'
    },
    {
        img: "../assets/images/img1.jpg",
        text: 'HSEFURNI Neon Sign for Bedroom, Gaming Neon Lights LED Wall Sign USB Powered Light-Up Blue LED Signs, for Gamer Room Decor, Boys, Kids, Teen Gifts and Party Decorations, 16"',
        rating: 4,
        price: '44.99$'
    },
    {
        img: "../assets/images/img1.jpg",
        text: 'HSEFURNI Neon Sign for Bedroom, Gaming Neon Lights LED Wall Sign USB Powered Light-Up Blue LED Signs, for Gamer Room Decor, Boys, Kids, Teen Gifts and Party Decorations, 16"',
        rating: 5,
        price: '15.99$'
    }, {
        img: "../assets/images/img1.jpg",
        text: 'HSEFURNI Neon Sign for Bedroom, Gaming Neon Lights LED Wall Sign USB Powered Light-Up Blue LED Signs, for Gamer Room Decor, Boys, Kids, Teen Gifts and Party Decorations, 16"',
        rating: 4.5,
        price: '20.99$'
    }, {
        img: "../assets/images/img1.jpg",
        text: 'HSEFURNI Neon Sign for Bedroom, Gaming Neon Lights LED Wall Sign USB Powered Light-Up Blue LED Signs, for Gamer Room Decor, Boys, Kids, Teen Gifts and Party Decorations, 16"',
        rating: 2,
        price: '30.99$'
    }, {
        img: "../assets/images/img1.jpg",
        text: 'HSEFURNI Neon Sign for Bedroom, Gaming Neon Lights LED Wall Sign USB Powered Light-Up Blue LED Signs, for Gamer Room Decor, Boys, Kids, Teen Gifts and Party Decorations, 16"',
        rating: 4.5,
        price: '27.99$'
    }
]
let cl = document.getElementsByClassName('carsol');
let cli = document.getElementsByClassName('car-content');



for (let i = 0; i < arr.length; i++) {

    let newLi = document.createElement('div');
    newLi.className = 'car-content';
    newLi.innerHTML = `<div class="img1"><img  src="${arr[i].img}" alt="" height="40px" width="40px"></div>
    <p>${arr[i].text}</p>
    <div class="rating">${arr[i].rating}</div>
    <div class="price">${arr[i].price}</div>`
    cl.appendChild(newLi)
}