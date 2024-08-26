function loadModal(modalPath, containerId) {
    fetch(modalPath)
        .then(response => response.text())
        .then(html => {
                document.getElementById(containerId).innerHTML = html;
        })
        .catch(error => console.error('Erro ao carregar modal:', error));
}

document.addEventListener('DOMContentLoaded', function() {
loadModal('modals/modalPdv.html', 'modalContainer');
});