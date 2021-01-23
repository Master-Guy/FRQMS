import React from 'react'
import { v4 as uuidv4 } from 'uuid';

function QueueClient(props) {
    if (props.client) {
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
    return <p>loading client information...</p>
}

function QueueItem(props) {
    if (props.qi && props.qi.uuid) {
        return (
            <ul>
                <li><b>UUID: </b>{props.qi.uuid}</li>
                <li><b>Arrival time: </b>{props.qi.arrival_time}</li>
                <li><b>Pending: </b>{props.qi.pending}</li>
                <li><b>Client: </b><QueueClient key={props.qi.uuid} client={props.qi.client} /></li>
            </ul>
        )
    }
    return <p>loading queue...</p>
}

function ShowQueueData(props) {
    if (props.queueData && typeof (props.queueData) == 'object') {
        return Object.keys(props.queueData).map(idx => <QueueItem key={props.queueData[idx].uuid} qi={props.queueData[idx]} />)
    }
    return <p></p>
}

function CreateRequest(props) {
    let queueData = props.queueData
    // Get the clients own case details
    if (process.browser) {
        let myCase = JSON.parse(localStorage.getItem('case'))
        console.log(myCase)
        if (!myCase) {
            console.log('Creating new UUID')
            myCase = {
                'uuid': uuidv4()
            }
            localStorage.setItem('case', JSON.stringify(myCase))
        }
        console.log(queueData)
        let myQueuedCase = queueData.filter(rescue => rescue.uuid == myCase.uuid)
        if (myQueuedCase[0]) {
            myCase = myQueuedCase[0]
            localStorage.setItem('case', JSON.stringify(myCase))
        }
        console.log(myCase)
    }
    return (
        <div>
            <ShowQueueData key="queueData" queueData={queueData} />
        </div>
    )
}

export default CreateRequest
