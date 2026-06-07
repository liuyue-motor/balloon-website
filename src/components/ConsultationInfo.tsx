const tips = [
  {
    icon: '📅',
    title: '活动日期',
    desc: '告诉我们活动在哪一天，方便确认档期',
  },
  {
    icon: '📍',
    title: '活动地点',
    desc: '提供活动地址，评估上门距离和场地情况',
  },
  {
    icon: '🎯',
    title: '场景类型',
    desc: '婚房？生日宴？乔迁？告诉我们是什么喜事',
  },
  {
    icon: '💵',
    title: '预算范围',
    desc: '给出大致预算，我们匹配最适合的方案',
  },
  {
    icon: '🏠',
    title: '场地照片',
    desc: '拍摄几张场地照片或视频，帮助评估布置方案',
  },
  {
    icon: '🎨',
    title: '喜欢的风格',
    desc: '告诉我们您喜欢的颜色、风格或参考图',
  },
];

export default function ConsultationInfo() {
  return (
    <section className="consultation">
      <div className="section-header">
        <h2 className="section-title">咨询须知</h2>
        <p className="section-desc">咨询时准备好以下信息，让我们更快为您出方案</p>
      </div>
      <div className="consultation__grid">
        {tips.map((tip) => (
          <div key={tip.title} className="consultation__card">
            <span className="consultation__icon">{tip.icon}</span>
            <div className="consultation__info">
              <h3 className="consultation__title">{tip.title}</h3>
              <p className="consultation__desc">{tip.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
