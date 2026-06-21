/**
 * Echoland 回声地 — 地图服务层
 *
 * 当前状态：mock 实现，仅用于预留腾讯地图 API 接入结构。
 * 当前首页仍使用 `scripts/mock-data.js` 中的模拟活动点位，不调用本文件。
 *
 * 后续真实接入腾讯地图时需要完成以下步骤：
 *
 * 1. 申请腾讯位置服务 Key
 *    访问 https://lbs.qq.com/dev/console/application/mine 注册并创建应用，
 *    获取 `key` 和 `SK`（如需要签名）。
 *
 * 2. 配置小程序 request 合法域名
 *    在微信小程序后台 → 开发 → 开发设置 → 服务器域名 → request 合法域名中
 *    添加 `https://apis.map.qq.com`。
 *
 * 3. 替换本文件中各函数的 mock 实现为真实请求
 *    推荐通过后端转发或使用环境变量注入 Key，避免在前端代码中硬写 Key。
 *
 * 4. 在首页/活动详情页中按需调用 MapService 的函数
 *    例如：MapService.getCurrentLocation().then(...) 获取真实定位，
 *          MapService.reverseGeocoder(lat, lng).then(...) 解析地址。
 *
 * 5. 更新 CLAUDE.md 与相关文档，移除 "不接真实腾讯地图 API" 的限制说明。
 */

const MapService = {
  /**
   * 获取当前定位
   * 真实接入建议：
   *   - 微信小程序：调用 wx.getLocation({ type: 'gcj02', success: ... })
   *   - H5：调用 navigator.geolocation.getCurrentPosition(...)
   *   - 或调用腾讯地图定位组件：https://lbs.qq.com/service/webService/webServiceGuide/webServicePosition
   */
  getCurrentLocation() {
    return new Promise((resolve) => {
      resolve({
        latitude: 32.0603,
        longitude: 118.7969,
        city: '南京',
        district: '秦淮区',
        address: '南京市秦淮区 mock 定位地址',
        source: 'mock'
      });
    });
  },

  /**
   * 地点搜索
   * 真实接入建议：
   *   调用腾讯地图 WebService API — 地点搜索（search）：
   *   https://apis.map.qq.com/ws/place/v1/search?keyword=...&boundary=region(...)&key=YOUR_KEY
   *
   * @param {string} keyword - 搜索关键词
   * @param {string} city - 城市名，如 '南京'
   */
  searchPlace(keyword, city = '南京') {
    return new Promise((resolve) => {
      resolve([
        {
          id: 'mock_place_001',
          name: `${keyword}（mock 结果）`,
          address: `${city} mock 街道 1 号`,
          latitude: 32.0603,
          longitude: 118.7969,
          category: 'mock'
        },
        {
          id: 'mock_place_002',
          name: `${keyword} 相关地点（mock 结果）`,
          address: `${city} mock 街道 2 号`,
          latitude: 32.0615,
          longitude: 118.7985,
          category: 'mock'
        }
      ]);
    });
  },

  /**
   * 逆地址解析：经纬度转地址
   * 真实接入建议：
   *   调用腾讯地图 WebService API — 逆地址解析：
   *   https://apis.map.qq.com/ws/geocoder/v1/?location=lat,lng&key=YOUR_KEY
   *
   * @param {number} latitude
   * @param {number} longitude
   */
  reverseGeocoder(latitude, longitude) {
    return new Promise((resolve) => {
      resolve({
        address: `南京市秦淮区 mock 路（${latitude.toFixed(4)}, ${longitude.toFixed(4)}）`,
        city: '南京',
        district: '秦淮区',
        adcode: '320104',
        street: 'mock 路',
        street_number: '1号',
        formatted_addresses: {
          recommend: '南京市秦淮区 mock 路 1 号',
          rough: '南京市秦淮区'
        },
        location: { latitude, longitude },
        source: 'mock'
      });
    });
  },

  /**
   * 路线规划
   * 真实接入建议：
   *   调用腾讯地图 WebService API — 路线规划：
   *   https://apis.map.qq.com/ws/direction/v1/driving/?from=lat,lng&to=lat,lng&key=YOUR_KEY
   *
   * @param {object} origin - 起点 { latitude, longitude }
   * @param {object} destination - 终点 { latitude, longitude }
   * @param {string} mode - 出行方式：driving | walking | bicycling | transit
   */
  getRoute(origin, destination, mode = 'driving') {
    return new Promise((resolve) => {
      resolve({
        mode,
        distance: 3200,        // 单位：米
        duration: 420,         // 单位：秒
        polyline: [
          [origin.latitude, origin.longitude],
          [(origin.latitude + destination.latitude) / 2, (origin.longitude + destination.longitude) / 2],
          [destination.latitude, destination.longitude]
        ],
        steps: [
          { instruction: '从起点向东南方向出发', distance: 500, road_name: 'mock 路' },
          { instruction: '沿 mock 路直行', distance: 2200, road_name: 'mock 路' },
          { instruction: '到达终点', distance: 500, road_name: '' }
        ],
        source: 'mock'
      });
    });
  }
};

// 浏览器环境：挂载到全局
if (typeof window !== 'undefined') {
  window.MapService = MapService;
}

// Node 环境：支持 require
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MapService;
}
