import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';
import { Layout, Row, Col, Menu } from 'antd';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { AuthActionCreators } from '../store/reducers/auth/action-creators';
import { useActions } from '../hooks/useActions';

const Navbar:FC = () => {
  const router = useNavigate();
  const {isAuth, user} = useTypedSelector(state => state.auth);
  const {logout} = useActions();

  return (
    <Layout.Header>
      <Row justify='end'>
        {isAuth 
        ?
        <>
          <Col span={3}><div style={{color: 'white'}}>{user.username}</div></Col>
          <Col span={2}><Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item 
              style={{color: 'white'}}
              onClick={logout} 
              key={1}>
                Выйти
            </Menu.Item>
          </Menu></Col>
        </>
        :
        <Menu theme="dark" mode="horizontal" selectable={false}>
          <Menu.Item 
           onClick={() => router(`/login`)} key={1}>
              Логин
          </Menu.Item>
        </Menu>}
        </Row>
    </Layout.Header>
  )
}

export default Navbar;