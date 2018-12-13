import React, { Component } from 'react';
import Nav from '../menubar/nav'; 

class Home extends Component {
   render() {
     const { classes } = this.props;

      return (

        <div>
            <Nav />
        </div>
      );
   }
}

export default Home;
