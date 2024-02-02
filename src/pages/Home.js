import React, { useState } from 'react'
import Modal from '../components/modal/Modal';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
    const [isModalOpen, setModalOpen] = useState(false);
const onAddCustomer =()=>{
    setModalOpen(true)
}
const onNewOrder =()=>{
  navigate('/about');
}

const onModalClose = () => setModalOpen(false);

  return (
    <>
    <div>Home</div>
    <button onClick={onAddCustomer}>add customer</button>
    <button onClick={onNewOrder}>new order</button>
    <Modal
        isOpen={isModalOpen}
        onClose={onModalClose}
        title="Add new customer"
        body={
            <>
            <input placeholder='1111111'></input>
            <input placeholder='1111111'></input>
            <input placeholder='1111111'></input>
            </>
        }
        footer={
            <>
        <button onClick={onModalClose}>Close</button>
        <button onClick={onModalClose}>submit</button>
            </>
    }
      ></Modal>
    </>
  )
}

export default Home