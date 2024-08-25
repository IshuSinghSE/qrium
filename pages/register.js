import Layout from '../components/Layout';
import Link from 'next/link';

export default function Register() {
  return (
    <Layout>
      <h2>Register</h2>
      <form method="POST" action="/api/auth/register">
        <input type="email" placeholder="Email" name="email" required />
        <input type="text" placeholder="Username" name="username" required />
        <input type="password" placeholder="Password" name="password" required />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link href="/login">Login here</Link>.
      </p>
    </Layout>
  );
}
