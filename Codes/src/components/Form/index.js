import React, { useRef } from 'react';
import { Form } from '@unform/web';
import Input from './input';
import * as Yup from 'yup';
import { Wrapper } from './styles'


export default function Forms() {
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
    <Wrapper>
      <h1>Formulario</h1>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Digite seu nome" />
        <Input type="email" name="email" placeholder="Digite seu email" />
        <Input type="password" name="password" placeholder="Digite uma senha secreta" />
        <button type="submit">Enviar</button>
      </Form>
    </Wrapper>
  );
}