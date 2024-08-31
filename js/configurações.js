var state = 1 // 1-home 2-PDV

document.addEventListener('DOMContentLoaded', function() {
  loadModal('modals/modalPdv.html', 'modalContainer');
  loadHTML('conteudo', 'home.html');

  // Adiciona um listener de eventos para capturar as teclas pressionadas
  document.addEventListener('keydown', function(e) {
    if (e.key === 'F1') {
      e.preventDefault(); // Evita a ação padrão do F1 (ajuda do navegador)
      switch (state) {
        case 1:
          openModal('modalPgto');
          break;

        case 2:
          openModal('modalPgto');
          break;
      
        default:
          break;
      }
      
    }

    // Adicione outros atalhos de teclado aqui, se necessário
    // Exemplo: Atalho para F2
    if (e.key === 'F2') {
      e.preventDefault();
      alert('F2 pressionado');
      // Realize alguma ação para F2
    }
  });
});

