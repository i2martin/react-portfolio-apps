import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p> 
          It seems like you've wandered into the land of lost pages. 
      </p>
      <p> 
          Our highly-trained hamsters are diligently searching for the elusive content you seek.
      </p>
      <svg className="sad-smiley" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="150" height="150">
        <circle cx="50" cy="50" r="45" fill="none" stroke="black" stroke-width="5"/>
        <circle cx="35" cy="40" r="5" fill="black"/>
        <circle cx="65" cy="40" r="5" fill="black"/>
        <path d="M 30 60 Q 50 50 70 60" fill="none" stroke="black" stroke-width="5"/>
      </svg>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}