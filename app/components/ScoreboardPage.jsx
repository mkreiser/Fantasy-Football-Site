import axios from 'axios';
import React from 'react';

import {Card, CardText} from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';


class ScoreboardPage  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };

    axios.get('/336358/2017/scoreboard/').then((response) => {
      console.log(response.data);
      this.setState({
        data: response.data
      });
    });
  }

  render() {
    const child = this.state.data ? (
      <div className="scoreboard">
          {
            _.map(this.state.data.scoreboard, (board, index) => {
              return (
                <Card key={ index }>
                  <CardText className="scoreboard-card-text">
                    <div className="team">
                      <div>
                        <div className="team-name">{ board.home_team.team_name }</div>
                        <div className="owner">{ board.home_team.owner }</div>
                      </div>
                      <div className="score">{ board.home_score }</div>
                    </div>
                    <div className="team">
                      <div className="score">{ board.away_score }</div>
                      <div>
                        <div className="team-name">{ board.home_team.team_name }</div>
                        <div className="owner right">{ board.home_team.owner }</div>
                      </div>
                    </div>
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
      <div className="scoreboard-page">
        <div className="title">Scoreboard</div>
        { child }
      </div>
    );
  }
};

export default ScoreboardPage;
