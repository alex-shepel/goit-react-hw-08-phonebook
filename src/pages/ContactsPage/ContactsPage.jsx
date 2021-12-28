import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import s from './ContactsPage.module.css';

const ContactsPage = () => {
  return (
    <div className={s.contacts}>
      <ContactForm />
      <h2 className={s.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsPage;