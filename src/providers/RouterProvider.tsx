import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';

interface RouterProviderProps {}

const RouterProvider: React.FC<RouterProviderProps> = ({ children }) => (
  <Router>{children}</Router>
);

export default RouterProvider;
