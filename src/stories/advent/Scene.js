import React from 'react'
import Gift from './Gift'
import '../../App.css'

// React Scene Component
var Scene = React.createClass({
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
        {id:1, gift: 'Transformer'},
        {id:2, gift: 'Lego City Train set'},
        {id:3, gift: 'Super Mario Anything'},
        {id:4, gift: 'New bicycle'},
        {id:5, gift: 'New bicycle'},
        {id:6, gift: 'New bicycle'},
        {id:7, gift: 'New bicycle'},
        {id:8, gift: 'New bicycle'},
        {id:9, gift: 'New bicycle'},
        {id:10, gift: 'New bicycle'},
        {id:11, gift: 'New bicycle'},
        {id:12, gift: 'New bicycle'},
        {id:13, gift: 'New bicycle'},
        {id:14, gift: 'New bicycle'},
        {id:15, gift: 'New bicycle'},
        {id:16, gift: 'New bicycle'},
        {id:17, gift: 'New bicycle'},
        {id:18, gift: 'New bicycle'},
        {id:19, gift: 'New bicycle'},
        {id:20, gift: 'New bicycle'},
        {id:21, gift: 'New bicycle'},
        {id:22, gift: 'New bicycle'},
        {id:23, gift: 'New bicycle'},
        {id:24, gift: 'New bicycle'},
        {id:25, gift: 'New bicycle'}
      ]
    }
  },
  componentWillMount() {
    if( this.props.count ) {
      var url = `http://aaronsnowberger.com/wp-json/wp/v2/posts/?_embed&categories=764&per_page=3&author=1`
      fetch(url)
            .then(results => results.json())
            .then(array => array[0])
            .then(text => text.split('. '))
            .then(array => array.forEach(
                sentence => this.add(post)))
            .catch(function(err) {
              console.log("Unable to fetch posts", err)
            })
    }
  },
  nextId() {
    this.uniqueId = this.uniqueId || 0
    return this.uniqueId++
  },
  addTag(name) {
    var tags = [
      ...this.state.tags,
      {
        id: this.nextId(),
        tag: name
      }
    ]
    this.setState({tags})
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
                  <button className="add-tag" onClick={() => this.addTag()}>+</button>
                  {gift.gift}
            </Gift>)
  },
  render() {
    return (
              <div className="christmas">
                {this.state.gifts.map(this.eachGift)}
              </div>
            )
  }
}) // END Scene Component

export default Scene
