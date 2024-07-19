const sections = document.querySelectorAll(".Section")
const buttons = document.querySelectorAll(".Overall-sectionLink")
const prevButton = document.querySelector('#Carrousel-prev')
const nextButton = document.querySelector('#Carrousel-next')
const images = ["https://i.imgur.com/r706kCe.png","https://i.imgur.com/YSvCwBd.png","https://i.imgur.com/ZhtVaS1.png","https://i.imgur.com/q1ODhwz.png","https://i.imgur.com/zvipF5O.png","https://i.imgur.com/g3KxdDu.png","https://i.imgur.com/OhvQ1ju.png","https://i.imgur.com/1f76UCy.png","https://i.imgur.com/sqZ4nVC.png","https://i.imgur.com/uZYT35I.png","https://i.imgur.com/IwIJU1Z.png","https://i.imgur.com/pr9B46g.png"];
const frames = document.querySelectorAll(".Loomi-carrouselImage")

let imagesIndex= 1;


document.addEventListener('DOMContentLoaded', function (){
    const images = ["https://i.imgur.com/r706kCe.png","https://i.imgur.com/YSvCwBd.png","https://i.imgur.com/ZhtVaS1.png","https://i.imgur.com/q1ODhwz.png","https://i.imgur.com/zvipF5O.png","https://i.imgur.com/g3KxdDu.png","https://i.imgur.com/OhvQ1ju.png","https://i.imgur.com/1f76UCy.png","https://i.imgur.com/sqZ4nVC.png","https://i.imgur.com/uZYT35I.png","https://i.imgur.com/IwIJU1Z.png","https://i.imgur.com/pr9B46g.png"];

    frames.forEach((img, i) => {
        if (images[i]) { 
            img.src = images[i];
        }
    });


})


function EventHandler(){

    
    buttons.forEach((button,i) => {
        button.addEventListener("click", () => openSection(button.value));
    });


    nextButton.addEventListener('click',nextImage);
    prevButton.addEventListener('click',prevImage)







};


function nextImage(){

    
    if(imagesIndex >= images.length -3){return}

    frames.forEach((frame,i) =>{
        frames[i].src = images[i+imagesIndex]
    })
    console.log(imagesIndex);

    imagesIndex++



}

function prevImage(){
    if(imagesIndex == 1){return}
    frames.forEach((frame,i) =>{
        frames[i].src = images[imagesIndex-i]
        
    })
    console.log(imagesIndex);
    imagesIndex--

}







function openSection(sectionId) {
    const visibleSection = document.querySelector('.Section.visible');

    if (visibleSection) {
        visibleSection.classList.remove('fade-in');
        setTimeout(() => {
            visibleSection.classList.remove('visible');
            visibleSection.style.display = 'none';
            showSection(sectionId);
        }, 1000); // Espera el tiempo de la transición antes de ocultar
    } else {
        showSection(sectionId);
    }
}

function showSection(sectionId) {
    console.log(sectionId);
    console.log(sections);
    console.log(sections[sectionId]);
    sections[sectionId].style.display = 'flex';
    setTimeout(() => {
        sections[sectionId].classList.add('visible');
        switch (sectionId) {
            case '0':
                document.querySelector('#Loomi').scrollIntoView({ behavior: 'smooth' })    
                break;
            case '1':
                document.querySelector('#Unirse').scrollIntoView({ behavior: 'smooth' })    
                break;
            case '2':
                document.querySelector('#Roleplay').scrollIntoView({ behavior: 'smooth' })    
                break;

            default:

                break;
        }
        setTimeout(() => {
            sections[sectionId].classList.add('fade-in');
        }, 300);
        
        


    }, 300);





}

window.onload = EventHandler;