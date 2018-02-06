import React from 'react';
import Header from './Header';
import Nav from './Nav';
import {routes} from './router';
import Footer from './Footer';
import styles from './page.scss';


export default class extends React.Component {

  constructor(props) {
    super(props);
    var route = location.pathname.replace('/', '') || '/';

    this.state = {
      route,
      component: null
    }

    this.getComponent(route);

    var x = new XMLHttpRequest();
    x.open('GET', 'http://localhost:8080/api');

    x.onreadystatechange = function() {
      if(x.status === 200) {

      };
    }
    x.send();
  }

  componentWillUpdate(newProps, newState){
    if(newState.route !== this.state.route) {
      this.getComponent(newState.route);
    }
  }

  getComponent(route) {
    if(route === '/') {
      require.ensure([], () => {
        var Home = require('./Home').default;
        this.setState({
          component: <Home />
        });
      }, 'home');
    } else if (route === 'browse') {
      require.ensure(['react'], () => {
        var Browse = require('./Browse').default;
        this.setState({
          component: <Browse />
        });
      }, 'browse');
    } else if (route === 'gallery') {
      require.ensure([], () => {
        var Gallery = require('./Gallery').default;
        this.setState({
          component: <Gallery />
        });
      }, "gallery");
    } else {
      require.ensure([], () => {
        var PageNotFound = require('./PageNotFound').default;
        this.setState({
          component: <PageNotFound />
        });
      }, "pagenotfound");
    }
  }

  changeRoute(event) {
      window.history.pushState("", "", event.target.dataset.link);
      this.setState({
        route: event.target.dataset.link
      })
  }

  render() {
    var {route, component} = this.state;

    return(
      <div className={styles['container']}>
        <Header />
        <Nav {...{routes}} changeRoute={this.changeRoute.bind(this)}/>
        {component}
        <Footer />
      </div>
    );
  }

}
