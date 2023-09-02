import React, { useState, useEffect } from 'react';
import { Form, Input, DatePicker, Modal, message, Button, Dropdown,Menu } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { firestore } from '../../../config/fire';
import { collection, addDoc, doc, setDoc, getDocs } from "firebase/firestore";
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

const colorList = ["#ccd5ae", "#faedcd", "#d4a373", "#e9edc9", "#e3d5ca", "#fed9b7", "#ffbf69", "#15616d", "#ede0d4",
  "#eddea4", "#adb5bd", "#ccc5b9", "#eee4e1", "#e6beae", "#83c5be", "#bcb8b1", "#d9d9d9", "#d9dcd6", "#bfd8bd", "#ffe6a7", "#daf0ee",
  "#e0fbfc", "#b7b7a4", "#ddbea9", "#c6c5b9", "#7b9e89", "#efe6dd", "#efe5dc", "#cbbaa9", "#fde2e4", "#8d99ae", "#f9dcc4",
]



export default function Sticky() {
  const [sticks, setSticks] = useState([]);
  const [modelVisible, setModelVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState("");
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  // useEffect(() => {
  //     const fromLocalStorage = JSON.parse(localStorage.getItem("Stick")) || [];
  //     setSticks(fromLocalStorage);
  //   }, []);


  

  const openModal = () => {
    setModelVisible(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'title') {
      setTitle(value);
    } else if (name === 'location') {
      setLocation(value);
    } else if (name === 'date') {
      setDate(value);
    } else if (name === 'description') {
      setDescription(value);
    }
  };
  const fromFirestore = async () => {
    let array = []
    const querySnapshot = await getDocs(collection(firestore, "Sticks"));
    querySnapshot.forEach((doc) => {
      let data = doc.data()
      array.push(data)
    });
    setSticks(array)
    // console.log(sticks)
  }
 
    
    const addStick = async () => {
      if (!title) {
        return message.error("Please Enter Title");
      }
      else if(!date){
        return message.error("Please Enter Date")
      }
      else if(!description){
        return message.error("Please Enter Description")
      }
      else if(!location){
        return message.error("Please Enter Location")
      }
    const randomId = Math.random().toString(36).slice(2)
    const randomIndex = Math.floor(Math.random() * colorList.length);
    const card = {
      title: title,
      date: date,
      description: description,
      location: location,
      bgcolor: colorList[randomIndex],
      id: randomId
    };
    // const updatedSticks = [...sticks, card];
    //  localStorage.setItem('Stick', JSON.stringify(updatedSticks));
    
    // setTitle('');
    // setDate('');
    // setLocation('');
    // setDescription('');
    console.log(card)
    
    setModelVisible(false);
    try {
      const docRef = await setDoc(doc(firestore, "Sticks", card.id), card)
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      // console.log(error)
      console.error("Error adding document: ", error);
    }
    
  };
  
  
   useEffect(()=>{
 fromFirestore()
   },[sticks])
  //   var a;

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
      <button className='card sticksCard p-3 m-3 addButton col-md-3 col-sm-6 col-xl-2' onClick={openModal}>
        <i className="fa-solid fa-plus plusIcon"></i> <p className='addtext'>Add</p>
      </button>
      <Modal title="Add Stick" visible={modelVisible} onCancel={() => setModelVisible(false)} onOk={addStick}>
        <Form>
          <FormItem><Input placeholder='Title' value={title} onChange={handleChange} name='title' /></FormItem>
          <FormItem><Input type='date' placeholder='Date' value={date} onChange={handleChange} name='date' /></FormItem>
          <FormItem><Input placeholder='Location' value={location} onChange={handleChange} name='location' /></FormItem>
          <FormItem><Input placeholder='Description' value={description} onChange={handleChange} name='description' /></FormItem>
        </Form>
      </Modal>
    </div>
  );
}




