

//import { OverflowMenu, OverflowMenuItem } from "carbon-components-react";
import Notification16 from '@carbon/icons-react/lib/notification/16';
import User16 from '@carbon/icons-react/lib/user/16';
import React, { Component } from "react";
import { Header, HeaderGlobalAction, HeaderMenu,HeaderMenuItem,HeaderGlobalBar, HeaderMenuButton,HeaderName,HeaderNavigation}from 'carbon-components-react/es/components/UIShell'
import  {action} from '@storybook/addon-actions';
import SideNavBar from '../sideNavBar/SideNavBar.jsx';
class Application_header extends Component {
  constructor(props)
  {
    super(props);
    
    this.state={click_nav:false};
    
  }
  
  testaction=()=>
  {

    this.setState({click_nav:true})
    console.log("this is from header"+this.state.click_nav);
  }
    render() {
        return (

            <div>
                <Header>
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={this.testaction}
          
        />
       
        <HeaderName href="#" prefix="IBM">
          [Platform]
        </HeaderName>
        <HeaderNavigation aria-label="IBM [Platform]">
          <HeaderMenuItem href="#">Catalog</HeaderMenuItem>
          <HeaderMenuItem href="#">Docs</HeaderMenuItem>
          <HeaderMenuItem href="#">Support</HeaderMenuItem>
          <HeaderMenu aria-label="Manage">
            <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
            <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
            <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
          </HeaderMenu>
        </HeaderNavigation>
        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="Notifications"
            onClick={action('notification click')}
          >
            <Notification16 />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="Profile"
            onClick={action('user click')}
          >
            <User16 />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
      
      
       {this.state.click_nav ? <SideNavBar show_nav={this.state.click_nav} />:null}
      
            </div>
        );
    }
}//eof class
export default Application_header;