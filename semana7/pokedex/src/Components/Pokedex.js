import React from 'react';
import axios from "axios";
import styled from 'styled-components';

const MainContainer = styled.div`
padding: 0;
margin: auto;
max-width: 1000px;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #00a8ff ;


`;

const EstiloDiv = styled.div`
border: 1px solid black;
background-color: #e84118;
margin: 15px;
padding: 1%;
width: 700px;
height: 500px;
display: flex;
flex-direction: column;
align-items: center;
`;
const TituloPokemon = styled.img`
width: 500px;
height: 200px;
margin: 10px;
`;

const DivPokemon = styled.div`
border-radius: 50px;
border: 1px solid black;
background-color: white;
width: 180px;
height: 150px;
display: flex;
justify-content: center;
margin-top: 5%;
`;

const DivHabilidades = styled.div`
border: 1px solid black;
background-color: #f5f6fa;
width: 180px;
height: 50px;
display: flex;
justify-content: center;
color: #8c7ae6;
`;
const TextoHabilidades = styled.h4`
color: white;
border-radius: 10%;
background-color: #9c88ff;
padding: 15px;
`;
const SelectPokemon = styled.select`
color: black;
background-color: #f5f6fa;
border-radius: 50px;
`
const BotaoStart = styled.button`

  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);


:hover {
  cursor: pointer;
}

::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 4px solid hsl(236, 32%, 26%);
  transform-origin: center;
  transform: scale(1);
}

:hover::before {
  transition: all 0.75s ease-in-out;
  transform-origin: center;
  transform: scale(1.75);
  opacity: 0;
}
`

const ImagemPokemon = styled.img`

height: 150px;
`

class Pokedex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: [],
            pokemonImage: undefined,
            habilidade: ""
        }
    }

    componentDidMount() {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=151")
            .then((response) => {
                this.setState({ pokemons: response.data.results })
            })
    }

    selecionandoPokemon = (event) => {

        if (event.target.value !== "") {
            axios
                .get(`https://pokeapi.co/api/v2/pokemon/${event.target.value}`)
                .then((response) => {
                    console.log(response.data)
                    this.setState({ pokemonImage: response.data.sprites.front_default })

                    const habilidadePokemon = response.data.abilities[0].ability.name;

                    this.setState({ habilidade: habilidadePokemon })
                })
        } else {
            this.setState({ pokemonImage: undefined })
        }
    }




    render() {
        return (
            <MainContainer>
                <TituloPokemon src="https://assets.change.org/photos/5/ka/he/QhKAhesgwIcUrSZ-800x450-noPad.jpg?1560307369"
                    alt="Título Pokémon" />
                <EstiloDiv>
                    <SelectPokemon onChange={this.selecionandoPokemon}>
                        <option value="">Select your Pokemon</option>
                        {this.state.pokemons.map((pokemon) => {
                            return <option value={pokemon.name}>{pokemon.name}</option>
                        })}
                    </SelectPokemon>
                    <DivPokemon>
                        {this.state.pokemonImage && (
                            <ImagemPokemon alt={"pokemon"} src={this.state.pokemonImage} />
                        )}
                    </DivPokemon>
                    <TextoHabilidades>Main Skill:</TextoHabilidades>
                    
                    <DivHabilidades>
                        <p>{this.state.habilidade}</p>
                    </DivHabilidades>
                    <br/>
                    <BotaoStart>Start Mission</BotaoStart>
                </EstiloDiv>
                
            </MainContainer>
        )
    }
}

export default Pokedex;
