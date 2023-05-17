// import React, {useEffect} from 'react';
// import{useDispatch,useSelector} from'react-redux';
// import{useHistory} from 'react-router-dom';
// import{getBugs} from '../../../Controllers/redux/bugSlice';
// import card from '../../Components/Dashboard/card';


// export default=()=>{
//     const dispatch = useDispatch();
//     const bugs = useSelector(state=>state.bugs);
//     const browserHistory = useHistory();
//     let highCount = 0
//     let midCount = 0
//     let lowCount = 0

//     function redirect(){
//         browserHistory.push('/viewbugs')
//     }
    
//     if (bugs!=undefined){
//         highCount =filterBugs(1);
//         highCount =filterBugs(2);
//         highCount =filterBugs(3);

//     }

//     function filterBugs(priority){
//         return bugs.filter({bug}=>{return bug.priority == priority})
//     }


//     useEffect({}=>{
//         dispatch(getBugs)
//     },[bug == undefined])
//     return(
//             <div className='page-container'>
//                 <card priority ='1' count={highCount.length} clicked={redirect}/>
//                 <card priority ='2' count={midCount.length} clicked={redirect}/>
//                 <card priority ='3' count={lowCount.length} clicked={redirect}/>
//             </div>
//     )
// }


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getBugs } from '../../../Controllers/redux/bugSlice';
import Card from '../../Components/Dashboard/card';

export default function Dashboard() {
  const dispatch = useDispatch();
  const bugs = useSelector(state => state.bugs);
  const browserHistory = useNavigate();
  let highCount = 0;
  let midCount = 0;
  let lowCount = 0;

  function redirect() {
    browserHistory.push('/viewbugs');
  }

  if (bugs !== undefined) {
    highCount = filterBugs(1).length;
    midCount = filterBugs(2).length;
    lowCount = filterBugs(3).length;
  }

  function filterBugs(priority) {
    return bugs.filter(bug => bug.priority === priority);
  }

  useEffect(() => {
    dispatch(getBugs());
  }, [dispatch]);

  return (
    <div className='page-container'>
      <Card priority='1' count={highCount} clicked={redirect} />
      <Card priority='2' count={midCount} clicked={redirect} />
      <Card priority='3' count={lowCount} clicked={redirect} />
    </div>
  );
}
