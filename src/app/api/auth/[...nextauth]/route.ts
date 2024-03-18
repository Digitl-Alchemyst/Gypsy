/* eslint-disable import/prefer-default-export */
import NextAuth, { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/util/auth';
import { NextResponse } from 'next/server';

const handler = NextAuth(authOptions);

// export async function GET(request: Request) {
//   const session = await getServerSession(authOptions);
//   console.log(session);
//   return NextResponse.json({
//     id: 1,
//   });
// }

export { handler as GET, handler as POST };
