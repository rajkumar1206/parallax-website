// PARALLAX EFFECT CODE SPINNET
const parallax = document.querySelector('.image');

parallax.style.backgroundPositionY = '0px';

window.addEventListener('scroll',() => {
    let offset = window.pageYOffset;
    //console.log(parallax.style.backgroundPositionY);
    parallax.style.backgroundPositionY = -offset*0.8 +'px';
    //console.log(parallax.style.backgroundPositionY);
});


// TOGGLE ELEMENT CODE 
const toggleElemenetList = Array.from( document.getElementsByClassName('innerblock') );
//console.log(toggleElemenetList);

const toggleHandler = (element) => {
    element.target.nextElementSibling.classList.toggle('magic');
}

toggleElemenetList.forEach( element => {
    element.addEventListener('click', toggleHandler.bind(this));
});


//PRESET OF ANIMATION CODE
const blockList = Array.from(document.querySelectorAll('.innerblock'));
console.log(blockList);

for( let i = 0 ; i< blockList.length ;i++){
    if(i%2==0){
        blockList[i].style.left = "-100%";
    } else {
        blockList[i].style.left = "100%";
    }
}


//ANIMATION EFFECT
const animationHandler = document.querySelectorAll('.innerblock')[4];
console.log(animationHandler.offsetTop);
console.log(window.pageYOffset);

window.addEventListener('scroll',() => {
    if(animationHandler.offsetTop <= window.pageYOffset){
        //console.log(window.pageYOffset)
        for( let i = 0 ; i< blockList.length ;i++){
                blockList[i].classList.add('animation');
                setTimeout(()=>{
                    blockList[i].style.left = '0%'
                },1900)
                
        }
    }
    
});

