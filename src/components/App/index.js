import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'

import classNames from 'classnames/bind'
import styles from './index.less'
let cx = classNames.bind(styles)
const { Header, Sider, Content } = Layout
const {Item} = Menu
class App extends React.Component {
  state = {
    collapsed: false
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render () {
    return (
      <Layout className={cx('app-box')}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Item key="1">
              <Icon type="user" />
              <span className={cx('nav-text')}><Link to='/home' replace>首页</Link></span>
            </Item>
            <Item key="2">
              <Icon type="video-camera" />
              <span className={cx('nav-text')}><Link to='/counter' replace>计数页面</Link></span>
            </Item>
            <Item key="3">
              <Icon type="upload" />
              <span className={cx('nav-text')}><Link to='/databoard' replace>数据图表</Link></span>
            </Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default App
