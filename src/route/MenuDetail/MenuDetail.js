import React, {Component} from 'react';

import SessionCheck from "/home/server/ui/src/SessionCheck";

class MenuDetail extends Component{
    UNSAFE_componentWillMount(){
        this.currentSession = "NO_LOGIN";
        if(this.props.location.state.currentSession !== "undefined"){
            this.currentSession = this.props.location.state.currentSession;
        }

        this.menuDate = this.props.location.state.menuDate;
        this.menuList = this.props.location.state.menuList;
    
        switch(this.props.location.state.menuType){
            case "0":
                this.menuType = "조식";
                break;
            case "1":
                this.menuType = "중식";
                break;
            case "2":
                this.menuType = "석식";
                break;
        }
    }

    render(){
        return(
            <div className="MenuDetail">
                <SessionCheck currentSession={this.currentSession}/>
                <div>
                    <h3>MenuDetail</h3>
                    <h4>{this.menuDate} / {this.menuType}</h4>
                    <p>{this.menuList}</p>
                </div>
            </div>
        );
  }
}

export default MenuDetail;