import reservationImg from './images/pexels-rachel-claire-4577410.jpg';

export const createReservation = () => {
    const reservationCover = document.createElement('div');
        reservationCover.id = 'reservation-cover';
        reservationCover.classList.add('cover');
        content.appendChild(reservationCover);

    const reservationInfo = document.createElement('div');
        reservationInfo.id = 'reservation-info';
        reservationInfo.textContent = '';

    const reservationImage = new Image();
        reservationImage.id = 'reservation-image';
        reservationImage.src = reservationImg;

        reservationCover.appendChild(reservationImage);
        reservationCover.appendChild(reservationInfo);
};

