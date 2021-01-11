import "./App.css"

import React from "react"
import { hot } from "react-hot-loader/root"
import {
    AppRegistry, StyleSheet, Text, View,
} from "react-native"
import {
    Link, NativeRouter, Route,
} from "react-router-native"

import { ReactComponent as BrandSvg } from "./brand.svg"
import ClientForm from "./ClientForm.js"

const NonActive = () => <Text>Please fill in the rescue form on the right</Text>

function app() {
    return (
        <div className='root'>
            <div className='menu'>
                <div className='menuLogo'>
                    <BrandSvg />
                </div>
                <div className='menuContent' id='menuContent'>
                    <NonActive />
                </div>
            </div>
            <div className='mainContent'>
                <div>
                    <ClientForm />
                </div>
            </div>
        </div>
    )
}

export default hot(app)
