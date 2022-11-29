import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer, {create} from 'react-test-renderer';
import Home from '../src/screens/Home';

const tree = create(<Home />);

test('snapshot', () => {
  expect(tree).toMatchSnapshot();
});
