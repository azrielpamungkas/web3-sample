/* Voter.jsx */

import "./styles/Vote.css";

const Voter = (props) => {
  
  return (
    <>
      <div className="jumbotron-voter">
        <div className="heading-voter">
          <h1>Voting Sistem</h1>
          <h3>Silahkan pilih jagoanmu !</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            eaque!
          </p>
        </div>

        {/* Testing */}
        <div className="row">
            <div className="card">
              <input
                type="radio"
                name="card-option"
                className="card-radio"
                id="option2"
              />
              <label htmlFor="option2" className="card-label">
                Azriel Sebastian Pamungkas
              </label>
            </div>
            <div className="card">
              <input
                type="radio"
                name="card-option"
                className="card-radio"
                id="option1"
              />
              <label htmlFor="option1" className="card-label">
                Sindu Aditya Janadi
              </label>
            </div>
            <div className="card">
              <input
                type="radio"
                name="card-option"
                className="card-radio"
                id="option3"
              />
              <label htmlFor="option3" className="card-label">
                Jovan Santosa
              </label>
            </div>
        </div>
      </div>
    </>
  );
};

export default Voter;
