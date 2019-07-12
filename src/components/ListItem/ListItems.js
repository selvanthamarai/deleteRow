import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {listitem} from '../constant/constant'
import { array } from 'prop-types';
import { arrayTypeAnnotation } from '@babel/types';


export default function Item(props) {
    console.log("Listprops", props);

    return (
        listitem.map(({type,icon,}) => (
            <ListItem button onClick={()=>props.prop.push('/dashboard', { type: type })}>
                <ListItemIcon>
                {icon}
                </ListItemIcon>
                <ListItemText primary={type} />
            </ListItem>
        )

        )
    )
}

// array=[1,2,3,4]

// array.map((data)=>{

//     return(
//         <row><ssss></ssss></row>
//     )
// })

// for(i=0;i<array.length;i++){
//   console.log(array[i])
// }