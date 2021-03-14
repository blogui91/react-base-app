import React from 'react';
import { Input, Layout, Space, Tooltip } from 'antd';
import { InfoCircleOutlined, UserOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';

interface SignupViewProps {}

const SignupView: React.FC<SignupViewProps> = () => {
  return (
    <Layout>
      <Input
        type="email"
        placeholder="Correo electrónico"
        prefix={<UserOutlined className="site-form-item-icon" />}
        suffix={
          <Tooltip title="Escribe un correo electrónico">
            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
          </Tooltip>
        }
      />

      <Space direction="vertical">
        <Input.Password
          placeholder="Contraseña"
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
      </Space>

      <Space direction="vertical">
        <Input.Password
          placeholder="Confirmar contraseña"
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
      </Space>

    </Layout>
  )
};

export default SignupView;
