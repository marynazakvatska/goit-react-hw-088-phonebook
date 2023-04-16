import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';
import { Input } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'


export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <Input   type="text" name="name" />
      </label>
      <label className={css.label}>
        Email
        <Input  type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <Input type="password" name="password" />
      </label>
      <Button colorScheme='teal' type="submit">Register</Button>
    </form>
  );
};
