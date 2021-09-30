import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Box display='flex' justifyContent='center'>
        <NavLink
          to='/home'
          style={{ marginRight: '20px' }}
          activeClassName='selected'
          activeStyle={{
            fontWeight: 'bold',
            color: 'red',
          }}
        >
          Home
        </NavLink>
        <NavLink
          to='/about'
          style={{ marginRight: '20px' }}
          activeStyle={{
            fontWeight: 'bold',
            color: 'red',
          }}
        >
          About
        </NavLink>
        <NavLink
          to='/restaurant'
          activeStyle={{
            fontWeight: 'bold',
            color: 'red',
          }}
        >
          Restaurant
        </NavLink>
      </Box>
    </div>
  );
};

export default Header;
