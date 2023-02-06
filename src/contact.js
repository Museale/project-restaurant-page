import contactImg from './images/pexels-cottonbro-studio-3297882.jpg';

export const CreateContact = () => {
    const contactCover = document.createElement('div');
    contactCover.id = 'contact-cover';
    contactCover.classList.add('cover');
    content.appendChild(contactCover);

    const contactInfo = document.createElement('div');
    contactInfo.id = 'contact-info';
   

    const contactImage = new Image();
    contactImage.id = 'contact-image';
    contactImage.src = contactImg;
    contactCover.appendChild(contactImage);
    contactCover.appendChild(contactInfo);
   

console.log('And here!')
};