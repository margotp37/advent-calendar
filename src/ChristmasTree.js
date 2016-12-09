import React from 'react'
import Gift from './Gift'
import './Advent.css'

// React Christmas Tree Component
var ChristmasTree = React.createClass({
  propTypes: {
    count: function(props, propName) {
      if(typeof props[propName] !== "number") {
        return new Error("The count must be a number")
      }
      if(props[propName] > 25) {
        return new Error("There are not " + props[propName] + " days in Advent. count is too high")
      }
    }
  },
  getInitialState() {
    return {
      gifts: [
        {id:0, gift: 'Transformer'},
        {id:1, gift: 'Lego City Train set'},
        {id:2, gift: 'Super Mario Anything'},
        {id:3, gift: 'New bicycle'}
      ]
    }
  },
  update(newGift, id) {
    var gifts = this.state.gifts.map(
        gifts => (gifts.id !== id) ?
          gifts :
            {
              ...gifts,
              gifts: newGift
            }
        )
    this.setState({gifts})
  },
  remove(id) {
    var gifts = this.state.gifts.filter(gift => gift.id !== id)
    this.setState({gifts})
  },
  eachGift(gift) {
    return (<Gift key={gift.id}
                  id={gift.id}
                  onChange={this.update}
                  onRemove={this.remove}>
                  {gift.gift}
            </Gift>)
  },
  render() {
    return (<div className="christmas-tree">
              {this.state.gifts.map(this.eachGift)}
            </div>)
  }
}) // END ChristmasTree Component

export default ChristmasTree
