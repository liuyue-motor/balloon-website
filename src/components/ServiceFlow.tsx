const steps = [
  { icon: '💬', title: '微信咨询', desc: '添加微信，告诉我们您的活动需求' },
  { icon: '📸', title: '提供场地照片', desc: '拍摄场地照片或视频，方便评估' },
  { icon: '🎨', title: '确认风格和预算', desc: '选择喜欢的风格，确定预算范围' },
  { icon: '💰', title: '支付定金', desc: '确认方案后支付定金，锁定档期' },
  { icon: '🎈', title: '准备物料', desc: '根据方案采购和准备气球等物料' },
  { icon: '🚗', title: '上门布置', desc: '按约定时间上门，专业团队布置' },
  { icon: '📷', title: '拍照验收', desc: '布置完成后拍照，您确认满意' },
  { icon: '✅', title: '支付尾款', desc: '验收无误后支付尾款，合作愉快' },
];

export default function ServiceFlow() {
  return (
    <section id="flow" className="flow">
      <div className="section-header">
        <h2 className="section-title">服务流程</h2>
        <p className="section-desc">简单几步，轻松拥有专业气球布置</p>
      </div>
      <div className="flow__timeline">
        {steps.map((step, idx) => (
          <div key={idx} className="flow__step">
            <div className="flow__step-number">{idx + 1}</div>
            <div className="flow__step-card">
              <span className="flow__step-icon">{step.icon}</span>
              <h3 className="flow__step-title">{step.title}</h3>
              <p className="flow__step-desc">{step.desc}</p>
            </div>
            {idx < steps.length - 1 && <div className="flow__connector" />}
          </div>
        ))}
      </div>
    </section>
  );
}
