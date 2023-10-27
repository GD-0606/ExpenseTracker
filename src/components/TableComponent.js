import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import React from 'react';
import Modal from './Modal'
const DisplayELItem=(props)=>{
    return <tr>
        <td>{props.sno+1}</td>
        <td>{props.description}</td>
        <td>{props.amount}</td>
    </tr>

}
function ResponsiveBreakpointsExample() {
    const [show, setShow] = React.useState(false);
    const EList=useSelector((state)=>state.EL.List)
    const List=[...EList]
    const handleShow = () => setShow(true);
    
  return (<>
    {List && List.length>0?<div>
      <Table responsive bordered  hover style={{textAlign:'center'}}>
        <thead>
          <tr>
            <th>SNO</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody >
            {
                EList.map((obj,ind)=>{return <DisplayELItem key={ind} sno={ind} {...obj}/>})
            }
            <tr >
                <td colSpan={3}><Button variant="primary" onClick={handleShow}>
        Show Statistics
      </Button></td>
                
            </tr>
          
        </tbody>
      </Table>
    </div>:<div>No EL</div>}
    <Modal f={show} onClose={()=>setShow(false)}/>
    </>);
}

export default ResponsiveBreakpointsExample;