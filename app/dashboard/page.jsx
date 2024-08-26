import Layout from '../../components/Layout';
import QRCodeList from '../../components/QRCodeList';

export default function Dashboard() {
  return (
    <Layout>
      <h2>Your QR Codes</h2>
      <QRCodeList />
    </Layout>
  );
}
