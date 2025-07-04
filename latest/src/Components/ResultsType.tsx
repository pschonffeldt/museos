import type { ReactNode } from "react";

type MapContainerProps = {
  children?: ReactNode; // optional
};

const ResultsType = ({ children }: MapContainerProps) => {
  return (
    <div className="results-type">
      <section className="job-details">
        <div>
          <section className="job-info">
            <div className="job-info__right">
              <h2 className="second-heading">title</h2>
              <p className="job-info__company">company</p>
              <p className="job-info__description">description</p>
              <div className="job-info__extras">
                <p className="job-info__extra">duration</p>
                <p className="job-info__extra">salary</p>
                <p className="job-info__extra">location</p>
              </div>
            </div>
          </section>

          <div className="job-details__other">
            <section className="qualifications">
              <div className="qualifications__left">
                <h4 className="fourth-heading">Qualifications</h4>
                <p className="qualifications__sub-text">
                  Other qualifications may apply
                </p>
              </div>
            </section>

            <section className="reviews">
              <div className="reviews__left">
                <h4 className="fourth-heading">Company reviews</h4>
                <p className="reviews__sub-text">
                  Recent things people are saying
                </p>
              </div>
              <ul className="reviews__list">
                <li> reviews</li>
              </ul>
            </section>
          </div>

          <footer className="job-details__footer">
            <p className="job-details__footer-text">
              If possible, please reference that you found the job on{" "}
              <span className="u-bold">rmtDev</span>, we would really appreciate
              it!
            </p>
          </footer>
        </div>
      </section>
      {children}
    </div>
  );
};

export default ResultsType;
