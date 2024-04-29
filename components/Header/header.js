function Header() {
    const header = document.createElement('header');
    header.innerHTML = `
    <header class="headerContainer">
        <div class="headerContent">
            <img src="/Home/assets/logo-serra-tour.png" alt="logo da pagina" />
            <nav>
                <a class="link-nav" href="/Home/home.html">Home</a>
                <a class="link-nav" href="/Passeios/passeios.html">Passeios</a>
                <a class="link-nav" href="/QuemSomos/quemSomos.html">Quem somos</a>
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