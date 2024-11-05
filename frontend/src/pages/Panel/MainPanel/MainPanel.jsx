import React from 'react'
import Layout from './Layout'
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import ProjectDetail from '../Proyek/ProjectDetail/ProjectDetail';
import Project from '../Proyek/Project/Project';
import { Toaster } from "@/components/ui/toaster"

const MainPanel = () => {
    return (
        <Layout>
            <Toaster/>
            <Routes>
                <Route path="*" element={<Dashboard />} />
                <Route path="dashboard" element={<Dashboard/>} />
                <Route path="proyek" element={<Project />} />
                <Route path="proyek/detail" element={<ProjectDetail />} />
            </Routes>
        </Layout>
    )
}

export default MainPanel
