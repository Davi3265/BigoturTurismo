function criarArticle() {
    var article = document.createElement('article');

    var institucional = document.createElement('section');
    institucional.id = "institucional";
    institucional.innerHTML = `
        <h2 class="textcolor">Institucional</h2>
        <ul>
            <li><a href="privacidade.html">Política de privacidade</a></li>
        </ul>
    `;
    article.appendChild(institucional);

    var menu = document.createElement('section');
    menu.id = "menu";
    menu.innerHTML = `
        <h2 class="textcolor">Menu</h2>
        <ul>
            <li><a href="sobre.html">Sobre nós</a></li>
            <li><a href="contato.html">Fale conosco</a></li>
        </ul>
    `;
    article.appendChild(menu);

    var endereco = document.createElement('section');
    endereco.id = "escritorio";
    endereco.innerHTML = `
        <h2 class="textcolor">Endereço</h2>
        <address>
            Rua Vereador Haroldo Luiz Dandoline, 195 - São Cristóvão, Turvo - SC, 88930-000
            <br>
            (48) 3525-0518
        </address>
    `;
    article.appendChild(endereco);

    return article;
}

function criarMenu() {
    var menu = document.createElement('nav');
    menu.className = "nav-home";
    menu.innerHTML = `
        <ul>
            <li><a href="index.html" onclick="redirecionarPagina('Home')" class="nav-link">Home</a></li>
            <li><a href="sobre.html" onclick="redirecionarPagina('A Empresa')" class="nav-link">A Empresa</a></li>
            <li><a href="contato.html" onclick="redirecionarPagina('Contato')" class="nav-link">Contato</a></li>
        </ul> 
    `;
    return menu;
}

function criarRodape() {
    var rodape = document.createElement('footer');
    rodape.innerHTML = "<p>© Bigotur Transporte e Turismo LTDA</p>";
    return rodape;
}

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".carousel-img");
    let currentImage = 0;

    function changeImage(direction) {
      images[currentImage].classList.remove("active");
  
      currentImage += direction;
      if (currentImage < 0) {
        currentImage = images.length - 1;
      } else if (currentImage >= images.length) {
        currentImage = 0;
      }
  
      images[currentImage].classList.add("active");
    }

    function auto() {
      changeImage(1);
    }

    setInterval(auto, 4500);
});