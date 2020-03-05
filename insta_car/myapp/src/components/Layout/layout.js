import React from 'react';
import OneWay from '../OneWay/OneWay.js';
import { Layout, Menu} from 'antd';
import 'antd/dist/antd.css';

import './layout.css';

const { Header, Content} = Layout;

class Page extends React.Component {
  state = {
    current: 1,
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  handleMenu = (item) => {
      this.setState({
          current: parseInt(item.key),
      });
      console.log(item);
  }
  render() {
      const steps=[
          {
              title: "OneWay",
              content: <OneWay />
          },
          {
            
          }
      ]
    return (
<Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[this.state.current.toString()]}
        style={{ lineHeight: '64px' }}
        onClick = {(key) => this.handleMenu(key)}
      >
        <Menu.Item key="1">OneWay</Menu.Item>
        <Menu.Item key="2">RoundTrip</Menu.Item>
        <Menu.Item key="3">Multicity</Menu.Item>
        <Menu.Item key="4">Airport</Menu.Item>
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
    {steps[this.state.current - 1].content}
    </Content>
  </Layout>
    );
  }
}

export default Page;