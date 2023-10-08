import React, { useState,useEffect } from 'react'
import { Form, Input, DatePicker, Modal, message, Button, Dropdown, Menu } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { firestore } from '../../../config/firebase';
import { Header } from 'antd/es/layout/layout';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';

const initalstate={
  firstname:'',
  secondname:'',
  regno:'',
  course:''

}
export default function Ongoing() {
  let arr=[];

  const [isModalOpen, setIsModalOpen] = useState(false);
   const [fromfirestore,setFromfirestore]=useState([])
  const [std,setStd]=useState(initalstate)
  

  
  
  const fromFirestore = async () => {
    let array = []
    const querySnapshot = await getDocs(collection(firestore, "students"));
    querySnapshot.forEach((doc) => {
      let data = doc.data()
      array.push(data)
    });
    setFromfirestore(array)
    console.log(array)
  } 


  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleChange=(e)=>{
    setStd({...std,[e.target.name]:e.target.value})
  }
  const randomId = Math.random().toString(36).slice(2)

  const handleAdd  = async () => {
    // if (!title) {
    //   return message.error("Please Enter Title");
    // }
    // else if(!date){
    //   return message.error("Please Enter Date")
    // }
    // else if(!description){
    //   return message.error("Please Enter Description")
    // }
    // else if(!location){
    //   return message.error("Please Enter Location")
    // }
    const {firstname,secondname,regno,course}=std
  const finalstd = {
    firstname,
    secondname,
    regno,
    course,
    id: randomId
  }
  try{
    await setDoc(doc(firestore, "students",finalstd.id), finalstd)
    setIsModalOpen(false);
  }catch(e){
    console.log(e)
  }
  } 
  useEffect(()=>{
    fromFirestore()
      },[handleAdd]) 


     


  return (
    <div >
      <div className='container '>
        <div className='row'>
          <div className='col'>
            <Button type="primary" onClick={showModal}>Add Student</Button>
            <Modal title="Add Student Info" open={isModalOpen} onOk={handleAdd} onCancel={handleCancel} >
              <Form >
                <FormItem><Input placeholder='Enter First Name' onChange={handleChange} value={std.firstname} name='firstname'  /></FormItem>
                <FormItem><Input type='text' placeholder='Enter Second Name' onChange={handleChange} value={std.secondname}name='secondname' /></FormItem>
                <FormItem><Input type='number' placeholder='Enter Reg-no ' onChange={handleChange} value={std.regno} name='regno' /></FormItem>
                <FormItem><Input placeholder='Enter Courses' onChange={handleChange} value={std.course} name='course' /></FormItem>
              </Form>
            </Modal>

          </div>
        </div>
      </div>
      <div className='container '>
        <div className='row'>
          <div className='col'>

          <table class="table">
            <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>FirstName</th>
              <th scope='col'>SecondNmae</th>
              <th scope='col'>Reg-no</th>
              <th scope='col'>Course</th>
            </tr>
            </thead>
            <tbody>
              {fromfirestore.map((std,i)=>{
                return <tr key={i}>
                  <th scope='row'>{i+1}</th>
                  <td>{std.firstname}</td>
                  <td>{std.secondname}</td>
                  <td>{std.regno}</td>
                  <td>{std.course}</td>
                </tr>
              })}
            </tbody>
          </table>


          </div>
        </div>
      </div>




    </div>
  )
  
}
