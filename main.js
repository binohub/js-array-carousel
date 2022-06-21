const images = [
    'https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg',
    'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg',
    'https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
    'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
    'https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg',
    'https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg'
    ];

// ? Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile
const imgActive = 0;
const caroselloContainerImg = document.querySelector(".carosello-container .carosello-container-img")
// ? obiettivo? 
// ? check di tutte le immagini e registrale, nell'html, una ad una (non saranno visibile ad eccezione di imgActive)

for (let index = 0; index < images.length; index++) {
    const imgHtml = document.createElement('img');
    imgHtml.setAttribute('src', images[index]);
    if (imgActive === index){
        imgHtml.classList.add('active');
    }
    caroselloContainerImg.append(imgHtml);
}
