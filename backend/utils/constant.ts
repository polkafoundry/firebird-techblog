require('dotenv').config()

export default {
    ARTICLE_STATUS: {
        PENDING: 'pending',
        APPROVED: 'approved',
        REJECTED: 'rejected'
    },
    HOST: process.env.HOST,
    PORT: Number(process.env.PORT || 3000),
    NODE_ENV: process.env.NODE_ENV,

    MYSQL_HOST: process.env.MYSQL_HOST,
    MYSQL_PORT: process.env.MYSQL_PORT,
    MYSQL_USER: process.env.MYSQL_USER,
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
    MYSQL_DATABASE: process.env.MYSQL_DATABASE,
    BASE_URL: process.env.BASE_URL,
    S3_BUCKET_NAME: process.env.S3_BUCKET_NAME || '',
    S3_REGION: process.env.S3_REGION || '',
    S3_ACCESS_KEY_ID: process.env.S3_ACCESS_KEY_ID || '',
    S3_SECRET_ACCESS_KEY: process.env.S3_SECRET_ACCESS_KEY || '',
    S3_ENDPOINT: process.env.S3_ENDPOINT || ''
}