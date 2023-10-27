import { configureStore } from "@reduxjs/toolkit";
import { expenseReducer } from "../slices/expensesSlice";
export const store=configureStore({
    reducer:{"EL":expenseReducer}
})
