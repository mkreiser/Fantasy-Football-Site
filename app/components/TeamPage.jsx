import _ from 'lodash';
import axios from 'axios';
import React from 'react';

import {
  Card,
  CardHeader,
  CardText
} from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import KeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';

class TeamPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      historyData: null
    };

    axios.get(`/336358/teams/${props.match.params.id}/`).then((response) => {
      this.setState({
        data: response.data
      });
    });

    axios.get(`/336358/teams/${props.match.params.id}/history/`).then((response) => {
      this.setState({
        historyData: response.data
      });
    });
  }

  render() {
    let child;
    const data = this.state.data;
    const historyData = this.state.historyData;

    const historyText = historyData ? (
      <div>
        <div className="all-time-record">All-Time Record: { `${ historyData.wins }-${ historyData.losses }${ historyData.ties ? `-${historyData.ties}` : '' }` } </div>
        <div>Average Margin: { historyData.margin }</div>
        <div>Average Margin of Victory: { historyData.marginOfVictory }</div>
        <div>Average Margin of Defeat: { historyData.marginOfDefeat }</div>
        <Table>
          <TableHeader
            displaySelectAll={ false }
            adjustForCheckbox={ false }
          >
            <TableRow>
              <TableHeaderColumn colSpan="5" style={{textAlign: 'center'}}>
                All-Time Record vs. Other Owners
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn style={{textAlign: 'center'}}>Owner</TableHeaderColumn>
              <TableHeaderColumn style={{textAlign: 'center'}}>Record</TableHeaderColumn>
              <TableHeaderColumn style={{textAlign: 'center'}}>Average Margin</TableHeaderColumn>
              <TableHeaderColumn style={{textAlign: 'center'}}>Average Margin of Victory</TableHeaderColumn>
              <TableHeaderColumn style={{textAlign: 'center'}}>Average Margin of Defeat</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={ false }
          >
            {
              _.map(historyData.matchupHistory, (matchup, index) => {
                return (
                  <TableRow key={ index } selectable={ false }>
                    <TableRowColumn style={{textAlign: 'center'}}>{ matchup.opponentName }</TableRowColumn>
                    <TableRowColumn style={{textAlign: 'center'}}>{ `${ matchup.wins }-${ matchup.losses }${ matchup.ties ? `-${matchup.ties}` : '' }` }</TableRowColumn>
                    <TableRowColumn style={{textAlign: 'center'}}>{ matchup.margin }</TableRowColumn>
                    <TableRowColumn style={{textAlign: 'center'}}>{ matchup.marginOfVictory }</TableRowColumn>
                    <TableRowColumn style={{textAlign: 'center'}}>{ matchup.marginOfDefeat }</TableRowColumn>
                  </TableRow>
                );
              })
            }
          </TableBody>
        </Table>
      </div>
    ) : (
      <div className="loading team-history-loading">
        <div className="loading-text">Loading team history</div>
        <div>
          <CircularProgress size={ 30 } />
        </div>
      </div>
    );

    if (data) {
      child = (
        <div className="team">
          <Card>
            <CardHeader
              title={ data.team_name }
              titleStyle={ { fontSize: '30px' } }
              subtitle={ `${data.owner} ${data.wins}-${data.losses}${data.ties ? `-${data.ties}` : ''}` }
              subtitleStyle={ { fontSize: '20px' } }
            />
            <CardText>
              { historyText }
            </CardText>
          </Card>
          <RaisedButton
            className="team-back-button"
            label="Return to Teams"
            onClick={ () => this.props.history.push('/') }
            primary
            fullWidth
          />
        </div>
      )
    } else {
      child = (
        <div className="loading">
          <CircularProgress />
        </div>
      );
    }

    return (
      <div className="team-page">
        { child }
      </div>
    );
  }
};

export default TeamPage;
