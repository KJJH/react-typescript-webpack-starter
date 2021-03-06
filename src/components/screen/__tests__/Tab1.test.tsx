import React from 'react';
import { shallow, render } from 'enzyme';

import Store from '@stores/appStore';
import { Tab1 } from '@screen/Tab1';

// test for the container page in dom
describe('Tab1 page DOM rendering test', () => {
  const testStore = new Store();
  const page = shallow(
    <Tab1 store={testStore} />,
  );

  it('Tab1 page has to be matched to snapshot', () => {
    expect(page).toMatchSnapshot();
  });
});
