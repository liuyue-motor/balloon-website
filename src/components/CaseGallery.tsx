import { useState, useCallback } from 'react';
import { cases } from '../data/cases';

interface CaseGalleryProps {
  activeCategory: string | null;
}

const PLACEHOLDER_COLORS = [
  'linear-gradient(135deg, #F9E0E4, #E8B4B8)',
  'linear-gradient(135deg, #E8D5F0, #C9A8D4)',
  'linear-gradient(135deg, #FBE8EB, #F0C0C8)',
  'linear-gradient(135deg, #FFF0E6, #FFDAB9)',
  'linear-gradient(135deg, #F5EDE0, #E8D5C4)',
  'linear-gradient(135deg, #FDE8EC, #F5C0C8)',
];

function getPlaceholderBg(id: number): string {
  return PLACEHOLDER_COLORS[(id - 1) % PLACEHOLDER_COLORS.length];
}

/** Single image that falls back to a gradient placeholder on 404/error */
function CaseImage({
  src,
  alt,
  placeholderBg,
  className,
}: {
  src: string;
  alt: string;
  placeholderBg: string;
  className?: string;
}) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className={`case-image-fallback ${className ?? ''}`} style={{ background: placeholderBg }}>
        <span>案例图片整理中</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setError(true)}
    />
  );
}

export default function CaseGallery({ activeCategory }: CaseGalleryProps) {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  const filteredCases = activeCategory
    ? cases.filter((c) => c.category === activeCategory)
    : cases;

  const selected = selectedCase !== null ? cases.find((c) => c.id === selectedCase) : null;

  const handleModalClose = useCallback(() => setSelectedCase(null), []);

  return (
    <section id="cases" className="cases">
      <div className="section-header">
        <h2 className="section-title">案例展示</h2>
        <p className="section-desc">真实案例，用心布置每一场喜事</p>
      </div>

      {/* case grid */}
      <div className="cases__grid">
        {filteredCases.map((item) => (
          <div
            key={item.id}
            className="cases__card"
            onClick={() => setSelectedCase(item.id)}
          >
            <div className="cases__card-img">
              <CaseImage
                src={item.images[0]}
                alt={item.title}
                placeholderBg={getPlaceholderBg(item.id)}
                className="cases__card-img-el"
              />
              <span className="cases__card-badge">{item.category}</span>
            </div>
            <div className="cases__card-body">
              <h3 className="cases__card-title">{item.title}</h3>
              <p className="cases__card-theme">{item.themeName}</p>
              <div className="cases__card-keywords">
                {item.keywords.slice(0, 3).map((kw) => (
                  <span key={kw} className="cases__card-tag">{kw}</span>
                ))}
              </div>
              <p className="cases__card-price">{item.priceRange}</p>
            </div>
          </div>
        ))}
      </div>

      {filteredCases.length === 0 && (
        <p className="cases__empty">该分类暂无案例，敬请期待！</p>
      )}

      {/* detail modal */}
      {selected && (
        <div className="modal" onClick={handleModalClose}>
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" onClick={handleModalClose}>
              ✕
            </button>

            {/* Horizontal scrollable image gallery */}
            <div className="modal__gallery">
              {selected.images.map((imgSrc, idx) => (
                <div key={idx} className="modal__gallery-item">
                  <CaseImage
                    src={imgSrc}
                    alt={`${selected.title} - 图片 ${idx + 1}`}
                    placeholderBg={getPlaceholderBg(selected.id)}
                    className="modal__gallery-img"
                  />
                </div>
              ))}
            </div>

            <div className="modal__body">
              <span className="modal__category">{selected.category}</span>
              <h2 className="modal__title">{selected.title}</h2>
              <p className="modal__theme">{selected.themeName}</p>

              <div className="modal__section">
                <h4>布置说明</h4>
                <p>{selected.description}</p>
              </div>

              <div className="modal__section">
                <h4>关键词</h4>
                <div className="modal__tags">
                  {selected.keywords.map((kw) => (
                    <span key={kw} className="modal__tag">{kw}</span>
                  ))}
                </div>
              </div>

              <div className="modal__section">
                <h4>适用场景</h4>
                <ul className="modal__list">
                  {selected.suitableFor.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>

              <div className="modal__section">
                <h4>服务项目</h4>
                <ul className="modal__list">
                  {selected.services.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>

              <div className="modal__section">
                <h4>参考价格</h4>
                <p className="modal__price">{selected.priceRange}</p>
              </div>

              <p className="modal__gallery-note">
                📸 更多现场案例可添加微信查看
              </p>

              <a href="#contact" className="btn btn--primary modal__cta" onClick={handleModalClose}>
                微信咨询此方案
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
