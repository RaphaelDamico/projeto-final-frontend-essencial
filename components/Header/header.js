function Header() {
    const header = document.createElement('header');
    header.innerHTML = `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Dancing+Script:wght@400..700&display=swap" rel="stylesheet"> 
    <header class="headerContainer">
        <div class="headerContent">
            <img class="logo-pagina" src="/Home/assets/logo-serra-tour.png" alt="logo da pagina" />
            <nav>
                <a class="link-nav" href="/Home/home.html">HOME</a>
                <a class="link-nav" href="/Passeios/passeios.html">PASSEIOS</a>
                <a class="link-nav" href="/QuemSomos/quemSomos.html">QUEM SOMOS</a>
            </nav>
        </div>
    </header>
    `;
    return header;
}

function mostraHeader() {
    const header = Header();
    const body = document.querySelector('body');
    body.insertBefore(header, body.firstChild);
}


