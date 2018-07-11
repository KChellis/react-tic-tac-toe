import React from 'react';
import PropTypes from 'prop-types';

function Square(props) {
  return (
    <div>
      <style jsx>{`
        .square {
          background: #fff;
          border: 1px solid #999;
          float: left;
          font-size: 24px;
          font-weight: bold;
          line-height: 34px;
          height: 34px;
          margin-right: -1px;
          margin-top: -1px;
          padding: 0;
          text-align: center;
          width: 34px;
        }

        .square:focus {
          outline: none;
        }

        .kbd-navigation .square:focus {
          background: #ddd;
        }
      `}</style>
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    </div>
  );
}

Square.propTypes = {
  onClick: PropTypes.func,

}

export default Square;
