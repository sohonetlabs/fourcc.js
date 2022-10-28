var FOUR_CC = {
    "audio": {
        ".mp3": "MPEG Audio layer 1/2/3",
        "14_4": "RealAudio 1.0",
        "23ni": "PCM S32 LE",
        "28_8": "RealAudio 2.0",
        "302m": "302M Audio",
        "42ni": "PCM S24 LE",
        "4xma": "4X Technologies Audio",
        "ADEA": "EA ADPCM Audio",
        "AIWS": "Westwood IMA ADPCM audio",
        "APE ": "Monkey's Audio",
        "DCIA": "Delphine CIN Audio",
        "LAME": "MPEG Audio layer 1/2/3",
        "MAC3": "MACE-3 Audio",
        "MAC6": "MACE-6 Audio",
        "MIDI": "MIDI Audio",
        "MP3 ": "MPEG Audio layer 1/2/3",
        "MPC ": "MUSEPACK7 Audio",
        "MPC8": "MUSEPACK8 Audio",
        "MPCK": "MUSEPACK8 Audio",
        "NELL": "NellyMoser ASAO",
        "QDM2": "QDM2 Audio",
        "Qclp": "QCELP Audio",
        "RADV": "DV Audio",
        "RoQa": "Id RoQ DPCM Audio",
        "SONC": "Sonic",
        "SWFa": "Flash ADPCM Audio",
        "TTA1": "The Lossless True Audio",
        "TWIN": "TwinVQ",
        "WMA1": "Windows Media Audio 1",
        "WMA2": "Windows Media Audio 2",
        "WMAL": "Windows Media Audio Lossless",
        "WMAP": "Windows Media Audio Professional",
        "WMAS": "Windows Media Audio Voice (Speech)",
        "WVPK": "WavPack",
        "\\x01\\x04\\x00\\x00": "IMC",
        "\\x22\\x00\\x00\\x00": "TrueSpeech",
        "\\x70\\x02\\x00\\x00": "atrac 3",
        "a52 ": "A52 Audio (aka AC3)",
        "a52b": "A52 Audio (aka AC3)",
        "aac ": "MPEG AAC Audio",
        "ac-3": "A52 Audio (aka AC3)",
        "adx ": "ADX ADPCM Audio",
        "agsm": "Microsoft GSM Audio",
        "alac": "Apple Lossless Audio Codec",
        "alaw": "PCM ALAW",
        "als ": "MPEG-4 Audio Lossless (ALS)",
        "apcm": "DVD-Audio LPCM Audio",
        "atr1": "atrac 1",
        "atrc": "atrac 3",
        "bpcm": "BD LPCM Audio",
        "cook": "Cook Audio",
        "daud": "PCM DAUD",
        "dts ": "DTS Audio",
        "dtsb": "DTS Audio",
        "dvau": "DV Audio",
        "dvca": "DV Audio",
        "eac3": "A/52 B Audio (aka E-AC3)",
        "f32b": "32 bits float BE",
        "f32l": "32 bits float LE",
        "f64b": "64 bits float BE",
        "f64l": "64 bits float LE",
        "fi32": "32 bits fixed float",
        "fl32": "32 bits float LE",
        "flac": "FLAC (Free Lossless Audio Codec)",
        "g726": "G.726 ADPCM Audio",
        "gsm ": "GSM Audio",
        "idpc": "Interplay DPCM Audio",
        "imav": "IMA AMV ADPCM Audio",
        "in24": "PCM S24 BE",
        "in32": "PCM S32 BE",
        "lpcJ": "RealAudio 1.0",
        "lpcm": "DVD LPCM Audio",
        "mlaw": "PCM MU-LAW",
        "mlp ": "MLP/TrueHD Audio",
        "mp3 ": "MPEG Audio layer 1/2/3",
        "mp4a": "MPEG AAC Audio",
        "mpga": "MPEG Audio layer 1/2/3",
        "ms\\x00\\x02": "MS ADPCM audio",
        "ms\\x00\\x11": "IMA WAV ADPCM Audio",
        "ms\\x00\\x50": "MPEG Audio layer 1/2/3",
        "ms\\x00\\x55": "MPEG Audio layer 1/2/3",
        "ms\\x20\\x00": "A52 Audio (aka AC3)",
        "ms\\x20\\x01": "DTS Audio",
        "s16b": "PCM S16 BE",
        "s16l": "PCM S16 LE",
        "s24b": "PCM S24 BE",
        "s24l": "PCM S24 LE",
        "s32b": "PCM S32 BE",
        "s32l": "PCM S32 LE",
        "s8  ": "PCM S8",
        "samr": "AMR narrow band",
        "sawb": "AMR wide band",
        "sddb": "SDDS Audio",
        "sdds": "SDDS Audio",
        "shn ": "Shorten Lossless Audio",
        "shrn": "Shorten Lossless Audio",
        "sipr": "RealAudio Sipr",
        "sowt": "PCM 16 BE",
        "spx ": "Speex Audio",
        "spxr": "Speex Audio",
        "trhd": "TrueHD Audio",
        "twos": "PCM 16 LE",
        "u16b": "PCM U16 BE",
        "u16l": "PCM U16 LE",
        "u24b": "PCM U24 BE",
        "u24l": "PCM U24 LE",
        "u32b": "PCM U32 BE",
        "u32l": "PCM U32 LE",
        "u8  ": "PCM U8",
        "ulaw": "PCM MU-LAW",
        "vdva": "DV Audio",
        "vmda": "Sierra VMD Audio",
        "vorb": "Vorbis Audio",
        "wma ": "Windows Media Audio 2",
        "wma1": "Windows Media Audio 1",
        "wma2": "Windows Media Audio 2",
        "wmal": "Windows Media Audio Lossless",
        "wmap": "Windows Media Audio Professional",
        "wmas": "Windows Media Audio Voice (Speech)",
        "wvpk": "WavPack",
        "xa  ": "PSX XA ADPCM Audio"
    },
    "subtitles": {
        "DXSB": "DivX XSUB subtitles",
        "TEXT": "Plain text subtitles",
        "XSUB": "DivX XSUB subtitles",
        "bdpg": "BD subtitles",
        "cmml": "CMML annotations/metadata",
        "cvd ": "CVD subtitles",
        "dvbs": "DVB Subtitles",
        "kate": "Kate subtitles",
        "ogt ": "OGT subtitles",
        "spu ": "DVD Subtitles",
        "spub": "DVD Subtitles",
        "ssa ": "SubStation Alpha subtitles",
        "subt": "Text subtitles with various tags",
        "t140": "ITU T.140 subtitles",
        "telx": "Teletext",
        "usf ": "USF subtitles",
        "xsub": "DivX XSUB subtitles"
    },
    "video": {
        "1": "Uncompressed 1-bit Indexed Color",
        "16": "Uncompressed 16-bit RGB 555 (Big Endian)",
        "2": "Uncompressed 2-bit Indexed Color",
        "24": "Uncompressed 24-bit RGB",
        "24BG": "Uncompressed 24-bit BGR",
        "2VUY": "Optibase VideoPump 8-bit 4:2:2 Component YCbCr",
        "2Vu1": "Packed YUV 4:2:2, U:Y:V:Y",
        "2Vuy": "Packed YUV 4:2:2, U:Y:V:Y",
        "2vuy": "Packed YUV 4:2:2, U:Y:V:Y",
        "32": "Uncompressed 32-bit ARGB",
        "33": "Uncompressed 1-bit Grayscale",
        "34": "Uncompressed 2-bit Grayscale",
        "36": "Uncompressed 4-bit Grayscale",
        "3IV1": "3ivx delta 3.5 MPEG-4 Video",
        "3IV2": "3ivx MPEG-4 Video",
        "3IVD": "MS MPEG-4 Video v3",
        "3VID": "MS MPEG-4 Video v3",
        "3iv1": "3ivx delta 3.5 MPEG-4 Video",
        "3iv2": "3ivx MPEG-4 Video",
        "3ivd": "MS MPEG-4 Video v3",
        "3vid": "MS MPEG-4 Video v3",
        "4": "Uncompressed 4-bit Indexed Color",
        "40": "Uncompressed 8-bit Grayscale",
        "4XMV": "4X Technologies Video",
        "4xmv": "4X Technologies Video",
        "5551": "Uncompressed 16-bit RGB 5551 (Little Endian)",
        "8": "Uncompressed 8-bit Indexed Color",
        "8BPS": "8BPS",
        "AASC": "Autodesc RLE Video",
        "ABGR": "Uncompressed 32-bit ABGR",
        "ACDV": "ACD Systems Digital",
        "ACTL": "Streambox ACT-L2",
        "ADJV": "Avid Motion JPEG",
        "AP41": "MS MPEG-4 Video v3",
        "ASV1": "Asus V1 Video",
        "ASV2": "Asus V2 Video",
        "AVC1": "H264 - MPEG-4 AVC (part 10)",
        "AVDJ": "Avid Motion JPEG",
        "AVRn": "Avid Motion JPEG",
        "AVUI": "Packed YUV 4:2:2, U:Y:V:Y",
        "AVd1": "AVID DV",
        "AVdh": "DNxHR",
        "AVdn": "DNxHD",
        "AVdv": "AVID DV",
        "AVmp": "AVID IMX PAL",
        "AVs2": "Chinese AVS",
        "AZPR": "Apple Video",
        "B565": "Uncompressed 16-bit RGB 565 (Big Endian)",
        "BGRA": "Uncompressed 32-bit BGRA",
        "BLZ0": "Blizzard MPEG-4 Video",
        "CAVS": "Chinese AVS",
        "CDG ": "CD-G Video",
        "CDVC": "Canopus DV Video",
        "CDVH": "Canopus DV Video",
        "CFHD": "Cineform",
        "CLJR": "Creative Logic AccuPak",
        "COL0": "MS MPEG-4 Video v3",
        "COL1": "MS MPEG-4 Video v3",
        "CRAM": "Microsoft Video 1",
        "CSCD": "CamStudio Screen Codec",
        "CVID": "Cinepak Video",
        "CYUV": "Creative Packed YUV 4:2:2, U:Y:V:Y, reverted",
        "D263": "DEC H263",
        "DAVC": "Dicas MPEGable H.264/MPEG-4 AVC",
        "DCOD": "MPEG-4 Video",
        "DIGI": "MPEG-4 Video",
        "DIV1": "MS MPEG-4 Video v1",
        "DIV2": "MS MPEG-4 Video v2",
        "DIV3": "MS MPEG-4 Video v3",
        "DIV4": "MS MPEG-4 Video v3",
        "DIV5": "MS MPEG-4 Video v3",
        "DIV6": "MS MPEG-4 Video v3",
        "DIVF": "DivX 4.12",
        "DIVX": "MPEG-4 Video",
        "DMK2": "MPEG-4 Video",
        "DUCK": "Duck TrueMotion v1 Video",
        "DVCS": "DV Video",
        "DVSD": "DV Video",
        "DVX3": "MS MPEG-4 Video v3",
        "DX50": "DivX MPEG-4 Video",
        "DXGM": "Electronic Arts Game MPEG-4 Video",
        "EPHV": "MPEG-4 Video",
        "FFDS": "FFDShow MPEG-4",
        "FFV1": "FFMpeg Video 1",
        "FFVH": "Huff YUV Video",
        "FLIC": "Flic Video",
        "FLV1": "Flash Video",
        "FLV4": "On2's VP6.2 Video (Flash)",
        "FMP4": "MPEG-4 Video",
        "FPS1": "FRAPS: Realtime Video Capture",
        "FRWU": "Forward Uncompressed",
        "FSV1": "Flash Screen Video",
        "FVFW": "FFmpeg MPEG-4",
        "GEOV": "MPEG-4 Video",
        "GEOX": "MPEG-4 Video",
        "GREY": "8 bits greyscale",
        "H261": "H.261",
        "H263": "H263",
        "H264": "H264 - MPEG-4 AVC (part 10)",
        "H265": "MPEG-H Part2/HEVC (H.265)",
        "HDX4": "Jomigo HDX4 (MPEG-4 Video)",
        "HDYC": "Packed YUV 4:2:2, U:Y:V:Y",
        "HEVC": "MPEG-H Part2/HEVC (H.265)",
        "HFYU": "Huff YUV Video",
        "I263": "I263.I",
        "I410": "Planar 4:1:0 YUV",
        "I411": "Planar 4:1:1 YUV",
        "I420": "Planar 4:2:0 YUV",
        "I422": "Planar 4:2:2 YUV",
        "I440": "Planar 4:4:0 YUV",
        "I444": "Planar 4:4:4 YUV",
        "IDCI": "Id Quake II CIN Video",
        "IJPG": "Intergraph JPEG Video",
        "ILVR": "ITU H263+",
        "INMC": "MPEG-4 Video",
        "INPV": "Interplay MVE Video",
        "IV20": "Indeo Video v2",
        "IV31": "Indeo Video v3",
        "IV32": "Indeo Video v3",
        "IV41": "Intel Indeo Video 4.3",
        "IV50": "Indeo Video v5",
        "IYUV": "Planar 4:2:0 YUV",
        "J420": "Planar 4:2:0 YUV full scale",
        "J422": "Planar 4:2:2 YUV full scale",
        "J440": "Planar 4:4:0 YUV full scale",
        "J444": "Planar 4:4:4 YUV full scale",
        "JFIF": "Motion JPEG Video",
        "JPEG": "JPEG",
        "JPGL": "Motion JPEG Video",
        "Jvt3": "Apple H.264/AVC Video (Preview)",
        "KMVC": "Karl Morton's Video Codec (Worms)",
        "L263": "LEAD H263",
        "L555": "Uncompressed 16-bit RGB 555 (Little Endian)",
        "L565": "Uncompressed 16-bit RGB 565 (Little Endian)",
        "LJPG": "Lead Motion JPEG Video",
        "LMP2": "Lead MPEG-2",
        "LOCO": "LOCO Video",
        "M263": "Microsoft H263",
        "M4CC": "MPEG-4 Video",
        "M4S2": "MPEG-4 Video",
        "M4T3": "MPEG-4 Video",
        "MDEC": "PSX MDEC Video",
        "MJLS": "Lossless JPEG",
        "MJPG": "Motion JPEG Video",
        "ML2O": "Mimic",
        "MMES": "Matrox MPEG-2",
        "MMJP": "Motion JPEG Video",
        "MP42": "MS MPEG-4 Video v2",
        "MP43": "MS MPEG-4 Video v3",
        "MP4S": "MPEG-4 Video",
        "MP4V": "MPEG-4 Video",
        "MPEG": "MPEG-1/2 Video",
        "MPG2": "MPEG-1/2 Video",
        "MPG3": "MS MPEG-4 Video v3",
        "MPG4": "MS MPEG-4 Video v1",
        "MSVC": "Microsoft Video 1",
        "MTGA": "Truevision Targa Image",
        "MVXM": "MPEG-4 Video",
        "NUV1": "Nuppel Video",
        "NV12": "Planar  Y, Packet UV (420)",
        "PIM1": "Pinnacle DC1000 (MPEG-1 Video)",
        "PIM2": "Pinnacle MPEG-2",
        "PIXL": "Pinnacle VideoXL Video",
        "PM4V": "MPEG-4 Video",
        "PVEZ": "Duck TrueMotion v1 Video",
        "Q1.0": "QPEG Video",
        "Q1.1": "QPEG Video",
        "QIVG": "Motion JPEG Video",
        "QPEG": "QPEG Video",
        "RGB2": "8 bits RGB",
        "RGBA": "32 bits RGBA",
        "RGBP": "Palettized RGB with palette element R:G:B",
        "RJPG": "Nuppel Video",
        "RMP4": "REALmagic MPEG-4 Video",
        "RPZA": "Apple Video",
        "RT21": "Indeo Video v2",
        "RV10": "Real Video 1.0",
        "RV13": "Real Video 1.3",
        "RV15": "15 bits RGB",
        "RV16": "16 bits RGB",
        "RV20": "Real Video 2.0",
        "RV24": "24 bits RGB",
        "RV30": "Real Video 3.0",
        "RV32": "32 bits RGB",
        "RV40": "Real Video 4.0",
        "RoQv": "Id RoQ Video",
        "S263": "H263",
        "SEDG": "Samsung MPEG-4 Video",
        "SLMJ": "SL M-JPEG",
        "SMK2": "Smacker Video",
        "SMK4": "Smacker Video",
        "SMP4": "Samsung SMP4 (MPEG-4 Video)",
        "SN40": "MPEG-4 Video",
        "SNOW": "FFMpeg SNOW wavelet Video",
        "SP53": "Sunplus Motion JPEG Video",
        "SP54": "Sunplus Motion JPEG Video",
        "SP55": "Sunplus Motion JPEG Video",
        "SP56": "Sunplus Motion JPEG Video",
        "SP57": "Sunplus Motion JPEG Video",
        "SP58": "Sunplus Motion JPEG Video",
        "SP5X": "Sunplus Motion JPEG Video",
        "SVQ1": "SVQ-1 (Sorenson Video v1)",
        "SVQ3": "SVQ-3 (Sorenson Video v3)",
        "TM20": "Duck TrueMotion v2.0 Video",
        "TSCC": "TechSmith Camtasia Screen Capture",
        "Thra": "Xiph.org's Theora Video",
        "U263": "UB H263+",
        "ULTI": "IBM Ultimotion Video",
        "UMP4": "UB MPEG-4 Video",
        "UYNV": "Packed YUV 4:2:2, U:Y:V:Y",
        "UYNY": "Packed YUV 4:2:2, U:Y:V:Y",
        "UYVY": "Packed YUV 4:2:2, U:Y:V:Y",
        "V422": "Packed YUV 4:2:2, Y:U:Y:V",
        "VC-1": "Windows Media Video VC1",
        "VCR1": "ATI VCR1 Video",
        "VCR2": "ATI VCR-2",
        "VIDM": "vidm 4.01 codec",
        "VIXL": "Miro/Pinnacle VideoXL Video",
        "VMDV": "Sierra VMD Video",
        "VMnc": "VMware Video",
        "VP3 ": "On2's VP3 Video",
        "VP30": "On2's VP3 Video",
        "VP31": "On2's VP3 Video",
        "VP5 ": "On2's VP5 Video",
        "VP50": "On2's VP5 Video",
        "VP60": "On2's VP6.0 Video",
        "VP61": "On2's VP6.1 Video",
        "VP62": "On2's VP6.2 Video",
        "VP6A": "On2's VP6 A Video",
        "VP6F": "On2's VP6.2 Video (Flash)",
        "VP70": "On2's VP7 Video",
        "VP80": "Google/On2's VP8 Video",
        "VSSH": "Vanguard VSS H264",
        "VSSW": "Vanguard VSS H264",
        "VX1K": "H263",
        "VYUY": "Packed YUV 4:2:2, V:Y:U:Y",
        "WHAM": "Microsoft Video 1",
        "WMV1": "Windows Media Video 7",
        "WMV2": "Windows Media Video 8",
        "WMV3": "Windows Media Video 9",
        "WMVA": "Windows Media Video Advanced Profile",
        "WNV1": "Winnov WNV1 Video",
        "WRLE": "Microsoft RLE Video",
        "WV1F": "MPEG-4 Video",
        "WVC1": "Windows Media Video VC1",
        "WVP2": "Windows Media Video Advanced Profile",
        "X263": "Xirlink H263",
        "X264": "H264 - MPEG-4 AVC (part 10)",
        "XIXL": "Miro/Pinnacle VideoXL Video",
        "XVID": "Xvid MPEG-4 Video",
        "XVIX": "Xvid MPEG-4 Video",
        "XviD": "Xvid MPEG-4 Video",
        "Y211": "Packed YUV 2:1:1, Y:U:Y:V ",
        "Y422": "Packed YUV 4:2:2, U:Y:V:Y",
        "Y8  ": "8 bits greyscale",
        "Y800": "8 bits greyscale",
        "YUNV": "Packed YUV 4:2:2, Y:U:Y:V",
        "YUVA": "Planar YUV 4:4:4 Y:U:V:A",
        "YUVP": "Palettized YUV with palette element Y:U:V:A",
        "YUY2": "Packed YUV 4:2:2, Y:U:Y:V",
        "YUYV": "Packed YUV 4:2:2, Y:U:Y:V",
        "YV12": "Planar 4:2:0 YVU",
        "YVU9": "Planar 4:1:0 YVU",
        "YVYU": "Packed YUV 4:2:2, Y:V:Y:U",
        "ZMBV": "DosBox Capture Codec",
        "ZyGo": "ITU H263+",
        "\\x01\\x00\\x00\\x00": "Microsoft RLE Video",
        "\\x02\\x00\\x00\\x00": "Microsoft RLE Video",
        "\\x04\\x00\\x00\\x00": "MPEG-4 Video",
        "a2vy": "Two-Plane Component Y'CbCr,A 8-bit 4:2:2,4",
        "ai12": "AVC-Intra 100M 1080p25/50",
        "ai13": "AVC-Intra 100M 1080p24/30/60",
        "ai15": "AVC-Intra 100M 1080i50",
        "ai16": "AVC-Intra 100M 1080i60",
        "ai1p": "AVC-Intra 100M 720p24/30/60",
        "ai1q": "AVC-Intra 100M 720p25/50",
        "ai52": "AVC-Intra  50M 1080p25/50",
        "ai53": "AVC-Intra  50M 1080p24/30/60",
        "ai55": "AVC-Intra  50M 1080i50",
        "ai56": "AVC-Intra  50M 1080i60",
        "ai5p": "AVC-Intra  50M 720p24/30/60",
        "ai5q": "AVC-Intra  50M 720p25/50",
        "ap4h": "Apple ProRes 444 BE",
        "ap4x": "Apple ProRes 4444 (XQ)",
        "apch": "Apple ProRes 422 High Quality BE",
        "apcn": "Apple ProRes 422 Standard Definition BE",
        "apco": "Apple ProRes 422 Proxy BE",
        "apcs": "Apple ProRes 422 LT BE",
        "avc1": "H264 - MPEG-4 AVC (part 10)",
        "avr ": "Motion JPEG AVR",
        "avs2": "Chinese AVS",
        "azpr": "Apple Video",
        "b16g": "Uncompressed 16-bit Grayscale",
        "b32a": "Uncompressed 32-bit AlphaGray",
        "b48r": "Uncompressed 48-bit RGB",
        "b64a": "Uncompressed 64-bit ARGB",
        "bmp ": "BMP Image",
        "cdvc": "Canopus DV Video",
        "cdvh": "Canopus DV Video",
        "col0": "MS MPEG-4 Video v3",
        "col1": "MS MPEG-4 Video v3",
        "cram": "Microsoft Video 1",
        "cscd": "CamStudio Screen Codec",
        "cvid": "Cinepak Video",
        "cyuv": "Creative Packed YUV 4:2:2, U:Y:V:Y, reverted",
        "davc": "Dicas MPEGable H.264/MPEG-4 AVC",
        "div1": "MS MPEG-4 Video v1",
        "div2": "MS MPEG-4 Video v2",
        "div3": "MS MPEG-4 Video v3",
        "div4": "MS MPEG-4 Video v3",
        "div5": "MS MPEG-4 Video v3",
        "div6": "MS MPEG-4 Video v3",
        "divf": "DivX 4.12",
        "divx": "MPEG-4 Video",
        "dmb1": "Motion JPEG OpenDML Video",
        "drac": "Dirac",
        "drmi": "AVC0 Media",
        "dv  ": "DV Video",
        "dv1n": "DV Video",
        "dv1p": "DV Video",
        "dv25": "DV Video",
        "dv50": "DV Video C Pro 50",
        "dv5n": "DV Video C Pro 50 NTSC",
        "dv5p": "DV Video C Pro 50 PAL",
        "dvc ": "DV/DVCPRO NTSC",
        "dvcp": "DV Video PAL",
        "dvcs": "DV Video",
        "dvh1": "DV Video",
        "dvh2": "DVCPRO HD (1080p25)",
        "dvh3": "DV Video",
        "dvh5": "DV Video",
        "dvh6": "DV Video",
        "dvhd": "DV Video",
        "dvhp": "DV Video",
        "dvhq": "DV Video",
        "dvp ": "DV Video Pro",
        "dvpp": "DV Video Pro PAL",
        "dvs1": "DV Video",
        "dvsd": "DV Video",
        "dvsl": "DV Video",
        "dx50": "DivX MPEG-4 Video",
        "flv ": "Flash",
        "fmp4": "MPEG-4 Video",
        "fps1": "FRAPS: Realtime Video Capture",
        "fvfw": "FFmpeg MPEG-4",
        "gif": "GIF",
        "gif ": "GIF Image",
        "h261": "H.261",
        "h263": "H263",
        "h264": "H264 - MPEG-4 AVC (part 10)",
        "h265": "MPEG-H Part2/HEVC (H.265)",
        "h4pa": "Apple ProRes 444 LE",
        "hcpa": "Apple ProRes 422 High Quality LE",
        "hdv1": "HDV 720p30 (MPEG-2 Video)",
        "hdv2": "Sony HDV (MPEG-2 Video)",
        "hdv3": "FCP HDV (MPEG-2 Video)",
        "hdv4": "HDV (720p24)",
        "hdv5": "HDV 720p25 (MPEG-2 Video)",
        "hdv6": "HDV 1080p24 (MPEG-2 Video)",
        "hdv7": "HDV 1080p25 (MPEG-2 Video)",
        "hdv8": "HDV 1080p30 (MPEG-2 Video)",
        "hdv9": "HDV (720p60)",
        "hdva": "HDV (720p50)",
        "hdx4": "Jomigo HDX4 (MPEG-4 Video)",
        "hevc": "MPEG-H Part2/HEVC (H.265)",
        "i263": "I263.I",
        "icod": "Apple Intermediate Codec",
        "ijpg": "Intergraph JPEG Video",
        "imve": "Interplay MVE Video",
        "iv31": "Indeo Video v3",
        "iv32": "Indeo Video v3",
        "iv50": "Indeo Video v5",
        "jpeg": "JPEG",
        "m4cc": "MPEG-4 Video",
        "m4s2": "MPEG-4 Video",
        "mjp2": "JPEG 2000",
        "mjpa": "Motion JPEG Video",
        "mjpb": "Motion JPEG B Video",
        "mjpg": "Motion JPEG Video",
        "mmes": "Matrox MPEG-2",
        "mp1v": "MPEG-1/2 Video",
        "mp2v": "MPEG-1/2 Video",
        "mp41": "MS MPEG-4 Video v1",
        "mp42": "MS MPEG-4 Video v2",
        "mp43": "MS MPEG-4 Video v3",
        "mp4s": "MPEG-4 Video",
        "mp4v": "MPEG-4 Video",
        "mpeg": "MPEG-1/2 Video",
        "mpg1": "MPEG-1/2 Video",
        "mpg2": "MPEG-1/2 Video",
        "mpg3": "MS MPEG-4 Video v3",
        "mpg4": "MS MPEG-4 Video v1",
        "mpgv": "MPEG-1/2 Video",
        "mplo": "Implode",
        "mrle": "Microsoft RLE Video",
        "msvc": "Microsoft Video 1",
        "mtga": "Truevision Targa Image",
        "mx3n": "MPEG2 IMX NTSC 525/60 30mb/s (FCP)",
        "mx3p": "MPEG2 IMX NTSC 625/50 30mb/s (FCP)",
        "mx4n": "MPEG2 IMX NTSC 525/60 40mb/s (FCP)",
        "mx4p": "MPEG2 IMX PAL 625/50 40mb/s (FCP)",
        "mx5n": "MPEG2 IMX NTSC 525/60 50mb/s (FCP)",
        "mx5p": "MPEG2 IMX PAL 625/60 50mb/s (FCP)",
        "ncpa": "Apple ProRes 422 Standard Definition LE",
        "ocpa": "Apple ProRes 422 Proxy LE",
        "pam ": "PAM Image",
        "pcx ": "Personal Computer Exchange Image",
        "pgm ": "PGM Image",
        "pgmy": "PGM YUV Image",
        "png": "PNG",
        "png ": "PNG Image",
        "pnm ": "Portable Anymap Image",
        "ppm ": "PPM Image",
        "pxlt": "Apple Pixlet",
        "qdrw": "Apple QuickDraw Video",
        "r210": "Blackmagic Uncompressed RAW 10bit",
        "r408": "Component Y'CbCrA 8-bit 4:4:4:4 ordered A Y' Cb Cr",
        "rle": "Animation",
        "rle ": "Apple QuickTime RLE Video",
        "rpza": "Apple Video",
        "rv10": "Real Video 1.0",
        "rv13": "Real Video 1.3",
        "rv20": "Real Video 2.0",
        "rv30": "Real Video 3.0",
        "rv40": "Real Video 4.0",
        "s263": "H263",
        "scpa": "Apple ProRes 422 LT LE",
        "sgi ": "SGI Image",
        "smc": "Graphics",
        "smc ": "Apple graphics",
        "smp4": "Samsung SMP4 (MPEG-4 Video)",
        "snow": "FFMpeg SNOW wavelet Video",
        "svq1": "SVQ-1 (Sorenson Video v1)",
        "svqi": "SVQ-1 (Sorenson Video v1)",
        "tark": "Xiph.org's Tarkin Video",
        "tga ": "Truevision Targa Image",
        "theo": "Xiph.org's Theora Video",
        "tiff": "TIFF Image",
        "tscc": "TechSmith Camtasia Screen Capture",
        "u263": "H263",
        "uyv1": "Packed YUV 4:2:2, U:Y:V:Y",
        "v210": "10-bit 4:2:2 Component YCbCr",
        "v216": "Component Y'CbCr 10,12,14,16-bit 4:2:2",
        "v264": "H.264",
        "v308": "Component Y'CbCr 8-bit 4:4:4",
        "v408": "Component Y'CbCrA 8-bit 4:4:4:4 ordered Cb Y' Cr A",
        "v410": "Component Y'CbCr 10-bit 4:4:4",
        "vc-1": "Windows Media Video VC1",
        "viv1": "H263+",
        "viv2": "H263+",
        "vivO": "H263+",
        "vmdv": "Sierra VMD Video",
        "vp30": "On2's VP3 Video",
        "vp31": "On2's VP3 Video",
        "vp62": "On2's VP6.2 Video",
        "vssh": "Vanguard VSS H264",
        "wham": "Microsoft Video 1",
        "wmv1": "Windows Media Video 7",
        "wmv2": "Windows Media Video 8",
        "wmv3": "Windows Media Video 9",
        "wmva": "Windows Media Video Advanced Profile",
        "wvc1": "Windows Media Video VC1",
        "wvp2": "Windows Media Video Advanced Profile",
        "x264": "H264 - MPEG-4 AVC (part 10)",
        "x265": "MPEG-H Part2/HEVC (H.265)",
        "xd59": "XDCAM",
        "xd5a": "XDCAM",
        "xd5b": "XDCAM",
        "xd5c": "XDCAM",
        "xd5d": "XDCAM",
        "xd5e": "XDCAM",
        "xd5f": "XDCAM",
        "xdv1": "XDCAM HD",
        "xdv2": "XDCAM HD 1080i60 35mb/s",
        "xdv3": "XDCAM HD 1080i50 35mb/s",
        "xdv4": "XDCAM HD",
        "xdv5": "XDCAM HD",
        "xdv6": "XDCAM HD 1080p24 35mb/s",
        "xdv7": "XDCAM HD 1080p25 35mb/s",
        "xdv8": "XDCAM HD 1080p30 35mb/s",
        "xdv9": "XDCAM HD",
        "xdva": "XDCAM",
        "xdvb": "XDCAM",
        "xdvc": "XDCAM",
        "xdvd": "XDCAM",
        "xdve": "XDCAM",
        "xdvf": "XDCAM",
        "xplo": "Implode",
        "xvid": "Xvid MPEG-4 Video",
        "xvix": "Xvid MPEG-4 Video",
        "y420": "Three-Plane Component Y'CbCr 8-bit 4:2:0",
        "yuvs": "Component Y'CbCr 8-bit 4:2:2 ordered Y'0 Cb Y'1 Cr",
        "yv12": "Planar 4:2:0 YVU",
        "zygo": "ZyGoVideo"
    }
}
    

function FourCC(){
    this.FOUR_CC = FOUR_CC;
}

FourCC.prototype.find_fourcc = function(fourcc){
    return FOUR_CC['subtitles'][fourcc]
        ||FOUR_CC['video'][fourcc]
        ||FOUR_CC['audio'][fourcc];
}
