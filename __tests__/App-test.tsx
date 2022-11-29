/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// it('renders correctly', () => {
//   renderer.create(<App />);
// });

// test('renders correctly', () => {
//   const tree = renderer.create(<App />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

import Signin from '../src/screens/Signin';

const tree = create(<Signin />);

test('snapshot', () => {
  expect(tree).toMatchSnapshot();
});
