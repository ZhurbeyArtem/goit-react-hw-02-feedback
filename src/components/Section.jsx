import React from 'react'

const Section = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
}

export default Section
