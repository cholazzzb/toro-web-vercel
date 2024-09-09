// reference: https://stackoverflow.com/questions/78176456/stream-file-content-to-the-client-using-nextjs-app-router
import fs from 'fs';

// Syntax taken from
// https://github.com/MattMorgis/async-stream-generator
// itself taken from
// https://nextjs.org/docs/app/building-your-application/routing/router-handlers#streaming
// probably itself taken from
// https://nodejs.org/api/stream.html

async function* nodeStreamToIterator(stream: fs.ReadStream) {
  for await (const chunk of stream) {
    yield new Uint8Array(chunk);
  }
}

function iteratorToStream(iterator: AsyncIterator<Uint8Array, void, unknown>) {
  return new ReadableStream({
    async pull(controller) {
      const next = await iterator.next();
      if (next.done) {
        controller.close();
      } else {
        controller.enqueue(next.value);
      }
    },
  });
}

export function streamFile(path: string): ReadableStream {
  const nodeStream = fs.createReadStream(path);
  const data: ReadableStream = iteratorToStream(
    nodeStreamToIterator(nodeStream),
  );
  return data;
}
