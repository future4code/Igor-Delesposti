import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header>
            <h2>FutureTube</h2>
            
        </header>
        
        

        <br/><br/><br/>
        <input type="checkbox" id="check"/>
        <label id="icon" for="check"><img src={require("../src/imagens/icone.png")}/></label>

        <div className="barra">
            <nav>
                <a href=""><div class="link">Home</div></a>
                <a href=""><div class="link">Em alta</div></a>
                <a href=""><div class="link">Populares</div></a>
                <a href=""><div class="link">Inscrições</div></a>
                <a href=""><div class="link">Favoritos</div></a>
                <a href=""><div class="link">Histórico</div></a>
            </nav>
        </div>
        
        <div className="container-do-search">
            
            <div>
                <input type="text"/>
                <img src="https://static.thenounproject.com/png/105498-200.png" className="icone" alt="Buscar"/>
            </div>
            
        </div>    
            
        <main>  
          
            <div id="box1" className="item">
               <img src={require("../src/imagens/1.jpg")}/><a href="teladetalhe1.html">Mídia 1</a>
            </div>

            <div id="box2" className="item"><img src={require("../src/imagens/2.jpg")}/><a href="teladetalhe2.html">Mídia 2</a>
            </div>

            <div id="box3" className="item">
                <img src={require("../src/imagens/3.jpg")}/><a href="#">Mídia 3</a>
            </div>

            <div id="box4" className="item"><img src={require("../src/imagens/4.jpg")}/><a href="#">Mídia 4</a>
            </div>

            <div id="box5" className="item"><img src={require("../src/imagens/5.jpg")}/><a href="#">Mídia 5</a></div>

            <div id="box6" className="item"><img src={require("../src/imagens/6.jpg")}/><a href="#">Mídia 6</a></div>

            <div id="box7" className="item"><img src={require("../src/imagens/7.jpg")}/><a href="#">Mídia 7</a></div>

            <div id="box8" className="item"><img src={require("../src/imagens/8.jpg")}/><a href="#">Mídia 8</a></div>

        </main>        

        <footer>
            <h2> (Todos os direitos reservados.) </h2>
        </footer>
    </div>
  );
}

export default App;
