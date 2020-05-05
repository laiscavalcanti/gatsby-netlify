import React, { Component } from "react"

class MenuToggle extends Component {
  constructor(props) {
    super(props)
    this.props = props
    this.state = {}
  }

  handleClick = event => {
    event.target.classList.toggle("toggle")
    event.target.parentNode.classList.toggle("toggle")
  }

  render() {
    return <div onClick={this.handleClick} className="menu-toggle"></div>
  }
}

export default MenuToggle
