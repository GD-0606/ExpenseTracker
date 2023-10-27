import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MyBar } from './MyBar';
import { useSelector } from 'react-redux';
import './styles.css'

function Example(props) {
  
    const handleClose = () => {props.onClose();setBalanceShow(false)};
    const [balance,setBalance]=React.useState(0);
    const [balanceShow,setBalanceShow]=React.useState(false)
    // const EList=useSelector((state)=>state.EL.List);
    // [...EList].sort((o1,o2)=>{
    //   return Number(o2.amount)-Number(o1.amount)
    // });
    const EList = useSelector((state) => state.EL.List);
    const sortedEList = [...EList].slice().sort((o1, o2) => Number(o2.amount) - Number(o1.amount));

    const ExpenseArr=[]
    let Inamt=0;
    let Eamt=0;
    const IncomeArr=[]
    sortedEList.map((obj,ind)=>{
      if(obj.amountType==="income"){
        IncomeArr.push(obj)
        Inamt=Inamt+Number(obj.amount)
      }else{
        ExpenseArr.push(obj)
        Eamt=Eamt+Number(obj.amount)
      }
    })
      // React.useEffect(()=>{
      //   setBalance(Inamt-Eamt)
      // },[balance])


  return (
    <>

      <Modal
        show={props.f}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title >Expenses Statistics</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                {ExpenseArr.length>0?<div><MyBar name="Exp" obj={ExpenseArr}/></div>:<div>No Expense Statistics Yet</div>}
                
                {IncomeArr.length>0?<div><MyBar name="Inc" obj={IncomeArr}/></div>:<div>No Income Statistics Yet</div>}
                {balanceShow&&<div>Balances : {balance}</div>}
            </div>
        </Modal.Body>
        <Modal.Footer style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
        <Button variant="primary" onClick={()=>{setBalance(Inamt-Eamt);setBalanceShow(true)}}>
            Show Balances
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;