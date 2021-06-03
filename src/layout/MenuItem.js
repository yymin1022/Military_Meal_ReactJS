import React, {Component} from "react";
import {Link} from "react-router-dom";

import "./MenuItem.css"

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
          currentSession: "TEST_SESSION",

          menuDate: this.menuDate,
          menuList: this.menuList,
          menuType: this.props.menuType,
        }
        }}>
        <div id="menuItem">
          <h4>{this.menuType}</h4>
          {
            this.menuList.map(menuData => {
              return(
                <div className="menuElement">
                  <div>
                    {menuData.name}
                  </div>
                  <div>
                    {menuData.calory}kcal
                  </div>
                </div>
              )
            })
          }
        </div>
      </Link>
    )
  }
}

export default MenuItem;