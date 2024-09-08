// Caminho para o fs do Node.js só funciona no Electron, então você precisa usar o Electron para isso
const fs = require('fs');
const path = require('path');

// Tornando a função global
btnSalvaConfiguracoes = function() {
  const configPath = path.join(__dirname, '../../configuracoes.json');

  // Carrega o arquivo de configurações existente
  fs.readFile(configPath, 'utf8', (err, data) => {
    if (err) {
		  alert('Erro ao carregar o arquivo de configurações:');		
      console.error('Erro ao carregar o arquivo de configurações:', err);
      return;
    }else{
		  alert('carregou')
	}

    // Converte o JSON para um objeto JavaScript
    let configuracoes = JSON.parse(data);

    // Atualiza as configurações com novos valores (exemplo de como capturar novas configs)
    const novasConfiguracoes = {
      tema: {
        corPrimaria: "#ff0000" // Aqui você pode pegar os valores dos inputs, por exemplo
      }
    };

    configuracoes = {
      ...configuracoes,
      ...novasConfiguracoes
    };

    // Escreve as novas configurações no arquivo
    fs.writeFile(configPath, JSON.stringify(configuracoes, null, 2), 'utf8', (err) => {
      if (err) {
        console.error('Erro ao salvar o arquivo de configurações:', err);
        return;
      }
      console.log('Configurações salvas com sucesso!');
    });
  });
}
