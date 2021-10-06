import React from "react";
import store from '../store';

export interface IEntryState
{
	hover: boolean;
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
		this.state =
		{
			hover: false
		};
	}

	public componentDidMount()
	{

	}

	private toggleHover = () => 
	{
		this.setState({ hover: !this.state.hover });
	}

	private onMouseDown = () =>
	{
		const REMOVE_TASK = 
		{
			type: "taskRemoved",
			payload: 
			{
				index: this.props.index
			}
		};
		store.dispatch(REMOVE_TASK);
	}

	public render() 
	{
		let borderColor = 'white'

		if (this.state.hover == true) 
		{
			borderColor = '#61DAFB';
		}

		let style =
		{
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
			<div key={this.props.index}
				style={style}
				onMouseEnter={this.toggleHover}
				onMouseLeave={this.toggleHover}
				onMouseDown={this.onMouseDown}>
				{this.props.entry}
			</div>
		);
	}
}
