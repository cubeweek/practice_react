// React 선언
// 리액트라는 라이브러리를 찾아 React라는 변수에 할당
// npm으로 설치된 경우 패키지명만 입력해주면 된다.
import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

// 임의로 생성해준 경우에는 경로를 적어주어야 한다(상대경로)
import SearchBar from '../components/search_bar';
import VideoList from '../components/video_list';
import VideoDetail from '../components/video_detail';

// YOUTUBE API KEY
const API_KEY = process.env.REACT_APP_YOUTUBE_KEY;


// Create a new component. This component should produce
// some HTML
//  JSX => js에서 HTML을 사용할 수 있도록 도와주는 것/  자바스크립트 코드를 HTML로 만들기 위해
// 직관적이고 바닐라 자바스크립트(순수한 자바스크립트)로 변환되기 대문에 사용됨
// ES6 방식 Arrow Function [function() ~> () =>] 
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos : [],
      selectedVideo : null
    };

    this.videoSearch('고양이');

  }

  videoSearch(term) {
    YTSearch({key:API_KEY, term:term}, (videos) => {
      this.setState({ 
        videos:videos,
        selectedVideo:videos[0]
      }); // ES6에서 this.setState({videos:videos})로 인식
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
          videos={this.state.videos} />
      </div>
    );  
  }
}

// Task this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));