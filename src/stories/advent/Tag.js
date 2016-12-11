import React from 'react'
import '../css/Tag.css'

var Tag = React.createClass({
  getInitialState() {
    return { addressing: false }
  },

  componentDidUpdate() {
    if( this.state.addressing ) {
      this.refs.newGift.focus()
      this.refs.newGift.select()
    }
  },
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.children !== nextProps.children || this.state !== nextState
  },

  // Functions for handling adding a "To:" address note on the present's tag
  address() {
    this.setState({addressing: true})
  },
  save() {
    this.props.onChange(this.refs.newGift.value, this.props.id)
    this.setState({addressing: false})
  },
  remove() {
    this.props.onRemove(this.props.id)
  },

  render() {
    return (
      <div className="tag" onClick={this.address}>
        <p>
        To: <input type="text" ref="yourName" defaultValue={this.props.children}/>
        <button onClick={this.save}>O</button>
        </p>
      </div>
    )
  }
})

export default Tag
