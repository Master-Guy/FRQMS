import styles from './MenuContent.module.css'
import React from 'react'
import Router from 'next/router'

function MenuContent(props) {
    if (!props.uuid) {
        if (typeof window !== 'undefined') {
            let storedUUID = localStorage.getItem('uuid')
            if (storedUUID) {
                Router.push('/existingClient?uuid=' + storedUUID)
            }
        }
        return <p>Please complete the form on the right-hand side</p>
    } else {
        return <ActiveCase key={props.uuid} />
    }
}

function ActiveCase(props) {
    return <p>Active case</p>
}

export default MenuContent
