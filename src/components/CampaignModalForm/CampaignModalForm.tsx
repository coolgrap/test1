import { Form, Icon, Input, Modal } from 'antd';
import React from 'react';

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
        title="캠페인 생성"
        okText="생성하기"
        onCancel={onCancel}
        onOk={this.handleCreate}
        maskClosable={false}
      >
        <Form layout="vertical">
            <FormItem label="id">
              {getFieldDecorator('id', {
                rules: [{ required: true, message: 'Please input your id!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ fontSize: 15 }} />}
                  placeholder="id"
                />,
              )}
            </FormItem>
            <FormItem label="title">
              {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Please input your title!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ fontSize: 15 }} />}
                  placeholder="title"
                />,
              )}
            </FormItem>
            <FormItem label="description">
              {getFieldDecorator('description', {
                rules: [{ required: true, message: 'Please input your description!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ fontSize: 15 }} />}
                  placeholder="description"
                />,
              )}
            </FormItem>
            <FormItem label="replicatedCount">
              {getFieldDecorator('replicatedCount', {
                rules: [{ required: true, message: 'Please input your Query replicatedCount!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ fontSize: 15 }} />}
                  placeholder="replicatedCount"
                />,
              )}
            </FormItem>
            <FormItem label="questions">
              {getFieldDecorator('questions', {
                rules: [{ required: true, message: 'Please input your Query questions!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ fontSize: 15 }} />}
                  placeholder="questions"
                />,
              )}
            </FormItem>
            <FormItem label="labels">
              {getFieldDecorator('labels', {
                rules: [{ required: true, message: 'Please input your labels!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ fontSize: 15 }} />}
                  placeholder="labels"
                />,
              )}
            </FormItem>
            <FormItem label="userIds">
              {getFieldDecorator('userIds', {
                rules: [{ required: true, message: 'Please input your userIds!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ fontSize: 15 }} />}
                  placeholder="userIds"
                />,
              )}
            </FormItem>
            <FormItem label="guide">
              {getFieldDecorator('guide', {
                rules: [{ required: true, message: 'Please input your guide!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ fontSize: 15 }} />}
                  placeholder="guide"
                />,
              )}
            </FormItem>
        </Form>
      </Modal>
    );
  }
}

const CampaignModalForm = Form.create()(CollectionCreateForm);

export default CampaignModalForm;
