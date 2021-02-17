import * as React from 'react';
import {Layout} from 'antd'
import './style.less'
import { NavLink } from 'umi';
const {Header} = Layout

interface INavHeaderProps {
}

const NavHeader: React.FunctionComponent<INavHeaderProps> = (props) => {
    const username='lynn'
  return <div className="NavHeader">
      <Header style={{background:'#fff',textAlign:"right"}}>
          欢迎你，{username}
          <NavLink to='/logout'> 退出 </NavLink>
      </Header>
      <div className="header_bottom">
          <div className="pagetitle">首页</div>
      </div>
  </div>;
};

export default NavHeader;
