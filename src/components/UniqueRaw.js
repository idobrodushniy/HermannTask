import React, {Component} from 'react';
import {Table} from 'semantic-ui-react';

export default class UniqueRaw extends Component {
    render() {
        return (
            <Table.Row>
                <Table.Cell>{this.props.data.grnd_level}</Table.Cell>
                <Table.Cell>{this.props.data.humidity}</Table.Cell>
                <Table.Cell>{this.props.data.pressure}</Table.Cell>
                <Table.Cell>{this.props.data.sea_level}</Table.Cell>
                <Table.Cell>{this.props.data.temp}</Table.Cell>
                <Table.Cell>{this.props.data.temp_kf}</Table.Cell>
                <Table.Cell>{this.props.data.temp_max}</Table.Cell>
                <Table.Cell>{this.props.data.temp_min}</Table.Cell>
            </Table.Row>
        );
    }
}