import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let {title, imageUrl,description, newsUrl} = this.props
    return (
      <div className='my-3 container'>
        <div className="card" >
  <img src={imageUrl ? imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk-nqfENm5nYTSiGn86Bkd8_lybyAqF9aorw&s"}  alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} target="_blank" className="btn btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}
