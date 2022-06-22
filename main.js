const images = [
    'https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg',
    'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg',
    'https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
    'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
    'https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg',
    'https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg'
    ];

// ? Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile
let imgActiveIndex = 0;
const caroselloContainerImg = document.querySelector(".carosello-container .carosello-container-img")
// ? obiettivo? 
// ? check di tutte le immagini e registrale, nell'html, una ad una (non saranno visibile ad eccezione di imgActive)

for (let index = 0; index < images.length; index++) {
    const imgHtml = document.createElement('img');
    imgHtml.setAttribute('src', images[index]);
    if (imgActiveIndex === index){
        imgHtml.classList.add('active');
    }
    caroselloContainerImg.append(imgHtml);
}


// ? obiettivo?
// ? btn attendi il click, al click devi togliere la classe active (img attuale) e aggiungerlo a quello dopo 

const btnNext = document.getElementById('btn-next');
btnNext.addEventListener('click', function() {
    console.log("next clicked!");
    // ? prendi l'immagine attiva e rimuovi active
    const imgActive = document.querySelector(".carosello-container .carosello-container-img img.active")
    imgActive.classList.remove("active");

    // ? next
    imgActiveIndex++;
    console.log(`indice attuale ${imgActiveIndex}`);

    // ? error > imgAll.length
    if (imgActiveIndex === images.length) {
        imgActiveIndex = 0;
        console.log(`reset next`);
    }

    // ? check tutte le img e dai active a img che ha un index uguale a imgActiveIndex
    const imgAll = document.querySelectorAll(".carosello-container .carosello-container-img img");
    imgAll[imgActiveIndex].classList.add("active");
    console.log(imgAll);
});

const btnPrev = document.getElementById("btn-prev");
btnPrev.addEventListener("click", function() {
    console.log("prev clicked!");
    const imgActive = document.querySelector(".carosello-container .carosello-container-img img.active")
    imgActive.classList.remove("active");

    if (imgActiveIndex === 0) {
        imgActiveIndex = images.length;
        console.log(`reset prev`);
    }
    imgActiveIndex--;
    console.log(`indice attuale ${imgActiveIndex}`);

    const imgAll = document.querySelectorAll(".carosello-container .carosello-container-img img")
    console.log(imgAll);

    imgAll[imgActiveIndex].classList.add("active");
});