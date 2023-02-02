import menuImg from './images/sushi-296739.svg';

export const CreateMenu = () => {
    const menuCover = document.createElement('div');
        menuCover.id = 'menu-cover';
        menuCover.classList.add('cover');
        content.appendChild(menuCover)

    const menuImage = new Image();
        menuImage.src = menuImg;
        menuImage.id = 'menu-image';
        menuCover.appendChild(menuImage)


    const menu = document.createElement('div');
        menu.id = 'menu';
        menuCover.appendChild(menu)
console.log('it works!')
};