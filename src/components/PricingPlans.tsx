const plans = [
  {
    name: '轻量布置',
    icon: '🎈',
    price: '微信细谈',
    desc: '适合婚房、乔迁、小生日、小型门口布置。基础气球装饰，简约不简单，为您的重要时刻增添喜庆氛围。',
    features: ['门口气球立柱', '基础气球链', '桌面气球装饰', '1-2 个场景', '标准乳胶气球'],
    color: '#D4A574',
  },
  {
    name: '标准布置',
    icon: '🎊',
    price: '微信细谈',
    desc: '适合生日宴、订婚宴、宝宝宴、乔迁宴。较丰富的布置方案，包含多种气球造型，场面更有仪式感。',
    features: ['气球拱门 / 背景墙', '气球链装饰', '数字 / 字母造型', '桌面气球组', '2-3 个场景'],
    color: '#E8B4B8',
    highlight: true,
  },
  {
    name: '宴会布置',
    icon: '✨',
    price: '微信细谈',
    desc: '适合酒店入口、婚礼迎宾、较大活动。大气精致的布置方案，多区域联动，营造专业宴会氛围。',
    features: ['大型气球拱门', '多层背景墙', '签到台 / 迎宾区', '气球立柱组合', '灯光搭配建议', '3-5 个场景'],
    color: '#C41E3A',
  },
  {
    name: '定制布置',
    icon: '🌟',
    price: '微信细谈',
    desc: '适合学校活动、公司活动、商家活动、大型喜宴。完全个性化定制，根据场地和需求专属设计。',
    features: ['专属方案设计', '大型搭建', '多区域联动', '特殊造型定制', '灯光 / 花艺搭配', '不限场景数量'],
    color: '#D4A574',
  },
];

export default function PricingPlans() {
  return (
    <section id="pricing" className="pricing">
      <div className="section-header">
        <h2 className="section-title">套餐参考</h2>
        <p className="section-desc">根据日期、地点、场地大小、物料选择和布置范围报价</p>
      </div>
      <div className="pricing__grid">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`pricing__card ${plan.highlight ? 'pricing__card--highlight' : ''}`}
          >
            {plan.highlight && <span className="pricing__badge">热门推荐</span>}
            <span className="pricing__icon">{plan.icon}</span>
            <h3 className="pricing__name">{plan.name}</h3>
            <p className="pricing__price" style={{ color: plan.color }}>
              {plan.price}
            </p>
            <p className="pricing__desc">{plan.desc}</p>
            <ul className="pricing__features">
              {plan.features.map((f) => (
                <li key={f} className="pricing__feature">
                  <span className="pricing__check">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn btn--primary pricing__cta">
              咨询套餐
            </a>
          </div>
        ))}
      </div>
      <p className="pricing__note">
        * 具体价格根据活动日期、地点、场地大小、物料选择和布置范围确定，请添加微信详谈。
      </p>
    </section>
  );
}
