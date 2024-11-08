import React from 'react'
import Layout from './Layout'
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import ProjectDetail from '../Proyek/ProjectDetail/ProjectDetail';
import Project from '../Proyek/Project/Project';
import { Toaster } from "@/components/ui/toaster"
import { SelectedIdProvider } from '../Proyek/Project/SelectIdProject';

const MainPanel = () => {
    return (
        <Layout>
            <Toaster/>
            <Routes>
                <Route path="*" element={<SelectedIdProvider><Dashboard/></SelectedIdProvider>} />
                <Route path="dashboard" element={<SelectedIdProvider><Dashboard/></SelectedIdProvider>} />
                
                <Route path="proyek" element={<SelectedIdProvider><Project /></SelectedIdProvider>} />
                <Route path="proyek/detail" element={<SelectedIdProvider><ProjectDetail /></SelectedIdProvider>} />
                
            </Routes>
        </Layout>
    )
}

export default MainPanel
