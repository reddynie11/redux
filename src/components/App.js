import React from 'react';
import {connect} from 'react-redux';

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
export default connect(mapStatetoProps,null)(App);