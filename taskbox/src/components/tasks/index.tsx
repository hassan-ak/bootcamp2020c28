import React from 'react'
import { IconButton } from '@material-ui/core';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import './tasks.css';
// Store imports
import { store } from "../../store/store";
import { pinn, archive } from "../../store/tasksSlice";
// types
import {TasksEProps} from '../../interfaces/App.interface'

const Tasks : React.FC<TasksEProps> = ({contnet,archieved,pinned,id}) => {
    const styling = archieved?"taskEntryA":"taskEntry";
    return (
        <div>
            <div className={styling}>
                <div className="archieved" onClick={()=>{store.dispatch(archive({id: id, content: contnet, archived: !archieved, pinned: false,}))}}>
                    <IconButton>
                        {archieved? <CheckBoxIcon style={{color:"rgb(40, 218, 64)"}}/> : <CheckBoxOutlineBlankIcon style={{color:"rgb(40, 218, 64)"}}/>}
                    </IconButton>
                </div>
                <div className="contnet">
                    {contnet}
                </div> 
                <div className="pinned">
                    <IconButton className="pinnedIcon" onClick={()=>{store.dispatch(pinn({id: id, content: contnet, archived: false, pinned: !pinned,}))}} >
                        {pinned? <StarIcon style={{color:"rgb(40, 182, 218)"}}/> : <StarBorderIcon style={{color:"rgb(40, 182, 218)"}}/>}
                    </IconButton>
                </div>           
            </div> 
        </div>
    )
}

export default Tasks;