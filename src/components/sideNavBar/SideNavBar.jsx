import Fade16 from '@carbon/icons-react/lib/user/16';
import React, { Component } from "react";
import {
    SideNav,
    SideNavHeader,
    SideNavDetails,
    SideNavSwitcher,
    SideNavItems,
    SideNavLink,
    SideNavMenu,
    SideNavMenuItem, HeaderMenuButton
} from 'carbon-components-react/es/components/UIShell'
import { action } from '@storybook/addon-actions';

class SideNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { click_nav: false };

    }
   componentWillMount() {

        this.setState({ click_nav: this.props.show_nav });
        //console.log("componentwillmount" + this.state.click_nav)
    }
    componentWillReceiveProps(){
        this.setState({ click_nav: this.props.show_nav });
        console.log("componentwillrecieveprops" + this.state.click_nav)
    }
    testaction = () => {


        this.setState({ click_nav: !this.state.click_nav });
        console.log("this is from sidenav" + this.state.click_nav);
    }

    render() {
        console.log("from sidenav render "+this.state.click_nav);
        return (

            <div>
                {
                    this.state.click_nav ?
                        <SideNav aria-label="Side navigation">
                            <HeaderMenuButton aria-label="Open menu" onClick={this.testaction} />
                            <SideNavHeader icon={<Fade16 />}>
                                <SideNavDetails title="Side navigation title">
                                    <SideNavSwitcher
                                        labelText="Switcher"
                                        onChange={action('switcher changed')}
                                        options={['Option 1', 'Option 2', 'Option 3']}
                                    />
                                </SideNavDetails>
                            </SideNavHeader>
                            <SideNavItems>
                                <SideNavLink icon={<Fade16 />} href="javascript:void(0)">
                                    Link
                                 </SideNavLink>
                                <SideNavMenu
                                    defaultExpanded
                                    icon={<Fade16 />}
                                    isActive
                                    title="Category title"
                                >
                                    <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
                                    <SideNavMenuItem aria-current="page" href="javascript:void(0)">
                                        Link
                                    </SideNavMenuItem>
                                    <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
                                </SideNavMenu>
                            </SideNavItems>
                        </SideNav>
                        : null
                }

            </div>
        );
    }
}//eof class
export default SideNavBar;







