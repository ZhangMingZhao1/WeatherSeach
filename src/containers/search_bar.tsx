

import * as React from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {fetchWeather} from '../actions/index';

interface ISearchBarProps {
    fetchWeather: (term: string) => void;
}

interface ISearchBarState {
    term: string;
}

class SearchBar extends React.Component<ISearchBarProps,ISearchBarState> {
    constructor(props) {
        super(props);

        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        console.log(event.target.value);
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    render() {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="输入城市的英文名，中国城市为拼音，如ChangSha，查询近5日的天气状况"
                    value={this.state.term}
                    onChange={(event) => this.onInputChange(event)}
                />
                <span className="input-group-btn">
                    <button className="btn btn-secondary">查询</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToPros(dispatch) {
    return (bindActionCreators({fetchWeather}, dispatch));
}

export default connect<any,any,any>(null, mapDispatchToPros)(SearchBar);