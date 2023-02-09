import "./style.scss";
import { CreateMenu } from "./menu";
import { CreateAbout } from "./about";
import { CreateContact } from "./contact";
import { createReservation } from "./reservation";
import FirstImg from './images/pexels-cottonbro-studio-3297362.jpg';
import SecImg from './images/pexels-cottonbro-studio-3297366.jpg';
import ThirdImg from './images/pexels-cottonbro-studio-3297361.jpg';


const render = () => {

    document.documentElement.lang = 'ja-jp';
        
    const content = document.createElement('div');
    content.id = 'content';
    document.body.appendChild(content);

    const coverBackground = document.createElement('div');
    coverBackground.id = 'cover-background';
    content.appendChild(coverBackground);

    const createFrontPageCover = () => {
            
    const cover = document.createElement('div');
    cover.id = 'cover';
    cover.classList.add('cover');

        const restaurantImageOne = new Image();
        restaurantImageOne.classList.add('restaurant-image');
        restaurantImageOne.alt = "ricebowl with assorted greens and fungi, tattooed hand eating with chopsticks, soy sauce"
        restaurantImageOne.src = FirstImg;

        const restaurantImageTwo = new Image();
        restaurantImageTwo.classList.add('restaurant-image');
        restaurantImageTwo.alt = "ricebowl with assorted greens and fungi, tattooed hand pushing ricebowl, soy sauce"
        restaurantImageTwo.src = SecImg;

        const restaurantImageThree = new Image();
        restaurantImageThree.classList.add('restaurant-image');
        restaurantImageThree.alt = "ricebowl with assorted greens and fungi, tattooed hand reaching for soy sauce"
        restaurantImageThree.src = ThirdImg;

        const restaurantInfo = document.createElement('div');
        restaurantInfo.id = 'restaurant-info';
        restaurantInfo.textContent = '居酒屋'

        content.appendChild(cover);
        cover.appendChild(restaurantImageOne);
        cover.appendChild(restaurantImageTwo);
        cover.appendChild(restaurantImageThree);
        cover.appendChild(restaurantInfo);

    };

    const restaurantName = document.createElement('a');
    restaurantName.id = 'restaurant-name';
    restaurantName.textContent = 'KUMACHAN';
    restaurantName.href = '#';
    restaurantName.addEventListener('click', () => {
        deleteCovers();
        createFrontPageCover();
    })

    const restaurantNav = document.createElement('nav');
    restaurantNav.id = 'restaurant-nav';

    const restaurantFooter = document.createElement('footer');
    restaurantFooter.id = 'restaurant-footer';

    const menu = document.createElement('a');
    menu.textContent = 'メニュー';
    menu.href = '#';
    menu.addEventListener('click', () =>  {
        deleteCovers();
        CreateMenu();
    })

    const ourStory = document.createElement('a');
    ourStory.textContent = '物語';
    ourStory.href = '#';
    ourStory.addEventListener('click', () => {
        deleteCovers();
        CreateAbout();
    });

    const contact = document.createElement('a');
    contact.textContent = 'お問い合わせ';
    contact.href = '#';
    contact.addEventListener('click', () => {
        deleteCovers();
        CreateContact();
    });

    const reservation = document.createElement('a');
    reservation.textContent = '予約';
    reservation.href = '#';
    reservation.addEventListener('click', () => {
        deleteCovers();
        createReservation();
    }
    )

    const deleteCovers = () => {
        if (content.hasChildNodes()) {
            content.childNodes.forEach(element => {
                element.classList.add('active');
                element.classList.contains('cover') ?  content.removeChild(element): false;})
        }
    }

    content.appendChild(restaurantNav);
        restaurantNav.appendChild(menu);
        restaurantNav.appendChild(ourStory);
        restaurantNav.appendChild(restaurantName);
        restaurantNav.appendChild(reservation)
        restaurantNav.appendChild(contact);
    content.appendChild(restaurantFooter);
        createFrontPageCover();
};

render();