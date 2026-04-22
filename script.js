const items = Array.from(document.querySelectorAll('.gallery-item'));
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeButton = document.querySelector('.close');
let currentItem =0;

function openModalByIndex(index){
    currentItem = (index+ items.length) % items.length;
    const item = items[currentItem];
    const img = item.querySelector('img');

    modalImage.src = img.src;
    modalTitle.textContent = item.dataset.title || captionTitle;
    modalDescription.textContent = item.dataset.description || captionDescription;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

document.querySelectorAll('.gallery-item').forEach((item, index)=>{
    item.addEventListener('click',()=> openModalByIndex(index));
})

document.querySelector('.modal .close').onclick=function(){
    document.getElementById('image-modal').style.display = 'none';
}

document.getElementById('image-modal').onclick=function(e){
    if (e.target === this) this.style.display = 'none';
}

document.getElementById('previous').addEventListener('click', () => openModalByIndex(currentItem - 1))
document.getElementById('next').addEventListener('click', () => openModalByIndex(currentItem + 1))

document.addEventListener('keydown', (e) => {
    if (modal.style.display !== 'flex') return;
    if (e.key === 'ArrowLeft') openModalByIndex(currentItem - 1);
    if (e.key === 'ArrowRight') openModalByIndex(currentItem + 1);
})