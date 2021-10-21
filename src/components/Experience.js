import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2017-2021</h3>
            <p> studying Bachelor of Science Computer Engineering "Software Engineering" in Duisburg-Essen University.</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2019-2020</h3>
            <p> java WebApp with DB2 database and Java servlet component and XML Application programming interface and CRUD WebApp with php scripting language and mysql server.</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020-2021</h3>
            <p>Web Application with ReactJS and GraphQL with Apollo Client,that enable us to manage both local and remote data with GraphQL and React Native Mobile Application with Rest APi.</p>
          </div>
        </div>
    
      </div>
    </div>
  )
}

export default Experience;
