/**
 * Echoland 回声地 — Mock 活动数据
 * 第一版使用本地 mock 数据，不接入真实 API，不写真实腾讯地图 Key。
 * 该文件在首页/活动详情页中通过全局变量 `window.MOCK_EVENTS` 使用。
 */
(function () {
  'use strict';

  window.MOCK_EVENTS = [
    {
      id: 'evt_001',
      title: '夏日草坪音乐会',
      category: '音乐',
      startTime: '2026-06-21 18:00',
      endTime: '2026-06-21 21:00',
      timeGroup: 'tonight',
      city: '南京',
      district: '玄武区',
      address: '玄武湖公园草坪广场',
      latitude: 32.0525,
      longitude: 118.7978,
      price: '免费',
      tags: ['户外', '独立音乐', '免费'],
      cover: 'https://placehold.co/343x240/11161d/a8ff3d?text=Summer+Music',
      description:
        '在夏夜晚风中，听一场露天独立音乐会。现场将邀请三支本地乐队，带来民谣、电子与即兴演奏。草地可自由落座，建议自带野餐垫。',
      recommendReasons: ['今晚热门活动', '玄武湖夜景', '免费入场'],
      organizer: {
        name: '回声地编辑部',
        logo: 'https://placehold.co/40x40/11161d/ffffff?text=E'
      }
    },
    {
      id: 'evt_002',
      title: '城市光影艺术展',
      category: '展览',
      startTime: '2026-06-22 10:00',
      endTime: '2026-06-28 18:00',
      timeGroup: 'thisWeek',
      city: '南京',
      district: '鼓楼区',
      address: '江苏美术馆 1号展厅',
      latitude: 32.0650,
      longitude: 118.7700,
      price: 88,
      tags: ['光影', '沉浸式', '艺术'],
      cover: 'https://placehold.co/343x240/11161d/ffffff?text=Light+Art',
      description:
        '以光为媒介，探索城市空间与个体感知的关系。展览包含 8 组大型装置与 3 件互动作品，适合夜晚观展。',
      recommendReasons: ['本周新展', '沉浸式体验', '适合拍照'],
      organizer: {
        name: '光影实验室',
        logo: 'https://placehold.co/40x40/11161d/ffffff?text=L'
      }
    },
    {
      id: 'evt_003',
      title: '露天电影之夜：星际穿越',
      category: '放映',
      startTime: '2026-06-21 19:30',
      endTime: '2026-06-21 22:30',
      timeGroup: 'tonight',
      city: '南京',
      district: '秦淮区',
      address: '白鹭洲公园音乐广场',
      latitude: 32.0180,
      longitude: 118.7920,
      price: '免费',
      tags: ['露天电影', '经典重映', '免费'],
      cover: 'https://placehold.co/343x240/11161d/a8ff3d?text=Open+Air+Cinema',
      description:
        '在星空下重温诺兰经典。现场提供限量座椅，也可自带坐垫。映后将有 15 分钟自由交流环节。',
      recommendReasons: ['今晚放映', '经典电影', '免费'],
      organizer: {
        name: '城市放映室',
        logo: 'https://placehold.co/40x40/11161d/ffffff?text=C'
      }
    },
    {
      id: 'evt_004',
      title: '复古手作市集',
      category: '市集',
      startTime: '2026-06-27 11:00',
      endTime: '2026-06-28 19:00',
      timeGroup: 'weekend',
      city: '南京',
      district: '鼓楼区',
      address: '颐和路历史文化街区庭院',
      latitude: 32.0600,
      longitude: 118.7650,
      price: '免费',
      tags: ['手作', '复古', '周末市集'],
      cover: 'https://placehold.co/343x240/11161d/ffffff?text=Handmade+Market',
      description:
        '聚集 30+ 独立手作人与复古收藏摊主。现场还有咖啡快闪与手作体验课，适合周末慢逛。',
      recommendReasons: ['周末必逛', '独立设计师', '免费入场'],
      organizer: {
        name: '颐和路集市联盟',
        logo: 'https://placehold.co/40x40/11161d/ffffff?text=M'
      }
    },
    {
      id: 'evt_005',
      title: '秦淮霓虹夜行',
      category: '夜游',
      startTime: '2026-06-21 20:00',
      endTime: '2026-06-21 22:30',
      timeGroup: 'tonight',
      city: '南京',
      district: '秦淮区',
      address: '夫子庙秦淮河沿岸集合',
      latitude: 32.0220,
      longitude: 118.7950,
      price: 39,
      tags: ['夜行', '城市探索', '摄影'],
      cover: 'https://placehold.co/343x240/11161d/a8ff3d?text=Neon+Walk',
      description:
        '用脚步丈量城市霓虹。路线从夫子庙出发，沿秦淮河漫步，穿越老城南小巷。全程约 3 公里，配专业领队讲解。',
      recommendReasons: ['今晚推荐', '秦淮河夜景', '轻运动'],
      organizer: {
        name: '夜游南京',
        logo: 'https://placehold.co/40x40/11161d/ffffff?text=N'
      }
    },
    {
      id: 'evt_006',
      title: '爵士酒吧现场：蓝色狂想',
      category: '音乐',
      startTime: '2026-06-22 21:00',
      endTime: '2026-06-23 00:00',
      timeGroup: 'tomorrow',
      city: '南京',
      district: '建邺区',
      address: '青奥艺术空间 Livehouse',
      latitude: 32.0050,
      longitude: 118.7350,
      price: 120,
      tags: ['爵士', '现场演出', '酒吧'],
      cover: 'https://placehold.co/343x240/11161d/ffffff?text=Jazz+Night',
      description:
        '本地爵士四重奏带来一场即兴之夜。现场提供酒水与简餐，建议提前入场选座。',
      recommendReasons: ['明日精选', '现场氛围好', '适合约会'],
      organizer: {
        name: '青奥艺术空间',
        logo: 'https://placehold.co/40x40/11161d/ffffff?text=J'
      }
    },
    {
      id: 'evt_007',
      title: '数字艺术互动展',
      category: '展览',
      startTime: '2026-06-27 10:00',
      endTime: '2026-06-29 18:00',
      timeGroup: 'weekend',
      city: '南京',
      district: '建邺区',
      address: '南京国际青年文化中心',
      latitude: 32.0100,
      longitude: 118.7250,
      price: 128,
      tags: ['数字艺术', '互动', '科技'],
      cover: 'https://placehold.co/343x240/11161d/a8ff3d?text=Digital+Art',
      description:
        '用体感、声控与 AI 生成技术打造的互动艺术展。观众的行为会实时改变展品形态，每场体验独一无二。',
      recommendReasons: ['周末新展', '强互动', '科技感'],
      organizer: {
        name: '未来艺术小组',
        logo: 'https://placehold.co/40x40/11161d/ffffff?text=D'
      }
    },
    {
      id: 'evt_008',
      title: '经典动画放映会',
      category: '放映',
      startTime: '2026-06-24 19:00',
      endTime: '2026-06-24 21:30',
      timeGroup: 'thisWeek',
      city: '南京',
      district: '栖霞区',
      address: '仙林大学城露天广场',
      latitude: 32.1050,
      longitude: 118.9050,
      price: '免费',
      tags: ['动画', '怀旧', '露天放映'],
      cover: 'https://placehold.co/343x240/11161d/ffffff?text=Animation',
      description:
        '精选 5 部经典动画短片，适合全年龄段观众。现场提供爆米花与软饮，映前有小游戏互动。',
      recommendReasons: ['本周推荐', '亲子友好', '免费'],
      organizer: {
        name: '大学城文化站',
        logo: 'https://placehold.co/40x40/11161d/ffffff?text=A'
      }
    }
  ];
})();
