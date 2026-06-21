/** Echoland 回声地 — 本地精选活动数据 */
(function () {
  'use strict';

  window.MOCK_EVENTS = [
    {
      id: 'evt_chen_jieli_2026',
      title: '陈洁丽《你happy我也happy》2026动漫歌演唱会 · 南京站',
      category: '音乐',
      startTime: '2026-03-14 20:00',
      endTime: '2026-03-14 22:00',
      cardTime: '2026年3月14日 20:00',
      detailTime: '2026年3月14日 20:00',
      timeGroup: 'thisWeek',
      city: '南京',
      district: '雨花台区',
      address: '1701Live House Max 地址：南京市雨花台区安德门大街57号楚翘城',
      latitude: 31.9872,
      longitude: 118.7568,
      price: '票务',
      tags: ['动漫歌', '演唱会', '南京站'],
      cover: 'assets/home/chen-jieli-2026.png',
      description: '陈洁丽《你happy我也happy》2026动漫歌演唱会南京站。演出时间：2026年3月14日 20:00。演出地点：1701Live House Max。',
      recommendReasons: ['南京站', '动漫 OST', 'Live House'],
      organizer: {
        name: '1701Live House Max',
        logo: 'assets/icons/community-logo.png'
      }
    },
    {
      id: 'evt_shan_he_gu_ren_10',
      title: '贾樟柯《山河故人》十周年重映',
      category: '放映',
      startTime: '2025-12-14 16:25',
      endTime: '2025-12-14 18:51',
      cardTime: '12/14（日）16:25',
      detailTime: '12/14（日）16:25 · 映后 18:31–18:51',
      timeGroup: 'thisWeek',
      city: '南京',
      district: '仙林九霄梦天地',
      address: '南京仙林九霄梦天地星轶上影影城',
      latitude: 32.092251,
      longitude: 118.916882,
      price: '票务',
      tags: ['十周年重映', '映后交流', '贾樟柯'],
      cover: 'assets/home/shan-he-gu-ren.png',
      description: '《山河故人》十周年重映。放映时间：12/14（日）16:25。映后时间：18:31–18:51。地点：南京仙林九霄梦天地星轶上影影城。',
      recommendReasons: ['十周年重映', '映后交流', '仙林九霄梦天地'],
      organizer: {
        name: '星轶上影影城',
        logo: 'assets/icons/community-logo.png'
      }
    }
  ];

  window.MOCK_ECHO_POINTS = [
    {
      id: 'loc_jiuxiang_river',
      title: '九乡河小水堤',
      category: 'echo 点',
      address: '南大和园与南京中医药大学第二食堂之间河段',
      distance: '距你约 800m',
      latitude: 32.103559,
      longitude: 118.953444,
      images: ['assets/community/post-river-1.jpg', 'assets/community/post-river-2.jpg'],
      description: '和园旁边有个小水堤，好漂亮，感觉不像仙林了。站在堤上看着水流，好治愈。',
      tags: ['水边散步', '校园附近', '安静', '治愈'],
      recommendReasons: ['傍晚光线很好', '适合短暂停留和散步', '能听到清楚的水流声'],
      source: 'the__paramecia 的社区动态'
    },
    {
      id: 'loc_southern_dynasty_stone',
      title: '南朝石刻群',
      category: 'echo 点',
      address: '萧宏石刻公园',
      distance: '距你约 5km',
      latitude: 32.085921,
      longitude: 118.921167,
      images: ['assets/community/post-stone-1.jpg', 'assets/community/post-stone-2.jpg'],
      description: '学校旁边有一处 1000 多年的南朝石刻。和它对视一会儿，会对“永恒”这个概念有更具体的感受。',
      tags: ['南朝石刻', '历史遗迹', '摄影', '安静'],
      recommendReasons: ['千年石刻就在城市边缘', '适合人少时慢慢观看', '阴天和傍晚很有氛围'],
      source: '阿紫在拍照 的社区动态'
    }
  ];
})();
