// Navbar Fixed
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop; // selisih antara header dengan top

    if (window.pageYOffset > fixedNav) { // klu scroll yg kita buat lbh besar dri nilai fixedNav, maka ...
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }

});




// Hamburger Menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', () => { // When the user clicks the hamburger menu, maka cek apakah menu sudah di buka atau belum.
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});


