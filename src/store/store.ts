// store.ts
import { configureStore } from '@reduxjs/toolkit';
import shiftsReducer from '@/store/features/shiftSlice';

export const store = configureStore({
	reducer: {
		shifts: shiftsReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
