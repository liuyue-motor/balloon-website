import { useState } from 'react';
import { cases } from '../data/cases';

const PLACEHOLDER_COLORS = [
  'linear-gradient(135deg, #F9E0E4, #E8B4B8)',
  'linear-gradient(135deg, #E8D5F0, #C9A8D4)',
  'linear-gradient(135deg, #FBE8EB, #F0C0C8)',
  'linear-gradient(135deg, #FFF0E6, #FFDAB9)',
  'linear-gradient(135deg, #F5EDE0, #E8D5C4)',
  'linear-gradient(135deg, #FDE8EC, #F5C0C8)',
];

function FeaturedImage({ src, alt, bg }: { src: string; alt: string; bg: string }) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className="hero__featured-img-fallback" style={{ background: bg }}>
        <span>案例图片整理中</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="hero__featured-img"
      loading="lazy"
      onError={() => setError(true)}
    />
  );
}

export default function HeroSection() {
  const featuredCases = cases.filter((c) => c.featured).slice(0, 3);

  return (
    <section id="hero" className="hero">
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__tag">🎈 本地专业气球布置团队</p>
        <h1 className="hero__title">
          气球布置<span className="hero__divider">｜</span>宴会装饰<span className="hero__divider">｜</span>喜事现场
        </h1>
        <p className="hero__subtitle">
          婚房布置、生日宴、乔迁入宅、学校活动、节日活动、酒店迎宾
          <br />
          一站式上门布置服务
        </p>
        <div className="hero__actions">
          <a href="#cases" className="btn btn--primary">
            查看案例
          </a>
          <a href="#contact" className="btn btn--outline">
            微信咨询
          </a>
        </div>

        {/* Featured cases preview */}
        <div className="hero__featured">
          <p className="hero__featured-title">✨ 精选案例</p>
          <div className="hero__featured-grid">
            {featuredCases.map((item) => (
              <a
                key={item.id}
                href="#cases"
                className="hero__featured-card"
              >
                <div className="hero__featured-img-wrap">
                  <FeaturedImage
                    src={item.images[0]}
                    alt={item.title}
                    bg={PLACEHOLDER_COLORS[(item.id - 1) % PLACEHOLDER_COLORS.length]}
                  />
                </div>
                <div className="hero__featured-info">
                  <span className="hero__featured-cat">{item.category}</span>
                  <span className="hero__featured-name">{item.title}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="hero__scroll">
        <span>向下浏览</span>
        <div className="hero__scroll-arrow">↓</div>
      </div>
    </section>
  );
}
