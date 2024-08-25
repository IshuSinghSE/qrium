import Layout from '../components/Layout';
import Link from 'next/link';

export default function Login() {
  return (
    <Layout>
      <h2>Login</h2>
      <form method="POST" action="/api/auth/login">
        <input type="email" placeholder="Email" name="email" required />
        <input type="password" placeholder="Password" name="password" required />
        <button type="submit">Login</button>
      </form>
      <p>
        Don&apos;t have an account? <Link href="/register">Register here</Link>.
      </p>
      <button>Login with Google</button> {/* Social login */}
    </Layout>
  );
}
