import React from "react";
import store from '../store';

export interface IAddEntryState
{
	hover: boolean;
	value: string;
}
export interface IAddEntryProps
{
}
export class AddEntry extends React.Component<IAddEntryProps, IAddEntryState>
{
	constructor(props: IAddEntryProps)
	{
		super(props);
		this.state =
		{
			hover: false,
			value: ''
		};
	}

	public componentDidMount()
	{

	}

	private toggleHover = () => 
	{
		this.setState({ hover: !this.state.hover });
	}

	private onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) =>
	{
		if (event.key === 'Enter')
		{
			const TASK_ADDED =
			{
				type: "taskAdded",
				payload: 
				{
					description: this.state.value
				}
			};
			store.dispatch(TASK_ADDED);

			this.setState({ value: '' });
		}
	}

	private handleChange = (event: any) =>
	{
		this.setState({ value: (event.target as any).value });
	}

	public render() 
	{
		let borderColor = 'white';

		if (this.state.hover == true) 
		{
			borderColor = '#61DAFB';
		}

		let style = 
		{
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
			<input style={style}
				onMouseEnter={this.toggleHover}
				onMouseLeave={this.toggleHover}
				placeholder="Add new item..."
				onKeyPress={this.onKeyPress}
				value={this.state.value}
				onChange={this.handleChange} />
		);
	}
}
