import { useState, useCallback } from 'react';

const WECHAT_ID = 'z960916894';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const handleCopy = useCallback(async () => {
    setCopyError(false);

    // Try modern clipboard API first
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(WECHAT_ID);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
        return;
      } catch {
        // Fall through to fallback
      }
    }

    // Fallback: legacy execCommand
    try {
      const textarea = document.createElement('textarea');
      textarea.value = WECHAT_ID;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      const success = document.execCommand('copy');
      document.body.removeChild(textarea);

      if (success) {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      } else {
        setCopyError(true);
      }
    } catch {
      setCopyError(true);
    }
  }, []);

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
            <span className="contact__value">杨先生 / 张女士</span>
          </div>
          <div className="contact__item">
            <span className="contact__label">💬 微信号</span>
            <span className="contact__value">{WECHAT_ID}</span>
          </div>
          <div className="contact__item">
            <span className="contact__label">📞 电话</span>
            <span className="contact__value">18667215786 杨先生<br />13587271693 张女士</span>
          </div>
          <div className="contact__item">
            <span className="contact__label">📍 服务区域</span>
            <span className="contact__value">本地及周边区域，具体可微信沟通</span>
          </div>
          <div className="contact__actions">
            <button
              className={`btn btn--primary contact__btn${copied ? ' contact__btn--copied' : ''}`}
              onClick={handleCopy}
            >
              {copied ? '✅ 已复制微信号' : '📋 复制微信号'}
            </button>
            <a
              href={`weixin://dl/business/?t=${WECHAT_ID}`}
              className="btn btn--outline contact__btn"
            >
              💬 打开微信咨询
            </a>
          </div>
          {copyError && (
            <p className="contact__copy-error">
              请手动复制微信号：{WECHAT_ID}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
