import React from 'react'
import {Menu} from 'antd'
import {NavLink} from 'react-router-dom'
import './frame.css'

const Frame = props => {
  // eslint-disable-next-line react/prop-types
  const {children} = props
  const siderList = [
    {
      key: 'hello',
      path: '/hello',
      text: 'Hello',
    },
    {
      key: 'context',
      path: '/context',
      text: 'Context',
    },
    {
      key: 'editor',
      path: '/editor',
      text: 'Editor',
    },
    {
      key: 'count',
      path: '/count',
      text: 'Count', 
    },
    {
      key: 'drag',
      path: '/drag',
      text: 'Drag', 
    },
  ]

  return (
    <div className="frame">
      <Menu>
        {
          siderList.map(sider => (
            <Menu.Item mode="inline" key={sider.key} className="sider">
              <NavLink exact to={sider.path}>{sider.text}</NavLink>
            </Menu.Item>
          ))
        }
      </Menu>
      <div className="main">
        {children}
      </div>
    </div>
  )
}

export default Frame
