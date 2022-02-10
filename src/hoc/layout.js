import React, { Component } from 'react';
import HeaderMobile from '../container/Header/HeaderMobile'
import Header from '../container/Header/Header'
import { SideNav } from 'react-simple-sidenav';

export default class layout extends Component {
    state={
        showNav:false
    }
    ontoggleNav =(action)=> {
        this.setState({showNav:action})
    }
  render() {
    return <div>
        <Header/>
        <HeaderMobile
            showNav={this.state.showNav}
            onOpenNav={()=>this.ontoggleNav(true)}
            onHideNav={()=>this.ontoggleNav(false)}
        />
        <div>
            {this.props.children}
        </div>
    </div>;
  }
}