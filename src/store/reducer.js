const initialState = {
    salary: 2000,
    name: 'Sharma'
};

const reducer = (state=initialState, action) => {
    const newState = {...state};

    switch(action.type){
        case 'PROMOTION':
            newState.salary += 5000;
            break;

        case 'DEMOTION':
            newState.salary -= 5000;
            break;
    }
    return newState;
};

export default reducer;