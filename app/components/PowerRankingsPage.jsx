import _ from 'lodash';
import axios from 'axios';
import React from 'react';

import {Card, CardText} from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';

class PowerRankingsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };

    axios.get('/336358/power-rankings/').then((response) => {
      this.setState({
        data: response.data
      });
    });
  }

  render() {
    const child = this.state.data ? (
      <div className="rankings">
          {
            _.map(this.state.data.rankings, (ranking, index) => {
              return (
                <Card
                  key={ index }
                  className="ranking-card"
                  onClick={ () => this.props.history.push(`/team/${ranking.team.team_id}`) }
                >
                  <CardText className="rankings-card-text">
                    <div>
                      <div className="team-name">{index + 1}. { ranking.team.team_name }</div>
                      <div className="owner">{ ranking.team.owner }</div>
                    </div>
                    <div className="score">{ ranking.score }</div>
                  </CardText>
                </Card>
              );
            })
          }
        </div>
    ) : (
      <div className="loading">
        <CircularProgress />
      </div>
    );

    return (
      <div className="power-ranking-page">
        <div className="title">Power Rankings</div>
        <div className="subtitle">{ this.state.data ? `Week ${this.state.data.week}` : null}</div>
        { child }
      </div>
    );
  }
};

export default PowerRankingsPage;
