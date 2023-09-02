import React ,{useState} from 'react';
import { Route,Routes,Router } from 'react-router-dom';
import { Layout, Space } from 'antd';
import { Link } from 'react-router-dom';
import Sticky from './Stickywall/Sticky';

import {
    HomeOutlined,
    QrcodeOutlined,
    CalendarOutlined,
    ClockCircleOutlined,
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import Copy from '../../Components/Footer/Copy'
import Head from '../../Components/Header/Head';
import {  Menu, Button, theme, Input, Divider } from 'antd';
import Menusidebar from '.';
import Ongoing from '../Dashboard/ongoing/Ongoing';
import Today from '../Dashboard/today/Today';
import Upcoming from '../Dashboard/upcoming/Upcoming';
import Mroutes from './Mroutes';
const { Header, Footer, Sider, Content } = Layout;
// const [collapsed, setCollapsed] = ();


const headerStyle= {
    textAlign: 'left',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
//   backgroundColor: '#7dbcea',
};

const contentStyle= {
    // textAlign: 'center',
     minHeight: 120,
    // lineHeight: '120px',
    color: 'black',
    backgroundColor: 'white',
};

const siderStyle= {
  textAlign: 'center',
  // lineHeight: '80vh',
  // color: 'black',
  // backgroundColor: 'black',
  
};

const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'black',
    
};
const menu={
    // backgroundColor:'black'
}

const App:React.FC= () => (
    

        
      //  <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
     <Layout >
      <Sider  id='sidebar'>
        <head><p>Sticky</p></head>
        <main>
         <Menu id='menu' style={menu} items={[
            {
              label:<Link to={"/"}>Home</Link>,
              icon:<HomeOutlined />,
              key:"/sticky"
            },
            {
              label:<Link to={"/ongoing"} className=''>Out Dated</Link>,
              icon:<CalendarOutlined />,
              // key:"/ongoing"
            },
            {
              label:<Link to={"/today"}>Today</Link>,
              icon:<ClockCircleOutlined />,
              // key:"/today"
            },
            {
              label:<Link to={"/upcoming"}>Upcoming</Link>,
              icon:<QrcodeOutlined />,
            },
            
          ]}>
        </Menu>
          </main>
          <footer></footer>
      </Sider>
      

      <Layout>
        <Header style={headerStyle}><Head/></Header>
        <Content style={contentStyle} >
          {/* <Link to={'/sticky'}>{<Sticky/>}</Link>  */}
          <Mroutes/>
        </Content>
        <Footer style={footerStyle}><Copy/></Footer>
      </Layout>
     </Layout>
  //  </Space>

);

export default App;