function redirecionarPagina(pagina) {
    if (pagina === 'Home') {
        window.location.href = 'index.html';
    } else if (pagina === 'Sobre nós') {
        window.location.href = 'sobre.html';
    } else if (pagina === 'Contato') {
        window.location.href = 'contato.html'; 
    }
}

function carregarConteudo(pagina) {
    var conteudoContainer = document.getElementById('conteudo-container');
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            conteudoContainer.innerHTML = this.responseText;
        }
    };

    if (pagina === 'Home') {
        // Se quiser adicionar um conteúdo padrão para a página inicial, pode adicionar aqui
        conteudoContainer.innerHTML = "Bem-vindo à página inicial!";
    } else {
        xhttp.open("GET", pagina.toLowerCase() + ".html", true);
        xhttp.send();
    }
}

