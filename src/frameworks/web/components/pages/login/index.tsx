import * as className from 'classnames/bind';
import * as React from "react";
import { useDispatch } from "react-redux";
import actions from '@frameworks/web/redux/actions';
import Authorization from '../../templates/authorization';
import * as styles from './index.scss';

const cx = className.bind(styles);

const Login: React.FC = () => {
  const dispatch = useDispatch();

  const handleClickAccreditation = async (id: string, pw: string) => {
    dispatch(await actions.session.login(id, pw));
  };

  return (
    <div className={cx("login")}>
      <Authorization accredit={handleClickAccreditation} btnValue="Login" />
    </div>
  );
};


export default Login;