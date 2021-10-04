import React from "react";
import Styles from "../Styles/EntryView.module.css";

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
			<div key={this.props.index} className={Styles["entry-view"]}>{this.props.entry}</div>
		);
	}
}