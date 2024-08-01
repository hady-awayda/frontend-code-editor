import "./style.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Our Interactive Code Editor</h1>
        <p>
          Explore the features of our platform and enhance your coding
          experience. Whether you are a beginner or an expert, you can enhance
          your Python skills in our code editor and connect with other devs!
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
            onClick={() => (window.location.href = "/profile")}
          >
            Connect with Other Devs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
