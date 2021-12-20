import PropTypes from 'prop-types';
import s from './ContactList.module.scss';
const Contact = ({ contact, onDeleteContact }) => (
  <>
    <span>
      {contact.name}: {contact.number}
    </span>
    <button className={s.button} type="button" onClick={onDeleteContact}>
      Delete
    </button>
  </>
);

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
