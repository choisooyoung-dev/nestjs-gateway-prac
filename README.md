# 📺 Nginx-RTMP-module, HLS Protocol Practice

- 실시간 스트리밍 방송 구현해보기

## ✍️ 필요한 것
- OBS Studio

## 🦾 주요 기능
- Nginx에서 제공되는 Nginx-RTMP-module과 HLS Protocol 사용으로 OBS Studio에서 송출되고 있는 영상을 클라이언트 화면에 보여줍니다.
- 기능을 익히기 위한 예제 코드입니다.

<br>

## ⚙ 주요 기술 스택

<!-- 프로젝트에 사용된 기술 스택을 나열 -->

### ⚡ Front - end

<div dir="auto">
    <img src="https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=EJS&logoColor=white">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white">
</div>

### ⚡ Back - end

<div dir="auto">
    <img src="https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white">
    <img src="https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=nginx&logoColor=white">
    <img src="https://img.shields.io/badge/nginx_rtmp_module-009639?style=for-the-badge&logo=nginx&logoColor=white">
    <img src="https://img.shields.io/badge/hls protocol-010101?style=for-the-badge&logo=&logoColor=white">
</div>

<br>

## 🎯 기술적 의사결정

<table>
    <thead>
        <th>
            NginX - RTMP Module
        </th>
         <th>
            HLS Protocol
        </th>
    <thead>
   <tbody>
     <tr>
        <td>OBS studio에서 송출한 영상  <br /> → rtmp 프로토콜로 전송  <br /> → flv 형태로 서버에 전송</td>
        <td>하나의 영상을 일정한 구간별로 잘라 ts 파일로 만들어서 전송 <br />적응형 비트 전송률 스트리밍 기능<br /> → 스트리밍 도중에도 네트워크 상태에 따라 비디오 품질을 조절하여 끊기지 않게 재생가능</td>
    </tr>
   </tbody>
</table>

<br>

