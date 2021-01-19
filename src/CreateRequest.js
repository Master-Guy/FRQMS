import axios from 'axios'
import React from 'react'

function QueueClient(props) {
    return (
        <ul>
            <li><b>Name: </b>{props.client.client_name}</li>
            <li><b>System: </b>{props.client.client_system}</li>
            <li><b>Locale: </b>{props.client.locale}</li>
            <li><b>Platform: </b>{props.client.platform}</li>
            <li><b>Emergency o2: </b>{props.client.o2_status.toString()}</li>
        </ul>
    )
}

function QueueItem(props) {
    console.log('qi')
    console.log(props.qi)
    return (
        <ul>
            <li><b>UUID: </b>{props.qi.uuid}</li>
            <li><b>Arrival time: </b>{props.qi.arrival_time}</li>
            <li><b>Pending: </b>{props.qi.pending}</li>
            <li><b>Client: </b><QueueClient client={props.qi.client} /></li>
        </ul>
    )
}

export default class NewRequest extends React.Component {
    state = {
        queueItems: [],
    }

    componentDidMount() {
        axios.get("https://qms.localecho.net/api/v1/queue/")
            .then(res => {
                const results = res.data;
                this.setState({ queueItems: results });
            })
    }

    render() {
        console.log(this.state.queueItems)
        return (
            <div>
                {this.state.queueItems.map(qi => <QueueItem qi={qi} />)}
            </div>
        )
    }
}
