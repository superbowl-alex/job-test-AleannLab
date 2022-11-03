import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import SharedLayout from 'components/SharedLayout';
import Home from 'pages/Home';
import DetailedJob from 'pages/DetailedJob';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="details" element={<DetailedJob />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
