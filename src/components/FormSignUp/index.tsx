import { Email, Lock, AccountCircle } from '@styled-icons/material-outlined';

import Link from 'next/link';

import Button from 'components/Button';
import TextField from 'components/TextField';
import * as S from './styles';

const FormSignUp = () => (
  <S.Wrapper>
    <form>
      <TextField
        name="name"
        placeholder="Name"
        icon={<AccountCircle />}
        type="name"
      />

      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />

      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />

      <TextField
        name="confirm-password"
        placeholder="Confirm Password"
        type="password"
        icon={<Lock />}
      />

      <Button size="large" fullWidth>
        Sign up now
      </Button>

      <S.FormLink>
        Already have an account?
        <Link href="/sign-in">
          <a>Sign in</a>
        </Link>
      </S.FormLink>
    </form>
  </S.Wrapper>
);

export default FormSignUp;
