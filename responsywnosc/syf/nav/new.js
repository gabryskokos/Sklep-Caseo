const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.prawo');
    const navLinks = document.querySelectorAll('.prawo li')

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');


        navLinks.forEach((link,index)=>{
            if(link.computedStyleMap.animation){
                 link.style.animation = ''
            }
            else{
                 link.style.animation = `navLink 0.5s ease forwards $(index/ 7 + 1)s`;
            }
         });
         burger.classList.toggle('toggle');
    });

}

navSlide();