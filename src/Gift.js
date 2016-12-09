import React from 'react'
// import './Advent.css'

// React Gift Component
var Gift = React.createClass({
  getInitialState() {
    return { open: false, addressing: false }
  },

  // Functions for handling the opening/closing of a Gift (to view the blog post)
  open() {
    this.setState({open: true})
  },
  close() {
    this.setState({open: false})
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

  // Function to render the Gift
  /* Note: Use refs to retrieve data (input) into the React script and work with it further */
  renderGift() {
    return (
      <section className="day active">
        <div className="present" onClick={this.open}>
          <span className="bow"></span>
          <span className="ribbon"></span>
          <div className="tag" onClick={this.address}>
            To: <input type="text" ref="yourName" />
            <button onClick={this.save}>X</button>
          </div>
          <h1 className="present-title">25<span>th</span></h1>
        </div>
      </section>
    )
  },

  // Function to render the Blog post
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
  }
) // END Gift Component

export default Gift
