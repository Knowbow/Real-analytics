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
                  <img className="profile picture brder-style" src=""></img>
                  <h4> Tony Wu </h4>
                  <p> Team Lead </p>
                  
                    <ul className="links">
                      <li>
                        <a href='' target="_blank" className='bttn'><i className="fa fa-linkedin position" aria-hidden="true"></i></a>
                      </li>
                      <li>
                        <a href='' target="_blank" className='bttn'><i className="fa fa-github position" aria-hidden="true"></i></a>
                      </li>
                    </ul>
                  
                </div>
                <div className="profile">
                  <img className="profile picture brder-style" src=""></img>
                  <h4> Andrew Elmore </h4>
                  <p> Frontend Lead</p>
                  <ul className="links">
                    <li>
                      <a href='' target="_blank" className='bttn'><i className="fa fa-linkedin position" aria-hidden="true"></i></a>
                    </li>
                    <li>
                      <a href='' target="_blank" className='bttn'><i className="fa fa-github position" aria-hidden="true"></i></a>
                    </li>
                  </ul>
                </div>
                <div className="profile">
                
                  <img className="profile picture brder-style" src="EdGar.png" alt='ed'></img>
                  <h4> Edward Garrett </h4>
                  <p> Backend Lead </p>
                  <ul className="links">
                    <li>
                      <a href='https://www.linkedin.com/feed/' target="_blank" className='bttn'><i className="fa fa-linkedin position" aria-hidden="true"></i></a>
                    </li>
                    <li>
                      <a href='https://github.com/' target="_blank" className='bttn'><i className="fa fa-github position" aria-hidden="true"></i></a>
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