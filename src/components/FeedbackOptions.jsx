import React from 'react'
import { Button } from 'styles/btn'

const FeedbackOptions = ({fnGood, fnBad, fnNeutral}) => {

  return (
    <div>
      <Button onClick={fnGood}>good</Button>
      <Button onClick={fnBad}>bad</Button>
      <Button onClick={fnNeutral}>neutral</Button>
    </div>
  );
}

export default FeedbackOptions
