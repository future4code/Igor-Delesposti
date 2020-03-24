import React from "react";

class DadosGerais extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
            usuario: [
              {
                nome:"",
                idade: "",
                email:"",
                grauescolaridade: ["Ensino Médio Incompleto", "Ensino Médio Completo", "Ensino Superior Incompleto", "Ensino Superior Completo"]

              }
            ],

          
        }

    }

    render() {
        return(
            <div>
            <h3>ETAPA 1 - DADOS GERAIS</h3>
            <p>1. Qual o seu nome?</p>   
            <input className="inputNome"
                type="text"
            />
            
            <p>2. Qual sua idade?</p>
            <input className="inputIdade" 
                type="text"
            />

            <p>3. Qual seu email?</p>
            <input className="inputEmail" 
                type="text"
            />

            <p>4. Qual sua escolaridade?</p>
            <select name="escolaridade">
                <option value="ensinoMedioIncompleto">Ensino Médio Incompleto</option>
                <option value="ensinoMedioCompleto">Ensino Médio Completo</option>
                <option value="ensinoSuperiorIncompleto">Ensino Superior Incompleto</option>
                <option value="ensinoSuperiorCompleto">Ensino Superior Completo</option>
            </select>
            
            

            
        </div>
        )
    };
}

export default DadosGerais;








