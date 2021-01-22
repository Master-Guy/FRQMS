import styles from './Layout.module.css'

import React from 'react'

import BrandSvg from '../public/brand.svg'
import MenuContent from './MenuContent'

function Layout(props) {
    return (
        <div className='root'>
            <style>{`
                #__next,
                .root,
                html,
                body {
                    height: 100%;
                    width: 100%;
                    background-color: #111213;
                    display: flex;
                    margin: 0px;
                    padding: 0px;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    align-self: stretch;
                    color: #aaabac
                }
            `}</style>
            <div className={styles.menu}>
                <div className={styles.menuLogo}>
                    <BrandSvg />
                </div>
                <div className={styles.menuContent} id='menuContent'>
                    <MenuContent uuid={props.route.uuid} />
                </div>
            </div>
            <div className={styles.mainContent} id='mainContent'>
                <div id='testDiv' className={styles.testDiv}>
                    {props.subComponents}
                </div>
            </div>
        </div>
    )
}

export default Layout
