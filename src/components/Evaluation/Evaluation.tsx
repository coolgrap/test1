import { Button, Modal, Table } from 'antd';
import React from 'react';
// import ReactDom from 'react-dom';

import { CampaignModal } from '../../components';

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

const data: any = [];

for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `캠페인 네임 ${i}`,
    status: '캠페인 정보',
    edit: (
      <div style={{ float: 'right' }}>
        <Button type="primary">평가 시작</Button>
      </div>
    ),
  });
}

class Evaluation extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedRowKeys: [],  // Check here to configure the default column
      loading: false,
    };
  }

  public delete = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  }
  public onSelectChange = (selectedRowKeys: any) => {
    this.setState({ selectedRowKeys });
  }

  public createCampaign = () => {
    Modal.confirm({
      title: '평가',
      content: <CampaignModal />,
      onOk() {
        console.log('OK');  // tslint:disable-line
      },
      onCancel() {
        console.log('Cancel');  // tslint:disable-line
      },
    });
  }

  public render() {
    return (
      <div>
        <Table size="default" columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default Evaluation;
