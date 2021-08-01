import logo from './logo.svg';
import './App.css';

import React from "react";
import store from './store';


interface IEntryState
{
	hover: boolean;
}
interface IEntryProps
{
	entry: string;
	index: number;
}
class EntryView extends React.Component<IEntryProps, IEntryState>
{
	constructor(props: IEntryProps)
	{
		super(props);
		this.state =
		{
			hover: false
		};
	}

	componentDidMount()
	{

	}

	toggleHover = () => 
	{
		this.setState({ hover: !this.state.hover });
	}

	render() 
	{
		let borderColor = 'white'

		if (this.state.hover == true) 
		{
			borderColor = '#61DAFB';
		}

		let style = {
			cursor: "pointer",
			padding: "10px 30px",
			margin: "10px",
			borderRadius: "5px",
			listStyleType: "none",
			borderColor: borderColor,
			borderWidth: "1px",
			borderStyle: "solid",
			fontWeight: 100
		};

		return (
			<div key={this.props.index} style={style} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>{this.props.entry}</div>
		);
	}
}



interface IAppState
{

}
class App extends React.Component<{}, IAppState>
{
	constructor(props: Object)
	{
		super(props);
		this.state = {};
	}

	componentDidMount()
	{
		// subscribe to database when data is updated
		const unsubscribe = store.subscribe(() => 
		{
			// rerender view
			this.forceUpdate();
		});

		// action creator
		let tasksLoadedAction = (data: any) => ({
			type: "tasksLoaded",
			payload: {
				tasks: data.todoList
			}
		});

		fetch("/api")
			.then((res) => res.json())
			.then((data) => 
			{
				// better written using functional programing
				store.dispatch(tasksLoadedAction(data));
			});
	}

	render() 
	{
		let listItems = store.getState() ? store.getState().map((entry: string, index: number) =>
			<EntryView entry={entry} index={index} />
		) : (null);

		return (
			<div className="App" style={{ backgroundColor: "#44014C", minHeight: "200px" }}>
				<header className="App-header">
					<div>
						<h1>Todo list:</h1>
						{listItems}
					</div>
				</header>
			</div>
		);
	}
}

export default App;
