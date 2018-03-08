import React from 'react';
import SpotIndexItem from './spot_index_item';
import NavBarContainer from '../nav_bar/nav_bar_container';

export default class SpotIndex extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.fetchSpots();
  }

  renderSpots() {
    const spots = Object.values(this.props.spots);

    return spots.map((spot)=> {
      return <SpotIndexItem spot={spot} />;
    });
  }


  render(){
      return(
        <div className="spot-index">
          <h1 className="spots-index">Explore Airbnb</h1>
          <h1 className="homes-header">Homes around the world</h1>
          {this.renderSpots()}
      </div>
    );
  }
}

// if (spots.length !== 0 ){

// } else {
// return <div>NO SPOTS</div>;
// }

//   {this.props.spots.map((spot) => {
//     return <SpotIndexItem spot={spot} />
//   })
// }


// if (this.props.spots) {
//   {this.props.spots.map((spot) => {
//     return <SpotIndexItem spot={spot} />;
//   });}
// } else {
//   return <div>NO SPOTS</div>;
// }
