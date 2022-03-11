import React, { FC } from 'react'
import { Box } from '@mui/material'

const UserItems:FC = () => {
  return (
    <Box sx={{ 
      display: 'flex',
      alignItems: 'center' }}>
        <Box sx={{ 
          position: 'relative',
          marginRight: 2,
          borderRadius: '50%',
          overflow: 'hidden' }}>
            <img src="http://learnenglish.britishcouncil.org/sites/podcasts/files/2021-10/RS6715_492969113-hig.jpg"
              alt="profile"
              width='50'
              height='50' />
            <Box sx={{
              backgroundColor: 'green', 
              width: 4, 
              height: 4, 
              position: 'absolute',
              bottom: 2,
              left: 2}} />
            </Box>
            <span>Kirill Khlevnyy</span>
    </Box>
  )
}

export default UserItems