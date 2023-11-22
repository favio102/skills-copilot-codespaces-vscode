function skillMember() {
  return {
    name: 'skillMember',
    path: '/skillMember',
    component: () => import('@/views/member/skillMember'),
    meta: {
      title: '技能会员'
    }
  }
}