// import React, {useState} from 'react';
// import './bugform.css';
// import BugModel from '../../../Models/bugModel';

// export default (props) =>{
//     const {bugObject,setBugobject} = useState(new, BugModel(props.bug))
//     function inputChanged(e){
//         setBugobject({
//             ...bugObject,
//             [e.target.name]:e.target.value
//         })
//     }
//     return(
//         <div className='bug-create'>
//             (props.title == "Edit Bug" &&<button className='close-btn' onClick={props.close}>Close</button>)
//             <h1>{props.titile}</h1>
//             <form>
//                 <label>Name:</label>
//                 <input name="name" placeholder='Bug Name' required onChange={inputChanged} value={bugObject.name}></input>
//                 <label>Details:</label>
//                 <textarea name='details' placeholder='Detailed description on the bug ' required onChange={inputChanged} value={bugObject.details}></textarea>
//                 <label>Steps:</label>
//                 <textarea name='Steps' placeholder='Steps to Recreate  the bug ' required onChange={inputChanged} value={bugObject.Steps}></textarea>
//                 <label>Priority</label>
//                 <select name='priority' required onChange={inputChanged} value={bugObject.priority}>
//                     <option value='1'>High</option>
//                     <option value='2'>Mid</option>
//                     <option value='3'>Low</option>
//                 </select>
//                 <label>Assigned</label>
//                 <select name='assigned' onChange={inputChanged} value={bugObject.assigned}>
//                    <option>Fortune</option>
//                 </select>
//                 <label>Application Version</label>
//                 <input name='version' placeholder='Application version'onChange={inputChanged} value={bugObject.version}></input>
//                 <button type='submit'>{props.title}</button>
//             </form>

//         </div>
//     )
// }

import React, { useState } from 'react';
import './bugform.css';
import BugModel from '../../../Models/bugModel';

export default function BugForm(props) {
    const [bugObject, setBugObject] = useState(new BugModel(props.bug));

    function inputChanged(e) {
        setBugObject({
            ...bugObject,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className='bug-create'>
            {props.title === "Edit Bug" && <button className='close-btn' onClick={props.close}>Close</button>}
            <h1>{props.title}</h1>
            <form>
                <label>Name:</label>
                <input name="name" placeholder='Bug Name' required onChange={inputChanged} value={bugObject.name}></input>
                <label>Details:</label>
                <textarea name='details' placeholder='Detailed description of the bug' required onChange={inputChanged} value={bugObject.details}></textarea>
                <label>Steps:</label>
                <textarea name='Steps' placeholder='Steps to recreate the bug' required onChange={inputChanged} value={bugObject.Steps}></textarea>
                <label>Priority</label>
                <select name='priority' required onChange={inputChanged} value={bugObject.priority}>
                    <option value='1'>High</option>
                    <option value='2'>Mid</option>
                    <option value='3'>Low</option>
                </select>
                <label>Assigned</label>
                <select name='assigned' onChange={inputChanged} value={bugObject.assigned}>
                    <option>Fortune</option>
                </select>
                <label>Application Version</label>
                <input name='version' placeholder='Application version' onChange={inputChanged} value={bugObject.version}></input>
                <button type='submit'>{props.title}</button>
            </form>
        </div>
    );
}
