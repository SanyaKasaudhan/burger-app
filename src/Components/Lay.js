import React from 'react'

const Lay = (props) => {
  return (
    <div>

        <div>toolbar</div>
        <main>
            {props.children}
        </main>
    </div>
  )
}

export default Lay