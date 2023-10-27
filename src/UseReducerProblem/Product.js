import React from 'react'
import { ProductList } from './ProductList'
const Product = () => {
    const init={
        cartItems:[],
    }
    const reducer=(currData,newData)=>{
        switch(newData.type){
            case "Add":
            currData={
                ...currData,
                cartItems:[...currData.cartItems,{...newData.payload,quantity:"1"}]
            }
            return currData
            case "remove":
               currData={
                ...currData,
                cartItems:currData.cartItems.filter((item)=>item.id!==newData.payload.id)
               }
               console.log(currData)
                
                return currData
        }

    }
    const [state,dispatch]=React.useReducer(reducer,init)
  return (<>
    <div>Product:
        {
        ProductList.map((obj,ind)=>{
            return <div>
            <p style={{display:"inline"}}>-&nbsp;&nbsp;{obj.name}&nbsp;{obj.Price}&nbsp;&nbsp;</p><button   onClick={(e)=>{dispatch({type:"Add",payload:obj})}} >AddCart</button>
            </div>
        })
        }
    </div>
    <div>
        cartItems:{state.cartItems && state.cartItems.map((obj,ind)=>{return <div>-&nbsp;&nbsp;{obj.name}&nbsp;{obj.Price}&nbsp;&nbsp;<button onClick={()=>{dispatch({type:'remove',payload:obj})}}>Remove</button>&nbsp;<button>AddQunatity</button></div>})}
    </div>
    </>)
}

export default Product