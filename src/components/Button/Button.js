import React from 'react';
import cls from 'classnames'
import './Button.css'

function Button({
    content,size,type='default'
}) {

    const classes = cls('btn', {
        'btn-default': type === 'default',
        'btn-category': type === 'category',
        'btn-primary': type === 'primary',
        'btn-size-large': size === 'large'
      })
    return (
        <button className={classes}>
            {content}
        </button>
    );
}

export default Button;