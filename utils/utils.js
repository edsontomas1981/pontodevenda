function loadModal(modalPath, containerId) {
  fetch(modalPath)
    .then(response => response.text())
    .then(html => {document.getElementById(containerId).innerHTML = html;})
    .catch(error => console.error('Erro ao carregar modal:', error));
}

// Função para carregar um arquivo HTML e inserir em um elemento específico
function loadHTML(elementId, url) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch(error => console.error('Erro ao carregar o conteúdo:', error));
}




