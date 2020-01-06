import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';


export const EventList = props => (
<div>
<List {...props}>
    <Datagrid>
        <TextField source="label" />
        <TextField source="beginDate" />
        <TextField source="endDate" />
        <TextField source="price" />
        <TextField source="duration" />
    </Datagrid>
</List>
 </div>
)