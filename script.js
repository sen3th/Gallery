document.querySelectorAll('.gallery-item').forEach(item=>{
    item.addEventListener('click', function(){
        document.getElementById('modal-image').src = this.querySelector('img').src;
        document.getElementById('modal-title').textContent = this.dataset.title || '';
        document.getElementById('modal-description').textContent = this.dataset.description || '';
        document.getElementById('image-modal').style.display = 'block';
    });
});

document.querySelector('.modal .close').onclick=function(){
    document.getElementById('image-modal').style.display = 'none';
}

document.getElementById('image-modal').onclick=function(e){
    if (e.target === this) this.style.display = 'none';
}