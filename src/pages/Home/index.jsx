import "./style.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Our Interactive Code Editor</h1>
        <p>
          Explore the features of our platform and enhance your coding
          experience. Whether you are a beginner or an expert, we have something
          for everyone.
        </p>
        <div className="home-buttons">
          <button
            className="home-button"
            onClick={() => (window.location.href = "/editor")}
          >
            Go to Code Editor
          </button>
          <button
            className="home-button"
            onClick={() => (window.location.href = "/connect")}
          >
            Connect with Other Devs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
