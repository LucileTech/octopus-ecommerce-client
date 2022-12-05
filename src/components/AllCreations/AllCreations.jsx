import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiHandler from "../../api/apiHandler";
import "./AllCreations.css";

const AllCreations = () => {
  const [creations, setCreations] = useState([]);

  useEffect(() => {
    apiHandler.getAllCreations().then((res) => {
      console.log(res);
      setCreations(res);
    });
  }, []);

  if (!creations.length) {
    return <div className="middle-div-min">Loading...</div>;
  }

  return (
    <div>
      <p className="creation-paragraph-title">CREATIONS</p>
      <div className="all-creations-home-page">
        {creations.map((element) => {
          return (
            <>
              <Link
                className="creations-images-all-creations-container"
                to={`/creations/${element._id}`}
              >
                <img
                  className="creations-images-all-creations"
                  src={element.img}
                  alt={element.title}
                />
                {/*<div className="creations-images-all-creations-focus-container">
                  <img
                    className="creations-images-all-creations-focus-image"
                    src="https://res.cloudinary.com/dzkbycvev/image/upload/v1670182659/creation-details_ut1o7q.png"
                    alt="focus-image"
                  />
          </div>*/}
              </Link>
              {/* <Link to={`${element._id}`}>{element.name}</Link> */}
              {/* <h3>{element.name}</h3>
                  <div>{element.description}</div> */}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default AllCreations;
