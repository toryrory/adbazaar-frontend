import { useState, useEffect } from 'react';
import UserBooks from './UserBooks';
import AddBookForm from './AddBookForm/AddBookForm';
import { TabBtn, Text } from "./AddBookTab.styled";
import { TabContext, TabList, TabPanel } from '@mui/lab';

export default function AddBook() {
  const [tabValue, setTabValue] = useState('2');
  const [focused, setFocused] = useState(true)
 
  const changeTabValue = (e, newValue) => {
    setTabValue(newValue);
    setFocused(!focused);
  }

  return (
    <>
      <TabContext value={tabValue}>
        <TabList
          indicatorColor='none'
          onChange={changeTabValue}
          textColor='inherit'
        >
          <TabBtn label='Books I sell' value='1' focused={`${!focused}`} />
          <TabBtn label='Add book' value='2' focused={`${focused}`} />
        </TabList>
        <TabPanel value='1'>
          <UserBooks />
        </TabPanel>
        <TabPanel value='2' sx={{ padding: "18px 24px 47px" }}>
          <Text>Book information</Text>
          <AddBookForm />
        </TabPanel>
      </TabContext>
    </>
    // <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
    //   <ButtonContainer>
    //     <TabButton>Books I sell</TabButton>
    //     <TabButton>Add book</TabButton>
    //   </ButtonContainer>
    //   <Tab.Panels>
    //     <Tab.Panel>
    //       <UserBooks />
    //     </Tab.Panel>
    //     <Tab.Panel>
    //       <AddBookForm />
    //     </Tab.Panel>
    //   </Tab.Panels>
    // </Tab.Group>
  );
}
