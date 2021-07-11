const initialState = {
    count : 1, 
    title : "My Counter"
}

const counterReducer = (state = initialState, action) => {
switch(action.type){
    case 'INCREMENT' : return { ...state , count : state.count+action.payload};
}
}