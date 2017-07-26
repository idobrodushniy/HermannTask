import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import {Table} from 'semantic-ui-react';
import fetch from 'isomorphic-fetch';
class UniqueRaw extends Component{
    render(){
        return(
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

class WeatherTable extends Component {

    componentDidMount(){
        fetch(`/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1`,
            {
              method:'get'

            }).then((response) => {
            return response.json()
        }).then((data)=>{
            this.props.onLoadData(data.list)
        })
    }

    render() {
        var i = 0;
        return (
              <div className="WeatherTable">
                    <Table celled inverted selectable>
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
                                this.props.store.map((el)=>{
                                   i++;
                                   return(<UniqueRaw data={el.main} key={i}/>)
                                })
                            }
                        </Table.Body>
                    </Table>
              </div>
        );
    }
}

export default connect(
    state => ({
        store:state
    }),
    dispatch => ({
    onLoadData:(data) => {
        dispatch({type:'getdata', newstate:data})
    }
    })
)(WeatherTable);
