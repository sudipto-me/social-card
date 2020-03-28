import React, {Component} from 'react';
import axios from 'axios';

class UsersLists extends Component {
    state = {
        users: [],
        page: 1,
        loadingUsers: true,
    }

    componentDidMount() {
        axios.get('https://randomuser.me/api/?results=16&page='+this.state.page).then(
            res => this.setState({
                users: res.data.results,
                page: this.state.page + 1,
                loadingUsers: false,

            }),
        );


    }

    loadNextPage = (e) => {
        axios.get('https://randomuser.me/api/?results=16&page='+this.state.page).then(
            res => this.setState({
                users: res.data.results,
                page: this.state.page + 1,
                loadingUsers: false,

            }),
        );

        window.scrollTo(
            {
                top: 0,
                behavior: "smooth",
            }
        );
    }


    render() {
        if (this.state.loadingUsers === true) {
            return (
                <div className="row">
                    <div className="col text-center">Loading</div>
                </div>
            )
        }
        return (
            <div className="users-card-list">
                <div className="row">
                    {
                        this.state.users.map((user)=>(
                            <div key={user.id.value ? user.id.value : Math.random()} className="col-lg-3">
                                <div className="single-user-card">
                                    <div className="user-photo">
                                        <img src={user.picture.large} alt="user-img"/>
                                    </div>
                                    <div className="user-details">
                                        <ul>
                                            <li>Name: {user.name.title} {user.name.first} {user.name.last}</li>
                                            <li>Email: {user.email}</li>
                                            <li>Phone: {user.cell}</li>
                                            <li>Address: {user.location.city} {user.location.state} {user.location.country} {user.location.postcode}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="load-more-btn text-center">
                            <button onClick={this.loadNextPage} className="btn btn-success">Load
                                Page {this.state.page}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UsersLists;