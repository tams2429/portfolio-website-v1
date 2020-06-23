

/*Setting nav bar off screen horizontally */
document.getElementsByClassName('navItems')[0].style.transform = 'translateX(100%)';


/*Adding logic to nav bar to appear on and off screen */


let count = 0;

document.querySelector('.navMenu').addEventListener('click',function(){
    const navBar = document.getElementsByClassName('navItems')[0];
    if (count === 0){
        if (navBar.classList.contains('navSlideOut')){
            navBar.classList.remove('navSlideOut');
        };
        navBar.classList.toggle('navSlideIn');
        count++;
        console.log(count);
    } else {
        if (navBar.classList.contains('navSlideIn')){
            navBar.classList.remove('navSlideIn');
        };
        navBar.classList.toggle('navSlideOut');
        count--;
        console.log(count);
    }
})