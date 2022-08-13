import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import ContactForm from './contactForm';
// import ContactList from './contactList';
// import PropTypes from 'prop-types';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  render() {
    return (
      <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101',
      // }}
      >
        <ContactForm />
        {/* <ContactList /> */}
        <GlobalStyle />
      </div>
    );
  }
}

// App.propTypes = {
//   state: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   filter: PropTypes.string.isRequired,
// };
