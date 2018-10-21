import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../redux/actions/userActions';
import UserList from '../components/UserList';
import axios from 'axios';
import AddUser from '../components/AddUser';

class UsersPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: ''
            },
            placeholder: 'Enter Github Username . . .'
        };
    }

    onChange = (e) => {
        const user = this.state.user;
        user.name = e.target.value;
        this.setState({
            user
        });
    }

    onSave = (e) => {
        e.preventDefault();
        axios.get(`https://api.github.com/users/${this.state.user.name}`)
            .then(result => {
                this.setState({placeholder: 'Enter Github Username . . .'});
                this.props.actions.addUser(result.data);
            })
            .catch(err => {
                console.log('User not found', err);
                this.setState({placeholder: 'User not found.'});
            })
        this.setState({
            user: {
                ...this.state.user, 
                name: ''
            }
        });
    }

    render() {
        return (
            <userpage>
                <UserList users={this.props.users}/>
                <AddUser 
                    userName={this.state.user.name} 
                    onChange={this.onChange} 
                    onSave={this.onSave}
                    placeholder={this.state.placeholder}/>
            </userpage>
        );
    }
}

function mapStateToProps(state, ownProps) { 
    return{};
}

function mapDispatchToProps(dispatch) {
    return{
        actions: bindActionCreators(userActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
