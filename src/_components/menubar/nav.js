
import React from 'react';


class Navigation extends React.Component {

    // state = {
    //     anchor: 'left',
    //   };
    
    //   handleChange = event => {
    //     this.setState({
    //       anchor: event.target.value,
    //     });
    //   };

    constructor(props){
        super(props);
        this.state={
            username: '',
            password: '',
            showPassword: false,
            anchor: 'left',
        }
    }

    render() {
        // const { classes } = this.props;
        // const { anchor } = this.state;

        return(
            // <Drawer
            //     variant="permanent"
            //     classes={{
            //     paper: classes.drawerPaper,
            //     }}
            //     anchor={anchor}
            // >
            //     <List component="nav">
            //         <ListItem button component='a' href="/home">
            //         <ListItemIcon>
            //             <InboxIcon />
            //         </ListItemIcon>
            //         <ListItemText primary="Home"/>
            //         </ListItem>

            //         <ListItem button component='a' href="/vendor">
            //         <ListItemIcon>
            //             <InboxIcon />
            //         </ListItemIcon>
            //         <ListItemText primary="Vendors"/>
            //         </ListItem>
            //         <ListItem button component='a' href="/product-catlog">
            //         <ListItemIcon>
            //             <DraftsIcon />
            //         </ListItemIcon>
            //         <ListItemText primary="Product Category"/>
            //         </ListItem>
            //     </List>
            //     <Divider />
            //active
            // </Drawer>

            <div  className="sidebar" data-color="purple" data-background-color="black" data-image="../assets/img/sidebar-2.jpg">
                <div  className="logo">
                    <a href="http://www.creative-tim.com"  className="simple-text logo-normal">
                    React Prototype
                    </a>
                </div>
                <div  className="sidebar-wrapper">
                    <ul  className="nav">
                        <li  className="nav-item">
                            <a  className="nav-link" href="/">
                            <i  className="material-icons">library_books</i>
                            <p>Other Platform Integrations</p>
                            </a>
                        </li>
                        <li  className="nav-item ">
                            <a  className="nav-link" href="/users">
                            <i  className="material-icons">person</i>
                            <p>User Profile</p>
                            </a>
                        </li>
                        <li  className="nav-item ">
                            <a  className="nav-link" href="/charts">
                            <i  className="material-icons">dashboard</i>
                            <p>Charts</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navigation;
// Navigation.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };
  
//   export default withStyles(styles)(Navigation);