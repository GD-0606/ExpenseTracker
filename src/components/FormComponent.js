import React,{useState} from 'react'
import { toast } from 'react-toastify';
import { Form, Button,Col,Row} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { addExpensesList } from '../slices/expensesSlice';
import './styles.css'
const FormComponent = () => {
  const [validated, setValidated] = useState(false);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [amountType, setAmountType] = useState('');
  const dispatch=useDispatch()
  const fxnSave = (e) => {
    e.preventDefault();
    
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
    if(description&&amount&&amountType){
      dispatch(addExpensesList({
        description,
        amount,
        amountType
      }))

      setDescription('')
      setAmount('')
      setAmountType('')
      setValidated(false)
    }
  }
  return (<Form onSubmit={fxnSave} noValidate validated={validated}>
    <Form.Group className='mb-3' controlId='description'>
      <Form.Label>Description</Form.Label>
      
      <Form.Control  type='text' value={description} onChange={(e) =>{ setDescription(e.target.value);}} required />
      <Form.Control.Feedback type="invalid">
              Please choose a description
      </Form.Control.Feedback>
    </Form.Group>

    <Form.Group className='mb-3' controlId='amount'>
      <Form.Label>Amount</Form.Label>
      <Form.Control type='number' value={amount} onChange={(e) => setAmount(e.target.value)}  required/>
      <Form.Control.Feedback type="invalid" >
              Please choose a amount.
      </Form.Control.Feedback>
    </Form.Group>
      <Form.Group  className="mb-3">
          <Form.Label >
            Amount Type
          </Form.Label>
          <div>
            <Form.Check
              inline
              label='Expenses'
              type='radio'
              name='i'
              checked={amountType === 'expenses'}
              onChange={(e) => {setAmountType('expenses');}}
              required
              feedbackType="invalid"
            />
            <Form.Check
             inline
             label='Income'
             type='radio'
             name='i'
             checked={amountType === 'income'}
             onChange={(e) => {setAmountType('income');}}
             required
             feedbackType="invalid"
              
            />
          </div>
        </Form.Group>

    {/* <Form.Group className='mb-3' >
      <Form.Label style={{ display: 'block' }}>Amount Type</Form.Label>
        <Form.Check
          inline
          label='Expenses'
          type='radio'
          name='i'
          checked={amountType === 'expenses'}
          onChange={(e) => {setAmountType('expenses');}}
          required
          feedbackType="invalid"
         
        />
        <Form.Check
         
        />
    </Form.Group> */}
    <Button as='input' type='submit' value='Submit' />{' '}
  </Form>

  )
}

export default FormComponent