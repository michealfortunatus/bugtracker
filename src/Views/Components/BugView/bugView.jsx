// import React, {useState} from 'react';
// import ViewSection from './component/bugViewSection';
// import './bugView.css';
// import BugModel from '../../../Models/bugModel';
// import { useDispatch } from  'react-redux';
// import {markComplete} from '../../../Controllers/redux/bugSlice';
// import  EditPanel from '../edit delete/editPanel';
// import EditBug from '../Bugcreate/bugform'

// export default{props} =>{
//     const dispatch = useDispatch();
//     const bug = new BugModel(props.bug);
//     const [displayEdit,setDisplayEdit] =useState(false);

// function editClicked(){
//      setDisplayEdit(displayEdit)
// }
// function deleteClicked(){

// }
//     return(
//       <>
//        <div className='bugview'>
//          <EditPanel editClicked={editClicked} deleteClicked={deleteClicked}/>
//           <button onClick={props.clicked} className='close-btn'>Close</button>
//           <h1>{bug.name}</h1>
//           <ViewSection title ='Details' info={bug.details}/>
//           <ViewSection title ='Steps' info={bug.Steps}/>
//           <ViewSection title ='Priority' info={bug.Priority}/>
//           <ViewSection title ='Creator' info={bug.Creator}/>
//           <ViewSection title ='App version' info={bug.version}/>
//           <ViewSection title ='Time created' info={bug.time}/>
//           <button onClick={()=>{dispatch(markComplete())}}>Mark Complete</button>
//        </div>
//        (displayEdit && <EditBug title='Edit Bug' bug={bug} close={editClicked}/>)
//        </>
//     )
// }

import React, { useState } from 'react';
import ViewSection from './component/bugViewSection';
import './bugView.css';
import BugModel from '../../../Models/bugModel';
import { useDispatch } from 'react-redux';
import { markComplete } from '../../../Controllers/redux/bugSlice';
import EditPanel from '../edit delete/editPanel';
import EditBug from '../Bugcreate/bugform';

export default function BugView(props) {
  const dispatch = useDispatch();
  const bug = new BugModel(props.bug);
  const [displayEdit, setDisplayEdit] = useState(false);

  function editClicked() {
    setDisplayEdit(!displayEdit);
  }

  function deleteClicked() {
    // Your delete logic goes here
  }

  return (
    <>
      <div className='bugview'>
        <EditPanel editClicked={editClicked} deleteClicked={deleteClicked} />
        <button onClick={props.clicked} className='close-btn'>
          Close
        </button>
        <h1>{bug.name}</h1>
        <ViewSection title='Details' info={bug.details} />
        <ViewSection title='Steps' info={bug.steps} />
        <ViewSection title='Priority' info={bug.priority} />
        <ViewSection title='Creator' info={bug.creator} />
        <ViewSection title='App version' info={bug.version} />
        <ViewSection title='Time created' info={bug.time} />
        <button onClick={() => dispatch(markComplete())}>Mark Complete</button>
      </div>
      {displayEdit && <EditBug title='Edit Bug' bug={bug} close={editClicked} />}
    </>
  );
}
