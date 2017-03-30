import { Button, Cascader, Checkbox, Col, Form, Icon, Input, Row, Select, Tooltip } from 'antd';
import React from 'react';

import './RegisterForm.scss';

const FormItem = Form.Item;
const Option = Select.Option;

const residences = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

class RegistrationForm extends React.Component<any, any> {
  public static state = {
    confirmDirty: false,
  };

  public handleSubmit = (e: React.FormEvent<any>) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err: Error, values: any) => {
      if (!err) {
        console.log('Received values of form: ', values); // tslint:disable-line
      }
    });
  }

  public handleConfirmBlur = (e: any) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  public checkPassword = (rule: any, value: any, callback: any) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
      console.log(rule);  // tslint:disable-line
    } else {
      callback();
    }
  }

  public checkConfirm = (rule: any, value: any, callback: any) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
    // tslint:disable-next-line
    console.log(rule);
  }

  public render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout: any = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    const tailFormItemLayout: any = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select className="icp-selector">
        <Option value="86">+86</Option>
      </Select>,
    );
    return (
      <Form onSubmit={this.handleSubmit} className="register-form">
        <FormItem
          {...formItemLayout}
          label="E-mail"
          hasFeedback={true}
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <Input />,
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Password"
          hasFeedback={true}
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: 'Please input your password!',
            }, {
              validator: this.checkConfirm,
            }],
          })(
            <Input type="password" />,
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Confirm Password"
          hasFeedback={true}
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: 'Please confirm your password!',
            }, {
              validator: this.checkPassword,
            }],
          })(
            <Input type="password" onBlur={this.handleConfirmBlur} />,
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={(<span>Nickname&nbsp;<Tooltip title="What do you want other to call you?"><Icon type="question-circle-o" /></Tooltip></span>)}
          hasFeedback={true}
        >
          {getFieldDecorator('nickname', {
            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
          })(
            <Input />,
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Habitual Residence"
        >
          {getFieldDecorator('residence', {
            initialValue: ['zhejiang', 'hangzhou', 'xihu'],
            rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }],
          })(
            <Cascader options={residences} />,
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Phone Number"
        >
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          })(
            <Input addonBefore={prefixSelector} />,
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Captcha"
          extra="We must make sure that your are a human."
        >
          <Row gutter={8}>
            <Col span={12}>
              {getFieldDecorator('captcha', {
                rules: [{ required: true, message: 'Please input the captcha you got!' }],
              })(
                <Input size="large" />,
              )}
            </Col>
            <Col span={12}>
              <Button size="large">Get captcha</Button>
            </Col>
          </Row>
        </FormItem>
        <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>I have read the <a>agreement</a></Checkbox>,
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large" style={{ width: '100%' }}>Register</Button>
        </FormItem>
      </Form>
    );
  }
}

const RegisterForm = Form.create()(RegistrationForm);
export default RegisterForm;
