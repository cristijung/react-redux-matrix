import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import eritraHero from 'assets/itens/h1.png';
import dolenHero from 'assets/itens/h2.png';
import gideonHero from 'assets/itens/h3.png';
import huanHero from 'assets/itens/h4.png';
import sombraDragao from 'assets/itens/d1.png';
import tempestadeDragao from 'assets/itens/d2.png';
import douradoDragao from 'assets/itens/d3.png';
import geloDragao from 'assets/itens/d4.png';
import arqUm from 'assets/itens/a1.png';
import arqDois from 'assets/itens/a2.png';
import arqTres from 'assets/itens/a3.png';
import arqQuatro from 'assets/itens/a4.png';
import infUm from 'assets/itens/i1.png';
import infDois from 'assets/itens/i2.png';
import infQuatro from 'assets/itens/i4.png';
import infTres from 'assets/itens/i3.png';
import cavaUm from 'assets/itens/c1.png';
import cavaDois from 'assets/itens/c2.png';
import cavaTres from 'assets/itens/c3.png';
import cavaQuatro from 'assets/itens/c4.png';


const initialState = [{
  titulo: 'Eritra',
  descricao: 'Também chamada de A Duquesa do Medo Profundo, é responsável por vigiar o Poço da Vida Eterna por milhares de anos. Compre esta heroína para ter mais poder.',
  foto: eritraHero,
  favorito: false,
  preco: 1236.99,
  id: uuid(),
  categoria: 'heros'
}, {
  titulo: 'Dolen Sikil',
  descricao: 'Guerreiro elfo treinado no batalhão de elite, possui habilidades incríveis adicionadas ao seu poder militar. Compre este herói para ter mais poder.',
  foto: dolenHero,
  favorito: false,
  preco: 900,
  id: uuid(),
  categoria: 'heros'
},  {
  titulo: 'Gideon',
  descricao: 'Elfo Brado que faz parte do clã dos Magos de Nyria. Com apenas algumas palavras ele invoca uma coleção de pestes e uma força de combate digna dos Sinhari. Compre este herói para ter mais poder.',
  foto: gideonHero,
  favorito: false,
  preco: 1600.99,
  id: uuid(),
  categoria: 'heros'
}, {
  titulo: 'Huan Mulan',
  descricao: 'Também chamada de  A Terrível Donzela de Arco e Flecha. Desceu das montanhas onde nenhum Nyriano conseguia entender o que falava, hoje em dia pertence à irmandade do Caminho Silencioso e sua principal habilidade é caçar criaturas malignas. Compre esta heroína para ter mais poder.',
  foto: huanHero,
  favorito: false,
  preco: 4478.96,
  id: uuid(),
  categoria: 'heros'
},  {
  titulo: 'Dragão das Sombras',
  descricao: 'Habilidade principal chamada de O Manto da Noite, seu fogo é frio e congela imediatamente o inimigo.',
  foto: sombraDragao,
  favorito: false,
  preco: 1500.96,
  id: uuid(),
  categoria: 'dragao'
}, {
  titulo: 'Dragão da Tempestade',
  descricao: 'Habilidade principal de Descarga Elétrica Natural, seu ataque mata como um raio de uma potente tempestade.',
  foto: tempestadeDragao,
  favorito: false,
  preco: 1490.90,
  id: uuid(),
  categoria: 'dragao'
}, {
  titulo: 'Dragão Dourado',
  descricao: 'Habilidade principal de Bênção Divina do Reino, com sua luz potente faz toda a natureza se desenvolver.',
  foto: douradoDragao,
  favorito: false,
  preco: 2900,
  id: uuid(),
  categoria: 'dragao'
}, {
  titulo: 'Dragão do Gelo',
  descricao: 'Com o Suporte Veicular Magnetico 3 em 1 i2GO PRO você posiciona seu Smartphone de qualquer tamanho e outros dispositivos onde quiser de maneira fácil e segura. Ideal para o utilização de aplicativos de GPS e controlar músicas no carro, assistir a filmes e séries em casa, além de atender chamadas de vídeo e conferir documentos e mensagens no escritório.',
  foto: geloDragao,
  favorito: false,
  preco: 1200.99,
  id: uuid(),
  categoria: 'dragao'
}, {
  titulo: 'Arqueira Batedora lv.13',
  descricao: 'Arqueira Mágica possui habilidades elevadas para ataque efetivo em muros de castelo e ataque à distância para infantaria com lança. Poder de ataque 594 + 10 de mágica',
  foto: arqUm,
  favorito: false,
  preco: 5299.90,
  id: uuid(),
  categoria: 'arqueiro'
}, {
  titulo: 'Arqueira Batedora lv.12',
  descricao: 'Arqueira Montada possui habilidades elevadas para ataque efetivo em muros de castelo e ataque à distância para infantaria com lança. Poder de ataque 433 + 6 de estrela',
  foto: arqDois,
  favorito: false,
  preco: 3569.99,
  id: uuid(),
  categoria: 'arqueiro'
}, {
  titulo: 'Arqueira Batedora lv.11',
  descricao: 'Arqueira Phenix possui habilidades elevadas para ataque efetivo em muros de castelo e ataque à distância para infantaria com lança. Poder de ataque 369 + 5 de estrela',
  foto: arqTres,
  favorito: false,
  preco: 2279.75,
  id: uuid(),
  categoria: 'arqueiro'
}, {
  titulo: 'Arqueiro Batedor lv.10',
  descricao: 'Arqueiro Bestial possui habilidades elevadas para ataque efetivo em muros de castelo e ataque à distância para infantaria com lança. Poder de ataque 260 + 5 de estrela',
  foto: arqQuatro,
  favorito: false,
  preco: 1049.90,
  id: uuid(),
  categoria: 'arqueiro'
},  {
  titulo: 'Homem Lança lv.13',
  descricao: 'Soldado Mágico possui habilidades elevadas para ataque efetivo corpo a corpo e contra lanceiros e arqueiros. Poder de ataque 530 + 10 de mágica',
  foto: infUm,
  favorito: false,
  preco: 4285.56,
  id: uuid(),
  categoria: 'infantaria'
}, {
  titulo: 'Homem Lança lv.12',
  descricao: 'Soldado Alado possui habilidades elevadas para ataque efetivo corpo a corpo e contra lanceiros e arqueiros. Poder de ataque 165 + 6 de estrela',
  foto: infDois,
  favorito: false,
  preco: 3028.88,
  id: uuid(),
  categoria: 'infantaria'
}, {
  titulo: 'Homem Lança lv.11',
  descricao: 'Lanceiro Batedor possui habilidades elevadas para ataque efetivo corpo a corpo e contra lanceiros e arqueiros. Poder de ataque 324 + 5 de estrela',
  foto: infTres,
  favorito: false,
  preco: 2227.68,
  id: uuid(),
  categoria: 'infantaria'
}, {
  titulo: 'Homem Lança lv.10',
  descricao: 'Lanceiro de Espada possui habilidades elevadas para ataque efetivo corpo a corpo e contra lanceiros e arqueiros. Poder de ataque 109 + 5 de estrela',
  foto: infQuatro,
  favorito: false,
  preco: 44.90,
  id: uuid(),
  categoria: 'infantaria'
},  {
  titulo: 'Lanceiro lv.13',
  descricao: 'Lanceiro Mágico possui habilidades elevadas para ataque efetivo corpo a corpo e contra batedores. Poder de ataque 554 + 10 de mágica',
  foto: cavaUm,
  favorito: false,
  preco: 5359,
  id: uuid(),
  categoria: 'cavalaria'
}, {
  titulo: 'Lanceiro lv.12',
  descricao: 'Lanceiro Alado possui habilidades elevadas para ataque efetivo corpo a corpo e contra batedores. Poder de ataque 412 + 6 de estrela',
  foto: cavaDois,
  favorito: false,
  preco: 4817.33,
  id: uuid(),
  categoria: 'cavalaria'
}, {
  titulo: 'Lanceiro lv.11',
  descricao: 'Lanceiro Batedor possui habilidades elevadas para ataque efetivo corpo a corpo e contra batedores. Poder de ataque 308 + 5 de estrela',
  foto: cavaTres,
  favorito: false,
  preco: 1199,
  id: uuid(),
  categoria: 'cavalaria'
}, {
  titulo: 'Lanceiro lv.10',
  descricao: 'Lanceiro de Espada possui habilidades elevadas para ataque efetivo corpo a corpo e contra batedores. Poder de ataque 237 + 5 de estrela',
  foto: cavaQuatro,
  favorito: false,
  preco: 782.91,
  id: uuid(),
  categoria: 'cavalaria'
}];

const itensSlice = createSlice({
  name: 'itens',
  initialState,
  reducers: {
    mudarFavorito: (state, { payload }) => {
      state = state.map(item => {
        if(item.id === payload) item.favorito = !item.favorito;
        return item;
      })
    }
  }
});

export const { mudarFavorito } = itensSlice.actions;

export default itensSlice.reducer;