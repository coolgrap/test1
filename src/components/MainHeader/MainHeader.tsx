import { Button, Col, Layout, Row } from 'antd';
import React from 'react';

import './MainHeader.scss';

const { Header } = Layout;

export default class MainHeader extends React.Component<any, any> {
  public static propTypes = {
    isLoggedIn: React.PropTypes.bool,
    onLogOut: React.PropTypes.func,
  };

  public static defaultProps = {
    isLoggedIn: false,
    onLogOut: () => { console.error('logout func not defined'); },
  };

  public render() {
    return (
      <Layout>
        <Header style={{ color: 'white', fontSize: 20 }} className="header">
          <Row type="flex" justify="space-between" align="middle">
            <Col>
              <a target="_blank" href="https://www.oic.qld.gov.au/__data/assets/pdf_file/0006/7755/other-sample-googleanalytics-report.pdf">평가 가이드 보기</a>
            </Col>
            <Col>
              <span>admin@admin.com</span>
            </Col>
            <Col>
              <Button type="primary" size="large">로그아웃</Button>
            </Col>
          </Row>
        </Header>
      </Layout>
    );
  }
}
