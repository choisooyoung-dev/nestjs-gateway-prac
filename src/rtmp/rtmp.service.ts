import { Injectable, OnModuleInit } from '@nestjs/common';
import * as NodeMediaServer from 'node-media-server';

@Injectable()
export class RtmpService implements OnModuleInit {
  onModuleInit() {
    const config = {
      rtmp: {
        port: 1935,
        chunk_size: 60000,
        gop_cache: true,
        ping: 30,
        ping_timeout: 60,
      },
      http: {
        port: 8000, // http 서버 포트번호. 역시 변경 가능함.
        mediaroot: './media', // 방송 송출할 파일의 위치
        allow_origin: '*',
      },
      trans: {
        ffmpeg: '/usr/local/bin/ffmpeg.exe', //ffmpeg가 설치된 경로
        tasks: [
          {
            app: 'live', // 포트번호 뒤에 입력할 url(?)
            hls: true,
            hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]', // hls_time: 하나의 ts파일 당 길이. hls_list_size: 유지 할 hls파일 갯수.
            hlsKeep: true, // to prevent hls file delete after end the stream
            dash: true,
            dashFlags: '[f=dash:window_size=3:extra_window_size=5]',
            dashKeep: true, // to prevent dash file delete after end the stream
          },
        ],
      },
    };
    const nms = new NodeMediaServer(config);
    nms.run();
  }
}
