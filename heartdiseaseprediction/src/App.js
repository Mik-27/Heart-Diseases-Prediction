import React, { useState } from "react";
import "./App.css";
import Form from "./components/form/form";
import Navbar from "./components/navbar/navbar";

function App() {
	const [result, setResult] = useState();

	const sendDataToParent = (formData) => {
		// console.log(
		// 	"parent",
		// 	formData["result"]["Results"]["WebServiceOutput0"][0]
		// );
		setResult(formData["result"]["Results"]["WebServiceOutput0"][0]);
	};

	return (
		<div className="App bg-white">
			<Navbar />
			<div className="container m-4">
				<div className="row">
					{/* {console.log("result", result)} */}
					<div className="col-md-6">
						<Form sendDataToParent={sendDataToParent} />
					</div>
					<div className="col-md-6 results">
						<div className="container text-center">
							<h1 className="mb-5">Result</h1>
							{result ? (
								<div>
									{result["Scored Labels"] === 0 ? (
										<div className="no-risk">
											<h3>No/Minimal Risk</h3>
										</div>
									) : (
										<div className="at-risk">
											<h3>At Risk</h3>
											<h3>(Consult a Doctor)</h3>
											<h3>
												{Math.round(
													result["Scored Probabilities"] * 100
												).toFixed(2)}
												% Risk
											</h3>
										</div>
									)}
								</div>
							) : null}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
