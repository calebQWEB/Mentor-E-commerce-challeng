// WHEN YOU CLICK THE PLUS ICON TO INCREASE THE NUMBER OF THE PRODUCT
const itemMinus = document.querySelector('.minus');
const itemPlus = document.querySelector('.plus');
const itemButton = document.querySelector('.item-number')

let startingNumber = 0;



// WHEN YOU CLICK THE PLUS ICON TO INCREASE YOUR PURCHASE
itemPlus.addEventListener('click', () => {

    startingNumber++

    if (startingNumber < 100) {
        startingNumber = startingNumber + 0;
        itemButton.innerHTML = startingNumber;
    }
    console.log(startingNumber)
});



// WHEN YOU CLICK THE MINUS ICON TO REDUCE YOUR PURCHASE
itemMinus.addEventListener('click', () => {
    if (startingNumber > 1) {
        startingNumber--;

        if (startingNumber < 100) {
            startingNumber = startingNumber + 0
            itemButton.innerHTML = startingNumber
        };
    };
});




// POPUP SECTION
const cartIcon = document.querySelector('.cart-icon');
const popUp = document.querySelector('.your-purchase');
const numberOfPurchase = document.querySelector('.pro-number');
const popUpImage = document.querySelector('.popup-image');
const popUpText = document.querySelector('.popup-text');
const totalPrice = document.querySelector('.total-price');
const deleteIcon = document.querySelector('.delete-icon');

const proPrice = document.querySelector('.pro-price');

const productText = document.querySelectorAll('.product-text');
const secondPopUpFlex = document.querySelector('.popup-flex2')



// ADD TO CART
const cartAdd = document.querySelector('.adding');
const priceDiv = document.querySelector('.price-tag');
const priceOfProduct = document.querySelector('.the-price')

priceDiv.style.display = "none";

cartAdd.addEventListener('click', () => {
    cartNumber = itemButton.innerHTML;

    // after we click the addtoCart button we add the number of the product to our cart icon above
    priceDiv.style.display = "block"
    priceDiv.innerHTML = cartNumber;

    // getting the innerhtml/number of the product, you want to purchase
    numberOfPurchase.innerText = cartNumber;


    // getting the innerHTML/number of product and converting it into an integer so we can be able to multiply without problems
    proNumHtml = numberOfPurchase.innerHTML;
    proNumInterger = parseInt(proNumHtml);

    // we then get the innerHTML of the price of our product the convert it to an integer
    priceInner = priceOfProduct.innerHTML;
    priceNumber = parseInt(priceInner);

    proPrice.innerHTML = priceNumber

    // multiplying the price of the product by the number of product you are purchasing
    product = priceNumber * proNumInterger;

    // adding the solution to our html with class name total-price
    totalPrice.innerHTML= "= $"+product
    itemButton.innerHTML = "0";


});





// MOBILE LIGHTBOX
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.slider-image');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// setting a counter to start from the image at index positon 1
let counter = 1;
// gettin the size of the image
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';


// EVENTLISTENER FOR THE BUTTONS
nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length -1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    
    // when the next button is clicked the counter adds 1
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";

    // when the previous button is clicked the counter substract 1
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});