import React, { Component } from "react";

export default class Newsitem extends Component {


  render() {



    let { title, imageUrl, description, newsUrl, author, date, source,} = this.props;
    return (
      <div className="my-3 container">
        <div className="card">
          <img
            className="News-img"
            src={
              imageUrl
                ? imageUrl
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk-nqfENm5nYTSiGn86Bkd8_lybyAqF9aorw&s"
            }
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}...<span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                {source}
              </span>
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
