import  { useState } from 'react';

const Login = () => {
  // This is all states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(null);
  const [passwordValid, setPasswordValid] = useState(null);

  // this is email validations
  const validateEmail = (value) => {
    setEmail(value);
    const isValid = /\S+@\S+\.\S+/.test(value);
    setEmailValid(isValid);
  };
// this is password vliadations
  const validatePassword = (value) => {
    setPassword(value);
    const isValid = value.length >= 8;
    setPasswordValid(isValid);
  };

  return (
    <>
    <h1 className='text-center font-bold text-red-700 text-5xl mb-5 '>This is 2rd Page</h1>
    <div className="flex flex-col items-center space-y-4">
      <input
        type="email"
        placeholder="Email"
        className={`p-2 border-2 ${emailValid === null ? '' : emailValid ? 'border-green-500' : 'border-red-500'}`}
        value={email}
        onChange={(e) => validateEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className={`p-2 border-2 ${passwordValid === null ? '' : passwordValid ? 'border-green-500' : 'border-red-500'}`}
        value={password}
        onChange={(e) => validatePassword(e.target.value)}
      />
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Login</button>

    </div>
    </>
  );
};

export default Login;
