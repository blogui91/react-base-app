import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { PageContainer } from './styles';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
interface LoadingStateProps {}

const LoadingState: React.FC<LoadingStateProps> = () => {
  return (
    <PageContainer>
      <Spin indicator={antIcon} />
      <p>Cargando</p>
    </PageContainer>
  );
};

export default LoadingState;
