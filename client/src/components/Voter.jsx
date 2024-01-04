/* Voter.jsx */

import React from "react";
import "./styles/Vote.css";

const Voter = (props) => {
  return (
    <>
      <div className="container-voter">
        <div className="heading-voter">
          <h1>Voting</h1>
          <h2>Silahkan Pilih Jagoan Anda !</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex in
            tempora ipsum, delectus voluptatem magni? Quia incidunt itaque
            consectetur ducimus assumenda recusandae ut omnis repellat
            repudiandae! Hic quidem, error repellendus architecto exercitationem
            deserunt voluptatibus non veritatis doloremque iusto perspiciatis
            eaque.
          </p>
        </div>

        <div className="candidates">
          {/* Card 1 */}
          <div className="candidate-card">
            <input type="checkbox" id="candidate1" className="checkbox-input" />
            <div className="checkbox-tile">
              <label htmlFor="candidate1" className="checkbox-label">
                <div className="checkbox-icon">
                  
                </div>
                <p>Candidate 1</p>
              </label>
            </div>
          </div>

          {/* Card 2 */}
          <div className="candidate-card">
            <input type="checkbox" id="candidate2" className="checkbox-input" />
            <div className="checkbox-tile">
              <label htmlFor="candidate2" className="checkbox-label">
                <div className="checkbox-icon">
                  
                </div>
                <p>Candidate 2</p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Voter;
