import React from 'react'

function Greetings({lang, children}) {
  return (
    <div>
        <div>
          <p lang={lang}>Hello {children}</p>  
        </div>
    </div>
  )
}

export default Greetings