const express = require("express");
require("dotenv").config();
const fetch = (...args) =>
	import("node-fetch").then(({ default: fetch }) => fetch(...args));
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static("./heartdiseaseprediction/build"));

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	next();
});

app.get("*", (req, res) => {
	res.sendFile(process.cwd() + "/heartdiseaseprediction/build/index.html");
});

app.post("/getResults", async (req, res) => {
	let data = req.body;

	await fetch(
		"http://6b5c1361-4ead-4a22-b6c1-0b5805e4c9c6.centralindia.azurecontainer.io/score",
		{
			method: "POST",
			mode: "cors",
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "POST",
				"Access-Control-Allow-Headers":
					"Content-Type, Access-Control-Allow-Headers, Authorization",
				//prettier-ignore
				"Origin": "*",
				//prettier-ignore
				"Authorization": "Bearer " + process.env.AUTH_KEY,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				Inputs: {
					WebServiceInput0: [
						{
							//prettier-ignore
							"Age": req.body.age,
							//prettier-ignore
							"Sex": req.body.sex,
							//prettier-ignore
							"ChestPainType": req.body.chestpain,
							//prettier-ignore
							"RestingBP": req.body.restingBP,
							//prettier-ignore
							"Cholesterol": req.body.cholestrol,
							//prettier-ignore
							"FastingBS": req.body.fastingBS,
							//prettier-ignore
							"RestingECG": req.body.restingECG,
							//prettier-ignore
							"MaxHR": req.body.maxHR,
							//prettier-ignore
							"ExerciseAngina": req.body.exAngina,
							//prettier-ignore
							"Oldpeak": req.body.oldpeak,
							//prettier-ignore
							"ST_Slope": req.body.STslope,
							//prettier-ignore
							"HeartDisease": "0",
						},
					],
				},
			}),
		}
	)
		.catch((err) => {
			console.log(err);
			return res.status(404).send({ message: "Error requesting API" });
		})
		.then((res) => res.json())
		.then((result) => {
			return res.status(200).send({ result });
		});
});

app.listen(port, (err) => {
	console.log("Server Running...");
});
