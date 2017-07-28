import Mock from 'mockjs';

export default Mock.mock('http://g.cn', {
  // 'invitedRegister|1'    : [1,0],
  // 'invitation_count|1-10': 10,
  // 'invited|0-1'    : 1
  "message":{
    "code|1": [2]
  }
});
