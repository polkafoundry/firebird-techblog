import AWS from 'aws-sdk'
import Const from './constant'

export default new AWS.S3({
    accessKeyId: Const.S3_ACCESS_KEY_ID,
    secretAccessKey: Const.S3_SECRET_ACCESS_KEY,
    region: Const.S3_REGION,
    endpoint: Const.S3_ENDPOINT
})