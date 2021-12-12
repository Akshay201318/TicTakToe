import React from 'react';

const Square = (props) =>  {
    const {value, onClick} = props || {};
      return (
        <div className= "square" onClick={() => onClick()}>
          {value}
        </div>
      );
}

export default Square;