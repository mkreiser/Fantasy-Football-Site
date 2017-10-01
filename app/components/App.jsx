import React from 'react';
import { renderRoutes } from 'react-router-config';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import EventSeat from 'material-ui/svg-icons/action/event-seat';
import Filter1 from 'material-ui/svg-icons/image/filter-1';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Whatshot from 'material-ui/svg-icons/social/whatshot';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.closeMenu = this.closeMenu.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  closeMenu() {
    this.setState({
      open: false
    });
  }

  toggleMenu() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <div className="app">
        <Drawer open={this.state.open}>
          <MenuItem
            leftIcon={ <NavigationClose /> }
            onClick={ this.closeMenu }
          >
            Close
          </MenuItem>
          <MenuItem
            leftIcon={ <EventSeat /> }
            onClick={ () => {
                this.setState({
                  open: false
                  },
                  this.props.history.push('/')
                )
              }
            }
          >
            Teams
          </MenuItem>
          <MenuItem
            leftIcon={ <Whatshot /> }
            onClick={ () => {
                this.setState({
                  open: false
                  },
                  this.props.history.push('/power-rankings')
                )
              }
            }
          >
            Power Rankings
          </MenuItem>
          <MenuItem
            leftIcon={ <Filter1 /> }
            onClick={ () => {
                this.setState({
                  open: false
                  },
                  this.props.history.push('/scoreboard')
                )
              }
            }
          >
            Scoreboard
          </MenuItem>
        </Drawer>
        <AppBar
          onLeftIconButtonTouchTap={ this.toggleMenu }
          title="The Ocho"
        />
        <div
          className="app-container"
        >
          { renderRoutes(this.props.route.routes) }
        </div>
      </div>
    );
  }
};

export default App;
