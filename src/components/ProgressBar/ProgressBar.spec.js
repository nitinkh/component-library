import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProgressBar from './ProgressBar';
configure({ adapter: new Adapter() });

describe('ProgressBar', () => {
  it('getWidthAsPercentOfTotalWidth should return 250 with total width of 500 and percent of 50', () => {
    const wrapper = shallow(<ProgressBar percent={50} width={500} />);
    const width = wrapper.instance().getWidthAsPercentOfTotalWidth();
    expect(width).toEqual(250);
  });
});
