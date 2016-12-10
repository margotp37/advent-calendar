import React from 'react'

var Checkbox = React.createClass({
  getInitialState() { // the state of the Component when first created
    return {checked: false}
  },
  checkToggle() {
    this.setState({checked: !this.state.checked}) // reverse the state true/false
  },
  render() {
    var msg
    if ( this.state.checked ) { msg = "satisfied" }
    else { msg = "unsatisfied" }
    return (
      <div>
        <input type="checkbox"
               onChange={this.checkToggle}
               defaultChecked={this.state.checked} />
        <p>Looks like you are {msg} with your Christmas presents.</p>
      </div>
    )
  }
}) // END React class

export default Checkbox
