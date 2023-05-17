// const colors =['#b33a3a', '#ff6700', '#32cd32']

// export default {priority}=>{
//     const level =["High", "Medium", "Low"]
//     return{
//         level:(level[priority-1]),
//         color: colors[priority-1]
//     }
// }





const colors = ['#b33a3a', '#ff6700', '#32cd32'];

const getColorByPriority = (priority) => {
    const levels = ["High", "Medium", "Low"];
    return {
        level: levels[priority - 1],
        color: colors[priority - 1]
    };
};

export default getColorByPriority;
