import React from "react";

class InfoEducacional extends React.Component {
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
            <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
            <p>5. Qual curso?</p>   
            <input className="inputNome"
                type="text"
            />
            
            <p>6. Qual a unidade de ensino?</p>
            <input className="inputIdade" 
                type="text"
            />

            
            

            
        </div>
        )
    };
}

export default InfoEducacional;









