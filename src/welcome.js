import bldg from './images/building.jpg';
import leftSymbol from './images/left-symbol.png';
import rightSymbol from './images/right-symbol.png';
import restaurantInfo from './restaurant-info.json';
/*
Gets the default welcome page component for the Mama Lucia's restaurant site. 
 */
export default function getWelcomePage() {
    let page = document.createElement('div');
    page.classList.add('welcome');

    
    let bldgImg = new Image();
    bldgImg.src = bldg;
    bldgImg.classList.add('bordered');
    bldgImg.classList.add('building');
    page.appendChild(bldgImg);


    //build the hours and address section
    let hoursAddressContainer = document.createElement('div');
    hoursAddressContainer.classList.add('hours-address-container');
    page.appendChild(hoursAddressContainer);

    hoursAddressContainer.appendChild(getSymbolDiv(leftSymbol));
    
    let hoursAddressDiv = document.createElement('div');
    hoursAddressDiv.classList.add('hours-address');
    hoursAddressContainer.appendChild(hoursAddressDiv);
    
    restaurantInfo.hours.forEach(hr => {
        let hourDiv = document.createElement('div');
        hourDiv.textContent = `${hr.days}: ${hr.hours}`;
        hoursAddressDiv.appendChild(hourDiv);
    })

    


    hoursAddressContainer.appendChild(getSymbolDiv(rightSymbol));


    return page;
}

/* Generate a div element for the provided image src */
function getSymbolDiv(src, divClassName = 'symbol-container', imgClassName = 'symbol-img') {
    let symbolDiv = document.createElement('div');
    if(divClassName)
        symbolDiv.classList.add(divClassName);
    let symbolImg = new Image();
    symbolImg.src = src;
    if(imgClassName)
        symbolImg.classList.add(imgClassName);
    symbolDiv.appendChild(symbolImg);
    return symbolDiv;
}