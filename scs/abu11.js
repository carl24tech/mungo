/**
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
  'nomCom': "mygroups",
  'categorie': "User",
  'reaction': '💿'
}, async (_0xe73fcf, _0x1d49d5, _0xc633f9) => {
  const {
    ms: _0x4418b5,
    repondre: _0x415738,
    arg: _0x51b87f
  } = _0xc633f9;
  let _0x11ce06 = await _0x1d49d5.groupFetchAllParticipating();
  let _0x3c3f1c = Object.entries(_0x11ce06).slice(0x0).map(_0x12ef05 => _0x12ef05[0x1]);
  let _0x3d9614 = _0x3c3f1c.map(_0x4d35ba => _0x4d35ba.id);
  let _0x5b2904 = "*GROUPS AM IN*\n\n";
  _0x415738("You are Currently in " + _0x3d9614.length + " groups, Flash MD will send that list in a moment. . .");
  for (let _0x5d3ea3 of _0x3d9614) {
    let _0xbebbd5 = await _0x1d49d5.groupMetadata(_0x5d3ea3);
    _0x5b2904 += "*GROUP NAME:*- " + _0xbebbd5.subject + "\n";
    _0x5b2904 += "*MEMBERS:*- " + _0xbebbd5.participants.length + "\n";
    _0x5b2904 += "*GROUP ID:*- " + _0x5d3ea3 + "\n\n";
  }
  await _0x415738(_0x5b2904);
});
zokou({
  'nomCom': "play",
  'categorie': "Search",
  'reaction': '💿'
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
        'caption': "*Bmw md is analyzing your audio...* *Direct Link:* " + _0x1d1276 + "Ibrahim Adams"
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

**/
