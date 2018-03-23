import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a
      href=""
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>

  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,

  //proptypes.node要求属性是可以渲染的节点
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link


