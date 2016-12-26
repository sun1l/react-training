import React, { Component, PropTypes } from 'react';
import ListItem from './ListItem';

class List extends Component {

    getListItems(list) {
        return list.map(function(item){
            return <ListItem key={item.id} name={item.name} jobTitle={item.jobTitle} />;
        });
    }

    render() {
        return (
            <table className="table table-striped">
                <tbody>
                    {this.getListItems(this.props.data)}
                </tbody>
            </table>
        );
    }
}

List.propTypes = {
    data: PropTypes.array.isRequired
};

export default List;