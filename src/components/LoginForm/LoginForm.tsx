import { Button, Checkbox, Col, Form, Icon, Input, Row } from 'antd';
import React from 'react';

import './LoginForm.scss';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  public static propTypes = {
    mode: React.PropTypes.bool,
    onLogin: React.PropTypes.func,
    onRegister: React.PropTypes.func,
  };

  public static defaultProps = {
    mode: true,
    onLogin: (email: string, pw: string) => { console.error(email, pw, 'login function not defined'); },
    onRegister: (id: string, pw: string) => { console.error(id, pw, 'register function not defined'); },
  };

  // public componentDidMount() {
  //   // To disabled submit button at the beginning.
  //   this.props.form.validateFields();
  // }

  public handleChange(e: any) {
    const nextState: any = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
    // this.props.form.setFieldsValue({value: e.target.value});
  }

  public handleLogin(values: any) {
    const email = this.state.email = values.email;
    const pw = this.state.password = values.password;

    this.props.onLogin(email, pw).then(
      (success: any) => {
        if (!success) {
          this.setState({
            password: '',
          });
        }
      },
    );
  }

  public handleSubmit = (e: React.FormEvent<any>) => {
    e.preventDefault();
    this.props.form.validateFields((err: Error, values: any) => {
      if (!err) {
        // tslint:disable-next-line
        console.log('Received values of form: ', values);
        this.handleLogin(values);
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
            <FormItem>
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ fontSize: 15 }} />}
                  placeholder="Username"
                />,
              )}
            </FormItem>
            <FormItem>
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
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>아이디 저장</Checkbox>,
              )}
              {/*<a className="login-form-forgot">Forgot password</a>*/}
              <Button type="primary" htmlType="submit" className="login-form-button">
                로그인2
              </Button>
              {/*Or <Link to="register">register now!</Link>*/}
            </FormItem>
          </Form>
        </Col>
        <Col className="modals" />
      </Row>
    );
  }
}

const LoginForm = Form.create()(NormalLoginForm);
export default LoginForm;
