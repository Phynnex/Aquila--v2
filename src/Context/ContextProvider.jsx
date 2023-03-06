import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();


export const ContextProvider = ({ children }) => {
const [openModal, setOpenModal] = useState(false)
const [projectName, setProjectName] = useState("");
const [reports , setReports] = useState(null)
const [scanFile , setScanFile] = useState(null)
const [projectX, setProjectX] = useState(null)
const [downloadPdf, setDownloadPdf] = useState(null)


  




  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={{ openModal, setOpenModal,projectName, setProjectName, reports, setReports, scanFile, setScanFile, projectX, setProjectX, downloadPdf, setDownloadPdf }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);