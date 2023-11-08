import ramen from './ramen.png';

export default function contactUs(){
    const mainContentDiv = document.querySelector('.main-content');

    mainContentDiv.innerHTML = '';
    
    const mainContactUsDiv = document.createElement('div');
    mainContactUsDiv.classList.add('contact-us-div');

    const contactUsLeftDiv = document.createElement('div');
    contactUsLeftDiv.classList.add('contact-us-left-div');

    const locationDiv = document.createElement('div');
    const locationHeader = document.createElement('p');
    locationHeader.classList.add('info-header');
    const locationinfo = document.createElement('p');
    locationinfo.classList.add('info-class');
    locationDiv.appendChild(locationHeader);
    locationDiv.appendChild(locationinfo);

    locationHeader.innerText = "Location";
    locationinfo.innerText = "1234 Packer Evenuev, Houston TX 77054 USA";

    const phoneDiv = document.createElement('div');
    const phonenoHeader = document.createElement('p');
    phonenoHeader.classList.add('info-header');
    const phonenoinfo = document.createElement('p');
    phonenoinfo.classList.add('info-class');
    phoneDiv.appendChild(phonenoHeader);
    phoneDiv.appendChild(phonenoinfo);

    phonenoHeader.innerText = "Phone No:";
    phonenoinfo.innerText = '+1-945-672-8956';

    const emailDiv = document.createElement('div');
    const emailHeader = document.createElement('p');
    emailHeader.classList.add('info-header');
    const emailinfo = document.createElement('p');
    emailinfo.classList.add('info-class');
    emailDiv.appendChild(emailHeader);
    emailDiv.appendChild(emailinfo);
    emailHeader.innerText = "Email";
    emailinfo.innerText = "Doja@cat.com";

    contactUsLeftDiv.appendChild(locationDiv);
    contactUsLeftDiv.appendChild(phoneDiv);
    contactUsLeftDiv.appendChild(emailDiv);


    mainContactUsDiv.appendChild(contactUsLeftDiv);

    mainContentDiv.appendChild(mainContactUsDiv);

    const feedbackForm = document.createElement('form');
    const formLegend = document.createElement('legend');
    formLegend.innerHTML = '<h2>Submit your Feedback</h2>';
    feedbackForm.classList.add("feedback-form");
    const createInput = document.createElement('input');
    createInput.setAttribute("type","text");
    createInput.setAttribute("name","usersName");
    createInput.setAttribute("placeholder","Name");
    const submitButton = document.createElement('button');
    submitButton.innerText = "Submit";
    submitButton.setAttribute('type','submit');

    const createTextarea = document.createElement('textarea');

    createTextarea.setAttribute("name","feedback-message");
    createTextarea.setAttribute("placeholder","Message");
    createTextarea.setAttribute("cols","65");
    createTextarea.setAttribute("rows","3");
    feedbackForm.appendChild(formLegend);
    feedbackForm.appendChild(createInput);

    feedbackForm.appendChild(createTextarea);
    feedbackForm.appendChild(submitButton);

    submitButton.addEventListener('click',(action) => {
        feedbackForm.reset();
        action.preventDefault();
    })

    mainContactUsDiv.appendChild(feedbackForm);

}