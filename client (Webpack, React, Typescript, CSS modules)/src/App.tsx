import './App.css';

import React from "react";
import { IEntryState, IEntryProps, EntryView } from "./Components/EntryView";


interface IAppState
{
	todoList: Array<string> | undefined;
}
class App extends React.Component<Object, IAppState>
{
	constructor(props: Object)
	{
		super(props);
		this.state =
		{
			todoList: undefined,
		};
	}

	componentDidMount()
	{
		fetch("/api")
			.then((res) => res.json())
			.then((data) => this.setState({ todoList: data.todoList }));
	}

	render() 
	{
		let listItems = this.state.todoList ? this.state.todoList.map((entry, index) =>
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
