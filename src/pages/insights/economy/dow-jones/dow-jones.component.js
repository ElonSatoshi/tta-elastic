import React from 'react';
import { numberWithCommas } from 'utils/format';
import ExternalLink from 'components/external-link';
import LineGraph from 'components/line-graph';
import data from './dow-jones.data';

export default class DowJones extends React.Component {
  render () {
    return (
      <div id="graph-down-jones">
        <LineGraph
          data={data}
          formatter={value => `${numberWithCommas(Math.round(value))}`}
          hideTimeframe={true}
          id="gdp"
          source={
            <ExternalLink href="https://tradingeconomics.com/united-states/stock-market">
              TradingEconomics.com | World Bank
            </ExternalLink>
          }
          title="Dow Jones Index"
        />
      </div>
    );
  }
}
