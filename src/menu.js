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

    const menuItems = document.createElement('div');
        menuItems.id = 'menu-items';
        menu.appendChild(menuItems);

    const itemOne = document.createElement('p');
        itemOne.textContent = '焼き鳥'; 

    const itemTwo = document.createElement('p');
        itemTwo.textContent = 'ラーメン';
        menuItems.appendChild(itemTwo);

    const itemThree = document.createElement('p');
        itemThree.textContent = '天ぷら';
        menuItems.appendChild(itemThree);

    const itemFour = document.createElement('p');
        itemFour.textContent = '丼';

    const itemFive = document.createElement('p');
        itemFive.textContent = '刺し身';

    const itemSix = document.createElement('p');
        itemSix.textContent = '定食';

    const drinks = document.createElement('p');
        drinks.textContent = 'ビール';
        drinks.id = 'drinks';

    const drinkOne = document.createElement('p');
        drinkOne.textContent = '生ビール';

    const drinkTwo = document.createElement('p');
        drinkTwo.textContent = '';

    const drinkThree = document.createElement('p');
        drinkThree.textContent = 'エール';
        
        menuItems.appendChild(itemSix);
        menuItems.appendChild(itemFive);
        menuItems.appendChild(itemFour);
        menuItems.appendChild(itemThree);
        menuItems.appendChild(itemTwo);
        menuItems.appendChild(itemOne);
        menuItems.appendChild(drinkTwo);
        menuItems.appendChild(drinks);
        menuItems.appendChild(drinkOne);
        menuItems.appendChild(drinkThree);
};