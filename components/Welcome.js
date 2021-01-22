import styles from "./Welcome.module.css"
import { React } from "react"
import Router from "next/router";

function Welcome() {
    return (
        <form className='clientformRoot'>
            <table>
                <tbody>
                    <tr>
                        <td className={styles.t1}>Welcome to the Fuelrats</td>
                    </tr>
                    <tr>
                        <td className={styles.t2}>Do you need fuel?</td>
                    </tr>
                    <tr>
                        <td>
                            <button className={styles.defaultButton, styles.btnYes} onClick={btnYesClick}>Yes</button>
                            <button className={styles.defaultButton, styles.btnNo} onClick={btnNoClick}>No</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}

function btnYesClick(event) {
    event.preventDefault()
    Router.push('/newclient')
}

function btnNoClick(event) {
    event.preventDefault()
    Router.push('https://kiwi.fuelrats.com/')
}

export default Welcome
