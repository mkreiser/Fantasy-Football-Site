import axios from 'axios';
import React from 'react';

import {Card, CardHeader, CardText} from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import KeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';


class TeamPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };

    axios.get(`/336358/2017/teams/${props.match.params.id}/`).then((response) => {
      console.log(response.data);
      this.setState({
        data: response.data
      });
    });
  }

  render() {
    const child = this.state.data ? (
      <div className="teams">
        <Card>
          <CardHeader
            title={ this.state.data.team_name }
            titleStyle={ { fontSize: '30px' } }
            subtitle={`${this.state.data.owner}, ${this.state.data.wins}-${this.state.data.losses}`}
            subtitleStyle={ { 'font-size': '20px' } }
          />
          <CardText>
          </CardText>
        </Card>
      </div>
    ) : (
      <div className="loading">
        <CircularProgress />
      </div>
    );

    return (
      <div className="team-page">
        { child }
      </div>
    );
  }
};

export default TeamPage;
