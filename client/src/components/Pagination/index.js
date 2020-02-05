import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Pagination = ({onPgNumValueChange, pgValue, pgMaxValue }) => {
  const isPrevBtnDisabled = ((pgValue - 1) === 0);
  const isNextBtnDisabled = ((pgValue + 1) > pgMaxValue);

  return (
    <div className="pagination">
      {/* Used an anchor tag to scroll to the top*/}
      <a className="pgBtnText" href="#">
        <button
          disabled={isPrevBtnDisabled}
          className="leftPgBtn movieInput"
          onClick={() => onPgNumValueChange('-')}
        >
        &lt;
        </button>
      </a>
      <div className="movieInput pgValue">{pgValue}/{pgMaxValue}</div>
      {/* Used an anchor tag to scroll to the top */}
      <a className="pgBtnText" href="#">
        <button
          disabled={isNextBtnDisabled}
          className="rightPgBtn movieInput"
          onClick={() => onPgNumValueChange('+')}
        >
        &gt;
        </button>
      </a>
    </div>
  );
};

Pagination.propTypes = {
  onPgNumValueChange: PropTypes.func.isRequired,
  pgValue: PropTypes.number.isRequired,
  pgMaxValue: PropTypes.number.isRequired,
};

Pagination.defaultProps = {

};

export default Pagination;
