import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeMarcacaoPreto from '../../img/bookmark.svg'
import iconeMarcacaoBranco from '../../img/bookmark-border.svg'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

class Post extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      curtido: false,
      numeroCurtidas: 0,
      comentando: false,
      numeroComentarios: 0,
      adicionarMarcacao: false
    }
  }

  onClickCurtida = () => {
    
    if(this.state.curtido === false){
      this.setState({
        curtido: true,
        numeroCurtidas: this.state.numeroCurtidas + 1
      })  
    } else {
      this.setState({
        curtido: false,
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    }
    
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
    
  }

   onClickMarcacao = () => {
    
    if(this.state.adicionarMarcacao === false){
      this.setState({
        adicionarMarcacao: true
      })
    }else{
      this.setState({
        adicionarMarcacao: false
      })
    }

    

   }
     
    


  render() {
    let iconeCurtida
    let iconeMarcado

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    if(this.state.adicionarMarcacao) {
      iconeMarcado = iconeMarcacaoPreto
    } else {
      iconeMarcado = iconeMarcacaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
      
      
    }
    console.log(this.SecaoComentario)

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeComContador
          icone={iconeMarcado}
          onClickIcone={this.onClickMarcacao}
          valorContador={this.state.adicionarMarcacao}
        />  
      </div>
      {componenteComentario}
    </div>
  }
}

export default Post