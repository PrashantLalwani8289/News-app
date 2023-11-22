import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: '&category=general',
    endPoint: "top-headlines?"
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    endPoint : PropTypes.string
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      pageNo: 2,
      totalResult: 0
    }
  }
  async componentDidMount() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/${this.props.endPoint}${this.props.country}${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
    document.title = `${this.Capitalize(this.props.category.slice(10))} - DailyNews`;
    this.setState({
      loading: true
    })
    this.props.setProgress(30);

    let news = await fetch(url);
    this.props.setProgress(70);

    let obj = await news.json();
    console.log(obj)
    this.setState({
      totalResult: obj.totalResults,
      articles: obj.articles,
      loading: false
    });
    this.props.setProgress(100);

  }
  Capitalize = (data) => {
    return data.slice(0,1).toUpperCase() + data.slice(1);
  }
  fetchData = async () => {
    this.setState({
      pageNo: this.state.pageNo + 1
    })
    let url = `https://newsapi.org/v2/${this.props.endPoint}${this.props.country}${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.pageNo}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true })
    // document.title = `${this.Capitalize(this.props.category)} - DailyNews`;
    let news = await fetch(url);
    let obj = await news.json();
    this.setState({
      articles: this.state.articles.concat(obj.articles),
      totalResult: obj.totalResult
    });
  }
  render() {
    return (
      <>


        <h1 className='text-center' style={{ marginTop: "60px", marginBottom: "30px" }}>Daily News - Top {this.Capitalize(this.props.category.slice(10))} headlines </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length} //This is important field to render the next data
          next={this.fetchData}
          hasMore={this.state.articles.length !== this.state.totalResult}
          loader={this.state.articles.length < this.state.totalResult ? <Spinner></Spinner> : <div className='text-center' style={{margin : "20px"}}>
           <strong > Congrats, You have reached the end!</strong></div>}
        >
          <div className="container">

            <div className='row'>
              {this.state.articles.map((element) => {
                return <div className='col-md-3 my-2 mx-2' key={element.url}>
                  <NewsItem description={element.description ? element.description : "Click below to read more."} title={element.title ? element.title.slice(0, 29) + "..." : "Click below to read more."} imageUrl={element.urlToImage ? element.urlToImage : "https://imagez.tmz.com/image/dc/o/2021/12/17/dca1409d02c04cc3b437a5e48d2a81c9.jpg"} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>
              })}

            </div>
          </div>
        </InfiniteScroll>

      </>
    )
  }
}

export default News
