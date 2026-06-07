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
  '生日宴布置': '粉色、金色主题，为每一个重要生日留下美好回忆',
  '乔迁入宅': '有家有喜，用气球装点新家，寓意红红火火',
  '婚礼 / 订婚宴': '酒店入口拱门、迎宾区布置，大气精致',
  '学校 / 儿童活动': '六一儿童节、开学典礼、班级活动布置',
  '节日 / 商家活动': '女神节、春节、开业庆典等各类活动布置',
};

export const cases: CaseItem[] = [
  {
    id: 1,
    title: '女神节活动布置',
    category: '节日 / 商家活动',
    themeName: '粉色花墙气球主题',
    keywords: ['女神节', '三八节', '公司活动', '粉色气球', '花墙'],
    description:
      '为公司三八女神节活动打造粉色系气球花墙，搭配玫瑰金气球链与鲜花点缀，营造温馨仪式感。现场布置包含气球花墙、桌面气球装饰与拍照打卡区，深受女员工喜爱。',
    suitableFor: ['公司女神节活动', '妇女节庆祝', '公司团建', '品牌活动暖场'],
    services: ['气球花墙', '气球链装饰', '桌面气球摆件', '拍照打卡区'],
    priceRange: '1999-3999 元',
    images: [
      '/assets/cases/case-01-01.jpg',
      '/assets/cases/case-01-02.jpg',
    ],
    featured: false,
  },
  {
    id: 2,
    title: '紫色酒店气球拱门',
    category: '婚礼 / 订婚宴',
    themeName: '紫色浪漫拱门主题',
    keywords: ['紫色气球', '拱门', '酒店迎宾', '婚礼', '订婚'],
    description:
      '在酒店入口处搭建双层紫色系气球拱门，搭配白色与淡紫色渐变气球，营造梦幻浪漫的迎宾氛围。拱门结构稳固，适合全天候展示，配合灯光效果更佳。',
    suitableFor: ['酒店婚礼入口', '订婚宴迎宾', '酒店大堂装饰', '宴会厅入口'],
    services: ['双层气球拱门', '迎宾气球立柱', '签到台装饰', '灯光搭配建议'],
    priceRange: '2999-5999 元',
    images: [
      '/assets/cases/case-02-01.jpg',
      '/assets/cases/case-02-02.jpg',
    ],
    featured: false,
  },
  {
    id: 3,
    title: '粉色生日宴 / 16 岁生日布置',
    category: '生日宴布置',
    themeName: '甜蜜粉金生日主题',
    keywords: ['16岁生日', '粉色', '生日宴', '少女', '气球party'],
    description:
      '为 16 岁少女生日宴打造粉色与香槟金主题布置，包含数字气球立柱、气球背景墙、桌面气球装饰和气球拱门。整体风格甜美精致，非常适合拍照留念。',
    suitableFor: ['16岁生日', '少女生日宴', '成人礼', '生日party'],
    services: ['数字气球立柱', '气球背景墙', '桌面气球组', '小拱门', '气球链'],
    priceRange: '1999-3999 元',
    images: [
      '/assets/cases/case-03-01.jpg',
      '/assets/cases/case-03-02.jpg',
    ],
    featured: true,
  },
  {
    id: 4,
    title: '儿童节教室布置',
    category: '学校 / 儿童活动',
    themeName: '彩色童趣教室主题',
    keywords: ['儿童节', '教室布置', '六一', '彩色气球', '学校活动'],
    description:
      '为小学班级六一儿童节打造五彩缤纷的教室气球布置。包括彩色气球拱门、桌面气球摆件、黑板气球装饰，以及每个小朋友座位上的小气球礼物，让整个教室充满节日欢乐。',
    suitableFor: ['六一儿童节', '开学典礼', '班级活动', '幼儿园活动'],
    services: ['教室气球拱门', '黑板装饰', '桌面气球', '每位学生小气球', '气球柱'],
    priceRange: '999-1999 元',
    images: [
      '/assets/cases/case-04-01.jpg',
      '/assets/cases/case-04-02.jpg',
    ],
    featured: false,
  },
  {
    id: 5,
    title: '乔迁入宅 / 有家有喜布置',
    category: '乔迁入宅',
    themeName: '红金喜庆乔迁主题',
    keywords: ['乔迁', '入宅', '新家', '红金', '喜庆'],
    description:
      '为客户乔迁新居打造红金喜庆主题布置，包含门口气球立柱、客厅气球链装饰以及"有家有喜"主题字气球造型。寓意红红火火、喜气盈门，让新家第一印象温暖又喜庆。',
    suitableFor: ['乔迁之喜', '新家入宅', '暖房party', '新居装饰'],
    services: ['门口气球立柱', '客厅气球链', '主题字气球造型', '窗花气球贴', '楼梯气球'],
    priceRange: '999-1999 元',
    images: [
      '/assets/cases/case-05-01.jpg',
      '/assets/cases/case-05-02.jpg',
    ],
    featured: true,
  },
  {
    id: 6,
    title: '红金婚房布置',
    category: '婚房布置',
    themeName: '经典红金喜庆婚房主题',
    keywords: ['婚房', '红金', '喜庆', '婚礼', '新房布置'],
    description:
      '经典红金配色婚房布置方案：客厅气球拱门、卧室气球背景墙、床头气球爱心造型以及全屋气球飘空装饰。采用高品质乳胶气球与铝箔气球搭配，保证持久不泄气，婚礼当天完美呈现。',
    suitableFor: ['婚房布置', '新房装饰', '接亲现场', '婚礼前一天布置'],
    services: ['气球拱门', '气球背景墙', '爱心气球造型', '飘空气球', '铝箔喜字气球'],
    priceRange: '999-1999 元',
    images: [
      '/assets/cases/case-06-01.jpg',
      '/assets/cases/case-06-02.jpg',
    ],
    featured: true,
  },
];
