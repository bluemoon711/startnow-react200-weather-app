import React from 'react';
import { updateSearchInput, getWeather } from './searchActions';

export default class SearchEntries extends React.Component {
    constructor(props) {
        super(props);
        this.handleLink = this.handleLink.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleLink(e){
        e.preventDefault();
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateSearchInput(value));
    }

    handleInput(e){
        e.preventDefault();
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateSearchInput(value));
    }
    
    handleClick(e) {
        e.preventDefault();
        const { input, dispatch } = this.props;
        dispatch(getWeather(input));      
    }

    render() {
        return (
            <div className='card border-0 mb-3'>
                <div className='card text-left'>
                    <div className='card-header'>
                        <div className='col-6'>
                            <div className='btn-group' role='group'>
                                <button type='button' value='San Diego' className='btn btn-secondary bg-primary' onClick={this.handleLink}>San Diego</button>
                                <button type='button' value='New York' className='btn btn-secondary bg-primary' onClick={this.handleLink}>New York</button>
                                <button type='button' value='Washington' className='btn btn-secondary bg-primary' onClick={this.handleLink}>Washington D.C</button>
                                <button type='button' value='London' className='btn btn-secondary bg-primary' onClick={this.handleLink}>London</button>
                                <button type='button' value='Tokyo' className='btn btn-secondary bg-primary' onClick={this.handleLink}>Tokyo</button>   
                            </div>                         
                        </div>
                    </div> 
                    <div className='card-block'>
                        <div className='col-lg-12'>
                            <div className='input-group'>
                                <input id="inputForm" type='text' className='form-control' placeholder='Toyko' 
                                onChange={this.handleInput} value={this.props.input} />
                                <span className='input-group-btn'>
                                    <button className='btn btn-primary' type='button' onClick={this.handleClick}>Go!</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}