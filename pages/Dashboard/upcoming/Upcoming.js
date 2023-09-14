import React, { useEffect, useState } from 'react'
import { Form, Input, DatePicker, Modal, message, Button, Dropdown,Menu } from 'antd';
import { collection, doc, getDocs } from "firebase/firestore";
import { firestore } from '../../../config/fire';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  HourglassOutlined,
  MenuUnfoldOutlined ,
  DownOutlined
} from '@ant-design/icons';

export default function Upcoming() {

  const date = new Date()
  const [sticks, setSticks] = useState([]);
  const [modelVisible, setModelVisible] = useState(false);
  const formattedDate = date.toISOString().slice(0, 10);
  const openModal = () => {
    setModelVisible(true);
  };

 
 
  

  //   var a;
  const fromFirestore = async () => {
    let array = [];
    const querySnapshot = await getDocs(collection(firestore, "Sticks"));
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      array.push(data)
    });
    let upcomcard=array.filter((card)=>{
      return card.date > formattedDate
    })
    setSticks(upcomcard)
    
  }
  
  useEffect(()=>{
    fromFirestore()
  },[sticks])
  
   
     return (
       <div className='container sticks-container'>
         {sticks.map((card, i) => (
           <div style={{ backgroundColor: card.bgcolor }} key={i} className='card scard p-3 m-3  col-md-3 col-sm-6 col-xl-2'>
            <div> <Dropdown  className='float-end bg-transparent border-0 p-0 text-3' id="dropdown" overlay={<Menu>
                               <Menu.Item key={"Edit"} onClick={() => { }}>Edit</Menu.Item>
                               <Menu.Item key={"Delete"} onClick={() => {  }}>Delete</Menu.Item>
                               </Menu>} placement="bottomRight">
                               <button className="ellipsis-button">
                               <DownOutlined />
                               </button>
                               </Dropdown>
             <p><b><u>Title</u></b></p> </div>
             {card.title}
             <p><b><u>Date</u></b></p>
             <p>{card.date}</p>
             <p><b><u>Location</u></b></p>
             <p>{card.location}</p>
             <p><b><u>Description</u></b></p>
             <p>{card.description}</p>
           </div>
         ))}
         {/* <button className='card sticksCard p-3 m-3 addButton col-md-3 col-sm-6 col-xl-2' onClick={openModal}>
           <i className="fa-solid fa-plus plusIcon"></i> <p className='addtext'>Add</p>
         </button>
         <Modal title="Add Stick" visible={modelVisible} onCancel={() => setModelVisible(false)} onOk={addStick}>
           <Form>
             <FormItem><Input placeholder='Title' value={title} onChange={handleChange} name='title' /></FormItem>
             <FormItem><Input type='date' placeholder='Date' value={date} onChange={handleChange} name='date' /></FormItem>
             <FormItem><Input placeholder='Location' value={location} onChange={handleChange} name='location' /></FormItem>
             <FormItem><Input placeholder='Description' value={description} onChange={handleChange} name='description' /></FormItem>
           </Form>
         </Modal> */}
       </div>
     );
   
    

  }
