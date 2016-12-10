import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';

/* Lynda.com Learning */
import Hello from './lynda/Hello';
// import Hello2 from './lynda/Hello';
// import Hello3 from './lynda/Hello';
import Checkbox from './lynda/Checkbox';
import PresentState from './lynda/PresentState';
import Christmas from './lynda/Christmas';

/* Advent Calendar */
import Gift from './advent/Gift';
import Scene from './advent/Scene';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

storiesOf('Lynda', module)
  .add('Hello World', () => (
    <Hello/>
  ))
  .add('Checkbox', () => (
    <Checkbox/>
  ))
  .add('Present State', () => (
    <PresentState onClick={action('clicked')} text="10">th</PresentState>
  ))
  .add('Christmas scene', () => (
    <Christmas count={25}/>
  ))

storiesOf('Gift', module)
  .add('without tag', () => (
    <Gift onClick={action('clicked')}></Gift>
  ))
  .add('with tag', () => (
    <Gift onClick={action('clicked')}></Gift>
  ));
