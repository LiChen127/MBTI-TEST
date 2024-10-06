// 将16人格转换

/**
 * Funtion
 * Input EN TYPE
 * Output CN TYPE
 */

export function getChineseType(type) {
  if (type === 'INTJ') {
    return '分析家';
  }
  if (type === 'INTP') {
    return '逻辑学家';
  }
  if (type === 'ENTJ') {
    return '指挥官';
  }
  if (type === 'ENTP') {
    return '辩论家';
  }
  if (type === 'INFJ') {
    return '提倡者';
  }
  if (type === 'ENFJ') {
    return '主人公';
  }
  if (type === 'INFP') {
    return '调停者';
  }
  if (type === 'ENFP') {
    return '竞选者';
  }
  if (type === 'ISTJ') {
    return '物流师';
  }
  if (type === 'ISFJ') {
    return '守卫者';
  }
  if (type === 'ESTJ') {
    return '总经理';
  }
  if (type === 'ESFJ') {
    return '执政官';
  }
  if (type === 'ISTP') {
    return '鉴赏家';
  }
  if (type === 'ISFP') {
    return '探险家';
  }
  if (type === 'ESTP') {
    return '企业家';
  }
  if (type === 'ESFP') {
    return '表演者';
  }
}

// CN TO EN
export function getEngilishType(type) {
  if (type === '分析家') {
    return 'INTJ';
  }
  if (type === '逻辑学家') {
    return 'INTP';
  }
  if (type === '指挥官') {
    return 'ENTJ';
  }
  if (type === '辩论家') {
    return 'ENTP';
  }
  if (type === '提倡者') {
    return 'INFJ';
  }
  if (type === '主人公') {
    return 'ENFJ';
  }
  if (type === '调停者') {
    return 'INFP';
  }
  if (type === '竞选者') {
    return 'ENFP';
  }
  if (type === '物流师') {
    return 'ISTJ';
  }
  if (type === '守卫者') {
    return 'ISFJ';
  }
  if (type === '总经理') {
    return 'ESTJ';
  }
  if (type === '执政官') {
    return 'ESFJ';
  }
  if (type === '鉴赏家') {
    return 'ISTP';
  }
  if (type === '探险家') {
    return 'ISFP';
  }
  if (type === '企业家') {
    return 'ESTP';
  }
  if (type === '表演者') {
    return 'ESFP';
  }
}
