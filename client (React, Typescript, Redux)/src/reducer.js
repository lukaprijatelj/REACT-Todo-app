let lastId = 0;

export default function reducer(state = [], action)
{
	if (action.type === "tasksLoaded")
	{
		return [
			...action.payload.tasks
		];
	}
	else if (action.type === "taskAdded")
	{
		return [
			...state,
			action.payload.description
		];
	}
	else if (action.type === "taskRemoved")
	{
		return state.filter((task, index) => index !== action.payload.index);
	}

	// very important to return current state
	return state;
}