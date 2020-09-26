
'use strict'

const redis = use('Redis')
,geo=use("georedis").initialize(redis,{
  zset: 'LocationsSet',
  nativeGeo: true
})
 var GeoRedis={}
 for(var prop of geo)
 GeoRedis[prop]=geo[prop]
GeoRedis.sets={"shopLocations":{},
"userLocations":{}}
module.exports = GeoRedis
