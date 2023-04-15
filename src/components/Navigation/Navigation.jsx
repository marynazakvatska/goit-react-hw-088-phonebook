/* import React from 'react';
import { useSelector } from 'react-redux';

import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { List, ListElement } from './Navigation.styled';

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #2A363B',
    },
}; */

/* export default function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsAuthenticated); 
    
    return (
        <header style={styles.header}>
        
            
         <Navigation />
               {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>


        
    );
} */
/* 
 const Navigation = () => {
    return (
       <div>
         <header>
        <div>
            <List>
                <ListElement>
<NavLink to="/register">Registration</NavLink>
                        </ListElement>
                                <ListElement>
<NavLink to="/login">Login</NavLink>
                </ListElement>
                
                <ListElement>
<NavLink to="/contacts">Contacts</NavLink>
                </ListElement>
                
                </List>
                 </div>
            </header>
            
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet /> 
                    </Suspense>
            </main>
       </div>
    )
}

export default Navigation */



import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
