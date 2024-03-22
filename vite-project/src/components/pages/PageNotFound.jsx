import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigateTo = useNavigate();

  const navigateToHome = () => {
    navigateTo("/");
  };

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div>Error 404: Page Not Found</div>
        <button onClick={navigateToHome}>Back to Home</button>
      </div>
    </div>
  );
}
