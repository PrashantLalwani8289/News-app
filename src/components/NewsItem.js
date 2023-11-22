import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, url, author, date, source} = this.props;
    return (
      <div className="card" >
      <div style={{display : 'flex', justifyContent : 'flex-end', position: 'absolute', right : "0px"}}>

        <span className=" badge rounded-pill bg-danger">
          {source}
        </span>
      </div>
        <img className="card-img-top" src={imageUrl} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className='card-text'><small className='text-muted'>By {author ? author : "Unknown"} on {new Date(date).toLocaleDateString()}</small></p>
          <a href={url} aria-disabled={title === "[Removed]..." ? true : false} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
        </div>
      </div>
    )
  }
}

export default NewsItem
