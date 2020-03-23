import React from "react";

class InfoGeraisEnsino extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
            educacional: [
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
            <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
            <p>5. Por que você não terminou um curso de  graduação?</p>   
            <input className="inputNome"
                type="text"
            />
            
            <p>6. Você fez algum curso complementar?</p>
            <select name="cursoComplementar">
                <option value="Nenhum">Nenhum</option>
                <option value="CursoTecnico">Curso Técnico</option>
                <option value="cursoDeIngles">Curso de inglês</option>
                
            </select>
            
            

            
        </div>
        )
    };
}

export default InfoGeraisEnsino;









