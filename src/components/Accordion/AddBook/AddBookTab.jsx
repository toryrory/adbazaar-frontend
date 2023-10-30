import { useState} from 'react';
import { useSelector} from 'react-redux';
import { selectUserBooks } from '@/redux/selectors';
import UserBooksList from './UserBooks/UserBooksList';
import AddBookForm from './AddBookForm/AddBookForm';
import { TabBtn, Text } from "./AddBookTab.styled";
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { books } from '@/data/books'; //fot test

export default function AddBook() {
  const userBooks = useSelector(selectUserBooks);
  const [tabValue, setTabValue] = useState('2');
  const [focused, setFocused] = useState(true)
 
  const changeTabValue = (e, newValue) => {
    setTabValue(newValue);
    setFocused(!focused);
  }
  console.log(books.slice(45));
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
        <TabPanel value='1' sx={{ padding: "16px 16px 48px" }}>
          <UserBooksList books={books.slice(45)} />
          {/* <UserBooksList books={userBooks} /> */}
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
