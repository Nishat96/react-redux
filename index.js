const redux = require('redux');
const createStore = redux.createStore;
const combineReducers=redux.combineReducers;

//initial State
const initialStateBooks = {
    numberOfBooks: 10,
}

const initialStatePens = {
    numberOfPens: 15,
}

//action type 
const Buy_Book = "Buy_Book";
const Buy_Pen = "Buy_Pen";

//function for action
function buyBook () {
    return {
        //action
        type: 'Buy_Book',
        payload: "First Action"
    }
}

function buyPen () {
    return {
        //action
        type: 'Buy_Pen',
        payload: "Second Action"
    }
}

//Reducer
//(prevState, action) => newSate

const booksReducer = (state=initialStateBooks, action) => {
    switch(action.type){
        case 'Buy_Book': return{
            ...state,
            numberOfBooks: state.numberOfBooks-1
        }
        default: return state;
    }
}

const pensReducer = (state=initialStatePens, action) => {
    switch(action.type){
        case 'Buy_Pen': return{
            ...state,
            numberOfPens: state.numberOfPens-2
        }
        default: return state;
    }
}

const reducer = combineReducers({
    Book: booksReducer,
    Pen: pensReducer
});

const store = createStore(reducer);
console.log('initial state value', store.getState());
const unsubscribe = store.subscribe(() => {console.log('updated state value', store.getState())});
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyBook());

store.dispatch(buyPen());
store.dispatch(buyPen());
store.dispatch(buyPen());
unsubscribe();