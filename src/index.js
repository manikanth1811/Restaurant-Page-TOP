import './style.css'; // importing the css file for webpack 
import mainBody from './main';
import menuBody from './menu';
import contactUs from './contact-us';

const contentDiv = document.querySelector('#content');


const headingNavBar = document.createElement('div');

const titleNavbar = document.createElement('div');

const titleName = document.createElement('h1');

titleName.innerText = "Saikou Ramen";

headingNavBar.classList.add('heading');

titleNavbar.appendChild(titleName);
titleNavbar.classList.add('header-text');

headingNavBar.appendChild(titleNavbar);

const navDiv = document.createElement('div');

const menuBtn = document.createElement('button');
menuBtn.innerText = "Menu";

const mainBtn = document.createElement('button');
mainBtn.innerText = "Home";

const contactBtn = document.createElement('button');
contactBtn.innerHTML = "Contact ";

navDiv.appendChild(mainBtn);
navDiv.appendChild(menuBtn);
navDiv.appendChild(contactBtn);

navDiv.classList.add('nav-bar');

headingNavBar.appendChild(navDiv);

contentDiv.appendChild(headingNavBar);

const mainContentDiv = document.createElement('div');
mainContentDiv.classList.add('main-content');


contentDiv.appendChild(mainContentDiv);   

const footerDiv = document.createElement('div');
footerDiv.classList.add('footer');



contentDiv.appendChild(footerDiv);

function addMainbody(){
    return mainBody();
}

menuBtn.addEventListener('click',()=>{
    menuBody();
});


mainBtn.addEventListener('click',()=>{
    addMainbody();
})

contactBtn.addEventListener('click',()=>{
    contactUs();
})

addMainbody();