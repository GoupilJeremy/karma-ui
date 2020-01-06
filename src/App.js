import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { EventList } from './events';
import { PostList, PostEdit, PostCreate } from './posts';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import NotFound from './NotFound';

import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

const dataProvider = jsonServerProvider('http://localhost:4567');
//const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
<Admin
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={dataProvider}
    catchAll={NotFound}
>
    <Resource
    name="events"
    list={EventList}
    icon={UserIcon}
    />
</Admin>
);

export default App;
