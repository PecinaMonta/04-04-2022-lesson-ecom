// import { Field, Form, Formik } from "formik";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

const Auth: React.FC<{ login?: boolean }> = ({ login }) => {
  if (login) return <LoginForm />;

  return (
    <>
      <SignUpForm />
    </>
  );
};

export default Auth;