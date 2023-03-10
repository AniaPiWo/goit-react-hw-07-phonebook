import React from 'react';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContactsThunk } from 'redux/contacts/contacts.thunk';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, []);

  return (
    <div>
      <Section>
        <Form />
        <Filter />
        <Contacts />
      </Section>
    </div>
  );
};
