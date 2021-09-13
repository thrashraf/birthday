
//grab everything we need
const buttons = document.querySelector('.btn-crazy');
const normalBtn = document.querySelector('.normal-btn');



//functions
function goNuts(e) {

    const button = e.target;
    console.log(e.target);
    const offshetWidth = Math.random() * (window.innerWidth - button.clientWidth);
    const offshetHeight = Math.random() * (window.innerHeight - button.clientHeight);


    button.style.top = `${offshetHeight}px`;
    button.style.left = `${offshetWidth}px`;


}


//addEventListener
buttons.addEventListener('click' , goNuts);
normalBtn.addEventListener('click', () => {

    window.location.href = 'birthday.html';
});














































