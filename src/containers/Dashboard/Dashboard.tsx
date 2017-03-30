import { Col, Icon, Layout, Menu, Row } from 'antd';
import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import { CampaignListTable, DocListTable, UserListTable } from '../../components';

import './Dashboard.scss';

const { Sider, Content } = Layout;
/*
 - /campaigns; list page
   - modify; modal
   - :id/eval; page => - :id/docs; page => 
     - view doc; modal
 - /users; list page
   - modify; modal
 */

/*
campaigns/:id/docs
[
  {
    "id": 0,
    "campaignId": 0,
    "srcId": "string",
    "query": "string",
    "source": {},
    "reservedCount": 0,
    "labeledCount": 0,
    "status": "string"
  }
]
*/

class Dashboard extends React.Component<any, any> {
  public state = {
    collapsed: false,
    level: 999, // for test
  };

  public toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  public render() {
    const match = this.props.match;
    const subRoutes = (
      <div>
        <Route exact={true} path={`/campaigns`} component={CampaignListTable} />
        <Route exact={true} path={`/users`} component={UserListTable} />      
        <Route path={`${match.url}/:id/docs`} component={DocListTable} />
      </div>
    );
    return (
      <Router>
        <Layout id="components-layout-custom-trigger">
          <Sider
            trigger={null}
            collapsible={true}
            collapsed={this.state.collapsed}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Icon type="video-camera" />
                <span className="nav-text">캠페인 리스트</span>
                <Link to="/campaigns" />
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="user" />
                <span className="nav-text">사용자 리스트</span>
                <Link to="/users" />
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Row style={{ height: '30px' }}>
              <Col style={{ height: '30px' }}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                  style={{ marginTop: '5px' }}
                />
              </Col>
            </Row>
            <Content id="content" style={{ margin: '10px 10px', padding: 10, background: '#fff', minHeight: 280 }}>
              {subRoutes}
            </Content>
          </Layout>
          <div id="campaign-modal" />
        </Layout>
      </Router>
    );
  }
}

export default Dashboard;
