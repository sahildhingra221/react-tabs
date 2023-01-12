import React, {useState} from 'react'

import Static from '../components/common/Static'
import { 
    Box, 
    Grid,
    Text,
    Heading,
    Button, 
    Container,
    Flex,
    Image
  } from '@chakra-ui/react';
import "./Settings.css"

const Settings = () => {

    const [activeTab, setActiveTab] = useState(1)

  return (
    <>
        <Static>
            <Heading pt='10px' pb='50px' as='h1' size='lg' fontWeight='500'>Settings</Heading>
            <ul className="tab-nav">
                <li onClick={() =>setActiveTab(1)} className={activeTab===1 ? "active" : ""}>
                    My Details
                </li>
                <li onClick={() =>setActiveTab(2)} className={activeTab===2 ? "active" : ""}>
                    Themes
                </li>
                <li onClick={() =>setActiveTab(3)} className={activeTab===3 ? "active" : ""}>
                    Password
                </li>
            </ul>
            <div className="tab-content">
                <div className={"tab-content-item "+(activeTab===1 ? "current" : "")}>Themes</div>
                <div className={"tab-content-item "+(activeTab===2 ? "current" : "")}>Password</div>
                <div className={"tab-content-item "+(activeTab===3 ? "current" : "")}>My Details</div>
            </div>
        </Static>
    </>
  )
}

export default Settings