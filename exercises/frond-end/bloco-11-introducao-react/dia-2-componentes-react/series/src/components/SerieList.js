import React from "react";
import Serie from "./Serie";
import PropTypes from 'prop-types'

class SerieList extends React.Component {
  render() {
    const { catalog } = this.props;
    return (
      <div className="serie-list">
        {catalog.map((serie) => (
          <Serie key={serie.id} serieInfo={serie} />
        ))}
      </div>
    );
  }
}

SerieList.propTypes = {
  catalog: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    genre: PropTypes.string,
  }))
}

SerieList.defaultProps = {
  catalog: [
    {
    id : 404,
    name: 'Null',
    }
  ]
}



export default SerieList;
