import "./ClientForm.css"

import React from "react"

function ClientForm() {
    return (
        <form className='clientformRoot'>
            <table>
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
            </table>
        </form>
    )
}

export default ClientForm
