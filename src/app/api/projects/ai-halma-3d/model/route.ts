import path from 'path';
import fs from 'fs';

import { streamFile } from 'src/utils/stream';

// reference: https://stackoverflow.com/questions/78176456/stream-file-content-to-the-client-using-nextjs-app-router
export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'gltf', 'halma_board.gltf');
    const stats = fs.statSync(filePath);
    const stream: ReadableStream = streamFile(filePath);
    return new Response(stream, {
      status: 200,
      headers: new Headers({
        /**
         * To auto download, add this on headers
         * 'content-disposition': `attachment; filename=${path.basename(
         *     filePath,
         * )}`,
         */
        'content-type': 'application/json',
        'content-length': stats.size + '',
      }),
    });
  } catch (error) {
    console.error({ error });
    return new Response('oops', {
      status: 400,
    });
  }
}
