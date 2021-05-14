import React, {Component} from 'react';
import './ColorBox.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class ColorBox extends Component{
	constructor(props) {
		super(props);
		this.state = {
			copied: false
		}
		this.handleChangeCopy = this.handleChangeCopy.bind(this);
	}

	handleChangeCopy(){
		this.setState({copied: true}, () => {
			setTimeout(() => this.setState({copied: false}), 1500);
		});
	}

	render(){
		const {name, background} = this.props;
		const {copied} = this.state;
		return(
			<CopyToClipboard text={background} onCopy={this.handleChangeCopy}>
				<div style={{background}} className='ColorBox'>
					<div style={{background}} className={`copy-overlay`}/>
					<div className='copy-container'>
						<div className='box-content'>
							<span>{name}</span>
						</div>
						<button className='copy-button'>{copied ? 'Copied' : 'Copy'}</button>
					</div>
					<span className='see-more'>More</span>
				</div>
			</CopyToClipboard>
		)
	}
}

export default ColorBox;