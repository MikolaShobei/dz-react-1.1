import React, {Component} from 'react';
import './users.css'

class UserComponents extends Component {
    render() {
        let {item, cls} = this.props
        return (
            <div className={cls}>
                {item.name} - {item.age} - {item.status.toString()} - {item.address.city} - {item.address.country} - {item.address.street} - {item.address.houseNumber}
            </div>
        );

    }

}