import {axios} from '@/utils'

function getSceneInfo (id) {
  return axios({
    url: '/api/getSceneInfo',
    params: {
      sceneId: id
    }
  })
}

function getAvgTemp () {
  return axios({
    url: '/api/getAvgTemp'
  })
}

export {
  getSceneInfo,
  getAvgTemp
}
