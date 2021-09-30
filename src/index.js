import './style.css'
import logo from './images/logo.png';
import getWelcomePage from './welcome.js';
import getAboutUsPage from './about-us.js';
import getContactPage from './contact.js';

const layoutController = (()=> {

    const mainContent = document.getElementById('content');
    let welcomeBtn, aboutUsBtn, menuBtn, contactUsBtn;
    let headerDiv;
    let content;
    const ACTIVE_BUTTON_CLASS = 'active';
    const RESTAURANT_NAME = `Mama Lucia's Restaurant`;
    const WELCOME_DATA = 'welcome';
    const ABOUT_US_DATA = 'about';
    const MENU_DATA = 'menu';
    const CONTACT_DATA = 'contact';
    
    const buildSite = () => {
        headerDiv = document.createElement('div');
        headerDiv.classList.add('header');
        mainContent.appendChild(headerDiv);

        buildNavBar();
        buildHeaderText();
        buildcontentPane();
        buildFooter();
        welcomeBtn.click();
         

    }



    function loadPage(pageName) {
        removeAllChildNodes(content);
        switch (pageName) {
            case WELCOME_DATA:
                content.appendChild(getWelcomePage());
                setActiveNav(welcomeBtn);
            break;
            case ABOUT_US_DATA:
                content.appendChild(getAboutUsPage());
                setActiveNav(aboutUsBtn);
            break;
            case MENU_DATA:
               // content.appendChild(getAboutUsPage());
                setActiveNav(menuBtn);
            break;
            case CONTACT_DATA:
                content.appendChild(getContactPage());
                setActiveNav(contactUsBtn);
            break;
        }
        
    }

    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    const buildNavBar = ()=> {
        

        let navList = document.createElement('ul')
        headerDiv.appendChild(navList);

        welcomeBtn = document.createElement('li');
        welcomeBtn.textContent = 'Welcome'
        welcomeBtn.dataset['name'] = WELCOME_DATA;
        welcomeBtn.addEventListener('click', e => loadPage(e.target.dataset['name']));
        navList.appendChild(welcomeBtn);
    
        aboutUsBtn = document.createElement('li');
        aboutUsBtn.textContent = 'About Us'
        aboutUsBtn.dataset['name'] = ABOUT_US_DATA;
        aboutUsBtn.addEventListener('click', e => loadPage(e.target.dataset['name']));
      //  navList.appendChild(aboutUsBtn);

        menuBtn = document.createElement('li');
        menuBtn.textContent = 'Menu'
        menuBtn.dataset['name'] = MENU_DATA;
        menuBtn.addEventListener('click', e => loadPage(e.target.dataset['name']));
        navList.appendChild(menuBtn);

        contactUsBtn = document.createElement('li');
        contactUsBtn.textContent = 'Contact Us'
        contactUsBtn.dataset['name'] = CONTACT_DATA;
        contactUsBtn.addEventListener('click', e => loadPage(e.target.dataset['name']));
        navList.appendChild(contactUsBtn);

        
        
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
        h1Text.textContent = RESTAURANT_NAME;
        headerTextDiv.appendChild(h1Text);

        let h3Text = document.createElement('h3');
        h3Text.textContent = `Fine Italian Cuisine`;
        headerTextDiv.appendChild(h3Text);

    }

    const buildcontentPane = () => {
        content = document.createElement('div');
        content.classList.add('content');
        mainContent.appendChild(content);
    }

    const buildFooter = () => {
        let footerDiv = document.createElement('div');
        footerDiv.classList.add('footer');
        let footerHeaderText = document.createElement('h2');
        footerHeaderText.textContent = 'Family Owned and Operated since 2003.';
        footerDiv.appendChild(footerHeaderText);
        
        let copyrightText = document.createElement('p');
        copyrightText.textContent = `Copyright © Mama Lucia's Restaurant. All rights reserved.`;
        copyrightText.classList.add('copyright');
        footerDiv.appendChild(copyrightText);
        
        mainContent.appendChild(footerDiv);
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

    return {buildSite}

})();

layoutController.buildSite();
