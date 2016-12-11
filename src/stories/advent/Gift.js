import React from 'react'
import Tag from './Tag.js'
import '../css/Gift.css'

// React Gift Component
/**
 * Notes:
 *
 * Lifecycle Mounting
 * getInitialState
 * componentWillMount (right before render())
 * render()
 * componentDidMount (right after render())
 *
 * Updating
 * componentWillReceiveProps (we can affect the state)
 * shouldComponentUpdate (before render() - for optimization)
 * componentWillUpdate (before render() - for optimization)
 * render()
 * componentDidUpdate (after render() and DOM is updated)
 *
 * Unmounting
 * componentWillUnmount - unmounts all children as well (clean up DOM, invalidate timers, etc)
 */
var Gift = React.createClass({
  getInitialState() {
    return { open: false }
  },

  // place the gifts randomly on the screen
  // componentWillMount fires just before render()
  componentWillMount() {
    this.style = {
      right: this.randomPos( 0, window.innerWidth - 150, 'px' ),
      top: this.randomPos( 0, window.innerHeight - 150, 'px' )
    }
  },
  randomPos(x, y, s) {
    return (x + Math.ceil(Math.random() * (y-x))) + s
  },

  // Functions for handling the opening/closing of a Gift (to view the blog post)
  open() {
    this.setState({open: true})
  },
  close() {
    this.setState({open: false})
  },

  suffixer() {
    if( this.props.id == 1 || this.props.id == 21 ) return "st"
    else if( this.props.id == 2 || this.props.id == 22 ) return "nd"
    else if( this.props.id == 3 || this.props.id == 23 ) return "rd"
    else return "th"
  },
  getTag() {
    return (this.props.children != '') ? this.renderTag() : ''
  },

  // Function to render the Gift
  /* Note: Use refs to retrieve data (input) into the React script and work with it further */
  // Use style={this.style} in <section> for random positioning
  renderGift() {
    return (
        <section className="day active">
          <div className="present" onClick={this.open}>
            <span className="bow"></span>
            <span className="ribbon"></span>
            {this.getTag()}
            <h1 className="present-title">{this.props.id || this.props.text}<span>{this.suffixer()}</span></h1>
          </div>
        </section>
    )
  },
  renderTag() {
    <Tag/>
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
