import reservationImg from './images/pexels-satoshi-hirayama-7526794.jpg';

export const createReservation = () => {
    const reservationCover = document.createElement('div');
    reservationCover.id = 'reservation-cover';
    reservationCover.classList.add('cover');
    content.appendChild(reservationCover);

    const reservationInfo = document.createElement('div');
    contactInfo.id = 'contact-info';

    const reservationImage = new Image();
    reservationImage.id = 'reservation-image';
    reservationImage.src = reservationImg;

    reservationCover.appendChild(reservationImage);
    reservationCover.appendChild(reservationInfo);
console.log('And here!')
};