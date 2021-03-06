import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import './App.css';
import '../node_modules/swiper/dist/css/swiper.css';
import ImgCalc from './ImgCalc.png';
import ImgChat from './ImgChat.png';
import ImgWeb from './ImgWeb.png';
import ImgMemoria from './ImgMemoria.png';
import ImgShark from './ImgShark.png';
import FaGithub from 'react-icons/lib/fa/github'
import FaStepForward from 'react-icons/lib/fa/step-forward';
import FaStepBackward from 'react-icons/lib/fa/step-backward';
import ImgContador from './ImgContador.png';
import ImgMaze from './ImgMaze.png';

class VistaAlbums extends Component{
	    constructor(props) {
			super(props)
			this.goNext = this.goNext.bind(this)
			this.goPrev = this.goPrev.bind(this)
			this.swiper = null
	}
	 goNext() {
        if (this.swiper) this.swiper.slideNext()
      }

      goPrev() {
        if (this.swiper) this.swiper.slidePrev()
	}

	render(){
		const params = {
			effect: 'coverflow',
			slidesPerView: 3,
			loop: true,
			coverflowEffect: {
				rotate: 50,
				depth: 100,
				modifier: 1,
				slideShadows:true,
			},
			pagination:{
				el: '.swiper-pagination',
				clickable: true,
				dynamicBullets: true
			}
      }
		return(
			<div className='visor'>
				<Swiper {...params} ref={node => {if(node) this.swiper = node.swiper} }>
					<img className='pic' src={ImgShark} />
					<img className='pic' src={ImgMemoria}/>
					<img className='pic' src={ImgChat}/>
					<img className='pic' src={ImgCalc} />
					<img className='pic' src={ImgWeb}/>
					<img className='pic' src={ImgMaze}/>
					<img className='pic' src={ImgContador}/>
				</Swiper>
				<div className='control'>
					<FaStepBackward onClick={this.goPrev} />
					<a href='https://github.com/juiceHN?tab=repositories'><FaGithub /></a>
					<FaStepForward onClick={this.goNext} />
				</div>
				<div className='espacio' />
			</div>
			);
	}
}

export default VistaAlbums;
