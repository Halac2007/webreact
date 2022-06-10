import React, { useState } from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuIcon,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  AdbIcon,
} from '@mui/material'

const Header = () => {
  const [menus, setMemus] = useState(['Trang chủ', 'Thời sự', 'Xã hội', 'Kinh tế'])
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <img src="https://static-znews.zadn.vn/images/logo-zing-home.svg" alt="" width={'10%'} />

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: '2' }, justifyContent: 'space-evenly' }}>
              {menus.map((menu) => (
                <p>{menu}</p>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default Header
