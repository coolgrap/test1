import { LocaleProvider } from 'antd';
import localeSet from 'antd/lib/locale-provider/ko_KR';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Dashboard, Header, Login } from '../../containers';

// import { CampaignListTable } from '../../components';

import '../../index.scss';

const routes = (
  <LocaleProvider locale={localeSet}>
    <div>
      <Header />
      <Route path="/login" component={Login}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/campaigns" component={Dashboard}/>
      <Route path="/campaigns/:id" component={Dashboard}/>
      <Route path="/users" component={Dashboard}/>
    </div>
  </LocaleProvider>
);

export default class Root extends React.Component<any, any> {
  public render() {
    const { history, store } = this.props;

    return (
      <Provider store={store}>
        <Router history={history}>
          {routes}
        </Router>
      </Provider>
    );
  }
}
