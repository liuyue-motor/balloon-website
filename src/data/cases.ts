export interface CaseItem {
  id: number;
  title: string;
  category: string;
  themeName: string;
  keywords: string[];
  description: string;
  suitableFor: string[];
  services: string[];
  priceRange: string;
  images: string[];
  featured: boolean;
}

export type Category =
  | '婚房布置'
  | '生日宴布置'
  | '乔迁入宅'
  | '婚礼 / 订婚宴'
  | '学校 / 儿童活动'
  | '节日 / 商家活动';

export const categories: Category[] = [
  '婚房布置',
  '生日宴布置',
  '乔迁入宅',
  '婚礼 / 订婚宴',
  '学校 / 儿童活动',
  '节日 / 商家活动',
];

export const categoryDescriptions: Record<Category, string> = {
  '婚房布置': '红金喜庆风格，打造温馨浪漫的婚房氛围',
  '生日宴布置': '多彩主题布置，为每一个重要生日留下美好回忆',
  '乔迁入宅': '有家有喜，用气球装点新家，寓意红红火火',
  '婚礼 / 订婚宴': '酒店入口拱门、迎宾区布置，大气精致',
  '学校 / 儿童活动': '六一儿童节、开学典礼、班级活动布置',
  '节日 / 商家活动': '开业庆典、节日活动、商家引流布置',
};

function imgDir(dir: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) =>
    `/assets/cases/${dir}/${String(i + 1).padStart(2, '0')}.jpg`,
  );
}

export const cases: CaseItem[] = [
  {
    id: 1,
    title: '生日宴主题布置｜周岁 / 成人生日 / 生日派对',
    category: '生日宴布置',
    themeName: '蓝色气球拱门与粉色甜美生日主题',
    keywords: ['生日宴', '周岁生日', '成人生日', '气球拱门', '生日派对'],
    description:
      '为周岁宝宝宴、成人生日派对提供精美气球布置。蓝色气球拱门搭配粉色甜美装饰，营造温馨欢乐的生日氛围。包含数字气球立柱、背景墙装饰与桌面气球摆件，让生日现场充满仪式感与拍照亮点。',
    suitableFor: ['周岁生日', '宝宝宴', '成人生日派对', '寿宴布置'],
    services: ['气球拱门', '数字气球立柱', '背景墙装饰', '桌面气球摆件', '气球链'],
    priceRange: '微信细谈',
    images: imgDir('birthday', 7),
    featured: true,
  },
  {
    id: 2,
    title: '婚礼迎宾拱门｜充气拱门与单元门口气球布置',
    category: '婚礼 / 订婚宴',
    themeName: '红粉喜庆迎宾拱门主题',
    keywords: ['婚礼拱门', '充气拱门', '单元门口', '接亲布置', '迎宾区'],
    description:
      '为婚礼迎宾、接亲现场提供充气拱门与单元门口气球布置。红粉配色喜庆大气，充气拱门结构稳固、适合全天候展示。单元门口布置涵盖气球立柱、气球链与喜字装饰，让婚房入口第一眼就充满喜庆氛围。',
    suitableFor: ['婚礼迎宾', '接亲布置', '单元门口装饰', '婚房入口', '酒店入口'],
    services: ['充气拱门', '门口气球立柱', '气球链装饰', '喜字气球造型', '迎宾区布置'],
    priceRange: '微信细谈',
    images: imgDir('wedding-arch', 7),
    featured: true,
  },
  {
    id: 3,
    title: '开业庆典布置｜充气拱门与地爆球',
    category: '节日 / 商家活动',
    themeName: '红色开业庆典迎宾主题',
    keywords: ['开业庆典', '充气拱门', '地爆球', '商家活动', '门店引流'],
    description:
      '为店铺开业、商家庆典提供充气拱门与地爆球布置方案。红色充气拱门气势十足，搭配地爆球释放环节将开业氛围推向高潮。适合门店引流、品牌活动暖场，让开业现场红红火火、人气爆棚。',
    suitableFor: ['店铺开业', '品牌活动', '商家周年庆', '门店引流', '庆典暖场'],
    services: ['充气拱门', '地爆球', '气球立柱', '拱门横幅', '迎宾区布置'],
    priceRange: '微信细谈',
    images: imgDir('opening', 4),
    featured: false,
  },
  {
    id: 4,
    title: '订婚宴布置｜乔迁 / 订婚 / 小预算婚礼现场',
    category: '婚礼 / 订婚宴',
    themeName: '中式红金喜庆主题',
    keywords: ['订婚宴', '乔迁宴', '小预算婚礼', '红金布置', '喜字背景'],
    description:
      '为订婚宴、乔迁宴和小预算婚礼提供精致中式红金主题布置。包含喜字气球背景墙、气球拱门、桌面装饰与飘空气球。红金配色经典喜庆，兼顾品质与预算，让每一场喜事都充满仪式感。',
    suitableFor: ['订婚宴', '乔迁宴', '小预算婚礼', '回门宴', '家宴布置'],
    services: ['喜字背景墙', '气球拱门', '桌面气球装饰', '飘空气球', '气球链'],
    priceRange: '微信细谈',
    images: imgDir('engagement', 4),
    featured: true,
  },
];
