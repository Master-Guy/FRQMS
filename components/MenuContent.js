import styles from './MenuContent.module.css'
import React from 'react'
import Router from 'next/router'

function MenuContent() {
    return <ActiveCase />
    return null
}

class ActiveCase extends React.Component {
    constructor(props) {
        super(props)
        if (process.browser) {
            let storedCase = JSON.parse(localStorage.getItem('case'))
            let readableEmergencyO2 = 'Err'
            if (storedCase && storedCase.client && storedCase.client.o2_status === true) {
                readableEmergencyO2 = 'Yes'
            } else {
                readableEmergencyO2 = 'No'
            }
            this.state = {
                myCase: storedCase,
                emo2: readableEmergencyO2
            }
        }
    }

    tick() {
        if (process.browser) {
            let storedCase = JSON.parse(localStorage.getItem('case'))
            let readableEmergencyO2 = 'Err'
            if (storedCase && storedCase.client && storedCase.client.o2_status === true) {
                readableEmergencyO2 = 'Yes'
            } else {
                readableEmergencyO2 = 'No'
            }
            this.setState({
                myCase: storedCase,
                emo2: readableEmergencyO2
            });
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            300
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        if (this.state && this.state.myCase && this.state.myCase.pending === false) {
            console.log('Pushing to kiwi')
            return (
                <div><a href="/kiwi" className={styles.HiddenLink}>Please click here to go to our chat</a><hr />This will happen automatically in the future.</div>
            )
            /*
            Router.push('/kiwi')
            return null
            */
        }
        if (this.state && this.state.myCase && this.state.myCase.client) {
            return (
                <div>
                    <b>Your case details</b><br />
                    <br />
                    <div className={styles.activeCase}>
                        <b>Ingame name:</b><br />
                        {this.state.myCase.client.client_name}<br />
                        <br />
                        <b>Platform:</b><br />
                        {this.state.myCase.client.platform}<br />
                        <br />
                        <b>Emergency o2:</b><br />
                        {this.state.emo2}<br />
                        <br />
                        <b>Position in queue:</b><br />
                        {'X/Y'}<br />
                        <br />
                    </div>
                </div>
            ) // FIXME: X/Y should be the actual queue position
        } else {
            return <div>{'Please complete the form on the right'}</div>
        }
    }
}

export default MenuContent
