import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { getError, getIsLoading, getContacts } from "redux/selectors";
import ContactList from "components/ContactList/ContactList";
import Form from "components/Form";
import Filter from "components/Filter";
import css from './Contacts.module.css';




export default function ContactsView() {


 const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const contacts = useSelector(getContacts)



  useEffect(() => {dispatch(fetchContacts());
  }, [dispatch]);


 return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        marginLeft: 30,
        backgroundColor: ' E0FFFF',
           
      }}
  >
     
<h1 className={css.title}>Phonebook</h1>

 {isLoading && <p>Loading contacts...</p>}
      
      {error && <p>{error}</p>}
          <Form />

          <h2>Contacts</h2>
      {contacts.length > 0 /* && */ ?
        (<>
        < Filter />
        <ContactList />
        </>) : <p>There is no contacts at this moment</p>
       
      } 
        </div>
       );
  
}
