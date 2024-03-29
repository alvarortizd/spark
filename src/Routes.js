import Home from './Pages/Home.js'
import AsteroidList from './components/Asteroid/AsteroidList';
import AsteroidDetail from './components/Asteroid/AsteroidDetail';
import PictureOfTheDay from './components/PictureOfTheDay/PictureOfTheDay.js'
import NotFound from './Pages/NotFound.js'

const routes = [
  { path: '/', component: <Home />, exact: true },
  { path: '/list', component: <AsteroidList /> },
  { path: '/asteroid/:id', component: <AsteroidDetail /> },
  { path: '/potd', component:<PictureOfTheDay/>},
  { path: '*', component:<NotFound/>}
];

export default routes;