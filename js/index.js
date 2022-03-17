

// Quando clicar no pokemon da listagem, temos que esconder o cartão;
// do pokemon aberto e mostrar o cartão correspondente ao que foi;
// selecionado na listagem;

// para isso vamos precisar, trabalhar com 2 elementos :
// 1 - Listagem;
// 2 - Cartão do Pokemon;
// precisamos criar duas variaveis no JS  para trabalhar com os elementos;
// trabalhar com evento onclicke

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonCard = document.querySelectorAll('.cartao-pokemon')


listaSelecaoPokemons.forEach(pokemon => {
// Evento Clicke
    pokemon.addEventListener('click', () => {
        
        const cartaoPokemonAberto = document.querySelector('.aberto')
        console.log(cartaoPokemonAberto.classList)
        cartaoPokemonAberto.classList.remove('aberto')


        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')



        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //adicionar a classe ativo no item da lista selecionado 
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')


    })
})


// const pokemonAtivoNaListagem = document.querySelector('.ativo')
// pokemonAtivoNaListagem.classList.remove('ativo')

// const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
// pokemonSelecionadoNaListagem.classList.add('ativo')