import styles from './App.module.css'

import React from 'react'
import { hot } from 'react-hot-loader/root'
import {
    Text,
} from 'react-native'
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom'

import { ReactComponent as BrandSvg } from '../public/brand.svg'
import Welcome from './Welcome'
import ClientForm from './ClientForm'
import CreateRequest from './CreateRequest'

function NonActive() {
    return (
        <Text>Please complete the form on the right</Text>
    )
}

function App() {
    return (
        <BrowserRouter>
            <div className='root'>
                <div className='menu'>
                    <div className='menuLogo'>
                        <BrandSvg />
                    </div>
                    <div style={styles.mainContent} id='menuContent'>
                        <NonActive />
                    </div>
                </div>
                <div className='mainContent'>
                    <Switch>
                        <Route exact path='/' component={Welcome} />
                        <Route path='/client' component={ClientForm} />
                    </Switch>
                    <CreateRequest />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default hot(App)
