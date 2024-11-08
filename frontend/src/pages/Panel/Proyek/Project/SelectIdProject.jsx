import { createContext, useState } from 'react';

export const SelectedIdContext = createContext();

export const SelectedIdProvider = ({ children }) => {
    const [selectedId, setSelectedId] = useState(() => {
        return localStorage.getItem('id_project') ? JSON.parse(localStorage.getItem('id_project')) : null;
    });

    const updateSelectedId = (id) => {
        setSelectedId(id);
        localStorage.setItem('id_project', JSON.stringify(id));
    };

    return (
        <SelectedIdContext.Provider value={{ selectedId, updateSelectedId }}>
            {children}
        </SelectedIdContext.Provider>
    );
};
