// Aguarda o documento carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efeito de destaque nos cards ao passar o mouse
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.border = '2px solid #2e8b57';
            card.style.transition = '0.3s';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.border = 'none';
        });
    });

    // 2. Feedback simples ao clicar nos links do menu
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Previne o comportamento padrão do link (#)
            event.preventDefault();
            
            const secaoNome = link.innerText;
            console.log(`Navegando para: ${secaoNome}`);
            
            // Exibe uma mensagem amigável no topo
            alert(`Você clicou em: ${secaoNome}. Esta seção será carregada em breve!`);
        });
    });

    // 3. Adiciona uma animação suave de entrada ao carregar a página
    const mainSection = document.querySelector('section');
    mainSection.style.opacity = '0';
    mainSection.style.transition = 'opacity 1.5s';
    
    setTimeout(() => {
        mainSection.style.opacity = '1';
