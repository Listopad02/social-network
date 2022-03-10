import React, { FC } from 'react'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'

const UserItems:FC = () => {
  return (
    <Box sx={{ 
        display: 'flex',
        alignItems: 'center' }}>
        <Link to="/profile">
            <Box sx={{ 
                position: 'relative',
                marginRight: 5 }}>
            <img src="http://learnenglish.britishcouncil.org/sites/podcasts/files/2021-10/RS6715_492969113-hig.jpg" alt="profile" />
            <Box sx={{
                backgroundColor: 'green', 
                width: 4, 
                height: 4, 
                position: 'absolute',
                bottom: 2,
                left: 2}} />
            </Box>
            <span>Kirill Khlevnyy</span>
        </Link>
    </Box>
  )
}

export default UserItems