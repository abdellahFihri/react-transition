import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition' //npm i react-transition --save
import '../css/App.css';

class TransitionComp extends Component{
state={
    show:true
}

showDiv=()=>{
    this.setState({show:!this.state.show?true:false})
}
    render(){
        return(
            <div>
                <Transition   //transition is to get a state to apply css effects( console log state to see) it returns a function
                in={this.state.show}
                timeout={{
                    enter:2000,
                    exit:50
                }}
                enter={true}
                exit={true}
                onEnter={(node)=>{console.log('enter')}}
                onExit={(node)=>{console.log('exit')}}
                // mountOnEnter  // and this will  elt the element take back its space in the  view
                // unmountOnExit //this will free up the space that the element is using when its hidden
                >
                   { state=> 
                   <div className={`square square-${state}`}>
                       {`square square-${state}`}

                   </div>
                   }
                    
                </Transition>
            {/* { this.state.show?
             <div style={{background:'red',height:'100px'}}></div>
             :null
            } */}
            <button className="showDiv" onClick={this.showDiv}>show div</button>
            </div>

        )
    }
}


export default TransitionComp;