import React, {Component} from 'react';
import { connect } from 'react-redux';
import Review from './Review';


class Request extends Component{

    constructor(props){
        super(props);
       this.state = {
            name : ''
        }
        console.log(this.state)
    // this.actionSubmit = this.actionSubmit.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        //let name = this.refs.name.value;
        //this.setState({name});
        //this.refs.name.value = '';
        //this.actionSubmit();
        //console.log(this.actionSubmit())
        this.props.onNameChange(this.props.name)
            }
        
    ComponentDidUpdate = (action, value) => {
         switch(action) {
             case 'ADDNUM':
             this.setState((prevState)=> {return {name: prevState.name + action.value}})   
         }
        }
        
    
   /* handleSubmit = (action, value,e) => {
        e.preventDefault;
        switch(action) {
            case 'ADDNUM':
            this.setState((prevState)=> {return {name: prevState.name + action.value}})
            break;
        }
        }*/
    
    handleChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    render(){
        return (
            <div>
                <form onSubmit= {this.handleSubmit}>
                    <div>
                    <label>Name </label>
                    <input
                    autoComplete = 'off' 
                    type = 'text'
                    onChange = {(event)=> this.handleChange(event)}
                    ref = 'name'
                    placeholder = 'Enter your name'
                    value = {this.state.name} 
                    />
                    </div>
                    
                    <div>
                    <label>Number </label>
                    <input type = 'text'/>
                    </div>
                    
                    <div>
                        <button 
                        onClick={() =>this.props.onNameChange(this.props.name)}>SUBMIT</button>
                    </div>
                </form>

                <Review  value= {this.props.dataname}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        dataname: state.name
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onNameChange: (name) => dispatch({type: "ADDNAME", name: name})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Request);