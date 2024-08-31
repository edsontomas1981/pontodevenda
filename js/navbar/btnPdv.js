document.getElementById('btnPdv').addEventListener('click', async () => {
	state = 2
	let titulo = document.getElementById('titulo')
	titulo.textContent = "Caixa"
	loadHTML('conteudo', 'pdv.html');
  });