import React, { useState } from 'react';
import './App.css';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import logo from "./contactLogo.png";



function App() {

  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
 
 

  const handleAddContact = () => {
    if (name.trim() === '' || email.trim() === '') {
      alert('Please enter the required fields');
      return;
    }

    const newContact = { name, email };
    setContacts([...contacts, newContact]);
    setName('');
    setEmail('');
  };
 

  const DeleteContact = (index) => {
    const newContacts = [...contacts];
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };
  return (
    <Container>
      <h3 className="text-center mt-4 mb-4">Contact Manager</h3>

      <Container className="app-container ">
        
        <Row className="input-container">
          <Form.Group as={Col} md="12">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} md="12">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
        </Row>
        <Button variant="success" onClick={handleAddContact}>Add</Button>

        {contacts.length > 0 && (
          <Container className="contacts-container">
            {contacts.map((contact, index) => (
              <div key={index} className="contact-item d-flex align-items-center">
                <div className="contact-logo">
                  <img src = {logo} alt="logo" id="contact-img" />
                </div>
                <div className="header-footer">
                  <span className="contact-name">{contact.name}</span>
                  <span id="contact-email">{contact.email}</span>
                </div>
                <span className="contact-delete" onClick={() => DeleteContact(index)}>
                <button className='btnDelete' >Delete</button>
                </span>
              </div>
            ))}
          </Container>
        )}
      </Container>
    </Container>
  );
};

export default App;