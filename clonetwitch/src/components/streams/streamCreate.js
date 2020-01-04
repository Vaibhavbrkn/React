import React from 'react';
import {connect} from 'react-redux';
import {createStream} from '../../actions';
import StreamForm from './StreamForm'

class streamCreate extends React.Component{


    onSubmit =(formValues)=>{
        this.props.createStream(formValues);
    }

    render(){
        return(
        <div>
            Create a stream
            <StreamForm onSubmit = {this.onSubmit}/>
        </div>

    )
}
}



export default connect (null , {createStream})(streamCreate);