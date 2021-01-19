import "./Welcome.css"
import { React } from "react"
import { Button } from 'react-native';

import {
    Link,
} from "react-router-dom"

function Welcome() {
    return (
        <form className='clientformRoot'>
            <table>
                <tbody>
                    <tr>
                        <td><t1>Welcome to the Fuelrats</t1></td>
                    </tr>
                    <tr>
                        <td><t2>Do you need fuel?</t2></td>
                    </tr>
                    <tr>
                        <td><b><Link to="/client"><Button type='outline' className='btnYes' accessibilityLabel='Yes, I need fuel' title='Yes' /></Link></b></td>
                    </tr>
                    <tr>
                        <td><b>No</b></td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}

export default Welcome
