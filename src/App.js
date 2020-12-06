import React, {Component} from 'react';
import {users} from './dataBase/usersDB'
import UserComponents from "./components/userComponents";

class App extends Component {
    render() {
        return (
            <div>
                {

                    users.map((user, index) => {
                        let clsC = index % 2 ? 'skyblue': 'yellow';
                        return (<UserComponents
                                    item={user}
                                    cls={clsC}
                                    key={index}
                        />)


                    })


                }

            </div>
        );
    }
}

export default App;