import React from 'react'
import Layout from './Layout'
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import ProjectDetail from '../Proyek/ProjectDetail/ProjectDetail';

const MainPanel = () => {
    return (
        <Layout>
            <Routes>
                <Route path="*" element={<Dashboard />} />
                <Route path="dashboard" element={<Dashboard/>} />
                <Route path="proyek/detail" element={<ProjectDetail />} />
            </Routes>
        </Layout>
    )
}

export default MainPanel
