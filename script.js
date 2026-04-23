const items = Array.from(document.querySelectorAll('.gallery-item'));
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeButton = document.querySelector('.close');
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const retroToggle = document.getElementById('retro-toggle');
let currentItem =0;

function openModalByIndex(index){
    currentItem = (index+ items.length) % items.length;
    const item = items[currentItem];
    const img = item.querySelector('img');

    const captionTitle = item.querySelector('figcaption h2')?.textContent || '';
    const captionDescription = item.querySelector('figcaption p')?.textContent?.trim() || '';

    modalImage.src = img.src;
    modalTitle.textContent = captionTitle;
    modalDescription.textContent = captionDescription;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal(){
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

items.forEach((item, index) => {
    item.addEventListener('click', ()=> openModalByIndex(index));
})

closeButton.addEventListener('click', closeModal);

modal.addEventListener('click', (e)=>{
    if (e.target === modal) closeModal();
})

previousButton.addEventListener('click', (e)=>{
    e.stopPropagation();
    openModalByIndex(currentItem - 1);
})

nextButton.addEventListener('click', (e)=>{
    e.stopPropagation();
    openModalByIndex(currentItem + 1);
})

document.addEventListener('keydown', (e) => {
    if (modal.style.display !== 'flex') return;
    if (e.key === 'ArrowLeft') openModalByIndex(currentItem - 1);
    if (e.key === 'ArrowRight') openModalByIndex(currentItem + 1);
})

function updateRetroButton() {
    const isRetro = document.body.classList.contains('retro');
    retroToggle.textContent = isRetro ? 'Retro: on' : 'Retro: off';
}

updateRetroButton();

retroToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('retro');
    const isRetro = document.body.classList.contains('retro');
    updateRetroButton();
})