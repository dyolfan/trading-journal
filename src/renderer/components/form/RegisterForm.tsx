import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import SimpleMessage, { MessageType } from '../message/SimpleMessage';
import Button, { ButtonStyleType } from '../buttons/Button';
import Form from '../input/Form';
import TextInput from '../input/TextInput';
import s from './RegisterForm.module.css';
import DropdownSelect from '../input/DropDownSelect';
import { AccountCurrency } from '../../types/model/api';
import { AppDispatch, StoreState } from '../../store/store';
import {
  registerAccount,
  registerAccountSlice,
} from '../../store/action/registerAccount';
import {
  getDropdownOptionsFromEnum,
  parseDropdownOptionToEnum,
} from '../../utils/dropDownUtils';
import routes from '../../routes';

type RegisterFormValues = {
  accountName: string;
  currency: {
    label: string;
    value: AccountCurrency;
  };
};

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const registerAccountState = useSelector(
    (state: StoreState) => state.registerAccount,
  );

  const onSubmit = (values: RegisterFormValues) => {
    dispatch(
      registerAccount({
        account: {
          name: values.accountName,
          currency: parseDropdownOptionToEnum<AccountCurrency>(
            values.currency,
            AccountCurrency,
          )!,
          strategies: [],
          trades: [],
        },
      }),
    );
  };

  useEffect(() => {
    dispatch(registerAccountSlice.actions.registerAccountClear());
  }, [dispatch]);

  return (
    <div className="flex justify-center">
      <div className={s.form_container}>
        <div className="text-center text-main-white text-xl">Register</div>
        <Form<RegisterFormValues> onSubmit={onSubmit}>
          {() => (
            <>
              <TextInput name="accountName" label="Account name" />
              <DropdownSelect
                name="currency"
                label="Currency"
                options={getDropdownOptionsFromEnum<AccountCurrency>(
                  AccountCurrency,
                )}
              />
              <div className="w-full grid grid-cols-4 mt-4 gap-4">
                <div className="col-span-1 col-start-2 flex justify-center">
                  <Button
                    text="Register"
                    type="submit"
                    disabled={registerAccountState.isLoading}
                  />
                </div>
              </div>
              <div className="w-full grid grid-cols-4 mt-10 gap-4">
                <div className="text-main-white">Already have an account?</div>
                <div className="col-start-2 col-span-1 flex justify-center">
                  <Button
                    text="Login"
                    styleType={ButtonStyleType.INLINE}
                    onClick={() => navigate(routes.HOME)}
                    disabled={registerAccountState.isLoading}
                  />
                </div>
              </div>
            </>
          )}
        </Form>
        {registerAccountState.isComplete && (
          <div className="flex justify-center">
            <SimpleMessage type={MessageType.SUCCESS} text="Account created" />
          </div>
        )}
        {registerAccountState.isFailed && (
          <div className="flex justify-center">
            <SimpleMessage
              type={MessageType.ERROR}
              text="Failed to created account. Please try again"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterForm;
