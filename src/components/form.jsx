import React, { Component } from 'react';
import {connect} from "react-redux";
import { addList } from '../storage/add/addAction';


class Forms extends Component {
    state = { 
        id:this.props.listItems.length+1,
        name:"",
        size:"",
        desc:""
     }

    handleChangeName = e => {
        this.setState({ name: e.target.value });
    }

    handleChangeSize = e => {
        this.setState({ size: e.target.value });
    }

    handleChangeDesc = e => {
        this.setState({ desc: e.target.value });
    }

    handleSave = id =>{
        this.setState({id:this.state.id+1});
        this.props.save(this.state);
        this.props.history.replace("/admin");
    }
    render() { 
        return  (
        <form>
       
          <div className="form-group row m-2">
            <label htmlFor="Name" className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
                <input type="text" value={this.state.name} onChange={this.handleChangeName} className="form-control" id="Name" placeholder="Name"/>
            </div>
        </div>
        
        <div className="form-group row m-2">
            <label htmlFor="Size" className="col-sm-2 col-form-label">Size</label>
            <div className="col-sm-10">
                <input type="text" value={this.state.size} onChange={this.handleChangeSize} className="form-control" id="Size" placeholder="Size"/>
            </div>
        </div>

        <div className="form-group row m-2">
            <label htmlFor="Desc" className="col-sm-2 col-form-label">Description</label>
            <div className="col-sm-10">
                <input type="text" value={this.state.desc} onChange={this.handleChangeDesc} className="form-control" id="Desc" placeholder="Decription"/>
            </div>
        </div>
        <button onClick={()=>this.handleSave(this.state.id)} type="button" className="btn btn-success m-3">Save</button>
      </form>
      );
    }
}


const mapStateToProps = state => {
    // console.log("list items",state)
    return {
          listItems : state.items
    }
}  

const mapDispatchToProps = (dispatch,item) => {
    // console.log("dispatched",item);
   return {
    save: item => dispatch(addList(item))
   }
    
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Forms);