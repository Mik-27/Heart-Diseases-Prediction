import React, { useState } from "react";
import "./form.css";

export default function Form({ sendDataToParent }) {
	const [data, setData] = useState({
		age: "",
		sex: "",
		chestpain: "",
		restingBP: "",
		cholestrol: "",
		fastingBS: "",
		restingECG: "",
		maxHR: "",
		exAngina: "",
		oldpeak: "",
		STslope: "",
	});

	const sendData = async (e) => {
		e.preventDefault();

		await fetch("https://healthplus.azurewebsites.net/getResults", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			// prettier-ignore
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((result) => {
				console.log(result);
				sendDataToParent(result);
			});
	};

	const handleChange = (event) => {
		setData({ ...data, [event.target.name]: event.target.value });
	};

	return (
		<form className="flex-column mx-5 justify-content-space-between">
			<div>
				<label className="me-3 my-3">Age:</label>
				<input name="age" placeholder="56" onChange={handleChange} required />
			</div>
			<div>
				<label className="me-3 my-3">Sex:</label>
				<input name="sex" placeholder="M/F" onChange={handleChange} required />
			</div>
			<div>
				<label className="me-3 my-3">
					Chest Pain Type (ATA, ASY, NAP, TA):
				</label>
				<input
					name="chestpain"
					placeholder="ATA, ASY, etc"
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label className="me-3 my-3">Resting BP:</label>
				<input
					name="restingBP"
					placeholder="180"
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label className="me-3 my-3">Cholestrol:</label>
				<input
					name="cholestrol"
					placeholder="247"
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label className="me-3 my-3">Fasting BP:</label>
				<input
					name="fastingBS"
					placeholder="0"
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label className="me-3 my-3">Resting ECG (Normal, SVH, ST):</label>
				<input
					name="restingECG"
					placeholder="Normal"
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label className="me-3 my-3">MaxHR:</label>
				<input
					name="maxHR"
					placeholder="172"
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label className="me-3 my-3">Exercise Angina:</label>
				<input
					name="exAngina"
					placeholder="Y/N"
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label className="me-3 my-3">Old Peak:</label>
				<input
					name="oldpeak"
					placeholder="0"
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label className="me-3 my-3">ST Slope (Flat, Up, Down):</label>
				<input
					name="STslope"
					placeholder="Flat, Up, etc"
					onChange={handleChange}
					required
				/>
			</div>
			<div className="justify-content-center my-4">
				<button
					type="submit"
					className="btn btn-primary px-4"
					onClick={sendData}
				>
					Predict
				</button>
			</div>
		</form>
	);
}
