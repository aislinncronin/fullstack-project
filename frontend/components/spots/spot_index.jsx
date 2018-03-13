import React from 'react';
import SpotIndexItem from './spot_index_item';
import { Link } from 'react-router-dom';

export default class SpotIndex extends React.Component {

  componentDidMount(){

    this.props.fetchSpots({bounds: {northEast: {lat:45, lng:-70}, southWest: {lat:35,lng:-75}}});
  }

  renderSpots() {
    const spots = Object.values(this.props.spots);

    return spots.map((spot)=> {
      return <div className="spot"><SpotIndexItem spot={spot} /></div>;
    });
  }


  render(){
      return(
        <div className="spot-index-wrapper">
            <h1 className="homes-header">Explore Sharebnb</h1>
            <div className="explore-container">
              <div>
                <Link to="/search">
                  <div className="search-link">
                    <div>
                      <img
                        className="homes-search-img"
                        src="https://media2.s-nbcnews.com/i/newscms/2016_29/1144622/home-vacation-prep-today-160720-tease_b4ae657a1e09780845d75b604be99522.jpg" />
                    </div>
                    <div className="homes-search">Search Homes</div>
                  </div>

                </Link>
              </div>
              <div>
                <Link to="/search/?lat=40.7127753&lng=-74.0059728">
                  <div className="search-link">
                    <div>
                      <img
                        className="homes-search-img"
                        src="https://www.city-journal.org/sites/cj/files/New-York.jpg" />
                    </div>
                    <div className="homes-search">New York</div>
                  </div>

                </Link>
              </div>
              <div>
                <Link to="/search/?lat=37.7749295&lng=-122.41941550000001">
                  <div className="search-link">
                    <div>
                      <img
                        className="homes-search-img"
                        src="https://wikitravel.org/upload/en/thumb/2/23/Us-ca-sanfran-goldengate.jpg/510px-Us-ca-sanfran-goldengate.jpg" />
                    </div>
                    <div className="homes-search">San Fransisco</div>
                  </div>

                </Link>
              </div>
            </div>
          <h1 className="homes-header">Homes around the world</h1>
          <div className="spots">
            {this.renderSpots()}
          </div>
      </div>
    );
  }
}
