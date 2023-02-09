import aboutImg from './images/pexels-cottonbro-studio-3338675.jpg'
import aboutImgTwo from './images/pexels-cottonbro-studio-3298638.jpg'
import aboutImgThree from './images/pexels-cottonbro-studio-3338497.jpg'

export const CreateAbout = () => {
    const aboutCover = document.createElement('div');
        aboutCover.id = 'about-cover';
        aboutCover.classList.add('cover');
        content.appendChild(aboutCover)

    const aboutStory = document.createElement('div');
        aboutStory.id = 'about-story';
        aboutCover.appendChild(aboutStory);

    const aboutStoryText = document.createElement('p');
        aboutStoryText.textContent = 'クマちゃん居酒屋の話は昔話しです。東京で始まりました。初めにクマちゃんは居酒屋じゃなかったです。タバコのお店でした。外国人がよく来ましたので、お爺さんはあの外国人とタバコをいっしょにすわったんでした。ある日高い人が来ました。あの人はアミルです。アミルは料理人です。アミルは日本食を学ぶために日本に来ました。お爺さんはびっくりしました。アミルはお爺さんを感動しました。アミルとお爺さんさんはタバコのお店を居酒屋にしました。';
        aboutStory.appendChild(aboutStoryText);
    
    const aboutImage = new Image();
    aboutImage.id = 'about-image';
    aboutImage.src = aboutImg;
    aboutImage.classList.add('about-img')
        aboutCover.appendChild(aboutImage);

    const aboutImageTwo = new Image();
    aboutImageTwo.id = 'about-image-two';
    aboutImageTwo.src = aboutImgTwo;
    aboutImageTwo.classList.add('about-img')
        aboutCover.appendChild(aboutImageTwo);

    const aboutImageThree = new Image();
    aboutImageThree.id = 'about-image-three';
    aboutImageThree.src = aboutImgThree;
    aboutImageThree.classList.add('about-img')
        aboutCover.appendChild(aboutImageThree);

};