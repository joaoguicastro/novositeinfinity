/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const users = [
  { email: 'infinitycursosrecepcao@gmail.com', password: 'InfinityCursos', cities: ['Maracanaú', 'Fortaleza'] },
  { email: 'secretariainfinitycaucaia@gmail.com', password: 'InfinityCursos', cities: ['Caucaia'] },
];

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleLogin(e: any) {
    e.preventDefault();
    const user = users.find((u) => u.email === email && u.password === password);
    if (!user) {
      return setError('Usuário ou senha incorretos');
    }
    navigate('/admin', { state: { cities: user.cities } });
  }

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <form className="border p-4 bg-white rounded shadow" style={{ width: 380 }} onSubmit={handleLogin}>
        <h3 className="text-center mb-3">Login</h3>

        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="mb-3">
          <label>Senha</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        {error && <div className="alert alert-danger py-1 text-center">{error}</div>}

        <button type="submit" className="btn btn-success w-100 mt-2">
          Entrar
        </button>
      </form>
    </div>
  );
}
