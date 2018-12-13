import React, { Component } from 'react';
import Nav from '../menubar/nav';

class Users extends Component {
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
                                    <ul>
                                        <li><a href="/users/1"> User 1 </a></li>
                                        <li><a href="/users/2"> User 2 </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Users;
