// import bugModel from '../../Models/bugModel'
// export function retrieveBugs(){
//     let data =[];

//     data.push(new bugModel{(
//         _id:23456789,
//         name:"crash on load",
//         details: 'crashes after 3 seconds',
//         steps:'open application and it will crash',
//         version: 'v2.0',
//         assigned:'micheal',
//         creator:'fortune',
//         priority:1,
//         time:23:36,
//     ) })
//     data.push(new bugModel{(
//         _id:23456789,
//         name:"wont  load",
//         details: 'crashes after 3 seconds',
//         steps:'open application and it will crash',
//         version: 'v2.0',
//         assigned:'micheal',
//         creator:'fortune',
//         priority:3,
//         time:23:36,
//     ) })
//     let sorted = data.sort((a,b)=>{return a.priority-b.priority})
//     return sorted;
// }

import bugModel from '../Models/bugModel';

export function retrieveBugs() {
    let data = [];

    data.push(new bugModel({
        _id: 23456789,
        name: "crash on load",
        details: 'crashes after 3 seconds',
        steps: 'open application and it will crash',
        version: 'V2.0',
        assigned: 'michael',
        creator: 'fortune',
        priority: 1,
        time: '23:36',
    }));

    data.push(new bugModel({
        _id: 23456790,
        name: "won't load",
        details: 'crashes after 3 seconds',
        steps: 'open application and it will crash',
        version: 'v2.0',
        assigned: 'michael',
        creator: 'fortune',
        priority: 3,
        time: '23:36',
    }));

    let sorted = data.sort((a, b) => {
        return a.priority - b.priority;
    });

    return sorted;
}
