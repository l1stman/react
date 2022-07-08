import React, { Component } from 'react'
import axios from 'axios'

export default class BaseComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    getData() {
        axios.get('http://jsonplaceholder.typicode.com/users').then(res => {
            var data = res.data
            this.setState({ data: data })
        })
    }
    componentDidMount() {
        this.getData()
    }
    render() {
        return (


            <table>
                <thead>
                    <tr>
                        <th colspan="3">Users</th>
                        <th colspan="3">Data</th>
                        <th colspan="3">Company</th>
                        <th colspan="6">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Cols */}
                    <tr>
                        <td id="Cords">id</td>
                        <td id="Cords">name</td>
                        <td id="Cords">username</td>
                        <td id="Cords">email</td>
                        <td id="Cords">phone</td>
                        <td id="Cords">Website</td>
                        <td id="Comp">name</td>
                        <td id="Comp">catchPhrase</td>
                        <td id="Comp">bs</td>
                        <td id="Adr">street</td>
                        <td id="Adr">suite</td>
                        <td id="Adr">city</td>
                        <td id="Adr">zipcode</td>
                        {/* Geo */}
                        <td id="Adr" colspan="2">Geo</td>
                    </tr>

                    {
                        this.state.data.map(user =>
                        (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                                {/* Company */}
                                <td>{user.company.name}</td>
                                <td>{user.company.catchPhrase}</td>
                                <td>{user.company.bs}</td>
                                {/* Address */}
                                <td>{user.address.street}</td>
                                <td>{user.address.suite}</td>
                                <td>{user.address.city}</td>
                                <td>{user.address.zipcode}</td>
                                 <td>{user.address.geo.lat}</td>
                                 <td>{user.address.geo.lng}</td>
                            </tr>
                        )
                        )
                    }
                </tbody>
            </table>




        )
    }
}