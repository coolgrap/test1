import { Button, Table } from 'antd';
import React from 'react';

import UserModalForm from '../../components/UserModalForm/UserModalForm';

const columns = [
  {
    title: 'id',
    dataIndex: 'id',
  },
  {
    title: 'name',
    dataIndex: 'name',
  },
  {
    title: 'email',
    dataIndex: 'email',
  },
  {
    title: 'level',
    dataIndex: 'level',
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
    title: 'edit',
    dataIndex: 'edit',
  },
];

const data: any = [];

for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    id: i,
    name: `users ${i}`,
    email: `users@user.com ${i}`,
    level: 999,
    status: 'Enabled | Deleted',
    createdAt: `2017.3.30`,
    updatedAt: `2017.3.31`,
    edit: (<Button type="dashed">편집</Button>),
  });
}

class UserListTable extends React.Component<any, any> {
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
            사용자 생성
          </Button>
        </div>
        <UserModalForm visible={this.state.modalVisible} onCancel={this.handleCancel}/>
        <Table size="default" rowSelection={rowSelection} columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default UserListTable;
