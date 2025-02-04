// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = ({size, style, children}) => {
  return (
    <div className={`box box--${size}`} style={{fontStyle: 'italic', ...style}}>
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        medium lightblue box
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        large lightblue box
      </Box>
    </div>
  )
}

export default App
