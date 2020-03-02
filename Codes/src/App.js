import React, { useRef } from 'react';
import { Form } from '@unform/web';
import Input from './components/Form/input';
import * as Yup from 'yup';
import Img from './components/Img/index'

function App() {
  const formRef = useRef(null);
  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatorio'),
        email: Yup.string().required('Email é obrigatorio').email('Insira um email valido'),
        password: Yup.string().required('a senha é obrigatoria')
      })

      await schema.validate(data, {
        abortEarly: false,
      })

      reset()
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        })

        formRef.current.setErrors(errorMessages)
      }
    }
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Img />
      {/* <Form ref={formRef} onSubmit={handleSubmit}>
        <Input type="" name="name" />
        <Input type="email" name="email" />
        <Input type="password" name="password" />
        <button type="submit">Enviar</button>
      </Form> */}
    </div>
  );
}

export default App;
