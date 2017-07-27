import loadDataSet from '../actions/loadDataSet';
import {connect} from 'react-redux'
import React, {Component} from 'react';
import '../App.css';
import {Table, Button} from 'semantic-ui-react';
import jsPDF from 'jspdf';
import $ from 'jquery';
import UniqueRaw from '../components/UniqueRaw';

class WeatherTable extends Component {

    handleClickPDF = () => {
        function tableToJSON(table) {
            var data = [];
            var headers = [];
            for (let i = 0; i < table.rows[0].cells.length; i++) {
                headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi, '');
            }

            for (let i = 1; i < table.rows.length; i++) {

                var tableRow = table.rows[i];
                var rowData = {};

                for (let j = 0; j < tableRow.cells.length; j++) {
                    rowData[headers[j]] = tableRow.cells[j].innerHTML;
                }

                data.push(rowData);
            }

            return data;
        }

        var table = tableToJSON($('#dataset').get(0))
        var doc = new jsPDF({orientation: 'landscape', unit: 'pt', format: 'a4'});
        doc.cellInitialize();
        $.each(table, function (i, row) {
            $.each(row, function (j, cell) {
                doc.cell(10, 150, 80, 20, cell, i);
            })
        })
        doc.output('dataurlnewwindow')
    }

    componentDidMount() {
        this.props.onLoadData()
    }

    render() {
        return (
            <div className="WeatherTable">
                <Table celled inverted selectable id="dataset">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>grnd_level</Table.HeaderCell>
                            <Table.HeaderCell>humidity</Table.HeaderCell>
                            <Table.HeaderCell>pressure</Table.HeaderCell>
                            <Table.HeaderCell>sea_level</Table.HeaderCell>
                            <Table.HeaderCell>temp</Table.HeaderCell>
                            <Table.HeaderCell>temp_kf</Table.HeaderCell>
                            <Table.HeaderCell>temp_max</Table.HeaderCell>
                            <Table.HeaderCell>temp_min</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {
                            this.props.store.map((el) => {
                                return (<UniqueRaw data={el.main} key={el.dt}/>)
                            })
                        }
                    </Table.Body>
                </Table>
                <Button basic inverted color='olive' onClick={this.handleClickPDF}>PDF</Button>
            </div>
        );
    }
}


export default connect(
    state => ({
        store: state
    }),
    dispatch => ({
        onLoadData: () => {
            loadDataSet(dispatch)
        }
    })
)(WeatherTable);