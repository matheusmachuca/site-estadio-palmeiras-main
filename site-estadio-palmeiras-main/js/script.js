// Este arquivo contém scripts JavaScript que podem ser usados para adicionar interatividade ao site, como animações ou manipulação de eventos. 

document.addEventListener('DOMContentLoaded', function() {
    // Exemplo de uma função para mostrar uma mensagem ao usuário
    function showWelcomeMessage() {
        alert('Bem-vindo ao Estádio do Palmeiras! Explore as seções para mais informações.');
    }

    // Chama a função ao carregar a página
    showWelcomeMessage();

    // Adiciona event listeners para links de navegação
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Aqui você pode adicionar lógica para manipular a navegação
            console.log(`Navegando para: ${this.href}`);
        });
    });
});