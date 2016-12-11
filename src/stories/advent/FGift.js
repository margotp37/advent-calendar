import React from 'react'
//import '../../font-awesome.css'
import '../css/FGift.css'

var FGift = React.createClass ({
  // getInitialState() {
  //   active: false
  // },
  render() {
    return (
      <li className="fa-gift-links">
        <a href='#day{this.props.id}'>
          <i className="fa fa-3x fa-gift" aria-hidden="true"></i>
          <span>1</span>
        </a>
      </li>
    )
  }
})

export default FGift
