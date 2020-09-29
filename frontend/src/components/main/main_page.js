import React from 'react';

class MainPage extends React.Component {

    render() {
        return (
          <div className="main-page">
            <div className="home-pic">
              <img
                className="r-pic"
                src="https://i.pinimg.com/originals/df/90/7f/df907ff72483dcee2370f294fc9f03dc.jpg"
                alt="background"
              />
            </div>
            <h1>Real Analytics</h1>

            <footer>
              <div className="team title">The Team</div>
              <div className="team">
                <div className="profile">
                  <img
                    className="profile-picT"
                    src="head.jpeg"
                    alt="head"
                  ></img>
                  <h4> Tony Wu </h4>
                  <p> Team Lead </p>

                  <ul className="links">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/tony-wu-76769286/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bttn"
                      >
                        <i
                          className="fa fa-linkedin position"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/knowbow"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bttn"
                      >
                        <i
                          className="fa fa-github position"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="profile">
                  <img
                    className="profile-pic"
                    src="https://media-exp1.licdn.com/dms/image/C4E03AQEUWUzuRc6QZA/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=F-J-b2D6SAfhxKbqOT41L-ymUF-46IOy8hBLqRql-Uw"
                    rel="noopener noreferrer"
                    alt=""
                  ></img>
                  <h4> Andrew Elm </h4>
                  <p> Frontend Lead</p>
                  <ul className="links">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/akelmore/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bttn"
                      >
                        <i
                          className="fa fa-linkedin position"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/andrew-elmore"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bttn"
                      >
                        <i
                          className="fa fa-github position"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="profile">
                  <img className="profile-pic" src="EdGar.png" alt="ed"></img>
                  <h4> Edward Garrett </h4>
                  <p> Backend Lead </p>
                  <ul className="links">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/edward-garrett-9b54b5b1/"
                        target="_blank"
                        className="bttn"
                        rel="noopener noreferrer"
                      >
                        <i
                          className="fa fa-linkedin position"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/egarrett3"
                        target="_blank"
                        className="bttn"
                        rel="noopener noreferrer"
                      >
                        <i
                          className="fa fa-github position"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </footer>
          </div>
        );
    }
}

export default MainPage;