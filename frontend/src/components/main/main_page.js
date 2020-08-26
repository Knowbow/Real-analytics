import React from 'react';

class MainPage extends React.Component {

    render() {
        return (    
            <div className='main-page'>
                <div className="home-pic">
                    <img
                        className="r-pic"
                        src="https://i.pinimg.com/originals/df/90/7f/df907ff72483dcee2370f294fc9f03dc.jpg"
                        alt="background"
                    />
                </div>
                <h1>Real Analytics</h1>
                
                <footer>
                    Created by: Tony Wu, Edward Garrett, and Andrew Elmore
                </footer>
            </div>
        );
    }
}

export default MainPage;