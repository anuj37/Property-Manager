import React, { Component } from 'react';
import {connect} from "react-redux";
import { deleteList } from '../storage/add/deleteAction';



class Header extends Component {
      
      // state={
      //       id:this.props.listItems.length+1,
      // }
      
      handleClick =() => {
            this.props.history.push("/add");
      }

      // handleDelete = id => {
      //       this.setState({id:this.state.id})
      // } 

      render() { 
            return (
            <div className="m-2">
              <span ><p className="h1">Property Manager</p></span>
              <button onClick={()=>this.handleClick()}type="button" className="btn btn-danger btn-sm m-2">Add</button>
              <button onClick={()=>this.props.Delete()} type="button" className="btn btn-warning btn-sm m-2">Delete</button>
            </div>

            );
      }
}

// const mapStateToProps = state => {
//       console.log("list items",state)
//       return {
//             item : state.DEL.items
//       }
// }  


const mapDispatchToProps = (dispatch) => {
      // console.log("dispatched",item);
     return {
      Delete: () => dispatch(deleteList())
     }
      
  }
   

export default  connect(null,mapDispatchToProps)(Header);
// export default  Header;