import styles from "./ClientForm.module.css"

import React from "react"

function CallAPI() {
    let _ws
    _ws = new WebSocket('wss://dev.api.fuelrats.com', [], {
        headers: { Authorization: 'Bearer 123' },
        ca: '-----BEGIN CERTIFICATE-----\n\n-----END CERTIFICATE-----\n',
        pfx: 'base64==',
        passphrase: 'mustbedefinedforpfx'
    });
}

function ClientForm() {
    // CallAPI()
    return (
        <form className='clientformRoot'>
            <table>
                <tbody>
                    <tr>
                        <td><b>Are you on emergency O2: </b></td>
                    </tr>
                    <tr>
                        <td><b>CMDR name: </b></td>
                    </tr>
                    <tr>
                        <td><b>System name: </b></td>
                    </tr>
                    <tr>
                        <td><b>Platform: </b></td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}

export default ClientForm
