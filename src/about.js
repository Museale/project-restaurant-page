import aboutImg from './images/pexels-cottonbro-studio-3338675.jpg'

export const CreateAbout = () => {
    const aboutCover = document.createElement('div');
        aboutCover.id = 'about-cover';
        aboutCover.classList.add('cover');
        content.appendChild(aboutCover)

    const aboutStory = document.createElement('div');
        aboutStory.id = 'about-story';
        aboutCover.appendChild(aboutStory);
    
    const aboutImage = new Image();
    aboutImage.id = 'about-image';
    aboutImage.src = aboutImg;
        aboutCover.appendChild(aboutImage);

console.log('it works here too!')
};