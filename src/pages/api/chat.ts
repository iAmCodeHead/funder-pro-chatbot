/* eslint-disable import/no-extraneous-dependencies */
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { FaissStore } from 'langchain/vectorstores/faiss';
import type { NextApiRequest, NextApiResponse } from 'next';

import { makeChain } from '@/utils/makechain';

// Save the vector store to a directory
const directory = '../faiss-store';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { question, history } = req.body;

  // only accept post requests
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  if (!question) {
    res.status(400).json({ message: 'No question in the request' });
    return;
  }
  // OpenAI recommends replacing newlines with spaces for best results
  const sanitizedQuestion = question.trim().replaceAll('\n', ' ');

  try {
    /* create vectorstore */
    const vectorStore = await FaissStore.load(
      directory,
      new OpenAIEmbeddings({}),
    );

    // create chain
    const chain = makeChain(vectorStore);
    // Ask a question using chat history
    const response = await chain.call({
      question: sanitizedQuestion,
      chat_history: history || [],
    });

    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Something went wrong' });
  }
}
