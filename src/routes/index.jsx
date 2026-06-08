import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Lazy load pages for code splitting
const Home = lazy(() => import('../pages/Home'));
const ProjectDetail = lazy(() => import('../pages/ProjectDetail'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen bg-bg text-textCol flex items-center justify-center">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-textCol2 text-sm">Loading...</p>
    </div>
  </div>
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
