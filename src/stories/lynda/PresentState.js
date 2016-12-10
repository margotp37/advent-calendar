import React from 'react'

// Add State to Present
var PresentState = React.createClass ({
  getInitialState() {
    return { open: false }
  },
  open() { // Create your own custom events
    this.setState({open: true})
  },
  close() {
    this.setState({open: false})
  },
  renderGift() {
    return (
      <section className="day active">
        <div className="present" onClick={this.open}>
          <span className="bow"></span>
          <span className="ribbon"></span>
          <h1 className="present-title">{this.props.text}<span>{this.props.children}</span></h1>
        </div>
      </section>
    )
  },
  renderBlog() {
    return (
      <div className="blog-post">
        <h1 className="post-title">{this.props.title}</h1>
        <p className="excerpt">{this.props.children}</p>
        <button onClick={this.close}>CLOSE</button>
      </div>
    )
  },
  render() {
    return (this.state.open) ? this.renderBlog() : this.renderGift()
  }
}) // END React.Component

export default PresentState
