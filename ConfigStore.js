const Store = require('electron-store');

class ConfigStore {
    constructor() {
        // Instancia a store com o nome do seu armazenamento
        this.store = new Store({
            name: 'app-config' // Nome do arquivo de armazenamento, como 'app-config.json'
        });
    }

    // Método para salvar uma configuração
    saveConfig(key, value) {
        try {
            this.store.set(key, value);
            console.log(`Configuração salva: ${key} = ${value}`);
        } catch (error) {
            console.error(`Erro ao salvar configuração: ${error}`);
        }
    }

    // Método para carregar uma configuração
    getConfig(key) {
        try {
            const value = this.store.get(key);
            console.log(`Configuração carregada: ${key} = ${value}`);
            return value;
        } catch (error) {
            console.error(`Erro ao carregar configuração: ${error}`);
            return null;
        }
    }

    // Método para remover uma configuração
    removeConfig(key) {
        try {
            this.store.delete(key);
            console.log(`Configuração removida: ${key}`);
        } catch (error) {
            console.error(`Erro ao remover configuração: ${error}`);
        }
    }

    // Método para verificar se uma configuração existe
    hasConfig(key) {
        try {
            const exists = this.store.has(key);
            console.log(`A configuração "${key}" existe: ${exists}`);
            return exists;
        } catch (error) {
            console.error(`Erro ao verificar configuração: ${error}`);
            return false;
        }
    }

    // Método para limpar todas as configurações
    clearAll() {
        try {
            this.store.clear();
            console.log("Todas as configurações foram limpas.");
        } catch (error) {
            console.error(`Erro ao limpar configurações: ${error}`);
        }
    }
}

module.exports = ConfigStore;
