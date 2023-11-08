import BGR from './black-garlic-ramen.jpg';
import TSR from './tomato-seafood-ramen.jpeg';
import CR from './curry-ramen.jpg';

export default function menuDiv(){

    const mainContentDiv = document.querySelector('.main-content');

    mainContentDiv.innerHTML = '';
    
    const recepieDiv = document.createElement('div');
    recepieDiv.classList.add('complete-recepie');

    const recepieOneDiv = document.createElement('div');

    const recepieOneImage = document.createElement('img');

    recepieOneImage.classList.add('recepie-image');

    recepieOneImage.src = BGR;
    recepieOneImage.classList.add('recepie-img');

    const recepieOneDesc = document.createElement('div');
    recepieOneDesc.classList.add('recepie-desc');

    const recepieOneHeading = document.createElement('h2');

    recepieOneHeading.innerHTML = "Black Garlic Ramen";

    const recepieOneParagraph = document.createElement('p');

    recepieOneParagraph.innerText = "Port with Garlic sauce, pork chasu, soft boiled egg, green oninos, bean sprouts, bamboo shoots, deep fried onion & deep fried garlic";

    recepieOneDesc.appendChild(recepieOneHeading);
    recepieOneDesc.appendChild(recepieOneParagraph);

    const recepieOnePrice = document.createElement('p');

    recepieOnePrice.innerText = '13.95';

    recepieOnePrice.classList.add('price');

    recepieOneDiv.appendChild(recepieOneDesc);
    recepieOneDiv.appendChild(recepieOneImage);
    recepieOneDiv.appendChild(recepieOnePrice);
    recepieOneDiv.classList.add('recepie');

    recepieDiv.appendChild(recepieOneDiv);


    const recepieTwoDiv = document.createElement('div');

    const recepieTwoImage = document.createElement('img');

    recepieTwoImage.classList.add('recepie-image');

    recepieTwoImage.src = TSR;
    recepieTwoImage.classList.add('recepie-img');

    const recepieTwoDesc = document.createElement('div');
    recepieTwoDesc.classList.add('recepie-desc');

    const recepieTwoHeading = document.createElement('h2');

    recepieTwoHeading.innerHTML = "Tomato Seafood Ramen";

    const recepieTwoParagraph = document.createElement('p');

    recepieTwoParagraph.innerText = "A light, flavorful ramen made with a tomato broth, tomato oil, and shio tare (Japanese seasoning sauce), then topped with pan-fried tofu, roasted tomato halves, green onions, daikon radish sprouts, and toasted sesame seeds.";

    recepieTwoDesc.appendChild(recepieTwoHeading);
    recepieTwoDesc.appendChild(recepieTwoParagraph);

    const recepieTwoPrice = document.createElement('p');

    recepieTwoPrice.innerText = '11.95';

    recepieTwoPrice.classList.add('price');

    recepieTwoDiv.appendChild(recepieTwoDesc);
    recepieTwoDiv.appendChild(recepieTwoImage);
    recepieTwoDiv.appendChild(recepieTwoPrice);
    recepieTwoDiv.classList.add('recepie');

    recepieDiv.appendChild(recepieTwoDiv);


    const recepieThirdDiv = document.createElement('div');

    const recepieThirdImage = document.createElement('img');

    recepieThirdImage.classList.add('recepie-image');

    recepieThirdImage.src = CR;
    recepieThirdImage.classList.add('recepie-img');

    const recepieThirdDesc = document.createElement('div');
    recepieThirdDesc.classList.add('recepie-desc');

    const recepieThirdHeading = document.createElement('h2');

    recepieThirdHeading.innerHTML = "Black Garlic Ramen";

    const recepieThirdParagraph = document.createElement('p');

    recepieThirdParagraph.innerText = "Salt based, 3 pork belly chasu, seaweed, seasoned egg, bean sprounts, Green onion";

    recepieThirdDesc.appendChild(recepieThirdHeading);
    recepieThirdDesc.appendChild(recepieThirdParagraph);

    const recepieThirdPrice = document.createElement('p');

    recepieThirdPrice.innerText = '14.56';

    recepieThirdPrice.classList.add('price');

    recepieThirdDiv.appendChild(recepieThirdDesc);
    recepieThirdDiv.appendChild(recepieThirdImage);
    recepieThirdDiv.appendChild(recepieThirdPrice);
    recepieThirdDiv.classList.add('recepie');

    recepieDiv.appendChild(recepieThirdDiv);
    mainContentDiv.appendChild(recepieDiv);

    return;

}