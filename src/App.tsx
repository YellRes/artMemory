import React, {FC} from 'react';
import { HashRouter } from 'react-router-dom';
import SingerModal from './pages/singerdetail/index';
import { Layout, Menu, Breadcrumb } from 'antd'
import { UserOutlined, CustomerServiceOutlined, FileTextOutlined } from '@ant-design/icons';
import './App.css';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const App: FC = () => (
  <HashRouter>

    <div className="App">
      
      <Layout style={{"width": "100%"}}>
 
          <h1 >more music, more than music</h1>


        <Layout style={{"width": "100%"}}>

          <Sider width={200} className="site-layout-background">
            <Menu mode="inline">
              <SubMenu key="sub1" icon={<UserOutlined />} title="歌手详情"></SubMenu>
              <SubMenu key="sub2" icon={<FileTextOutlined />} title="歌曲详情"></SubMenu>
              <SubMenu key="sub3" icon={<CustomerServiceOutlined />} title="好词句"></SubMenu>
            </Menu>
          </Sider>

          <Layout style={{"width": "100%"}}>

                <Content className={'flex_center'}>
                  <div className="main_container">
                    <SingerModal/>
                  </div>
                </Content>
        
          </Layout>
         
        </Layout>

        
   
      </Layout>

      
    </div>
 

  </HashRouter>
);

export default App;
