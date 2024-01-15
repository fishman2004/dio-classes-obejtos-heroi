class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataqueDescricao = '';
  
      switch (this.tipo) {
        case 'mago':
          ataqueDescricao = 'usou magia';
          break;
        case 'guerreiro':
          ataqueDescricao = 'usou espada';
          break;
        case 'monge':
          ataqueDescricao = 'usou artes marciais';
          break;
        case 'ninja':
          ataqueDescricao = 'usou shuriken';
          break;
        default:
          ataqueDescricao = 'usou um ataque indefinido';
      }
  
      console.log(`o ${this.tipo} atacou usando ${ataqueDescricao}`);
    }
  }
  
  // Exemplo de uso
  const heroi1 = new Heroi('Herói A', 25, 'mago');
  const heroi2 = new Heroi('Herói B', 30, 'guerreiro');
  
  heroi1.atacar(); 
  heroi2.atacar(); 
  