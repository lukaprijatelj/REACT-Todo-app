// server/index.js
import express from 'express';

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req: any, res: any) => 
{
	let todoList = ["bake cake", "loundry", "wash dishes", "clean house", "go to fitness"];
	res.json({ todoList: todoList });
});

app.listen(PORT, () =>
{
	console.log(`Server listening on ${PORT}`);
});