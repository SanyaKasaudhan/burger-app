import React , { Component } from "react";
import Toolbar from "./Navigation/Toolbar/Toolbar";
import classes from './Lay.css'
import SideDrawer from "./Navigation/SideDrawer/SideDrawer";
class Lay extends Component{
  state = {
    showSideDrawer: false
}

sideDrawerClosedHandler = () => {
    this.setState( { showSideDrawer: false } );
}

sideDrawerToggleHandler = () => {
    this.setState( ( prevState ) => {
        return { showSideDrawer: !prevState.showSideDrawer };
    } );
}

render () {
    return (
        <>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
            <SideDrawer
                open={this.state.showSideDrawer}
                closed={this.sideDrawerClosedHandler} />
            <main className='Content'>
                {this.props.children}
            </main>
        </>
    )
}
}

export default Lay;
