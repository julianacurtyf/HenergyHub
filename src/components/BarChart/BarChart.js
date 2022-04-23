import React from 'react';
import { View } from 'react-native';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory-native';


export default class MyBarChart extends React.Component {

  constructor(props) {
    super(props);
  }

  state = {
    data2012: [
      { quarter: 1, earnings: 13000 },
      { quarter: 2, earnings: 16500 },
      { quarter: 3, earnings: 14250 },
      { quarter: 4, earnings: 19000 }
    ],

    data2013: [
      { quarter: 1, earnings: 15000 },
      { quarter: 2, earnings: 12500 },
      { quarter: 3, earnings: 19500 },
      { quarter: 4, earnings: 13000 }
    ],

    data2014: [
      { quarter: 1, earnings: 11500 },
      { quarter: 2, earnings: 13250 },
      { quarter: 3, earnings: 20000 },
      { quarter: 4, earnings: 15500 }
    ],

    data2015: [
      { quarter: 1, earnings: 18000 },
      { quarter: 2, earnings: 13250 },
      { quarter: 3, earnings: 15000 },
      { quarter: 4, earnings: 12000 }
    ]
  }

  render() {
    return (
      <View>
        <VictoryChart
          domainPadding={10}
          theme={VictoryTheme.material}
        >
          <VictoryAxis
            tickValues={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => (`$${x / 1000}k`)}
          />
          <VictoryStack
            colorScale={"warm"}
          >
            <VictoryBar
              data={this.state.data2012}
              x={"quarter"}
              y={"earnings"}
            />
            <VictoryBar
              data={this.state.data2013}
              x={"quarter"}
              y={"earnings"}
            />
            <VictoryBar
              data={this.state.data2014}
              x={"quarter"}
              y={"earnings"}
            />
            <VictoryBar
              data={this.state.data2015}
              x={"quarter"}
              y={"earnings"}
            />
          </VictoryStack>
        </VictoryChart>
      </View>
    );
  }
}

