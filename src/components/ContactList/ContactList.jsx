import React from 'react';
import PropTypes from 'prop-types';
import style from './ContactList.module.css';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={style.list}>
          {name}: {number}
          <button onClick={() => onDeleteContact(id)} className={style.delBtn}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};