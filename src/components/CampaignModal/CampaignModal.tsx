import { Button, Col, Form, Icon, Input, Row } from 'antd';
import React from 'react';

const FormItem = Form.Item;

class CampaignCreationForm extends React.Component<any, any> {
  public handleSubmit = (e: React.FormEvent<any>) => {
    e.preventDefault();
    this.props.form.validateFields((err: Error, values: any) => {
      if (!err) {
        // tslint:disable-next-line
        console.log('Received values of form: ', values);
        return;
      } else {
        // ReactDOM.render(<Modals />, document.querySelector('.modals'));
      }
    });
  }

  public render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Row type="flex" justify="center" align="middle">
        <Col>
          <Form onSubmit={this.handleSubmit} className="login-form">

            <FormItem label="쿼리 그룹">
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ fontSize: 15 }} />}
                  placeholder="Username"
                />,
              )}
            </FormItem>
            <FormItem label="평가자">
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ fontSize: 15 }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </FormItem>
            <FormItem label="문서">
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ fontSize: 15 }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </FormItem>
            <FormItem label="정합성 유닛">
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ fontSize: 15 }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </FormItem>
            <FormItem label="Label Score">
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ fontSize: 15 }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" className="login-form-button">
                캠페인 생성
              </Button>
            </FormItem>
          </Form>
        </Col>
        <Col className="modals" />
      </Row>
    );
  }
}

const CampaignModal = Form.create()(CampaignCreationForm);
export default CampaignModal;
