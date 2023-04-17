
import css from './ContactList.module.css'
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from 'redux/operations';
import { patchContact } from 'redux/operations';
import { getVisibleContacts } from 'redux/selectors';
import {
  List,
  ListItem

} from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'


const ContactList = () => {


  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);
  
 
 
    return (<List spacing={3} className={css.list_contacts}>
    
        {contacts.map(({ id, name, number }) => {
          return  (
                <ListItem className={css.element} key={id}>
                    <p >{name} :</p> <p className={css.number}>{number}</p>
                  <Button colorScheme='teal'  onClick={() =>dispatch(deleteContact(id))} >Delete</Button >
                  <Button colorScheme='teal'  onClick={() =>dispatch(patchContact(id))} >Change</Button >
              </ListItem>
          )
        }
        )}
      </List>)
}
    
export default ContactList


