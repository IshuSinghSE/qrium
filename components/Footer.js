import { useEffect } from 'react';

export default function Footer() {
  useEffect(() => {
    const footer = document.getElementById('footer');
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight ) {
        footer.classList.add('visible');
      } else {
        footer.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer id="footer" className="footer fixed bottom-0 w-full border-t-2 border-slate-900 transition-transform duration-500 ease-in-out">
      <p>&copy; 2024 QR Code Generator. All rights reserved.</p>
    </footer>
  );
}