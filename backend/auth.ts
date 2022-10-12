// auth.ts
import { createAuth } from '@keystone-6/auth';

import { statelessSessions } from '@keystone-6/core/session';

import Const from './utils/constant'

let sessionSecret = Const.SESSION_SECRET || '-- DEV COOKIE SECRET; CHANGE ME --';
let sessionMaxAge = 60 * 60 * 24 * 30; // 30 days

const { withAuth } = createAuth({
    listKey: 'Admin',
    identityField: 'email',
    sessionData: 'id name email is_root_admin',
    secretField: 'password',
    initFirstItem: {
        fields: ['name', 'email', "is_root_admin", 'password'],
    },
});

const session = statelessSessions({
    maxAge: sessionMaxAge,
    secret: sessionSecret,
});

type Session = {
  data: {
      id: string;
      name: string;
      email: string;
      is_root_admin: boolean;
  }
}

const isAdmin = ({ session }: { session: Session }) => !!session?.data
const isRootAdmin= ({ session }: { session: Session }) => !!session?.data?.is_root_admin

export { withAuth, session, isAdmin, isRootAdmin, Session }