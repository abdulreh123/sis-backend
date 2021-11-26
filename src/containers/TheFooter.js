import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">IOT</a>
        <span className="ml-1">&copy; NEU</span>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
