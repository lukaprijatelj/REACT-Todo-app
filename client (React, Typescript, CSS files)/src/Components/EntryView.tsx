import React from "react";
import "../Styles/EntryView.css";

export interface IEntryState
{
	
}
export interface IEntryProps
{
	entry: string;
	index: number;
}
export class EntryView extends React.Component<IEntryProps, IEntryState>
{
	constructor(props: IEntryProps)
	{
		super(props);
		this.state = { };
	}

	componentDidMount()
	{

	}	

	render() 
	{
		return (
			<div className="entry-view" key={this.props.index}>{this.props.entry}</div>
		);
	}
}