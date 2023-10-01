
import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Formulario enviado:', formData);
    // Limpia los campos después de enviar
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="my-8">
      <h2 className="text-xl font-semibold mb-4">Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border rounded w-full py-2 px-3"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
