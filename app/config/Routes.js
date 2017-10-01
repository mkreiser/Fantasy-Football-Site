import App from '../components/App';
import HomePage from '../components/HomePage';
import PowerRankingsPage from '../components/PowerRankingsPage';
import ScoreboardPage from '../components/ScoreboardPage';
import TeamPage from '../components/TeamPage';

const routes = [
  {
    component: App,
    routes: [
      {
        exact: true,
        path: '/',
        component: HomePage
      },
      {
        exact: true,
        path: '/power-rankings',
        component: PowerRankingsPage
      },
      {
        exact: true,
        path: '/scoreboard',
        component: ScoreboardPage
      },
      {
        exact: true,
        path: '/team/:id',
        component: TeamPage
      }
    ]
  }
];

export default routes;
