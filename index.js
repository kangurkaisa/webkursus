let imgs = document.querySelectorAll('#myslider .images img');
    console.log(imgs);
let prev = document.querySelector('#prev');
let active = 0;

prev.addEventListener('click', () => {
    imgs[active].className = '';
    active--;
        if(active<0){
            active=imgs.length-1;
        }
    imgs[active].className = 'active';
    
})

document.querySelector('#next').addEventListener('click', () => {
    imgs[active].className = '';
    active++;
        if(active>imgs.length-1){
            active=0;
        }
    imgs[active].className = 'active';
    
})

