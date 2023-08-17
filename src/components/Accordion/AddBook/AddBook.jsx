import { Tab } from '@headlessui/react';
import { useState } from 'react';
import UserBooks from './UserBooks';
import AddBookForm from './AddBookForm';
import { ButtonContainer, TabButton } from './AddBook.styled';

export default function AddBook() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <ButtonContainer>
        <TabButton>Books I sell</TabButton>
        <TabButton>Add book</TabButton>
      </ButtonContainer>
      <Tab.Panels>
        <Tab.Panel>
          <UserBooks />
        </Tab.Panel>
        <Tab.Panel>
          <AddBookForm />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
