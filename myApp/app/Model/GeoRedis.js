
'use strict'

const redis = use('Redis')
,GeoRedis=use("georedis").initialize(redis)

module.exports = GeoRedis
