import * as React from 'react';

import { Form, Icon, Input, Modal } from 'antd';

import 'antd/lib/form/style/css';
import 'antd/lib/icon/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/modal/style/css';

const FormItem = Form.Item;

class CollectionCreateForm extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      visible: false,
    };
    this.handleCreate = this.handleCreate.bind(this);
  }

  public handleCreate = () => {
    const form = this.props.form;
    form.validateFields((err: Error, values: any) => {
      if (err) {
        return;
      }
      form.resetFields();
      setTimeout(() => {
        this.setState({ visible: false });
      }, 0);
      console.log('Received values of form: ', values); // tslint:disable-line
    });
  }

  public componentWillReceiveProps(nextProps: any) {
    this.setState({ visible: nextProps.visible });
  }

  public render() {
    const { onCancel, form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Modal
        visible={this.state.visible}
        title="사용자 생성"
        okText="생성하기"
        onCancel={onCancel}
        onOk={this.handleCreate}
        maskClosable={false}
      >
        <Form layout="vertical">
            <FormItem label="name">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Please input your Name!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ fontSize: 15 }} />}
                  placeholder="name"
                />,
              )}
            </FormItem>
            <FormItem label="email">
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Please input your Email!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ fontSize: 15 }} />}
                  placeholder="email"
                />,
              )}
            </FormItem>
            <FormItem label="password">
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your password!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ fontSize: 15 }} />}
                  placeholder="password"
                />,
              )}
            </FormItem>
            <FormItem label="level">
              {getFieldDecorator('level', {
                rules: [{ required: true, message: 'Please input your Level!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ fontSize: 15 }} />}
                  placeholder="level"
                />,
              )}
            </FormItem>
        </Form>
      </Modal>
    );
  }
}

const UserModalForm = Form.create()(CollectionCreateForm);

export default UserModalForm;
