//reducer de categoria
//importação do Slice
//Slice é um mini recurso
import { createSlice } from '@reduxjs/toolkit';
//importação de recursos
import drgThumb from 'assets/categorias/thumbnail/dragao-mini.png';
import heroThumb from 'assets/categorias/thumbnail/hero-mini.png';
import infantariaThumb from 'assets/categorias/thumbnail/inf-mini.png';
import arqThumb from 'assets/categorias/thumbnail/arq-mini.png';
import cavalariaThumb from 'assets/categorias/thumbnail/cava-mini.png';
import drgHeader from 'assets/categorias/header/dragao-capa.png';
import heroHeader from 'assets/categorias/header/hero-capa.png';
import infantariaHeader from 'assets/categorias/header/inf-capa.png';
import arqHeader from 'assets/categorias/header/arq-capa.png';
import cavalariaHeader from 'assets/categorias/header/cava-capa.png';

const initialState = [
    {
    nome: 'Heros',
    thumbnail: heroThumb,
    header: heroHeader,
    id: 'heros',
    description: 'Os mais poderosos herois'
}, {
    nome: 'Dragons',
    thumbnail: drgThumb,
    header: drgHeader,
    id: 'dragao',
    description: 'Os mais poderosos herois'
},  {
    nome: 'Arqueiro',
    thumbnail: arqThumb,
    header: arqHeader,
    id: 'arqueiro',
    description: 'Os mais poderosos herois'
},{
    nome: 'Infantaria',
    thumbnail: infantariaThumb,
    header: infantariaHeader,
    id: 'infantaria',
    description: 'Os mais poderosos herois'
}, {
    nome: 'Cavalaria',
    thumbnail: cavalariaThumb,
    header: cavalariaHeader,
    id: 'cavalaria',
    description: 'Os mais poderosos herois'
}, {
    nome: 'Heros',
    thumbnail: heroThumb,
    header: heroHeader,
    id: 'heros',
    description: 'Os mais poderosos herois'
},
];

const categoriasSlice = createSlice({
    name: 'categorias',
    initialState,
});

export default categoriasSlice.reducer;