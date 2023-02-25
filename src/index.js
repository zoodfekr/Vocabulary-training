import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ErrorBoundary } from "react-error-boundary";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc, setDoc } from "firebase/firestore";



const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div >
      <div className="border container p-5 d-flex flex-column align-items-center mt-3 bg-light" style={{ borderRadius: "25px" }}>
        <h1 className="">مشکلی پیش آمده 💣 </h1>
        <pre>{error.message}</pre>
        <button className='btn btn-warning' onClick={resetErrorBoundary}>سعی مجدد</button>
      </div>
    </div>
  );
};

function initializeFirebase()
{
  const firebaseConfig = {
    apiKey: "AIzaSyBKpkhYSBXsn4JbH6w1WTcA5p6Dg9wxTZQ",
    authDomain: "vocabulary-training-f6bdc.firebaseapp.com",
    projectId: "vocabulary-training-f6bdc",
    storageBucket: "vocabulary-training-f6bdc.appspot.com",
    messagingSenderId: "762391712431",
    appId: "1:762391712431:web:a45b13a2c8c28d4fd23a5a",
    measurementId: "G-XXQR81CYSK"
  };

  window.firebase = initializeApp(firebaseConfig);
  window.firestore = getFirestore(window.firebase);

  // const citiesRef = collection(window.firestore, "cities");

  // setDoc(doc(citiesRef, "SF"), {
  //   name: "San Francisco", state: "CA", country: "USA",
  //   capital: false, population: 860000,
  // });
  // setDoc(doc(citiesRef, "LA"), {
  //   name: "Los Angeles", state: "CA", country: "USA",
  //   capital: false, population: 3900000,
  // });
  // setDoc(doc(citiesRef, "DC"), {
  //   name: "Washington, D.C.", state: null, country: "USA",
  //   capital: true, population: 680000,
  // });
  // setDoc(doc(citiesRef, "TOK"), {
  //   name: "Tokyo", state: null, country: "Japan",
  //   capital: true, population: 9000000,
  // });
  // setDoc(doc(citiesRef, "BJ"), {
  //   name: "Beijing", state: null, country: "China",
  //   capital: true, population: 21500000,
  // });
}

initializeFirebase();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode >
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={ErrorFallback} fallback={ErrorFallback}
        onReset={() => {//Reset the state of your app
        }}>


        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);




