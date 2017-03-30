import { Card, Modal, Rate } from 'antd';
import React from 'react';

export default class EvaluationModalCards extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  public render() {
    return (
      <Modal
        visible={this.state.visible}
        title="평가 진행"
        okText="생성하기"
        maskClosable={false}
      >
        <Card title="Card title" extra={<a href="#">More</a>} style={{ width: '100%' }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
          <Rate />
        </Card>
      </Modal>
    );
  }
}
