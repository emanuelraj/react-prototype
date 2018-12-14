import React, { Component } from 'react';
import Nav from '../menubar/nav';
import ReactDOM from 'react-dom';
import StackedBarChart from './barchart';

class Charts extends Component {
    render() {
        const { classes } = this.props;

        return (

            <div>
                <Nav />
                <div class="main-panel">
                    <div class="content">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-8">
                                  <div id="container">
                                    <StackedBarChart />
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Charts;
