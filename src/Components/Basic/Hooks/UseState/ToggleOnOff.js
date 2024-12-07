import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function ToggleComponent() {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(!isOn);
  };

  return <button onClick={toggle}>{isOn ? <Button style={{backgroundColor: 'green'}}>ON</Button> : <Button style={{backgroundColor: 'yellow',color: 'black'}}>OFF</Button>}</button>;
}

export default ToggleComponent