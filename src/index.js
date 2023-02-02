import "./style.scss";
import { CreateMenu } from "./menu";
import { CreateAbout } from "./about";
import FirstImg from './pexels-cottonbro-studio-3297362.jpg';
import SecImg from './pexels-cottonbro-studio-3297366.jpg';
import ThirdImg from './pexels-cottonbro-studio-3297361.jpg';

const render = () => {
const content = document.createElement('div');
content.id = 'content';
document.body.appendChild(content);
console.log(content)

const cover = document.createElement('div');
cover.id = 'cover';

const restaurantName = document.createElement('div');
restaurantName.id = 'restaurant-name';
restaurantName.textContent = 'The Bear';

const restaurantImageOne = new Image();
restaurantImageOne.classList.add('restaurant-image');
restaurantImageOne.src = FirstImg;

const restaurantImageTwo = new Image();
restaurantImageTwo.classList.add('restaurant-image');
restaurantImageTwo.src = SecImg;

const restaurantImageThree = new Image();
restaurantImageThree.classList.add('restaurant-image');
restaurantImageThree.src = ThirdImg;

const restaurantInfo = document.createElement('div');
restaurantInfo.id = 'restaurant-info';
restaurantInfo.textContent = '居 酒 屋'

const restaurantNav = document.createElement('nav');
restaurantNav.id = 'restaurant-nav';

const restaurantFooter = document.createElement('footer');
restaurantFooter.id = 'restaurant-footer';

const menu = document.createElement('a');
menu.textContent = 'メニュー';
menu.href = '#';

menu.addEventListener('click', () =>  {
    if (content.hasChildNodes()) {
        content.removeChild;
    }

    CreateMenu();
})

const ourStory = document.createElement('a');
ourStory.textContent = '物語';
ourStory.href = '#';

ourStory.addEventListener('click', () => {
    if (content.hasChildNodes()) {
        content.removeChild;
    }
    
    CreateAbout();
});

const contact = document.createElement('a');
contact.textContent = 'お問い合わせ';
contact.href = '#';




//Photo by Alex Knight: https://www.pexels.com/photo/restaurants-on-an-alleyway-5589595/
//Photo by Satoshi Hirayama: https://www.pexels.com/photo/red-paper-lanterns-hanging-on-the-ceiling-7508610/
//Photo by Satoshi Hirayama: https://www.pexels.com/photo/light-city-sunset-street-4456243/
//Video by The Instagrapher: https://www.pexels.com/video/close-up-shot-of-a-chef-making-a-sushi-5845753/
content.appendChild(restaurantNav);
    restaurantNav.appendChild(menu);
    restaurantNav.appendChild(ourStory);
    restaurantNav.appendChild(contact);

content.appendChild(restaurantName);

content.appendChild(cover);
    cover.appendChild(restaurantImageOne);
    cover.appendChild(restaurantImageTwo);
    cover.appendChild(restaurantImageThree);
    cover.appendChild(restaurantInfo);

content.appendChild(restaurantFooter);

};

render();