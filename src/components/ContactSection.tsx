export default function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <h2 className="section-title">联系我们</h2>
        <p className="section-desc">添加微信，获取免费方案咨询</p>
      </div>
      <div className="contact__card">
        <div className="contact__qr">
          <div className="contact__qr-placeholder">
            <span>📱</span>
            <p>微信二维码</p>
            <p className="contact__qr-hint">（待替换真实二维码）</p>
          </div>
        </div>
        <div className="contact__info">
          <div className="contact__item">
            <span className="contact__label">👤 联系人</span>
            <span className="contact__value">待填写</span>
          </div>
          <div className="contact__item">
            <span className="contact__label">💬 微信号</span>
            <span className="contact__value">待填写</span>
          </div>
          <div className="contact__item">
            <span className="contact__label">📞 电话</span>
            <span className="contact__value">待填写</span>
          </div>
          <div className="contact__item">
            <span className="contact__label">📍 服务区域</span>
            <span className="contact__value">待填写</span>
          </div>
          <div className="contact__actions">
            <button className="btn btn--primary contact__btn">
              📋 复制微信号
            </button>
            <a
              href="weixin://"
              className="btn btn--outline contact__btn"
            >
              💬 打开微信咨询
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
