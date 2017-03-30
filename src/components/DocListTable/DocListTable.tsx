import { Button, Card, Modal, Progress, Rate, Table } from 'antd';
import * as React from 'react';

// import CampaignModalForm from '../../components/CampaignModalForm/CampaignModalForm';

import 'antd/lib/button/style/css';
import 'antd/lib/form/style/css';
import 'antd/lib/icon/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/modal/style/css';
import 'antd/lib/table/style/css';

const columns = [
  {
    title: 'id',
    dataIndex: 'id',
  },
  {
    title: 'campaignId',
    dataIndex: 'campaignId',
  },
  {
    title: 'srcId',
    dataIndex: 'srcId',
  },
  {
    title: 'query',
    dataIndex: 'query',
  },
  {
    title: 'source',
    dataIndex: 'source',
  },
  {
    title: 'reservedCount',
    dataIndex: 'reservedCount',
  },
  {
    title: 'labeledCount',
    dataIndex: 'labeledCount',
  },
  {
    title: 'status',
    dataIndex: 'status',
  },
];

const data: any = [];

for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    id: `id ${i}`,
    campaignId: `campaignId ${i}`,
    srcId: `srcId ${i}`,
    query: `string`,
    source: 'object',
    reservedCount: `reservedCount ${i}`,
    labeledCount: `labeledCount ${i}`,
    status: `active`,
  });
}

class DocListTable extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedRowKeys: [],  // Check here to configure the default column
      loading: false,
      modalVisible: false,
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
    console.log('selectedRowKeys changed: ', selectedRowKeys);  // tslint:disable-line
    this.setState({ selectedRowKeys });
  }

  public showModal = () => {
    this.setState({ modalVisible: true });
  }

  public handleCancel = () => {
    this.setState({ modalVisible: false });
  }

  public render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;

    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button
            type="primary"
            onClick={this.delete}
            disabled={!hasSelected}
            loading={loading}
          >
            삭제
          </Button>
          <span style={{ marginLeft: 8 }}>{hasSelected ? `${selectedRowKeys.length} 개 선택됨` : ''}</span>
          {/*<Button
            type="primary"
            style={{ float: 'right' }}
            onClick={this.showModal}
          >
            캠페인 생성
          </Button>*/}
        </div>
        <Table onRowClick={this.showModal} size="default" rowSelection={rowSelection} columns={columns} dataSource={data} />
        <Modal
          visible={this.state.modalVisible}
          title="문서 상세 내용"
          okText="확인"
          maskClosable={false}
          width="90%"
          onOk={this.handleCancel}
          onCancel={this.handleCancel}
        >
          <div>남은시간: 10분 02초</div>
          {/*<Button onClick={this.showModal} type="primary">평가 시작</Button>*/}
          <Progress percent={70} />
          <Card title="Card title">
            <p>Card content Card content Card content Card content Card content Card content Card content Card content Card content</p>
            <p>Card content Card content Card content Card content Card content Card content Card content Card content Card content</p>
            <p>Card content Card content Card content Card content Card content Card content Card content Card content Card content</p>
            <p>Card content Card content Card content Card content Card content Card content Card content Card content Card content</p>
            <p>Card content Card content Card content Card content Card content Card content Card content Card content Card content</p>
            <p>Card content Card content Card content Card content Card content Card content Card content Card content Card content</p>
            <p>Card content Card content Card content Card content Card content Card content Card content Card content Card content</p>
            <p>Card content Card content Card content Card content Card content Card content Card content Card content Card content</p>
            <p>Card content Card content Card content Card content Card content Card content Card content Card content Card content</p>
            <p>Card content Card content Card content Card content Card content Card content Card content Card content Card content</p>
            <p>Card content Card content Card content Card content Card content Card content Card content Card content Card content</p>
            <Rate count={10}/>
          </Card>
        </Modal>
      </div>
    );
  }
}

export default DocListTable;
