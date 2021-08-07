import React, { Component } from 'react'
import {connect} from "react-redux";

class ListItems extends Component {
      
      render() { 
      if(this.props.listItems.length===0)
            return <p>There are 0 Property in database. CLick on Add button to add property in database.</p>
      console.log(this.props.listItems)
      return ( 
      <div className="container">
            <table className="table">
                        <thead>
                        <tr>
                              <th scope="col">ID</th>
                              <th scope="col">Name</th>
                              <th scope="col">Size</th>
                              <th scope="col">Desciption</th>
                        </tr>
                        </thead>
                        <tbody>
                       {this.props.listItems.map(item => {
            
                      return <tr key = {item.id}>
                             <td>{item.id}</td>
                             <td>{item.name}</td>
                             <td>{item.size}</td>
                             <td>{item.desc}</td>
                        </tr>
                              })}
                       </tbody>
            </table>
      </div>
             );
      }
}

const mapStateToProps = state => {
      console.log("list items",state)
      return { 
            listItems : state.items
      }
}  

export default connect(mapStateToProps,null)(ListItems);