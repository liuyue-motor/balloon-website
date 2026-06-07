import { categories, categoryDescriptions } from '../data/cases';

const categoryIcons: Record<string, string> = {
  '婚房布置': '💒',
  '生日宴布置': '🎂',
  '乔迁入宅': '🏠',
  '婚礼 / 订婚宴': '💍',
  '学校 / 儿童活动': '🎨',
  '节日 / 商家活动': '🎉',
};

interface ServiceCategoriesProps {
  onSelectCategory: (category: string | null) => void;
  activeCategory: string | null;
}

export default function ServiceCategories({ onSelectCategory, activeCategory }: ServiceCategoriesProps) {
  return (
    <section id="services" className="services">
      <div className="section-header">
        <h2 className="section-title">服务分类</h2>
        <p className="section-desc">六大场景，满足您的各类喜事布置需求</p>
      </div>
      <div className="services__grid">
        <button
          className={`services__card ${activeCategory === null ? 'services__card--active' : ''}`}
          onClick={() => onSelectCategory(null)}
        >
          <span className="services__icon">📋</span>
          <h3 className="services__name">全部案例</h3>
          <p className="services__desc">浏览所有布置案例</p>
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`services__card ${activeCategory === cat ? 'services__card--active' : ''}`}
            onClick={() => onSelectCategory(cat)}
          >
            <span className="services__icon">{categoryIcons[cat]}</span>
            <h3 className="services__name">{cat}</h3>
            <p className="services__desc">{categoryDescriptions[cat]}</p>
          </button>
        ))}
      </div>
    </section>
  );
}
