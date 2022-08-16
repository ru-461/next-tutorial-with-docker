import "../styles/global.css";

const App = ({ Component, pagePrpos }) => {
  return <Component {...pagePrpos} />;
};

export default App;
