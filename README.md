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
based off http://www.videolan.org/developers/vlc/src/misc/fourcc.c
http://git.videolan.org/gitweb.cgi/vlc.git/?p=vlc.git;a=blob;f=include/vlc_fourcc.h
https://github.com/jawnsy/Video-FourCC-Info
