// const Component = React.Component; 를 ES6 문법적 설탕(Syntactic sugar) 방식으로 선언가능
import React, { Component } from 'react';

// 클래스 기반 컴포넌트 vs function 기반 컴포넌트 중 어떤 것을 선택할 지는 구현할 기능에 따라 달라진다.
// 여기서는 검색창이 다른 컴포넌트에 영향을 미치도록 구현하기를 원했으므로 class 기반으로 구현

// 이벤트 핸들러를 react에 선언하기
// 1. 발생하는 이벤트 핸들러 선언
// 2. 이벤트 핸들러를 살펴볼 요소에 전달
class SearchBar extends Component {
    // state = 자바스크립트의 객체 / class 기반 component에 사용됨 
    constructor(props) {
        super(props);

        this.state = { term:'Starting Value' };
    }
    render() {
        // state가 바뀌었을 때 setState를 사용.
        // setState : react가 state가 바뀌었다는 것을 인지하기 위해 꼭!! 값을 바꿀 때는 이렇게 사용할 것
        return (
            <div className="search-bar">
                <input
                    value={this.state.term} 
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        )
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

// 위의 SearchBar 컴포넌트를 내보낸다.
export default SearchBar;