import contactImg from './images/pexels-cottonbro-studio-3297882.jpg';

export const CreateContact = () => {
    const contactCover = document.createElement('div');
    contactCover.id = 'contact-cover';
    contactCover.classList.add('cover');
    content.appendChild(contactCover);

    const contactInfo = document.createElement('div');
    contactInfo.id = 'contact-info';
   
    const address = document.createElement('p');
        address.textContent = '〒329-1292 東京都千代田区大手町9番地';

    const phoneNumber = document.createElement('p');
        phoneNumber.textContent = '+8157-689-5810';

    const email = document.createElement('p');
        email.textContent = 'post@kumachan.jp'

    const contactImage = new Image();
    contactImage.id = 'contact-image';
    contactImage.src = contactImg;

    contactCover.appendChild(contactImage);
    contactCover.appendChild(contactInfo);
        contactInfo.appendChild(address);
        contactInfo.appendChild(phoneNumber);
        contactInfo.appendChild(email);
};