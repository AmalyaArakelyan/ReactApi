import React, {Component} from 'react';
import {MDBTable, MDBTableBody, MDBTableHead} from 'mdbreact';
import Articles from "../Articles/Articles"
import Favorites from "../Articles/Favorites"



class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
                    <div>
                        <Favorites />
                        <Articles />
                    </div>

        );
    }
}

const UserList = ({users}) => (
    <MDBTable>
        <MDBTableHead color="primary-color" textWhite>
            <tr>
                <th>Id</th>
                <th>email</th>
                <th>Name</th>
            </tr>
        </MDBTableHead>
        <MDBTableBody>
            {users.map(user => (
                <tr key={user.uid}>
                    <td>{user.uid}</td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                </tr>

            ))}
        </MDBTableBody>
    </MDBTable>
);



export default HomePage;