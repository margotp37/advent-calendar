import React from 'react'

// React Gift Component
var Gift = React.createClass({
  getInitialState() {
    return { open: false, addressing: false }
  },

  // Functions for handling the opening/closing of a Gift (to view the blog post)
  open() {
    this.setState({reading: true})
  },
  close() {
    this.setState({reading: false})
  },

  // Functions for handling adding a "To:" address note on the present's tag
  address() {
    this.setState({addressing: true})
  },
  save() {
    var name = this.refs.yourName.value // retrieved from the "tag" <div> - save it later
    this.setState({addressing: false})
  },

  // Function to render the Gift
  /* Note: Use refs to retrieve data (input) into the React script and work with it further */
  renderGift() {
    return (
      <div className="grid">
        <section className="day active">
          <div className="present" onClick={this.open}>
            <span className="bow"></span>
            <span className="ribbon"></span>
            <div className="tag" onClick={this.address}>
              To: <input type="text" ref="yourName" />
              <button onClick={this.save}>X</button>
            </div>
            <h1 className="present-title">{this.props.key}<span>th</span></h1>
          </div>
        </section>
      </div>
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
}) // END Gift Component

// React Christmas Component
var Christmas = React.createClass({
  // use propTypes to do some error checking on our Components
  propTypes: {
    count: function( props, propName ) {
      if( typeof props[propName] !== 'number' ) {
        return new Error( "The count must be a number" ) // Output an error in the JS console
      }
      if( props[propName] > 25 ) {
        return new Error( "There are not " + props[propName] + " days in Advent. count is too high" )
      }
    }
  },
  getInitialState() { // this is the initial state for Gifts (the children of Christmas)
    return {
      gifts: [
        { id: 0, gift: 'Transformer' },
        { id: 1, gift: 'Lego City Train set' },
        { id: 2, gift: 'Super Mario Anything' },
        { id: 3, gift: 'New bicycle' }
      ]
    }
  },
  // Note: map iterates through all our notes to display them all
  render() {
    return (
      <div className="christmas">
        {this.state.gifts.map((gift, i) => {
          return <Gift key={i}>{gift}</Gift>
        })}
      </div>
    )
  }
}) // END Christmas Component

export default Christmas
