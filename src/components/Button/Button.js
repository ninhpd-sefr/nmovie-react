import React from 'react';
import cls from 'classnames'
import {Link} from 'react-router-dom'
import './Button.css'

function Button({
    content, size, type = 'default', as = 'button',to = 'login'
}) {

    const classes = cls('btn', {
        'btn-default': type === 'default',
        'btn-category': type === 'category',
        'btn-primary': type === 'primary',
        'btn-size-large': size === 'large'
    })
    
    return (
        as == 'a' ? <Link to={to} className={classes}>
            {content}
        </Link> : <button className={classes}>
            {content}
        </button>
    );
}

export default Button;