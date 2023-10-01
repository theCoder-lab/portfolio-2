/* Start Count setting */

let nums = document.querySelectorAll('.box .num');
let aboutSection = document.querySelector('.about');
let started = false;

/* Start progress Setting */

let section = document.querySelector('.skills');
let spans   = document.querySelectorAll('.progress span');

/* End progress setting */

window.onscroll = function(){

    /* Start progress function */
    
    if(window.scrollY >= section.offsetTop){      
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
    
    /* End progress function */

    /* Start Count implementaion */
    
    if(window.scrollY >= aboutSection.offsetTop + 400){
        if(!started){
            nums.forEach((num)=> startCount(num));
        }
        started = true;
    }
}

/* Start count function */

function startCount(el){

    let goal = el.dataset.goal;
    let count = setInterval(()=>{
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(count);
        }
    }, 2000 / goal);

}