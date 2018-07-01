import * as React from 'react';

interface ISearchBarProps {

}

interface ISearchBarState {
    term: string;
}


export default class App extends React.Component<ISearchBarProps,ISearchBarState> {
    constructor(props) {
        super(props);

        this.state = {term: ""};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onInputChange(event) {
            console.log(event.target.value);
            this.setState({term:event.target.value})
        }

    onFormSubmit(event) {
        event.preventDefault();//这句代码让输入框点提交之后不会清空文本
        this.setState({term: ""});
    }
    render() {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input
                    className="form-control"
                    placeholder="请输入城市名称,以便查询未来5日天气情况，例如BeiJing"
                    onChange={this.onInputChange}
                    value={this.state.term}
                />
                <span className="input-group-btn">
                    <button className="btn btn-secondary" type="submit">查询</button>
                </span>
            </form>
        )
    }
}