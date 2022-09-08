import React from 'react';
import './Input.scss';
import { ReactComponent as Blot } from '../../../img/icons/blot.svg';

const Input = ({ label, handlerKey, onBlur, refInput, onChange }) => {
    return (
        <div className='input'>
            <input
                type='text'
                placeholder={label}
                onKeyDown={handlerKey}
                onBlur={onBlur}
                ref={refInput}
                onChange={onChange}
            />
            <Blot />
        </div>
    );
};

export default Input;
