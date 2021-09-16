import React, { useState, useContext } from 'react';

export const ContactContext = React.createContext();

export const useContact = () => useContext(ContactContext);

export default function ContactProvider({ children }) {
  const [contact, setContact] = useState(false);

  const toggleContact = () => {
    return setContact((prev) => !prev);
  };

  return (
    <ContactContext.Provider value={{contact, toggleContact}}>
      {children}
    </ContactContext.Provider>
  )
}