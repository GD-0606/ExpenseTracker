import React from 'react';
import FormComponent from './FormComponent';
import ResponsiveBreakpointsExample from './TableComponent'
const ExpenseComponent = () => {

  return (
    <>
      <div style={{ margin: 'auto', border: '1px solid red', width: '50%' }} className='container'>
        <div>
          <h1 style={{textAlign:'center'}}>Expense Tracker</h1>
        </div>
        <div >
           <FormComponent />
           <ResponsiveBreakpointsExample/>
        </div>
      </div>
    </>
  );
};

export default ExpenseComponent;
