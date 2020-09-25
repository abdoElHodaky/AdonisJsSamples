
'use strict'

const redis = use('Redis')
,GeoRedis=use("georedis").initialize(redis,{
  zset: 'LocationsSet',
  nativeGeo: false
})
module.exports = GeoRedis
