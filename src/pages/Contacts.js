import { ContactForm } from 'components/СontactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contacts() {
  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
      <ToastContainer position="top-center" />
    </>
  );
}
