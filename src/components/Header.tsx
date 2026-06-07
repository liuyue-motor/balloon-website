import { useState } from 'react';

const navItems = [
  { label: '首页', href: '#hero' },
  { label: '服务分类', href: '#services' },
  { label: '案例展示', href: '#cases' },
  { label: '套餐参考', href: '#pricing' },
  { label: '服务流程', href: '#flow' },
  { label: '联系我们', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__inner">
        <a href="#hero" className="header__logo">
          🎈 喜事气球布置
        </a>
        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="header__nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          className="header__menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="切换菜单"
        >
          <span className={`header__menu-icon ${menuOpen ? 'header__menu-icon--open' : ''}`} />
        </button>
      </div>
    </header>
  );
}
