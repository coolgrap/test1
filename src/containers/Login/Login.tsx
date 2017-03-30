import React from 'react';
import { connect } from 'react-redux';

import { loginRequest } from '../../actions/auth';
import { LoginForm } from '../../components';

class Login extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  public handleLogin(email: string, pw: string) {
    return this.props.loginRequest(email, pw).then(
      () => {
        if (this.props.status === 'SUCCESS') {
          const loginData = {
            isLoggedIn: true,
            email,
          };
          document.cookie = 'key=' + btoa(JSON.stringify(loginData));
          this.props.history.push('/dashboard/campaigns');
          return true;
        } else {
          // let $toastContent = $('<span style="color: #FFB4BA">Incorrect username or password</span>');
          return false;
        }
      },
    );
  }

  public render() {
    return (
      <div>
        <LoginForm
          mode={true}
          onLogin={this.handleLogin}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    status: state.auth.login.status,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    loginRequest: (email: string, pw: string) => {
      return dispatch(loginRequest(email, pw));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
