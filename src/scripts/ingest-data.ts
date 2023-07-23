/* eslint-disable import/no-extraneous-dependencies */
import { DirectoryLoader } from 'langchain/document_loaders/fs/directory';
import { TextLoader } from 'langchain/document_loaders/fs/text';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { FaissStore } from 'langchain/vectorstores/faiss';

/* Name of directory to retrieve your files from */
const filePath = 'src/docs';

// Save the vector store to a directory
const indexFilePath = '../faiss-store';

export const run = async () => {
  try {
    /* load raw docs from the all files in the directory
     * in our case, we are loading .txt files
     */
    const directoryLoader = new DirectoryLoader(filePath, {
      '.txt': (path) => new TextLoader(path),
    });

    const rawDocs = await directoryLoader.load();

    const vectorStore = await FaissStore.fromDocuments(
      rawDocs,
      new OpenAIEmbeddings(),
    );

    await vectorStore.save(indexFilePath);
  } catch (error) {
    throw new Error(`Failed to ingest your data \n ${error}`);
  }
};

(async () => {
  await run();
  console.info('ingestion complete');
})();
