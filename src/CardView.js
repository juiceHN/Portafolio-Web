import React, { Component } from 'react';
import Card from './Card'
import ImgCalc from './ImgCalc.png';
import ImgChat from './ImgChat.png';
import ImgWeb from './ImgWeb.png';
import ImgMemoria from './ImgMemoria.png';
import ImgShark from './ImgShark.png';
import ImgContador from './ImgContador.png';
import ImgPortafolio from './ImgPortafolio.png';
import ImgMaze from './ImgMaze.png';

class CardView extends Component{
	render(){
		return(
			<div className='viewer'>
				<Card 
				title='First Css Drawing Recreation'
				imglink={ImgShark}
				link='https://codepen.io/JuiceHN/pen/WOWZKJ'
				parr='Recreation of a drawing using html and css on Codepen'
				/>
				<Card
				title='Memory Game'
				imglink={ImgMemoria}
				link='https://codepen.io/JuiceHN/pen/vWQNxE'
				parr='Alchemy themed classic memory game on Codepen'
				/>
				<br />
				<Card
				title='Chat: Client-Server Communication'
				imglink={ImgChat}
				link='https://github.com/juiceHN/ChatWeb'
				parr='Msn themed chat made with html, css and js'
				/>
				<Card
				title='Calculator'
				imglink={ImgCalc}
				link='https://github.com/juiceHN/Calculadora'
				parr='Oldschool style looking calculator, follows most of Airbnb style guide'
				/>
				<br />
				<Card
				title='Web Page Proyect'
				imglink={ImgWeb}
				link='https://github.com/juiceHN/ProyectoWeb'
				parr='Using react to copy a webpage style'
				/>
				<Card
				title='Redux Counter'
				imglink={ImgContador}
				link='https://github.com/juiceHN/Contador'
				parr='Simple counter using Redux'
				/>
				<br />
				<Card 
				title='Poke-Maze'
				imglink={ImgMaze}
				link='https://github.com/juiceHN/laberinto-pokemon'
				parr='Pokemon inspired maze'
				/>
				<Card
				title='This Proyect'
				imglink={ImgPortafolio}
				link='https://github.com/juiceHN/Portafolio-Web'
				/>
			</div>
			)
	}
}
export default CardView;