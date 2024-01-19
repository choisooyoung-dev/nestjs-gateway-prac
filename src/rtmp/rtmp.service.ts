import { Injectable, OnModuleInit } from '@nestjs/common';
import * as NodeMediaServer from 'node-media-server';

@Injectable()
export class RtmpService implements OnModuleInit {
  private nms: any;

  onModuleInit() {
    const config = {
      rtmp: {
        port: 1935,
        chunk_size: 60000,
        gop_cache: true,
        ping: 60,
        ping_timeout: 30,
      },
      // Additional configuration for HTTP and HLS...
    };

    this.nms = new NodeMediaServer(config);
    this.nms.run();
  }

  // Additional methods as needed...
}
