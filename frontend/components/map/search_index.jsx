import React from 'react';
import SpotIndexItem from '../spots/spot_index_item';
import { withRouter } from 'react-router-dom';

class SearchIndex extends React.Component {

  renderSpots() {
    const spots = Object.values(this.props.spots);

    return spots.map((spot)=> {
      return <div className="spot">
        <SpotIndexItem spot={spot} />
      </div>;
    });
  }

  render(){
      return(
        <div className="search-index">
          <div className="spots">
            {this.renderSpots()}
          </div>
      </div>
    );
  }
}

export default withRouter(SearchIndex);
