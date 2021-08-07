import React, { Component } from 'react'
import Header from "./header";
import ListItem from './listItem';
import { Route } from 'react-router-dom';


class Home extends Component {
      state = {  }
      render() { 
            return ( 
                  <div>
                        <Header history={this.props.history}/>
                        <Route path="/admin" exact render={(props) => <ListItem {...props}/>}/>
                  </div>
             );
      }
}
 
export default Home;