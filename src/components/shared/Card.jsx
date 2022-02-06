import React from 'react'
import PropTypes from 'prop-types'


function Card({children, reverse }) {
    /* coditional rendering through style
    return(
        <div
          className='card'
          style={{
              backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
              color: reverse ? '#fff' :'#000'
          }}
    ) */
    //conditionaal rendering through class
    return (
        <div className={`card ${reverse && 'reverse'}`}>
            {children}
        </div>
    )
}

Card.defaultProps = {
    reverse : false
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}
export default Card
