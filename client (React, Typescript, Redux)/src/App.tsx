import './App.css';

import React from "react";
import store from './store';
import { IEntryState, IEntryProps, EntryView } from "./Components/EntryView";
import { IAddEntryState, IAddEntryProps, AddEntry } from "./Components/AddEntry";

interface IAppState
{

}
class App extends React.Component<Object, IAppState>
{
	constructor(props: Object)
	{
		super(props);
		this.state = {};
	}

	public componentDidMount()
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

	public render() 
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
						<AddEntry />
					</div>
				</header>
			</div>
		);
	}
}

export default App;
