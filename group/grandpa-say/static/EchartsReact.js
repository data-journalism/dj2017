/**
 * Copyright hustcc.
 * Contract: i@hust.cc
 */

import echarts from 'echarts';
import EchartsReactCore from 'echarts-for-react/lib/core';

// export the Component the echarts Object.
export default class EchartsReact extends EchartsReactCore {
  constructor(props) {
    super(props);
    this.echartsInstance = echarts;
  }
}