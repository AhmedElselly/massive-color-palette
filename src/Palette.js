import React, {Component} from 'react';
import ColorBox from './ColorBox';
import Slider from 'rc-slider';
import Navbar from './Navbar';
import 'rc-slider/assets/index.css';
import './Palette.css';

class Palette extends Component{
	constructor(props){
		super(props);
		this.state = {
			level: 500,
			format: 'hex'
		}
		this.changeLevel = this.changeLevel.bind(this);
		this.changeFormat = this.changeFormat.bind(this);
	}

	changeLevel(level){
		this.setState({level});
	}

	changeFormat(val){
		this.setState({format: val})
	}

	render(){
		const {level, format} = this.state;
		const {colors} = this.props.palette;
		const colorBoxes = colors[level].map(color => {
			return(
				<ColorBox background={color[format]} name={color.name} />
			)
		})
		return(
			<div className='Palette'>
				
				<Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} />
				<div className='Palette-colors'>
					{colorBoxes}
				</div>
				{/*footer eventually*/}
			</div>
		)
	}
}

export default Palette;