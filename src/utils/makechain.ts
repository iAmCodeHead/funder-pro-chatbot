import { ConversationalRetrievalQAChain } from 'langchain/chains';
import type { VectorStore } from 'langchain/dist/vectorstores/base';
import { OpenAI } from 'langchain/llms/openai';

const ANSWER_LANGUAGE = process.env.ANSWER_LANGUAGE || 'English';
const OPENAI_CHAT_MODEL = process.env.OPENAI_CHAT_MODEL || 'gpt-3.5-turbo';

const CONDENSE_PROMPT = `Given the following conversation and a follow up question, rephrase the follow up question to be a standalone question.

Chat History:
{chat_history}
Follow Up Input: {question}
Standalone question:`;

const QA_PROMPT = `You are a helpful AI assistant that answers questions regarding funderPro. Use the following pieces of context to answer the question at the end.
If the answer is not in the document provided, just say you don't know. DO NOT try to make up an answer.
If the question is not related to the document provided, politely respond that you are tuned to only answer questions that are related to the provided.
If you are throw a compliment, goodbyes or chit chat that does not harm the brand, handle appropriately.
{context}

Question: {question}
Helpful answer in markdown(Please answer in ${ANSWER_LANGUAGE}):`;

export const makeChain = (vectorstore: VectorStore) => {
  const model = new OpenAI({
    temperature: 0.3, // increase temepreature to get more creative answers
    modelName: OPENAI_CHAT_MODEL, // change this to gpt-4 if you have access
  });
  const chain = ConversationalRetrievalQAChain.fromLLM(
    model,
    vectorstore.asRetriever(5),
    {
      qaTemplate: QA_PROMPT,
      questionGeneratorTemplate: CONDENSE_PROMPT,
      returnSourceDocuments: false, // The number of source documents returned is 4 by default
    },
  );
  return chain;
};
