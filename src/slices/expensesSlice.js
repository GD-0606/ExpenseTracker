import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"
const generateExpensesList=()=>{
    const EL=localStorage.getItem("List")
    if(EL){
        return JSON.parse(EL)
    }
    localStorage.setItem('List',JSON.stringify([]))
    return [];
}
//Asynchoronous Func
// export const getPosts = createAsyncThunk(
//     'posts/getPosts',
//     async (thunkAPI) => {
//       const res = await fetch('https://jsonplaceholder.typicode.com/posts').then(
//       (data) => data.json()
//     )
//     return res
//   })
export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (_,thunkAPI) => {
      try {
        // Attempt to fetch posts from a non-existent API endpoint to simulate an error
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if(!response.ok){
            return thunkAPI.rejectWithValue("Check your url")
        }
        const data = await response.json();
        return data;
      } catch (error) {
        // Handle other errors (e.g., network error) by rejecting the action with an error message
        const errorMessage = 'An error occurred while fetching posts';
        return thunkAPI.rejectWithValue(errorMessage);
      }
    }
  );
  
//intialState
const intialValue={
    List:generateExpensesList(),
    entities:[],
    Loading:false,
    error:null
};

const ExpensesList=createSlice({
    name:"Expenses",
    initialState:intialValue,
    reducers:{
        addExpensesList:(state,action)=>{
            const newExpensesList=action.payload
            const EL=localStorage.getItem("List")
            if(EL){
                const ELarray=JSON.parse(EL)
                ELarray.push(newExpensesList)
                localStorage.setItem('List',JSON.stringify(ELarray))
                state.List.push(newExpensesList)
                
                 }else{
                    localStorage.setItem('List',JSON.stringify([newExpensesList]))
                    state.List.push(newExpensesList)

                 }
            
            

        },
    },
    
    extraReducers: (builder) => {
        builder
          .addCase(getPosts.pending, (state, action) => {
            state.Loading = true;
            state.error = null;
          })
          .addCase(getPosts.fulfilled, (state, action) => {
            console.log(action.payload,action)
            state.Loading = false;
            state.entities = action.payload;
          })
          .addCase(getPosts.rejected, (state, action) => {
            state.Loading = false;
            // Handle the rejected action as needed
            console.log(action.payload,action.type)
            state.error=action.payload
          });
      },
    

})
export const {addExpensesList}=ExpensesList.actions
export const expenseReducer=ExpensesList.reducer