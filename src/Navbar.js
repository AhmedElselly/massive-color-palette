import React, {Component} from 'react';
import {
	Select,
	MenuItem
} from '@material-ui/core';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component{
	constructor(props){
		super(props);
		this.state = {
			format: 'hex'
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		this.setState({format: e.target.value});
		this.props.handleChange(e.target.value);
	}

	render(){
		const {format} = this.state;
		const {level, changeLevel} = this.props;
		return(
			<header className='Navbar'>
				<div className='logo'>
					<a href="#">ReactColorPicker</a>
				</div>

				
				<div className='slider-container'>
					<span>Level: {level}</span>
					<div className='slider'>
					<Slider defaultValue={level} 
						min={100} 
						max={900}
						step={100}
						onAfterChange={changeLevel}
					/>
					</div>
				</div>
				<div className='select-container'>
					<Select value={format} onChange={this.handleChange}>
						<MenuItem value='hex'>Hex - #ffffff</MenuItem>		
						<MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>		
						<MenuItem value='rgba'>RGBA - rgba(255,255,255,1.0)</MenuItem>		
					</Select>
				</div>
			</header>
		)
	}
}

export default Navbar;