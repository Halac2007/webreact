import React, { useState } from 'react'

import { BottomNavigation, Toolbar } from '@mui/material'
import { red } from '@mui/material/colors'
import { Box } from '@mui/system'

const Footers = () => {
  const [infowebs, setInfoweb] = useState([
    'Tạp chí điện tử Tri thức trực tuyến',
    'Cơ quan chủ quản: Hội Xuất bản Việt Nam',
    'Giấy phép báo chí: số 75/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 26/02/2020',
    'Phó tổng biên tập phụ trách: Lâm Quang Hiếu',
    '© Toàn bộ bản quyền thuộc Tri thức trực tuyến',
  ])

  const [copyrights, setCopyrights] = useState([
    'Tòa soạn: Tầng 7, D29 Phạm Văn Bạch, Quận Cầu Giấy, Hà Nội',
    'Hotline: 0931.222.666 - Email: toasoan@zing.vn',
  ])
  return (
    <>
      <BottomNavigation sx={{ height: 250, background: '#e0e0e0', left: 0, justifyContent: 'space-evenly' }}>
        <Toolbar>
          <Box>
            <img src="https://static-znews.zadn.vn/images/logo-zing-home.svg" alt="" width={'15%'} />
            {infowebs.map((infoweb) => (
              <p>{infoweb}</p>
            ))}
          </Box>
          <Box>
            {copyrights.map((copyright) => (
              <p>{copyright}</p>
            ))}
          </Box>
        </Toolbar>
      </BottomNavigation>
    </>
  )
}

export default Footers
