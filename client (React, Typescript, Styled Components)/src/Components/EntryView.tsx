import React from "react";
import styled from 'styled-components';

const borderHoverColor = '#61DAFB';
const StyledEntryDiv = styled.div`
	cursor: pointer;
	padding: 10px 30px;
	margin: 10px;
	border-radius: 5px;
	list-style-type: none;
	border-color: white;
	border-width: 1px;
	border-style: solid;
	font-weight: 100;

	&:hover
	{
		border-color: ${borderHoverColor};
	}
`;

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
		this.state =
		{
		};
	}

	componentDidMount()
	{

	}

	render() 
	{
		return (
			<StyledEntryDiv key={this.props.index}>{this.props.entry}</StyledEntryDiv>
		);
	}
}