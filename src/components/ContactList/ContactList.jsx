import { useDispatch, useSelector } from 'react-redux';

import css from '../ContactList/ContactList.module.css';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import { Dna } from 'react-loader-spinner';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <section className={css.contacts}>
      {filteredContacts.length === 0 ? (
        'No contacts found.'
      ) : isLoading ? (
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      ) : error ? (
        'Error'
      ) : (
        <ul className={css.contacts__list}>
          {filteredContacts.map(({ id, name, number }) => (
            <li className={css.contacts__item} key={id}>
              <p className={css.contacts__name}>{name}</p>
              <p className={css.contacts__number}>{number}</p>
              <button
                onClick={() => {
                  onDeleteContact(id);
                }}
                className={css.contacts__btn}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
