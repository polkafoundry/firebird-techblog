import { list } from '@keystone-6/core';
import { image } from '@keystone-6/core/fields';
import { isAdmin, isRootAdmin, Session } from './auth';
import Const from './utils/constant';

import {
  text,
  relationship,
  password,
  timestamp,
  select,
  checkbox,
} from '@keystone-6/core/fields';
import { textEditor } from "./custom-field/text-editor"

export const lists = {
  Admin: list({
    access: {
      operation: {
        query: isAdmin,
        create: isRootAdmin,
        update: ({ session, context }: { session: Session, context: any }) => {
          return isRootAdmin({ session }) || session?.data?.id === context.req?.body?.variables?.id
        },
        delete: isRootAdmin
      },
      item: {
        update: ({ session, context, listKey, inputData, operation }) => {
          if (!isRootAdmin({ session })) inputData.is_root_admin = false
          return true
        }
      }
    },
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
      password: password({ validation: { isRequired: true } }),
      is_root_admin: checkbox({
        label: "Is root admin",
      })
    }
  }),
  Article: list({
    access: {
      operation: {
        update: isAdmin
      },
      item: {
        create: ({ session, context, listKey, inputData, operation }) => {
          inputData.is_admin = !!session?.data
          inputData.status = !!session?.data ? Const.ARTICLE_STATUS.APPROVED : Const.ARTICLE_STATUS.PENDING
          if (session?.data) inputData.author_email = session.data.email
          return true
        }
      }
    },
    hooks: {
      validateInput: async ({ context, resolvedData, addValidationError }) => {
        const { title } = resolvedData;
        if (title) {
          const alias = title.replace(/[^\w\s]/gi, '').trim().replace(/ +/g, '-').toLowerCase()
          const article = await context.query.Article.findOne({
            where: { alias },
            query: 'id title'
          })
          resolvedData.alias = alias
          // We call addValidationError to indicate an invalid value.
          article && addValidationError('This title already exists');
        }
      },
      resolveInput: async ({ context, operation, resolvedData, item }) => {
        if (operation === 'create') {
          resolvedData = {
            ...resolvedData,
            created_at: new Date()
          }
        }
        return resolvedData
      }
    },
    fields: {
      is_display: select({
        label: "Display",
        defaultValue: 0,
        type: 'integer',
        db: {
          isNullable: false
        },
        options: [
          { label: 'Hidden', value: 0 },
          { label: 'Display', value: 1 }
        ],
        validation: {
          isRequired: true
        },
        ui: {
          displayMode: 'segmented-control'
        }
      }),
      status: select({
        type: 'enum',
        options: Object.values(Const.ARTICLE_STATUS),
        db: {
          isNullable: false
        },
        ui: {
          createView: {
            fieldMode: 'hidden'
          },
          displayMode: 'select'
        }
      }),
      thumbnail: image({ storage: Const.NODE_ENV == 'production' ? 's3_redkite' : 'my_local_images' }),
      title: text({
        validation: {
          isRequired: true
        },
        db: {
          isNullable: false
        }
      }),
      category: relationship({ ref: 'Category', many: true, ui: { hideCreate: true } }),
      author_name: text(),
      author_image: text(),
      author_email: text({
        ui: {
          createView: {
            fieldMode: 'hidden'
          },
          itemView: {
            fieldMode: 'hidden'
          }
        }
      }),
      hashtags: text(),
      is_exclusive: checkbox({
        label: 'Mark as Exclusive Content (By Admin)'
      }),
      content: textEditor(),
      references: textEditor(),
      is_admin: checkbox({
        ui: {
          createView: {
            fieldMode: 'hidden'
          },
          itemView: {
            fieldMode: 'hidden'
          }
        }
      }),
      created_at: timestamp({
        ui: {
          createView: {
            fieldMode: 'hidden'
          },
          itemView: {
            fieldMode: 'hidden'
          }
        }
      }),
      alias: text({
        ui: {
          createView: {
            fieldMode: 'hidden'
          },
          itemView: {
            fieldMode: 'hidden'
          }
        },
        isIndexed: 'unique'
      })
    },
  }),
  Category: list({
    fields: {
      name: text()
    }
  }),
  AMABanner: list({
    fields: {
      banner: text()
    }
  }),
  Subscribe: list({
    access: {
      operation: {
        query: isAdmin,
        update: isAdmin,
        delete: isAdmin
      }
    },
    fields: {
      email: text({ validation: { isRequired: true }, isIndexed: 'unique' })
    }
  }),
};
