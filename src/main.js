export default function createMainPage(){

    const mainContentDiv = document.querySelector('.main-content');

    mainContentDiv.innerHTML = '';

    mainContentDiv.style.backgroundColor = 	'#fafad0';

    const whyContent = document.createElement('div');

    whyContent.innerHTML = "<p>Step into the noodle nirvana that is Saikou Ramen - where flavor takes center stage and each slurp is a love letter to your taste buds. Our ramen? It's not just a dish; it's a warm embrace in a bowl. Picture yourself on a flavor rollercoaster, gliding through savory peaks and umami valleys. Our secret recipe is like a treasure map, leading you to the pot of gold at the end of the ramen rainbow.</p";
    whyContent.classList.add('why-content');

    mainContentDiv.appendChild(whyContent);

    const timingDiv = document.createElement('div');
    timingDiv.classList.add('timing-div');
    const timingsHeading = document.createElement('h3');
    timingsHeading.innerText = 'Timings';

    timingDiv.appendChild(timingsHeading);

    const timingp1 = document.createElement('p');
    const timingp2 = document.createElement('p');

    const timingDiv1 = document.createElement('div');

    timingp1.innerText = 'Mon to Sat: 10AM to 6PM';
    timingp2.innerText = 'Sun: Closed'

    timingDiv1.appendChild(timingp1);
    timingDiv1.appendChild(timingp2);

    timingDiv.appendChild(timingDiv1);

    mainContentDiv.appendChild(timingDiv)


    const locationDiv = document.createElement('div');

    const locationHeading = document.createElement('h3');
    locationHeading.innerText = 'Location';

    const locationText = document.createElement('p');
    locationText.innerHTML = "1234 Packer Evenuev, Houston TX 77054 USA";

    locationDiv.appendChild(locationHeading);

    locationDiv.appendChild(locationText);
    locationDiv.classList.add('location-div');
    mainContentDiv.appendChild(locationDiv);

    //return mainContentDiv;

}