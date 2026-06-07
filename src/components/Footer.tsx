export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__brand">🎈 炫彩气球布置</p>
        <p className="footer__slogan">用心布置每一场喜事</p>
        <p className="footer__copy">
          © {new Date().getFullYear()} 炫彩气球布置 版权所有
        </p>
      </div>
    </footer>
  );
}
