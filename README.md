fourcc.js
=========

Json format of the fourcc

FOURCC is short for "four character code" - an identifier for a video codec, compression format, color or pixel format used in media files.

A character in this context is a 1 byte/8 bit value, thus a FOURCC always takes up exactly 32 bits/4 bytes in a file.

Another way to write FOURCC is 4CC (4 as in "four" character code).

The four characters in a FOURCC is generally limited to be within the human readable characters in the ASCII table. Because of this it is easy to convey and communicate what the FOURCCs are within a media file.

Some of the more well known FOURCCs include "DIVX", "XVID", "H264", "DX50". But these are just a few of the hundreds

There are 3 sections
 * Audio for Audio codecs
 * Video for Video codecs
 * Subtitles for subtitles


Usage
-----

```
var fourCC = new FourCC();
var fcc = fourCC.find_fourcc("AVdn");

> "DNxHD"

```

Any that are missing or wrong please fork and send us a pull request.

Sources
-------

Original list based on:

- VLC fourcc tables: <http://www.videolan.org/developers/vlc/src/misc/fourcc.c>
- VLC fourcc header: <http://git.videolan.org/gitweb.cgi/vlc.git/?p=vlc.git;a=blob;f=include/vlc_fourcc.h>
- Video FourCC Info: <https://github.com/jawnsy/Video-FourCC-Info>
- Softron FourCC list: <https://softron.zendesk.com/hc/en-us/articles/207695697-List-of-FourCC-codes-for-video-codecs>

2026 modern-codec update sourced from:

- MP4 Registration Authority codec registry: <https://mp4ra.org/registered-types/codecs>
- FFmpeg `libavformat/isom_tags.c` (MOV/MP4 tags): <https://github.com/FFmpeg/FFmpeg/blob/master/libavformat/isom_tags.c>
- FFmpeg `libavformat/riff.c` (AVI/RIFF/WAV tags): <https://github.com/FFmpeg/FFmpeg/blob/master/libavformat/riff.c>
- AOMedia AV2 specification: <https://av2.aomedia.org/>
- AV1 ISOBMFF binding: <https://aomediacodec.github.io/av1-isobmff/>
- Open APV ISOBMFF binding: <https://github.com/AcademySoftwareFoundation/openapv/blob/main/readme/apv_isobmff.md>

