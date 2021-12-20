import PropTypes from 'prop-types';
import s from './ContactList.module.scss';
import Contact from './Contact';

function ContactList({ contacts, onDeleteContact }) {
  return contacts.length === 0 ? (
    <div className={s.noContacts}>You haven't contacts!</div>
  ) : (
    <ul className={s.item}>
      {contacts.map(contact => (
        <li className={s.list} key={contact.id}>
          <Contact
            contact={contact}
            onDeleteContact={() => onDeleteContact(contact.id)}
          />
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
