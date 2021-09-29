import './style.css'
import logo from './images/logo.png';

const layoutController = (()=> {

    const content = document.getElementById('content');
    let welcomeBtn, aboutUsBtn, menuBtn, contactUsBtn;
    let headerDiv;
    const ACTIVE_BUTTON_CLASS = 'active';
    
    const buildHeader = () => {
        headerDiv = document.createElement('div');
        headerDiv.classList.add('header');
        content.appendChild(headerDiv);

        buildNavBar();
        buildHeaderText();


    }

    const buildNavBar = ()=> {
        

        let navList = document.createElement('ul')
        headerDiv.appendChild(navList);

        welcomeBtn = document.createElement('li');
        welcomeBtn.textContent = 'Welcome'
        navList.appendChild(welcomeBtn);
    
        aboutUsBtn = document.createElement('li');
        aboutUsBtn.textContent = 'About Us'
        navList.appendChild(aboutUsBtn);

        menuBtn = document.createElement('li');
        menuBtn.textContent = 'Menu'
        navList.appendChild(menuBtn);

        contactUsBtn = document.createElement('li');
        contactUsBtn.textContent = 'Contact Us'
        navList.appendChild(contactUsBtn);

        setActiveNav(welcomeBtn);
    }

    const buildHeaderText = () => {
        let headerContainer = document.createElement('div');
        headerContainer.classList.add('header-container');
        headerDiv.appendChild(headerContainer);

        let headerImg = new Image();
        headerImg.src = logo;
        headerImg.alt = "An image of Mama Lucia's Italian Restaurant";
        headerContainer.appendChild(headerImg);

        let headerTextDiv = document.createElement('div');
        headerTextDiv.classList.add('header-text');
        headerContainer.appendChild(headerTextDiv);

        let h1Text = document.createElement('h1');
        h1Text.textContent = `Mama Lucia's Restaurant`
        headerTextDiv.appendChild(h1Text);

        let h2Text = document.createElement('h2');
        h2Text.textContent = `Fine Italian Cuisine`;
        headerTextDiv.appendChild(h2Text);

    }

    const setActiveNav = (activeBtn) => {
        let navButtons = document.querySelectorAll('.header li');
        navButtons.forEach(btn => {
            if(btn == activeBtn)
                btn.classList.add(ACTIVE_BUTTON_CLASS);
            else
                btn.classList.remove(ACTIVE_BUTTON_CLASS);
        });
    }

    return {buildHeader}

})();

layoutController.buildHeader();
