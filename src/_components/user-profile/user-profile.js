import React, { Component } from 'react';
import Nav from '../menubar/nav';


const user_data = [
    {
        id: 1,
        name : "Allen", 
        pic: "https://avatars2.githubusercontent.com/u/4090805?s=400&v=4",
        created_date: "18-11-2017",
        time_to_end_ban: "20 Days",
        comment: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
    },
    {
        id: 2,
        name : "Emanuel", 
        pic: "https://pbs.twimg.com/profile_images/461410559326289920/_1ZjkJjq_400x400.jpeg",
        created_date: "18-11-2017",
        time_to_end_ban: "20 Days",
        comment: "Testing"
    }
  ];


class UserProfile extends Component {

    constructor(props){
        super(props);
        this.state={
            id: 1,
            name : "Allen", 
            pic: "https://avatars2.githubusercontent.com/u/4090805?s=400&v=4",
            created_date: "18-11-2017",
            time_to_end_ban: "20 Days",
            comment: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
        }
    }

    componentDidMount() {
        // const { dispatch } = this.props;
        // https://avatars2.githubusercontent.com/u/4090805?s=400&v=4
        
        const { match : {params } } = this.props;

        if(params.id){
            // const { dispatch } = this.props;
            // dispatch(vendorAction.getVendorById(params.id));
            let selected_user = user_data.filter((item)=>{
                return item.id == params.id
            })

            this.setState({ name: selected_user[0].name })
            this.setState({ pic: selected_user[0].pic })
            this.setState({ created_date: selected_user[0].created_date })
            this.setState({ time_to_end_ban: selected_user[0].time_to_end_ban })  
            this.setState({ comment: selected_user[0].comment })  
   
            console.log("params.id ", params.id);
            console.log("selected_user ", selected_user);
        }

        
//user_data
        //dispatch(vendorAction.getVendor());
    }

    render() {
          
        return (

            <div>
                <Nav />
                <div class="main-panel">
                    <div class="content">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="col-md-4">
                                        <div class="card card-profile">
                                            <div class="card-avatar">
                                                <a href="#pablo">
                                                    <img class="img" src={this.state.pic} />
                                                </a>
                                            </div>
                                            <div class="card-body">
                                                <h4 class="card-title">{this.state.name}</h4>
                                                <h6 class="card-category">Create Date : { this.state.created_date}</h6>
                                                <h6 class="card-category">Time To End Ban : { this.state.time_to_end_ban}</h6>
                                                <h6 class="card-category">Comments </h6>
                                                <p class="card-description">
                                                    {this.state.comment}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>        </div>
        );
    }
}

export default UserProfile;
