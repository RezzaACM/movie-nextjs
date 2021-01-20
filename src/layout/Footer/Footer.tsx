import React from 'react'
import Style from './Footer.module.css';

interface Props {
    
}

const Footer = (props: Props) => {
    return (
        <div className={Style.myFooter}>
            <p className={Style.copyright}>© 2020 Heroku.com. All Rights Reserved</p>
        </div>
    )
}

export default Footer
