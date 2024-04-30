function Header() {
    const header = document.createElement('header');
    header.innerHTML = `
        <div id="navbar" class="headerContainer">
            <div class="headerContent">
                <img class="logo-pagina" src="/Home/assets/logo-serra-tour.png" alt="logo da pagina" />
                <nav>
                    <a class="link-nav" href="/Home/home.html">HOME</a>
                    <a class="link-nav" href="/Passeios/passeios.html">PASSEIOS</a>
                    <a class="link-nav" href="/QuemSomos/quemSomos.html">QUEM SOMOS</a>
                </nav>
            </div>
        </div>
    `;
    return header;
}

function mostraHeader() {
    const header = Header();
    const body = document.querySelector('body');
    body.insertBefore(header, body.firstChild);
}


    var lastScrollTop = 0;
    navBar = document.getElementById('navbar');
    window.addEventListener("scroll", function escondeHeader() {
        var lastScrollTop = window.scrollY || document
            .documentElement.scrollTop;
            if(scrollTop > lasScrollTop) {
                navBar.style.top = "-15vh";
            } else {
                navBar.style.top = "0";
            }
            lastScrollTop = scrollTop;
        })


