import React from 'react';
import { Button } from './Button';

const Row = props => {
    return (
        <div className="row">
        <Button handleClick={props.handleClick}>{props.values.first}</Button>
        <Button handleClick={props.handleClick}>{props.values.second}</Button>
        <Button handEqual={props.handEqual} handleClick={props.handleClick}>{props.values.third}</Button>
        <Button handleClick={props.handleClick}>{props.values.forth}</Button>
      </div>
    )
}

export default Row;