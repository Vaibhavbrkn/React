import React from 'react';
import {connect} from 'react-redux';
import {fetchUser ,fetchPostsAndUsers } from '../actions'

class UserHeader extends React.Component{      
    
    render(){
        
       const user = this.props.users.find(user=> user.id === this.props.userId);

       if(!user){
           return null;
       }

        return <div className = 'header'>
           {user.name}
        </div>
    }
}

const mapToStateToProps= state=>{
   
    return {users:state.users}
}

export default connect(mapToStateToProps)(UserHeader);