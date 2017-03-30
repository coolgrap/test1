import { Button, Table } from 'antd';
import * as React from 'react';
import { Link } from 'react-router-dom';

import CampaignModalForm from '../../components/CampaignModalForm/CampaignModalForm';

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
    title: 'title',
    dataIndex: 'title',
  },
  {
    title: 'description',
    dataIndex: 'description',
  },
  {
    title: 'replicatedCount',
    dataIndex: 'replicatedCount',
  },
  {
    title: 'queries',
    dataIndex: 'queries',
  },
  {
    title: 'questions',
    dataIndex: 'questions',
  },
  {
    title: 'labels',
    dataIndex: 'labels',
  },
  {
    title: 'status',
    dataIndex: 'status',
  },
  {
    title: 'createdAt',
    dataIndex: 'createdAt',
  },
  {
    title: 'updatedAt',
    dataIndex: 'updatedAt',
  },
  {
    title: 'users',
    dataIndex: 'users',
  },
  {
    title: 'edit',
    dataIndex: 'edit',
  },
];

const data: any = [];

for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    id: `id ${i}`,
    title: `campaign title ${i}`,
    description: `description ${i}`,
    replicatedCount: `replicatedCount ${i}`,
    queries: `queries ${i}`,
    questions: `questions ${i}`,
    labels: `rows(array) range`,
    status: 'Stared | Ended',
    createdAt: `2017.3.30`,
    updatedAt: `2017.3.31`,
    users: `users(array) ${i}`,
    edit: (
      <div>
        <Button type="dashed">편집</Button>
        <Button type="dashed"><Link to="/campaigns/123/docs">시작</Link></Button>
        <Button type="dashed">종료</Button>
      </div>
    ),
  });
}

class CampaignListTable extends React.Component<any, any> {
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
          <Button
            type="primary"
            style={{ float: 'right' }}
            onClick={this.showModal}
          >
            캠페인 생성
          </Button>
        </div>
        <CampaignModalForm visible={this.state.modalVisible} onCancel={this.handleCancel}/>
        <Table size="default" rowSelection={rowSelection} columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default CampaignListTable;
