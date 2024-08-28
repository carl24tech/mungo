/*"
const _0x24d998 = function () {
  let _0x5e197a = true;
  return function (_0x115829, _0x273e96) {
    const _0x33cbb9 = _0x5e197a ? function () {
      if (_0x273e96) {
        const _0xe74a2d = _0x273e96.apply(_0x115829, arguments);
        _0x273e96 = null;
        return _0xe74a2d;
      }
    } : function () {};
    _0x5e197a = false;
    return _0x33cbb9;
  };
}();
const _0x452bd2 = _0x24d998(this, function () {
  return _0x452bd2.toString().search("(((.+)+)+)+$").toString().constructor(_0x452bd2).search("(((.+)+)+)+$");
});
_0x452bd2();
const _0x40f634 = function () {
  let _0xf42ed4 = true;
  return function (_0x11331c, _0x5b1b4d) {
    const _0x39bb4d = _0xf42ed4 ? function () {
      if (_0x5b1b4d) {
        const _0x2ad0e2 = _0x5b1b4d.apply(_0x11331c, arguments);
        _0x5b1b4d = null;
        return _0x2ad0e2;
      }
    } : function () {};
    _0xf42ed4 = false;
    return _0x39bb4d;
  };
}();
const _0xfec1e6 = _0x40f634(this, function () {
  let _0x29ef20;
  try {
    const _0x44dac2 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x29ef20 = _0x44dac2();
  } catch (_0x48238c) {
    _0x29ef20 = window;
  }
  const _0x12b534 = _0x29ef20.console = _0x29ef20.console || {};
  const _0x37bf6f = ['log', 'warn', "info", 'error', "exception", "table", "trace"];
  for (let _0x178880 = 0x0; _0x178880 < _0x37bf6f.length; _0x178880++) {
    const _0x3c41e4 = _0x40f634.constructor.prototype.bind(_0x40f634);
    const _0x2966de = _0x37bf6f[_0x178880];
    const _0x2db2fc = _0x12b534[_0x2966de] || _0x3c41e4;
    _0x3c41e4.__proto__ = _0x40f634.bind(_0x40f634);
    _0x3c41e4.toString = _0x2db2fc.toString.bind(_0x2db2fc);
    _0x12b534[_0x2966de] = _0x3c41e4;
  }
});
_0xfec1e6();
const {
  zokou
} = require("../framework/zokou");
const yts = require("yt-search");
zokou({
  'nomCom': "song",
  'categorie': "Search",
  'reaction': '🎸'
}, async (_0x5741c8, _0x5c5f25, _0x4483ba) => {
  const {
    ms: _0xb32ea4,
    repondre: _0x2c37a2,
    arg: _0x128652
  } = _0x4483ba;
  if (!_0x128652[0x0]) {
    _0x2c37a2("Please insert a song name.");
    return;
  }
  try {
    let _0x22a9a9 = _0x128652.join(" ");
    const _0x506496 = await yts(_0x22a9a9);
    const _0x39b901 = _0x506496.videos;
    if (_0x39b901 && _0x39b901.length > 0x0 && _0x39b901[0x0]) {
      const _0x577257 = _0x39b901[0x0].url;
      const _0xc3fe72 = await fetch('https://api.prabath-md.tech/api/ytmp3?url=' + encodeURIComponent(_0x577257));
      const _0x3dd901 = await _0xc3fe72.json();
      if (_0x3dd901.status === "success ✅") {
        const _0x1d1276 = _0x3dd901.data.download;
        const _0x4cff19 = {
          'title': _0x3dd901.data.title,
          'fileSize': _0x3dd901.data.file_size,
          'quality': _0x3dd901.data.quality
        };
        let _0x2d09c5 = {
          'image': {
            'url': _0x39b901[0x0].thumbnail
          },
        'caption': "*Bmw md is downloading your song....*"
        };
        _0x5c5f25.sendMessage(_0x5741c8, _0x2d09c5, {
          'quoted': _0xb32ea4
        });
        _0x5c5f25.sendMessage(_0x5741c8, {
          'audio': {
            'url': _0x1d1276
          },
          'mimetype': "audio/mp4"
        }, {
          'quoted': _0xb32ea4,
          'ptt': false
        });
        console.log("Sending audio file completed!");
        await _0xb32ea4.React('✅');
        _0x2c37a2("Download Success...");
      } else {
        _0x2c37a2("Failed to download audio. Please try again later.");
      }
    } else {
      _0x2c37a2("No videos found.");
    }
  } catch (_0x5f1994) {
    console.error("Error from server:", _0x5f1994);
    _0x2c37a2("searching⏳......");
  }
});
zokou({
  'nomCom': 'video',
  'categorie': "Search",
  'reaction': '🎞'
}, async (_0x4e5626, _0x3b396b, _0x92d2f7) => {
  const {
    arg: _0x4a47db,
    ms: _0x376a72,
    repondre: _0x3c2130
  } = _0x92d2f7;
  if (!_0x4a47db[0x0]) {
    _0x3c2130("Please insert a video name.");
    return;
  }
  const _0x4a8d3c = _0x4a47db.join(" ");
  try {
    const _0x1730d5 = await yts(_0x4a8d3c);
    const _0x25211c = _0x1730d5.videos;
    if (_0x25211c && _0x25211c.length > 0x0 && _0x25211c[0x0]) {
      const _0x233879 = _0x25211c[0x0];
      const _0x133532 = await fetch('https://api.prabath-md.tech/api/ytmp3?url=' + encodeURIComponent(_0x233879.url));
      const _0x48eb93 = await _0x133532.json();
      if (_0x48eb93.status === "success ✅") {
        const _0x1ef75b = _0x48eb93.data.download;
        const _0x2868c2 = {
          'title': _0x48eb93.data.title,
          'fileSize': _0x48eb93.data.file_size,
          'quality': _0x48eb93.data.quality
        };
        let _0x1d0868 = {
          'image': {
            'url': _0x25211c[0x0].thumbnail
          },
          
          'caption': "*Bmw md is downloading your video......*"
        };
        _0x3b396b.sendMessage(_0x4e5626, _0x1d0868, {
          'quoted': _0x376a72
        });
        _0x3b396b.sendMessage(_0x4e5626, {
          'video': {
            'url': _0x1ef75b
          },
          'caption': "©Made by Ibrahim Adams",
          'gifPlayback': false
        }, {
          'quoted': _0x376a72
        });
        console.log("Sending video file completed!");
        await _0x376a72.React('✅');
        _0x3c2130("Download Success...");
      } else {
        _0x3c2130("searching⏳......");
      }
    } else {
      _0x3c2130("No video found.");
    }
  } catch (_0x196442) {
    console.error("Error from BMW-MD API:", _0x196442);
    _0x3c2130("searching⏳......");
  }
});
zokou({
  'nomCom': "play",
  'categorie': "Search",
  'reaction': '🎧'
}, async (_0x3a06ab, _0x1d1a87, _0x35c9e2) => {
  const {
    ms: _0x11155f,
    repondre: _0x401be5,
    arg: _0x502190
  } = _0x35c9e2;
  if (!_0x502190[0x0]) {
    return _0x401be5("Insert a song name!");
  }
  try {
    const _0x57c340 = _0x502190.join(" ");
    const _0x386af3 = await yts(_0x57c340);
    const _0x4ef72e = _0x386af3.videos;
    if (!_0x4ef72e || _0x4ef72e.length <= 0x0) {
      return _0x401be5("No matching videos found for: *" + _0x57c340 + "*!!");
    }
    const _0x41adb3 = _0x4ef72e[0x0].url;
    const _0x1d1a58 = await fetch("https://api.prabath-md.tech/api/ytmp3?url=" + encodeURIComponent(_0x41adb3));
    const _0x440396 = await _0x1d1a58.json();
    if (_0x440396.status === "success ✅") {
      const _0x1965cf = _0x440396.data.download;
      const _0x1d779e = {
        'title': _0x440396.data.title,
        'fileSize': _0x440396.data.file_size,
        'quality': _0x440396.data.quality
      };
      const _0x53fe98 = "*Bmw md is downloading your song.....*";
        await _0x1d1a87.sendMessage(_0x3a06ab, {
        'text': _0x53fe98
      }, {
        'quoted': _0x11155f
      });
      await _0x1d1a87.sendMessage(_0x3a06ab, {
        'document': {
          'url': _0x1965cf
        },
        'mimetype': "audio/mpeg",
        'fileName': _0x1d779e.title + ".mp3"
      }, {
        'quoted': _0x11155f
      });
      console.log("Sending audio file completed!");
      await _0x11155f.React('✅');
      _0x401be5("Download Success...");
    } else {
      _0x401be5("searching⏳......");
    }
  } catch (_0x4d5eab) {
    console.error("Error:", _0x4d5eab);
    _0x401be5("Downloaded successfully✅");
  }
});

**/
