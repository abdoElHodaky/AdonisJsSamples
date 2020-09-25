
'use strict'

const redis = use('Redis')
,geo=use("georedis").initialize(redis,{
  zset: 'LocationsSet',
  nativeGeo: false
})
 var GeoRedis={}
 for(var prop of geo)
 GeoRedis[prop]=geo[prop]
GeoRedis.sets={}
module.exports = GeoRedis
