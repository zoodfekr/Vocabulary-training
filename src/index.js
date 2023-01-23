import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './fonts/B-Mitra.ttf'
import './fonts/B-Mitra-Bold.ttf';
import { Spiner } from './components/Preloader';
import { ErrorBoundary } from "react-error-boundary";


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




