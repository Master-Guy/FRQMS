import useSWR from 'swr'
import React from 'react'
import Props from '../pages/[props]'

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
    return (
        <ul>
            <li><b>UUID: </b>{props.qi.uuid}</li>
            <li><b>Arrival time: </b>{props.qi.arrival_time}</li>
            <li><b>Pending: </b>{props.qi.pending}</li>
            <li><b>Client: </b><QueueClient client={props.qi.client} /></li>
        </ul>
    )
}

function QueueData(props) {
    const { data, error } = useSWR(props.apiURL, fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return Object.keys(data).map(idx => <QueueItem key={data[idx].uuid} qi={data[idx]} />)
}

const fetcher = (...args) => fetch(...args).then(res => res.json())
function CreateRequest(props) {
    return (
        <div>
            <QueueData apiURL={props.apiURL} />
        </div>
    )
}

export default CreateRequest
