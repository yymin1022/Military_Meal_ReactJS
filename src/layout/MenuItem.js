import React, {Component} from "react";
import {Link} from "react-router-dom";

class MenuItem extends Component {
  constructor() {
    super();
    this.state = {};
  }

  UNSAFE_componentWillMount(){
    this.menuDate = this.props.menuDate;
    this.menuList = this.props.menuList;

    switch(this.props.menuType){
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

  render() {
    return(
      <Link to={{
        pathname: "/menuDetail",
        state: {
          isSessionOK: true,

          menuDate: this.menuDate,
          menuList: this.menuList,
          menuType: this.props.menuType,
        }
        }}>
        <div id="menuItem">
          <h4>{this.menuType}</h4>
          <p>{this.menuList}</p>
        </div>
      </Link>
    )
  }
}

export default MenuItem;