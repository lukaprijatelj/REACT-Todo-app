import logo from './logo.svg';
import './App.css';

import React from "react";


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
			<li key={this.props.index} style={style} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>{this.props.entry}</li>
		);	
	}
}


interface IAppState
{
	todoList: Array<string>|undefined;
}

class App extends React.Component<{}, IAppState>
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
					<ul>{listItems}</ul>
				</header>
			</div>
	  	);
	}
}

export default App;
