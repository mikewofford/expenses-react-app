

const expensesReducerDefaultState = []

export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state, //... is a spread operator, meaning it will grab everything off the array/object and then line below will edit whatever you choose
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => 
            id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            });            
        case 'SET_EXPENSES':
            return action.expenses;
        default:
            return state;
    }
};



