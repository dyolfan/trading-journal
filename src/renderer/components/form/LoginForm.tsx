import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './LoginForm.module.css';
import TextInput from '../input/TextInput';
import Form, { FormPropsOnSubmit } from '../input/Form';
import Button, { ButtonStyleType } from '../buttons/Button';
import SimpleMessage, { MessageType } from '../message/SimpleMessage';
import routes from '../../routes';
import { loadAccountByName } from '../../store/action/authorizeAccountState';
import { AppDispatch, StoreState } from '../../store/store';

type LoginFormValues = {
  accountName: string;
};

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const authAccountState = useSelector(
    (state: StoreState) => state.authorizeAccount,
  );

  const onSubmit: FormPropsOnSubmit<LoginFormValues> = async (values) =>
    dispatch(loadAccountByName({ accountName: values.accountName }));

  useEffect(() => {
    if (authAccountState.isLoaded) {
      navigate(routes.STRATEGIES);
    }
  }, [navigate, authAccountState]);

  return (
    <div className={s.login_form_wrapper}>
      <div className={s.login_form_container}>
        <div className="text-xl text-center mt-2">Login</div>
        <Form<LoginFormValues> onSubmit={onSubmit}>
          {() => (
            <div className="w-full flex flex-col items-center">
              <TextInput name="accountName" label="Account name" />
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="col-span-1">
                  <Button
                    text="Login"
                    type="submit"
                    disabled={authAccountState.isLoading}
                  />
                </div>
                <div className="col-span-1">
                  <Button
                    text="Register"
                    styleType={ButtonStyleType.INLINE}
                    disabled={authAccountState.isLoading}
                    onClick={() => navigate(routes.REGISTER)}
                  />
                </div>
              </div>
            </div>
          )}
        </Form>
        {authAccountState.isFailed && (
          <div className="flex justify-center mt-2">
            <SimpleMessage type={MessageType.ERROR} text="Failed to login" />
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
