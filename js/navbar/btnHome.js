document.getElementById('btnHome').addEventListener('click', async () => {
	state = 1
	let titulo = document.getElementById('titulo')
	titulo.textContent = "Home"
    loadHTML('conteudo', 'home.html');
});