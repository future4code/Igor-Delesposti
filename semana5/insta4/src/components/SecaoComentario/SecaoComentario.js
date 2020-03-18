import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	constructor(props) {
		super(props)

		this.state = {
			comentarioDoUsuario: ""
		}
	}

	onChangeComentario=(event) => {
		let oQueFoiDigitado = event.target.value
		
		this.setState({
			comentarioDoUsuario: oQueFoiDigitado
		})
		console.log(oQueFoiDigitado)
		
	}
	
	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.comentarioDoUsuario}
				onChange={this.onChangeComentario}
			/>
			
			<button onClick={this.props.aoEnviar}>Enviar
				
			</button>
		</div>
		
	}
	
}

