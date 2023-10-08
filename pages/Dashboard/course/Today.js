import React, { useState,useEffect } from 'react'
import { Form, Input, DatePicker, Modal, message, Button, Dropdown, Menu } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { firestore } from '../../../config/firebase';
import { Header } from 'antd/es/layout/layout';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';

const initalstate={
  courseid:'',
  coursename:'',
  coursecode:'',
  course:''

}
export default function Today() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fromfirestore,setFromfirestore]=useState([])
  const [std,setStd]=useState(initalstate)

  return (
    <div>
      <h1></h1>

    </div>
  )
}
