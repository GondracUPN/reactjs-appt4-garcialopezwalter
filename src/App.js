import React, { useReducer, useState } from 'react';
import './App.css';

const initialState = {
  SKU: '',
  Descripcion: '',
  UnidadMedida: '',
  Estado: '',
  Cantidad: ''
};

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  };
};

function App() {
  const [formData, setFormData] = useReducer(formReducer, initialState);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      console.log('Datos enviados:', formData);
      setFormData(initialState);
    }, 17000);
  };

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value
    });
  };

  return (
    <div className="estilo">
      <h1>
        <div className="estilo4">Registro de Producto</div>
      </h1>
      {submitting && (
        <div>
          Tu realizaste Submit para la siguiente información:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}>
                <strong>{name}</strong>: {value.toString()}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="estilo3">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
              <p className="estilo4">SKU</p>
              <input name="SKU" value={formData.SKU} onChange={handleChange} />
            </label>
            <label>
              <p className="estilo4">Descripción</p>
              <input name="Descripcion" value={formData.Descripcion} onChange={handleChange} />
            </label>
            <label>
              <p className="estilo4">Unidad de Medida</p>
              <input name="UnidadMedida" value={formData.UnidadMedida} onChange={handleChange} />
            </label>
            <label>
              <p className="estilo4">Estado</p>
              <input name="Estado" value={formData.Estado} onChange={handleChange} />
            </label>
            <label>
              <p className="estilo4">Cantidad</p>
              <input name="Cantidad" value={formData.Cantidad} onChange={handleChange} />
            </label>
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
