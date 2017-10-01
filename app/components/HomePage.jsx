import axios from 'axios';
import React from 'react';

import {Card, CardText} from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import KeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };

    axios.get('/336358/teams/').then((response) => {
      this.setState({
        data: response.data
      });
    });
  }

  render() {
    const child = this.state.data ? (
      <div className="teams">
          {
            _.map(this.state.data.teams, (team, index) => {
              return (
                <Card
                  key={ index }
                  className="team-card"
                  onClick={ () => this.props.history.push(`/team/${team.team_id}`) }
                  >
                  <CardText className="teams-card-text">
                    <div>
                      <div className="team-name">{ team.team_name }</div>
                      <div className="owner">{ team.owner }</div>
                    </div>
                    <div>
                      <KeyboardArrowRight
                        style={
                          {
                            height: '30px',
                            width: '30px'
                          }
                        }
                      />
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
      <div className="home-page">
        <div className="title">Teams</div>
        { child }
      </div>
    );
  }
};

export default HomePage;
