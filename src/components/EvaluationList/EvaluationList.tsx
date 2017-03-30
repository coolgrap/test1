import { Button, Card, Modal, Progress, Rate, Table } from 'antd';
import React from 'react';

const columns = [
  {
    title: '캠페인',
    dataIndex: 'name',
  },
  {
    title: '캠페인 정보',
    dataIndex: 'status',
  },
  {
    title: '비고',
    dataIndex: 'edit',
  },
];

class EvaluationList extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  public showModal = () => {
    this.setState({ visible: true });
  }
  public onCancel = () => {
    this.setState({ visible: false });
  }
  public render() {
    const data: any = [];

    for (let i = 0; i < 46; i++) {
      data.push({
        key: i,
        name: `캠페인 네임 ${i}`,
        status: '캠페인 정보',
        edit: <Button onClick={this.showModal} type="primary">평가 시작</Button>,
      });
    }
    return (
      <div>
        <Table size="default" columns={columns} dataSource={data} />
        <Modal
          visible={this.state.visible}
          title="평가 진행"
          okText="다음"
          maskClosable={false}
          width="90%"
          onCancel={this.onCancel}
        >
          <div>남은시간: 10분 02초</div>
          {/*<Button onClick={this.showModal} type="primary">평가 시작</Button>*/}
          <Progress percent={70} />
          <Card title="Card title" extra={<a href="#">사이트 보기</a>}>
            <p>Card content Card content Card content Card content Card content Card content Card content Card content Card content</p>
            <p>Card content Card content Card content Card content Card content Card content Card content Card content Card content</p>
            <Rate count={10}/>
          </Card>
          <Card title="Card title" extra={<a href="#">사이트 보기</a>}>
            <p>Card content Card content Card content Card content Card content Card content Card content Card content Card content</p>
            <p>Card content Card content Card content Card content Card content Card content Card content Card content Card content</p>
            <Rate count={10} />
          </Card>
          <Card title="Card title" extra={<a href="#">사이트 보기</a>}>
            <p>Card content Card content Card content Card content Card content Card content Card content Card content Card content</p>
            <p>Card content Card content Card content Card content Card content Card content Card content Card content Card content</p>
            <Rate />
          </Card>
          <Card title="Card title" extra={<a href="#">사이트 보기</a>}>
            <p>Card content Card content Card content Card content Card content Card content Card content Card content Card content</p>
            <p>Card content Card content Card content Card content Card content Card content Card content Card content Card content</p>
            <Rate />
          </Card>
          <Card title="Card title" extra={<a href="#">사이트 보기</a>}>
            <p>Card content Card content Card content Card content Card content Card content Card content Card content Card content</p>
            <p>Card content Card content Card content Card content Card content Card content Card content Card content Card content</p>
            <Rate />
          </Card>
        </Modal>
      </div>
    );
  }
}

export default EvaluationList;
