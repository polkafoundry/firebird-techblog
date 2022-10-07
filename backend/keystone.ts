import { config } from '@keystone-6/core';
import fileUpload from 'express-fileupload'
import { lists } from './schema';
import { withAuth, session } from './auth';
import Const from './utils/constant'
import Controller from './utils/controller';

export default withAuth(
  // Using the config function helps typescript guide you to the available options.
  config({
    server: {
      port: Const.PORT,
      healthCheck: {
        path: '/my-health-check',
        data: () => ({
          status: 'healthy',
          timestamp: Date.now(),
          uptime: process.uptime(),
        }),
      },
      maxFileSize: 2 * 1024 * 1024,
      extendExpressApp: (app) => {
        app.post('/upload-image', fileUpload({
          limits: { fileSize: 2 * 1024 * 1024 },
          abortOnLimit: true,
        }), Controller.uploadImage);
      }
    },
    db: {
      provider: 'mysql',
      url: `mysql://${Const.MYSQL_USER}:${Const.MYSQL_PASSWORD}@${Const.MYSQL_HOST}:${Const.MYSQL_PORT}/${Const.MYSQL_DATABASE}`,
      enableLogging: true,
      useMigrations: true,
      idField: { kind: 'autoincrement' }
    },
    // This config allows us to set up features of the Admin UI https://keystonejs.com/docs/apis/config#ui
    ui: {
      // For our starter, we check that someone has session data before letting them see the Admin UI.
      isAccessAllowed: (context) => !!context.session?.data,
    },
    lists,
    session,
    storage: {
      my_local_images: {
        // Images that use this store will be stored on the local machine
        kind: 'local',
        // This store is used for the image field type
        type: 'image',
        // The URL that is returned in the Keystone GraphQL API
        generateUrl: path => `${Const.BASE_URL}/images${path}`,
        // The route that will be created in Keystone's backend to serve the images
        serverRoute: {
          path: '/images',
        },
        // Set serverRoute to null if you don't want a route to be created in Keystone
        // serverRoute: null
        storagePath: 'public/images',
      },
      /** more storage */
      s3_redkite: {
        // Files that use this store will be stored in an s3 bucket
        kind: 's3',
        // This store is used for the file field type
        type: 'image',
        // The S3 bucket name pulled from the S3_BUCKET_NAME environment variable
        bucketName: Const.S3_BUCKET_NAME,
        // The S3 bucket region pulled from the S3_REGION environment variable
        region: Const.S3_REGION,
        // The S3 Access Key ID pulled from the S3_ACCESS_KEY_ID environment variable
        accessKeyId: Const.S3_ACCESS_KEY_ID,
        // The S3 Secret pulled from the S3_SECRET_ACCESS_KEY environment variable
        secretAccessKey: Const.S3_SECRET_ACCESS_KEY,
        // The S3 links will be signed so they remain private
        signed: { expiry: 5000 },
        endpoint: Const.S3_ENDPOINT
      },
    }
  })
);
