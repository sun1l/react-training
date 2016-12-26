import React, { Component, PropTypes } from 'react';

class ListItem extends Component {
    render () {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.jobTitle}</td>
            </tr>
        );
    }
}

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    jobTitle: PropTypes.string
};

export default ListItem;