import React from 'react';
import { Button, Layout } from 'antd';
import useAuth from 'hooks/useAuth';

interface HomeViewProps {}

const HomeView: React.FC<HomeViewProps> = () => {
  const { logout } = useAuth();

  return (
    <Layout>
      <h1>Home</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos similique itaque suscipit rem doloremque error facilis nobis impedit deleniti. Tempora quis deleniti ex impedit! Porro enim rem ex. Id, magnam!</p>
      <Button type="dashed" onClick={logout}>Logout</Button>
    </Layout>
  )
};

export default HomeView;
