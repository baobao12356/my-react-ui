import React, { useState } from 'react';
import { render } from 'react-dom';
import { KeepAlive, AliveScope } from './index';
import { withKnobs, text, boolean, color, select } from '@storybook/addon-knobs';

export default {
  title: '组件/KeepAlive',
  component: KeepAlive,
  decorators: [withKnobs],
};


function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      count: {count}
      <button onClick={() => setCount(count => count + 1)}>add</button>
    </div>
  );
}

export function App() {
  const [show, setShow] = useState(true);
  return (
    <AliveScope>
      <div>
        <button onClick={() => setShow(show => !show)}>Toggle</button>
        <p>无 KeepAlive</p>
        {show && <Counter />}
        <p>有 KeepAlive</p>
        {show && (
          <KeepAlive id="Test">
            <Counter />
          </KeepAlive>
        )}
      </div>
    </AliveScope>
  );
}