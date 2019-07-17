import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions';

class App extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <h1>I am App</h1>
            </div>
        )
    }
}

const mapStatetoProps = (state)=>{
    return{
        data :''
    }
}
export default connect(mapStatetoProps,actions)(App);