import React from 'react';
import cls from 'classnames'
import {Link} from 'react-router-dom'
import './Button.css'

function Button({
   href ="", content, size, type = 'default', as = 'button',to = '/login'
}) {

    const classes = cls('btn', {
        'btn-default': type === 'default',
        'btn-category': type === 'category',
        'btn-primary': type === 'primary',
        'btn-size-large': size === 'large'
    })

    return (
        as == 'a' ? <a href={href} target="_blank" className={classes}>
            {content}
        </a> : <Link to={to} className={classes}>
            {content}
        </Link>
    );
}

export default Button;