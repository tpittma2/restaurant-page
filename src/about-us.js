import pizza from './images/pizza.jpg';





export default function getAboutUsPage() {

    let page = document.createElement('div');
    page.classList.add('about-us');

    let pizzaImg = new Image();
    pizzaImg.src = pizza;
    pizzaImg.classList.add('bordered');
    page.appendChild(pizzaImg);

    let establishmentInfoContainer = document.createElement('div');
    establishmentInfoContainer.classList.add('establishment-info');
    page.appendChild(establishmentInfoContainer);

    let establishmentInfoHeader = document.createElement('h2')
    establishmentInfoHeader.classList.add('establishment-info-header');
    establishmentInfoHeader.textContent = 'Our Establishment';
    establishmentInfoContainer.appendChild(establishmentInfoHeader);

    let establishmentInfoText = document.createElement('div')
    establishmentInfoText.classList.add('establishment-info-text');
    establishmentInfoText.textContent = `Every fine dining professional at Mama Lucia's Restaurant shares our commitment to exceeding even the highest expectations. Yet, our goal surpasses providing exquisite cuisine; at Mama Lucia's Restaurant we are not satisfied unless your evening with us remains a memorable experience.`;
    establishmentInfoContainer.appendChild(establishmentInfoText);

    return page;
}

function gettextBlock(header, text) {
    let container = document.createElement('div');
    container.classList.add('about-us-container');

    let headerBlock = document.createElement('div');
    headerBlock.textContent = header;
    container.appendChild(headerBlock);

    let textBlock = document.createElement('div');
    textBlock.textContent = text;
    container.appendChild(textBlock);

    return container;
}