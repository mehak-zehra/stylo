// import our actions
import { reducer } from '../utils/reducers';
import {
    UPDATE_USER,
} from '../utils/actions';

// create a sample of what our global state will look like
const initialState = {
    user: {
        isLoggedIn: false
    },
};

test('UPDATE_USER', () => {
    let newState = reducer(initialState, {
        type: UPDATE_USER,
        user: {
            isLoggedIn: true
        }
    });

    expect(newState.user.isLoggedIn).toBe(true);
});