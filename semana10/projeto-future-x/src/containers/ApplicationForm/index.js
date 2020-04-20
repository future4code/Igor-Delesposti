import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

const Container = styled.div`
width: 100%;
height: 90vh;
display: flex;
justify-content: center;
margin: auto;
`

const Options = styled.div`
width: 25%;
height: 70%;
padding: 1vw;
margin: 2vw;
display: flex;
flex-direction: column;
justify-content: space-around;
border-radius: 20px;
box-shadow: 0px 10px 50px rgba(0,0,0,0.1);
background-color: white;
align-items: center;
`

const Background = styled.div`
background-color: #f0f1f2;
 `

const Text = styled(Input)`
margin-top: 20px;
`
const Titulo = styled.h1`
    color: #686de0;
    font-size: 35px;
    font-weight: 100;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 6px;
    margin-bottom: 30px;
    width: 30%;
    border-bottom: solid 0.5px #ff6f00;
    border-top: solid 0.5px #ff6f00;

`

class CreateTripPage extends React.Component{

    render(){
        

        return(
            <Background>
                <br/><br/><br/><br/><br/>
                <Container>
                    <Options>
                        <Titulo>FutureX</Titulo>
                        <Text  label="Nome" variant="outlined"  />
                        <Text  label="Idade" type="number" variant="outlined" />
                        <Text  label="Porque você?" type="text" variant="outlined" />
                        <Text  label="País de origem" variant="outlined" />
                        <Text  label="Viagem" variant="outlined" />
                        
                        
                        
                        <Button  variant="contained" color="secondary">Enviar</Button>

                    </Options>


                </Container>
            </Background>
        )
    }
}

// TextFields.PropTypes = {
//     classes: PropTypes.object.isRequired
// }
export default CreateTripPage;