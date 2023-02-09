import reservationImg from './images/pexels-rachel-claire-4577410.jpg';

export const createReservation = () => {
    const reservationCover = document.createElement('div');
        reservationCover.id = 'reservation-cover';
        reservationCover.classList.add('cover');
        content.appendChild(reservationCover);

    const reservationInfo = document.createElement('div');
        reservationInfo.id = 'reservation-info';
        reservationInfo.textContent = '';

    const tableReservation = document.createElement('p');
        tableReservation.textContent = 'お電話でご予約ください。';

    const phonenumberReservation = document.createElement('p');
        phonenumberReservation.textContent = '+8157-689-5810';

    const reservationImage = new Image();
        reservationImage.id = 'reservation-image';
        reservationImage.src = reservationImg;

        reservationCover.appendChild(reservationImage);
        reservationCover.appendChild(reservationInfo);
            reservationInfo.appendChild(tableReservation)
            reservationInfo.appendChild(phonenumberReservation)
};

