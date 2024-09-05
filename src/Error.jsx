import React from 'react';
import { Errorstyle } from './Errorstyle';
import { Button } from './Styles/Button';
import { NavLink } from 'react-router-dom';

const Errors = () => {
  return <Errorstyle>
    <img src="../images/error.svg" alt="Error" />

    <NavLink to="/">
    <Button className='btn'>Go Back</Button>
    </NavLink>
  </Errorstyle>
}

export default Errors;