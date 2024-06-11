import React, { useState } from 'react';
import InputCustomizado from '../inputCustomizado/inputCustomizado';
import './contact.css'
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log('Form data submitted:', formData);
  };

  return (
    <div>
      <h1>Contato</h1>
    <form id='formulario' onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <InputCustomizado type="text" defaultValue={formData.name} placeholder="Nome"  />
      </div>
      <div>
        <label>Email:</label>
        <InputCustomizado type="email" defaultValue={formData.email} placeholder="Email" />
      </div>
      <div>
        <label>Mensagem:</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
    </div>

    
  );
}

export default Contact;
