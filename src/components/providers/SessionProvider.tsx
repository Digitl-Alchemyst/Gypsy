/* eslint-disable import/prefer-default-export */
'use client';

import { Session } from 'next-auth';
import { SessionProvider as Provider } from 'next-auth/react';

type Props = {
  children: React.ReactNode;
  session: Session | null;
};

export function SessionProvider({ children, session }: Props) {
  // const { data : session } = useSession(); // Use the `useSession` hook to access the session

  return (
    <Provider session={session}>
      {/* Pass the `session` prop to `SessionProvider` */}
      {children}
    </Provider>
  );
}
