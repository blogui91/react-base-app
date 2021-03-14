import React, { useState } from 'react';
import { Input, Button, Tooltip } from 'antd';
import { InfoCircleOutlined, UserOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import FormItem from 'antd/lib/form/FormItem';
import useAuth from 'hooks/useAuth';

interface LoginViewProps {}

const LoginView: React.FC<LoginViewProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login({
      email,
      password,
    });
  };

  return (
    <ViewContainer>
      <FormHtml onSubmit={handleOnSubmit}>
        <h1> Login </h1>

          <FormItem required>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Correo electrónico"
              prefix={<UserOutlined className="site-form-item-icon" />}
              suffix={
                <Tooltip title="Escribe un correo electrónico">
                  <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                </Tooltip>
              }
            />
          </FormItem>
          <FormItem>
            <Input.Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </FormItem>

          <Button htmlType="submit" type="primary">Iniciar</Button>
      </FormHtml>
    </ViewContainer>
  )
};

export default LoginView;


const ViewContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const FormHtml = styled.form`
  padding: 20px;
  max-width: 600px;

  @media screen and (min-width: 600px) {
    max-width: 360px;
    margin: 0 auto;
  }
`;
