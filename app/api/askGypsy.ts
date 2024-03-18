import type { NextApiRequest, NextApiResponse } from 'next';
import query from '@/util/queryApi';
import admin from 'firebase-admin';
import gypsy from '@/public/gypsy.png';
import { adminDb } from '@/firebaseAdmin';


type Data = {
  answer: string;
};

type Message = {
  text: string;
  createdAt: admin.firestore.Timestamp;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
};

// API Route
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model, session } = req.body;

  if (!prompt) {
    res.status(400).json({ answer: 'Missing prompt' });
    return;
  }

  if (!chatId) {
    res.status(400).json({ answer: 'Missing chatId' });
    return;
  }

  // ChatGPT Query
  const response = await query(prompt, chatId, model);

  const message: Message = {
    text: response || 'GPT cant answer right now! Try again later...',
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: 'ChatGPT',
      name: 'ChatGPT',
      avatar: 'https://links.papareact.com/89k',
    },
  };

  await adminDb
    .collection('users')
    .doc(session?.user?.email)
    .collection('chats')
    .doc(chatId)
    .collection('messages')
    .add(message);

  res.status(200).json({ answer: message.text });
}
