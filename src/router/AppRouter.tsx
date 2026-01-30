import React from 'react';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import { UserProfileProvider } from '../context/UserProfileContext';
import profileConfig from '../config/profileConfig.json';
import TopNavBar from '../components/TopNavBar';
import ProfilePage from '../pages/ProfilePage';
import RepositoriesPage from '../pages/RepositoriesPage';
import ProjectsPage from '../pages/ProjectsPage';
import StarsPage from '../pages/StarsPage';
import PackagesPage from '../pages/PackagesPage';


const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
    <UserProfileProvider>
      <TopNavBar />
      <div>
        <Routes>
          <Route
            path="/"
            element={<Navigate to={`/profile/${profileConfig.defaultUsername}`} replace />}
          />
          <Route path="/profile/:username" element={<ProfilePage />} />
          <Route path="/profile/:username/repositories" element={<RepositoriesPage />} />
          <Route path="/profile/:username/projects" element={<ProjectsPage />} />
          <Route path="/profile/:username/stars" element={<StarsPage />} />
          <Route path="/profile/:username/packages" element={<PackagesPage /> } />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
        
      </div>
    </UserProfileProvider>
    </BrowserRouter>
  );
}

export default AppRouter;