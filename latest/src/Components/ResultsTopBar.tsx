const ResultsTopBar = ({ children }: ResultsContainerProps) => {
  return (
    <div className="results-top-bar">
      <div className="results-top-hader-container">
        <h3 className="results-top-header">Nombre del museo DINAMICO</h3>
      </div>

      <div className="results-top-bar-button-container">
        <p className="results-top-bar-button-text">
          Ultima actualización DINAMCO FECHA
        </p>
      </div>
    </div>
  );
};

export default ResultsTopBar;

{
  /* <div className="dropdown me-2 d-inline-block position-relative">@</div> */
}
