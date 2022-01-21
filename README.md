# Heart Disease Prediction

### This project is made using Azure ML with nodejs backend and React frontend.

## Introduction ℹ

- This project is made and submitted as part of the FRT internship.
- The user needs to provide data regarding their conditions to the web app.
- The data is fed to the model using API.

## ML model 📈

- The Machine Learning model is trained using data from [Kaggle dataset](https://www.kaggle.com/fedesoriano/heart-failure-prediction).
- The data is cleaned, split and trained using Azure ML Studio.
- The workflow is as shown:
<img src='https://github.com/Mik-27/Heart-Diseases-Prediction/blob/master/images/HDP-SC03.jpg' width=900 height=450/>

## Model Deployment 📤

- The model is deployed through an API through Azure ML Studio
- The Azure resource takes care of cleaning and scaling data according to the model requirements.
- The model deployment workflow is as shown:
<img src='https://github.com/Mik-27/Heart-Diseases-Prediction/blob/master/images/HDP-SC04.jpg' width=900 height=450/>

## Web App 🕸

- The UI for sending data to the model and getting results is built on Node.js and React.js.
- **Server-side requesting of API is necessary for CORS.**
- The data send through the model is displayed as result on the webpage.
- The results are displayed **RED** is there is risk and **GREEN** if there is minimal risk.
- The results with risk contain *confidence* percent to determine the severity.
<img src='https://github.com/Mik-27/Heart-Diseases-Prediction/blob/master/images/HDP-SC01.jpg' width=900 height=450/>
<img src='https://github.com/Mik-27/Heart-Diseases-Prediction/blob/master/images/HDP-SC02.jpg' width=900 height=450/>

### Do leave a ⭐ if you like it.
## Thank You
