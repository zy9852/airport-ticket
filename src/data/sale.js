const sales = [
  {
    price: 245,
    date: '06-08',
    flightType: 1,
    depCity: '新加坡',
    arrCity: '槟城',
    backDate: '',
    flightNo: '3K677',
    week: '周三'
  },
  {
    price: 71,
    date: '06-22',
    flightType: 1,
    depCity: '兰卡威',
    arrCity: '新加坡',
    backDate: '',
    flightNo: 'AK732',
    week: '周三'
  },
  {
    price: 100,
    date: '06-07',
    flightType: 1,
    depCity: '庆阳',
    arrCity: '银川',
    backDate: '',
    flightNo: '9C8781',
    week: '周二'
  },
  {
    price: 43,
    date: '06-27',
    flightType: 1,
    depCity: '斯德哥尔摩',
    arrCity: '伦敦',
    backDate: '',
    flightNo: 'FR683',
    week: '周一'
  },
  {
    price: 316,
    date: '06-02',
    flightType: 1,
    depCity: '武汉',
    arrCity: '昆明',
    backDate: '',
    flightNo: '8L9870',
    week: '周四'
  },
  {
    price: 100,
    date: '06-03',
    flightType: 1,
    depCity: '固原',
    arrCity: '银川',
    backDate: '',
    flightNo: 'G52667',
    week: '周五'
  },
  {
    price: 50,
    date: '06-29',
    flightType: 1,
    depCity: '乌海',
    arrCity: '银川',
    backDate: '',
    flightNo: 'JR1512',
    week: '周一'
  },
  {
    price: 77,
    date: '06-08',
    flightType: 1,
    depCity: '柏林',
    arrCity: '布达佩斯',
    backDate: '',
    flightNo: 'FR196',
    week: '周三'
  },
  {
    price: 139,
    date: '06-26',
    flightType: 1,
    depCity: '达沃',
    arrCity: '宿务',
    backDate: '',
    flightNo: '5J602',
    week: '周日'
  },
  {
    price: 65,
    date: '06-04',
    flightType: 1,
    depCity: '槟城',
    arrCity: '吉隆坡',
    backDate: '',
    flightNo: 'AK6133',
    week: '周六'
  },
  {
    price: 100,
    date: '06-18',
    flightType: 1,
    depCity: '吕梁',
    arrCity: '西安',
    backDate: '',
    flightNo: 'MU2260',
    week: '周六'
  },
  {
    price: 10,
    date: '06-06',
    flightType: 1,
    depCity: '中卫',
    arrCity: '银川',
    backDate: '',
    week: '周日'
  },
  {
    price: 79,
    date: '06-07',
    flightType: 1,
    depCity: '伦敦',
    arrCity: '爱丁堡',
    backDate: '',
    flightNo: 'FR8883',
    week: '周二'
  },
  {
    price: 87,
    date: '06-13',
    flightType: 1,
    depCity: '巴彦淖尔',
    arrCity: '呼和浩特',
    backDate: '',
    flightNo: 'GS6643',
    week: '周一'
  },
  {
    price: 85,
    date: '06-22',
    flightType: 1,
    depCity: '鄂尔多斯',
    arrCity: '石家庄',
    backDate: '',
    flightNo: 'KN2308',
    week: '周三'
  },
  {
    price: 206,
    date: '06-18',
    flightType: 1,
    depCity: '武汉',
    arrCity: '杭州',
    backDate: '',
    flightNo: 'MF8304',
    week: '周六'
  },
  {
    price: 79,
    date: '06-14',
    flightType: 1,
    depCity: '吉隆坡',
    arrCity: '新加坡',
    backDate: '',
    flightNo: '3K670',
    week: '周二'
  },
  {
    price: 68,
    date: '06-04',
    flightType: 1,
    depCity: '延安',
    arrCity: '西安',
    backDate: '',
    flightNo: 'GJ8842',
    week: '周六'
  },
  {
    price: 64,
    date: '06-09',
    flightType: 1,
    depCity: '槟城',
    arrCity: '新加坡',
    backDate: '',
    flightNo: '3K676',
    week: '周四'
  },
  {
    price: 566,
    date: '06-27',
    flightType: 1,
    depCity: '武汉',
    arrCity: '曼谷',
    backDate: '',
    flightNo: 'FD571',
    week: '周一'
  },
  {
    price: 79,
    date: '06-08',
    flightType: 1,
    depCity: '爱丁堡',
    arrCity: '伦敦',
    backDate: '',
    flightNo: 'FR2684',
    week: '周三'
  },
  {
    price: 360,
    date: '06-14',
    flightType: 1,
    depCity: '武汉',
    arrCity: '青岛',
    backDate: '',
    flightNo: 'MU5480',
    week: '周二'
  },
  {
    price: 312,
    date: '06-14',
    flightType: 1,
    depCity: '武汉',
    arrCity: '南宁',
    backDate: '',
    flightNo: 'GX8860',
    week: '周二'
  },
  {
    price: 74,
    date: '06-06',
    flightType: 1,
    depCity: '兰卡威',
    arrCity: '吉隆坡',
    backDate: '',
    flightNo: 'OD2201',
    week: '周一'
  },
  {
    price: 301,
    date: '06-12',
    flightType: 1,
    depCity: '武汉',
    arrCity: '温州',
    backDate: '',
    flightNo: 'ZH8882',
    week: '周日'
  },
  {
    price: 49,
    date: '06-09',
    flightType: 1,
    depCity: '吉隆坡',
    arrCity: '新山',
    backDate: '',
    flightNo: 'AK9030',
    week: '周四'
  },
  {
    price: 60,
    date: '06-10',
    flightType: 1,
    depCity: '大同',
    arrCity: '太原',
    backDate: '',
    flightNo: 'G56409',
    week: '周五'
  },
  {
    price: 77,
    date: '06-22',
    flightType: 1,
    depCity: '威尼斯',
    arrCity: '柏林',
    backDate: '',
    flightNo: 'FR2607',
    week: '周三'
  },
  {
    price: 100,
    date: '06-08',
    flightType: 1,
    depCity: '承德',
    arrCity: '石家庄',
    backDate: '',
    flightNo: 'NS3328',
    week: '周三'
  },
  {
    price: 100,
    date: '06-29',
    flightType: 1,
    depCity: '忻州',
    arrCity: '银川',
    backDate: '',
    flightNo: 'FM9545',
    week: '周一'
  },
  {
    price: 510,
    date: '06-02',
    flightType: 1,
    depCity: '武汉',
    arrCity: '成都',
    backDate: '',
    flightNo: 'CA4588',
    week: '周四'
  },
  {
    price: 35,
    date: '06-08',
    flightType: 1,
    depCity: '槟城',
    arrCity: '兰卡威',
    backDate: '',
    flightNo: 'AK6246',
    week: '周三'
  },
  {
    price: 67,
    date: '06-08',
    flightType: 1,
    depCity: '瓜拉丁加奴',
    arrCity: '吉隆坡',
    backDate: '',
    flightNo: 'AK6216',
    week: '周三'
  },
  {
    price: 249,
    date: '06-09',
    flightType: 1,
    arrCity: '呼和浩特',
    backDate: '',
    flightNo: 'JD5701',
    week: '周四'
  },
  {
    price: 334,
    date: '06-08',
    flightType: 1,
    depCity: '武汉',
    arrCity: '厦门',
    backDate: '',
    flightNo: 'SC8768',
    week: '周三'
  },
  {
    price: 92,
    date: '06-17',
    flightType: 1,
    depCity: '杜马格特',
    arrCity: '宿务',
    backDate: '',
    flightNo: 'DG6518',
    week: '周五'
  },
  {
    price: 35,
    date: '06-12',
    depCity: '兰卡威',
    arrCity: '槟城',
    backDate: '',
    flightNo: 'AK6247',
    week: '周日'
  },
  {
    price: 270,
    date: '06-07',
    flightType: 1,
    depCity: '武汉',
    arrCity: '上海',
    backDate: '',
    flightNo: 'CZ6171',
    week: '周二'
  },
  {
    price: 50,
    date: '06-13',
    flightType: 1,
    depCity: '新山',
    arrCity: '吉隆坡',
    backDate: '',
    flightNo: 'AK6035',
    week: '周一'
  },
  {
    price: 66,
    date: '06-07',
    flightType: 1,
    depCity: '吉隆坡',
    arrCity: '槟城',
    backDate: '',
    flightNo: 'AK6110',
    week: '周二'
  }
]

export default {
  sales
}
