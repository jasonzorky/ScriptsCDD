// ==UserScript==
// @name         CDD_LINKOFF_v1.01
// @namespace    ZORKY
// @version      1.01
// @description  Altera o texto do link para "Link OFF" quando estiver offline no MEGA, Google Drive, OneDrive ou outras URLs.
// @author       ZORKY
// @match        https://clubedodual.com/forums/c/*
// @match        https://clubedodual.com/forums/t/*
// @grant        GM_info
// @grant        GM_addStyle
// ==/UserScript==

(function(_0x144320,_0x1b3bb9){const _0xd8230e=_0x468a,_0x453b58=_0x144320();while(!![]){try{const _0x973bed=-parseInt(_0xd8230e(0x2a0))/(0x1b04+-0x1581+0x11a*-0x5)+parseInt(_0xd8230e(0x208))/(-0x165f+-0x10cf+0x2730)*(parseInt(_0xd8230e(0x279))/(-0x1*-0x156b+-0x212c+0x2f1*0x4))+-parseInt(_0xd8230e(0x1fc))/(-0xa7f+-0xbd6+0x773*0x3)*(-parseInt(_0xd8230e(0x294))/(0x2*0x2ce+-0xbaf+0x618))+-parseInt(_0xd8230e(0x2f3))/(0x2156+-0x1*0x21ba+-0x35*-0x2)+-parseInt(_0xd8230e(0x17a))/(0x737*-0x5+0x661+-0x1*-0x1db9)*(-parseInt(_0xd8230e(0x24c))/(0x2*-0x6e2+-0x24f7*0x1+-0x1*-0x32c3))+-parseInt(_0xd8230e(0x204))/(-0x16*0xa3+-0x11b+0xf26)*(parseInt(_0xd8230e(0x1cc))/(-0xbbe+-0x1*0x2141+0x2d09))+parseInt(_0xd8230e(0x159))/(0xa50+-0x1f3b+0x14f6)*(parseInt(_0xd8230e(0x1b7))/(-0x16*0x5f+-0xb15+0x134b));if(_0x973bed===_0x1b3bb9)break;else _0x453b58['push'](_0x453b58['shift']());}catch(_0x260fd0){_0x453b58['push'](_0x453b58['shift']());}}}(_0xed24,-0xf3583+0x4017e*0x2+-0x1*-0x12eff5),(function(){'use strict';const _0xf9a14b=_0x468a,_0x5884de={'VYtab':_0xf9a14b(0x1e3)+_0xf9a14b(0x2e3)+'og','QcgGs':function(_0x39f4d6,_0x320086){return _0x39f4d6!==_0x320086;},'vUShX':_0xf9a14b(0x2b8),'ypvCz':_0xf9a14b(0x1ac)+_0xf9a14b(0x2cd)+_0xf9a14b(0x16b)+_0xf9a14b(0x2b1)+_0xf9a14b(0x2d8)+_0xf9a14b(0x249)+_0xf9a14b(0x302)+_0xf9a14b(0x1bb)+_0xf9a14b(0x25c),'caDBp':function(_0x3cf5f9,_0x99881b){return _0x3cf5f9+_0x99881b;},'QvbAv':function(_0x12bc48,_0xeeef57){return _0x12bc48*_0xeeef57;},'GhSGc':function(_0x15a70e){return _0x15a70e();},'bOIRN':_0xf9a14b(0x22f),'wAkUh':_0xf9a14b(0x15a),'yEcve':_0xf9a14b(0x185)+'n','VpLbg':_0xf9a14b(0x2c9),'sMNma':function(_0x2ab66b,_0x2b5291){return _0x2ab66b&&_0x2b5291;},'gJlQL':function(_0x11dc30,_0x5a65b4){return _0x11dc30!==_0x5a65b4;},'zdkHR':function(_0x3818ba,_0x5f3a83){return _0x3818ba<_0x5f3a83;},'rTdcs':function(_0x241bf0,_0x130476){return _0x241bf0(_0x130476);},'ZXXZw':function(_0x2fe83b,_0x4e5ade,_0x3c3e7c){return _0x2fe83b(_0x4e5ade,_0x3c3e7c);},'mDSOS':_0xf9a14b(0x19f)+_0xf9a14b(0x1a9)+_0xf9a14b(0x27a)+':','fOyEX':function(_0x47c5e4,_0x579ce8){return _0x47c5e4(_0x579ce8);},'rZuQv':function(_0x5c6920,_0x1f6699){return _0x5c6920===_0x1f6699;},'NKslT':_0xf9a14b(0x1ce)+_0xf9a14b(0x195),'mHZWh':function(_0x17b4e1,_0x3d088b){return _0x17b4e1(_0x3d088b);},'inuTv':_0xf9a14b(0x258)+_0xf9a14b(0x1c4)+_0xf9a14b(0x300)+'N','VkhVz':function(_0x45ef02,_0x9a27cd){return _0x45ef02*_0x9a27cd;},'DPpdb':function(_0x483864){return _0x483864();}};if(_0x5884de[_0xf9a14b(0x1ba)](window[_0xf9a14b(0x26e)][_0xf9a14b(0x2c0)],_0x5884de[_0xf9a14b(0x15c)])){const _0x382c26=_0xf9a14b(0x137)+_0xf9a14b(0x2b7)+_0xf9a14b(0x30a)+_0xf9a14b(0x2d7)+_0xf9a14b(0x2bb)+_0xf9a14b(0x309)+_0xf9a14b(0x1d7)+_0xf9a14b(0x2a2)+_0xf9a14b(0x2b6)+_0xf9a14b(0x16c)+_0xf9a14b(0x1c8)+_0xf9a14b(0x313)+_0xf9a14b(0x1b0)+_0xf9a14b(0x28f)+_0xf9a14b(0x156)+_0xf9a14b(0x299)+_0xf9a14b(0x169)+_0xf9a14b(0x15b)+_0xf9a14b(0x1d9)+_0xf9a14b(0x267)+_0xf9a14b(0x1d2)+_0xf9a14b(0x212)+_0xf9a14b(0x23e)+_0xf9a14b(0x1fb)+_0xf9a14b(0x1ab)+_0xf9a14b(0x315)+_0xf9a14b(0x247)+_0xf9a14b(0x320)+_0xf9a14b(0x2e6)+_0xf9a14b(0x180)+_0xf9a14b(0x1b2)+_0xf9a14b(0x232)+_0xf9a14b(0x227)+_0xf9a14b(0x13e)+_0xf9a14b(0x223)+_0xf9a14b(0x2af)+_0xf9a14b(0x259)+_0xf9a14b(0x276)+_0xf9a14b(0x215)+_0xf9a14b(0x174)+_0xf9a14b(0x324)+_0xf9a14b(0x1cf)+_0xf9a14b(0x293)+_0xf9a14b(0x15f)+_0xf9a14b(0x17f)+_0xf9a14b(0x255)+_0xf9a14b(0x1f1)+_0xf9a14b(0x201)+_0xf9a14b(0x1cd)+_0xf9a14b(0x1e9)+_0xf9a14b(0x28e)+_0xf9a14b(0x1e4)+_0xf9a14b(0x2c2)+_0xf9a14b(0x234)+_0xf9a14b(0x2d0)+_0xf9a14b(0x1db)+_0xf9a14b(0x321)+_0xf9a14b(0x27c)+_0xf9a14b(0x304)+_0xf9a14b(0x326)+_0xf9a14b(0x2dd)+_0xf9a14b(0x318)+_0xf9a14b(0x2cc)+_0xf9a14b(0x16a)+_0xf9a14b(0x177)+_0xf9a14b(0x228)+_0xf9a14b(0x25d)+_0xf9a14b(0x317)+_0xf9a14b(0x2fd)+_0xf9a14b(0x22b)+_0xf9a14b(0x1a3)+_0xf9a14b(0x19b)+_0xf9a14b(0x18a)+_0xf9a14b(0x206)+_0xf9a14b(0x2d6)+_0xf9a14b(0x17d)+_0xf9a14b(0x2c3)+_0xf9a14b(0x296)+_0xf9a14b(0x28d)+_0xf9a14b(0x2ff)+_0xf9a14b(0x307)+_0xf9a14b(0x29e)+_0xf9a14b(0x1f5)+_0xf9a14b(0x20b)+_0xf9a14b(0x1be)+_0xf9a14b(0x1d5)+_0xf9a14b(0x190)+_0xf9a14b(0x14e)+_0xf9a14b(0x224)+_0xf9a14b(0x1a0)+_0xf9a14b(0x217)+_0xf9a14b(0x1f6)+_0xf9a14b(0x2da)+_0xf9a14b(0x251)+_0xf9a14b(0x19c)+_0xf9a14b(0x188)+_0xf9a14b(0x1ec)+_0xf9a14b(0x158)+_0xf9a14b(0x1ee)+_0xf9a14b(0x165)+(_0xf9a14b(0x28c)+_0xf9a14b(0x1dd)+_0xf9a14b(0x2ce)+_0xf9a14b(0x1ae)+_0xf9a14b(0x240)+_0xf9a14b(0x25e)+_0xf9a14b(0x2aa)+_0xf9a14b(0x31b)+_0xf9a14b(0x154)+_0xf9a14b(0x1e0)+_0xf9a14b(0x30f)+_0xf9a14b(0x2f2)+_0xf9a14b(0x2b0)+_0xf9a14b(0x157)+_0xf9a14b(0x151)+_0xf9a14b(0x237)+_0xf9a14b(0x30e)+_0xf9a14b(0x1ff)+_0xf9a14b(0x2f5)+_0xf9a14b(0x1c7)+_0xf9a14b(0x2b2)+_0xf9a14b(0x200)+_0xf9a14b(0x2c1)+_0xf9a14b(0x2ea)+_0xf9a14b(0x325)+_0xf9a14b(0x134)+'\x0a');_0x5884de[_0xf9a14b(0x226)](GM_addStyle,_0x382c26);const _0x4b3fb9=_0x5884de[_0xf9a14b(0x263)],_0x2e94fb=_0x5884de[_0xf9a14b(0x1a2)](_0x5884de[_0xf9a14b(0x183)](_0x5884de[_0xf9a14b(0x183)](_0x5884de[_0xf9a14b(0x1a2)](-0x128*-0x7+0x1fb2+0x27*-0x105,0x3f0+-0x31*0xc5+0x21dd),0x365+0x529*0x3+-0x12a4),0x355+-0x849+0x530),0x1*-0xfc5+-0xaf2+0x367*0x9);function _0x2acaed(){const _0x13322b=_0xf9a14b,_0xfa926f=document[_0x13322b(0x312)+_0x13322b(0x186)](_0x5884de[_0x13322b(0x142)]);return _0xfa926f&&_0x5884de[_0x13322b(0x155)](_0xfa926f[_0x13322b(0x13f)][_0x13322b(0x1d4)],_0x5884de[_0x13322b(0x2cb)]);}function _0x586046(_0x4e6209,_0x48a334){const _0x333060=_0xf9a14b,_0x587ded={'MZxLJ':_0x5884de[_0x333060(0x142)],'OkpWZ':_0x5884de[_0x333060(0x2cb)],'HNKWl':function(_0x371cfa,_0x34df0a){const _0x2009ae=_0x333060;return _0x5884de[_0x2009ae(0x241)](_0x371cfa,_0x34df0a);},'ymRJj':function(_0x54be92,_0x5401c5){const _0x499566=_0x333060;return _0x5884de[_0x499566(0x1a2)](_0x54be92,_0x5401c5);},'yAUGl':function(_0x2d1daa,_0x51a806){const _0x250d1b=_0x333060;return _0x5884de[_0x250d1b(0x1a2)](_0x2d1daa,_0x51a806);}};if(_0x5884de[_0x333060(0x1a1)](_0x2acaed))return;const _0x5941c9=_0x333060(0x18b)+_0x333060(0x2ae)+_0x333060(0x161)+_0x333060(0x290)+_0x333060(0x275)+_0x333060(0x20e)+_0x333060(0x2b5)+_0x333060(0x30f)+_0x333060(0x2e7)+_0x333060(0x30f)+_0x333060(0x163)+_0x333060(0x24a)+_0x333060(0x144)+_0x333060(0x292)+_0x333060(0x1bc)+_0x333060(0x168)+_0x333060(0x2ba)+_0x333060(0x1de)+_0x333060(0x148)+_0x333060(0x152)+_0x333060(0x14f)+_0x333060(0x31d)+_0x333060(0x29b)+_0x333060(0x1fd)+_0x333060(0x1fe)+_0x333060(0x1af)+_0x333060(0x2bd)+_0x333060(0x213)+_0x333060(0x15e)+_0x333060(0x269)+_0x333060(0x2f6)+_0x333060(0x25b)+_0x333060(0x192)+_0x333060(0x209)+_0x333060(0x171)+_0x333060(0x31e)+_0x333060(0x2d3)+_0x333060(0x164)+_0x333060(0x1bf)+_0x333060(0x269)+_0x333060(0x2f6)+_0x333060(0x25b)+_0x333060(0x192)+_0x333060(0x2c4)+_0x333060(0x2a4)+_0x333060(0x284)+_0x333060(0x132)+_0x333060(0x2de)+_0x333060(0x30e)+_0x333060(0x172)+_0x333060(0x23e)+_0x333060(0x29a)+_0x333060(0x16d)+_0x333060(0x210)+_0x333060(0x2d4)+_0x333060(0x269)+_0x333060(0x18e)+_0x333060(0x17e)+_0x333060(0x2e4)+_0x333060(0x31d)+_0x333060(0x29b)+_0x333060(0x2d5)+_0x333060(0x21f)+_0x333060(0x2ac)+_0x333060(0x260)+_0x333060(0x14f)+_0x333060(0x31d)+_0x333060(0x29b)+_0x333060(0x266)+_0x333060(0x230)+_0x333060(0x1a5)+_0x333060(0x21b)+_0x333060(0x270)+_0x333060(0x207)+_0x333060(0x2a8)+_0x333060(0x268)+_0x333060(0x23a)+_0x333060(0x2d4)+_0x333060(0x1e7)+_0x333060(0x2e2)+_0x333060(0x31c)+_0x333060(0x19d)+_0x333060(0x311)+_0x333060(0x203)+_0x333060(0x273)+_0x333060(0x219)+_0x333060(0x2d2)+_0x333060(0x272)+_0x333060(0x2f0)+_0x333060(0x199)+_0x333060(0x1d1)+_0x333060(0x260)+_0x333060(0x2bc)+_0x333060(0x26a)+_0x333060(0x26f)+_0x333060(0x25f)+_0x333060(0x211)+_0x333060(0x23a)+_0x333060(0x20a)+_0x333060(0x220)+(_0x333060(0x239)+_0x333060(0x2e5)+_0x333060(0x179)+_0x333060(0x305)+_0x333060(0x1d6))+_0x4e6209+(_0x333060(0x2d9)+_0x333060(0x245)+_0x333060(0x1ef)+_0x333060(0x219)+_0x333060(0x30d)+_0x333060(0x22a)+_0x333060(0x149))+GM_info[_0x333060(0x13c)][_0x333060(0x236)]+(_0x333060(0x18c)+_0x333060(0x219)+_0x333060(0x25a)+_0x333060(0x193)+_0x333060(0x216)+_0x333060(0x175)+_0x333060(0x1f4)+_0x333060(0x319)+_0x333060(0x1d8)+_0x333060(0x306)+_0x333060(0x26a)+_0x333060(0x182)+_0x333060(0x222)+_0x333060(0x262)+_0x333060(0x2fc))+_0x48a334+(_0x333060(0x13b)+_0x333060(0x178)+_0x333060(0x2f4)+_0x333060(0x13a)+_0x333060(0x2e0)+_0x333060(0x2ef)+_0x333060(0x2fa)+_0x333060(0x2a1)+_0x333060(0x29c)+_0x333060(0x145)+_0x333060(0x187)+_0x333060(0x162)+_0x333060(0x26a)+_0x333060(0x253)+_0x333060(0x219)+_0x333060(0x277)+_0x333060(0x316)+_0x333060(0x189)+_0x333060(0x166)+_0x333060(0x2a7)+_0x333060(0x2b4)+_0x333060(0x219)+_0x333060(0x26a)+_0x333060(0x1b5)+_0x333060(0x31f)+_0x333060(0x291)+_0x333060(0x2c5)+_0x333060(0x26d)+_0x333060(0x219)+_0x333060(0x2b3)+_0x333060(0x1a8)+_0x333060(0x133)+_0x333060(0x1f9)+_0x333060(0x221)+_0x333060(0x219)+_0x333060(0x2df)+_0x333060(0x2bc)+_0x333060(0x26a)+_0x333060(0x2ec)+_0x333060(0x219)+_0x333060(0x250)+_0x333060(0x23a)+_0x333060(0x2a9)+_0x333060(0x136)+_0x333060(0x153)+_0x333060(0x1fa)+_0x333060(0x2df)+_0x333060(0x2bc)+_0x333060(0x289)+_0x333060(0x146)+_0x333060(0x2c6));document[_0x333060(0x2a3)][_0x333060(0x285)+_0x333060(0x23f)](_0x5884de[_0x333060(0x2db)],_0x5941c9);const _0x5aaa87=document[_0x333060(0x138)+_0x333060(0x1e2)](_0x5884de[_0x333060(0x244)]),_0x38444e=document[_0x333060(0x138)+_0x333060(0x1e2)](_0x5884de[_0x333060(0x27e)]);_0x5aaa87[_0x333060(0x2f1)+_0x333060(0x2cf)](_0x5884de[_0x333060(0x235)],function(){const _0x277e69=_0x333060;document[_0x277e69(0x312)+_0x277e69(0x186)](_0x5884de[_0x277e69(0x142)])[_0x277e69(0x13f)][_0x277e69(0x1d4)]=_0x5884de[_0x277e69(0x2cb)],window[_0x277e69(0x26e)][_0x277e69(0x327)]=_0x5884de[_0x277e69(0x30b)];}),_0x38444e[_0x333060(0x2f1)+_0x333060(0x2cf)](_0x5884de[_0x333060(0x235)],function(){const _0x5288d7=_0x333060;document[_0x5288d7(0x312)+_0x5288d7(0x186)](_0x587ded[_0x5288d7(0x1b6)])[_0x5288d7(0x13f)][_0x5288d7(0x1d4)]=_0x587ded[_0x5288d7(0x20f)];const _0x52f065=new Date(_0x587ded[_0x5288d7(0x184)](Date[_0x5288d7(0x297)](),_0x587ded[_0x5288d7(0x252)](_0x587ded[_0x5288d7(0x252)](_0x587ded[_0x5288d7(0x135)](_0x587ded[_0x5288d7(0x135)](0x23bc+-0x1*-0x8a1+0x19*-0x1c6,-0x16bf+0x57e*-0x2+0x21d3),-0xa*0x38d+0x19bb+0xa03),0x26b*-0xf+-0x1dac+0x160f*0x3),0x23f2+-0x1f5c+-0xae)));localStorage[_0x5288d7(0x1aa)](_0x4b3fb9,_0x52f065[_0x5288d7(0x1f8)]()[_0x5288d7(0x23b)]());});}!_0x5884de[_0xf9a14b(0x21a)](_0x2acaed)&&_0x5884de[_0xf9a14b(0x1a1)](_0x5c49f7);function _0x5c49f7(){const _0x211312=_0xf9a14b,_0x20a8c1={'yhuIm':function(_0x4fc47d,_0x3cbaf9){const _0x1a611f=_0x468a;return _0x5884de[_0x1a611f(0x16e)](_0x4fc47d,_0x3cbaf9);},'XUmAd':function(_0x5ba8c5,_0x40e5ec){const _0x58c3a7=_0x468a;return _0x5884de[_0x58c3a7(0x323)](_0x5ba8c5,_0x40e5ec);},'LKvCP':function(_0x28ebf8,_0x4a12ba){const _0x4e4f73=_0x468a;return _0x5884de[_0x4e4f73(0x248)](_0x28ebf8,_0x4a12ba);},'jgjiv':function(_0x43c2d0,_0x53061d){const _0x35830a=_0x468a;return _0x5884de[_0x35830a(0x295)](_0x43c2d0,_0x53061d);},'kBFBY':function(_0x392f22,_0xa6f4f4,_0xf31a0c){const _0x4dc14f=_0x468a;return _0x5884de[_0x4dc14f(0x218)](_0x392f22,_0xa6f4f4,_0xf31a0c);},'VNGmc':_0x5884de[_0x211312(0x1c0)]};_0x5884de[_0x211312(0x2fe)](fetch,_0x5884de[_0x211312(0x30b)])[_0x211312(0x18d)](_0x2684dc=>_0x2684dc[_0x211312(0x21c)]())[_0x211312(0x18d)](_0x1aefe6=>{const _0x48c3cd=_0x211312,_0x359cbb=/@version\s+(\d+\.\d+)/,_0x179980=/@changelog\s+(.*)/,_0x2831d4=_0x1aefe6[_0x48c3cd(0x281)](_0x359cbb),_0x91a463=_0x1aefe6[_0x48c3cd(0x281)](_0x179980);if(_0x20a8c1[_0x48c3cd(0x29d)](_0x2831d4,_0x91a463)){const _0x33380c=_0x2831d4[-0x8c5*0x2+0x3*0x243+0xac2],_0x205513=GM_info[_0x48c3cd(0x13c)][_0x48c3cd(0x236)];if(_0x20a8c1[_0x48c3cd(0x14a)](_0x205513,_0x33380c)){const _0x16bafd=localStorage[_0x48c3cd(0x2ca)](_0x4b3fb9),_0x3327d7=new Date();if(!_0x16bafd||_0x20a8c1[_0x48c3cd(0x17c)](new Date(_0x20a8c1[_0x48c3cd(0x1e1)](parseInt,_0x16bafd)),_0x3327d7)){let _0x538bb0=_0x91a463[0x1*-0xa5a+-0x1bdc+0x2637][_0x48c3cd(0x242)]();_0x20a8c1[_0x48c3cd(0x1bd)](_0x586046,_0x33380c,_0x538bb0),localStorage[_0x48c3cd(0x1aa)](_0x4b3fb9,_0x3327d7[_0x48c3cd(0x1f8)]()[_0x48c3cd(0x23b)]());}}}})[_0x211312(0x150)](_0x302694=>{const _0x526c98=_0x211312;console[_0x526c98(0x24e)](_0x20a8c1[_0x526c98(0x23d)],_0x302694);});}}}()),(function(){'use strict';const _0x3f28f8=_0x468a,_0x3595c5={'eZMTZ':_0x3f28f8(0x246),'PImLX':_0x3f28f8(0x27f)+_0x3f28f8(0x1c9),'BEFpV':function(_0x311c70,_0x5b07c6){return _0x311c70<_0x5b07c6;},'cClAK':function(_0x224138,_0x589b08){return _0x224138(_0x589b08);},'mFMlU':function(_0x25ef1f,_0x2deec8){return _0x25ef1f(_0x2deec8);},'DOBOw':function(_0x4d6916,_0x16be39){return _0x4d6916(_0x16be39);},'twuHn':function(_0x261af8,_0x5a6583){return _0x261af8(_0x5a6583);},'CAkkM':_0x3f28f8(0x327),'bRypu':function(_0x1e7c99,_0x7cf151){return _0x1e7c99(_0x7cf151);},'gpCdL':function(_0x2e7cd1,_0x33429e){return _0x2e7cd1(_0x33429e);},'PfGIJ':function(_0x46a42f,_0x3d6c42){return _0x46a42f(_0x3d6c42);},'HlaUP':function(_0x1f3a1c,_0x294743){return _0x1f3a1c(_0x294743);},'ALpIl':function(_0x1a3438,_0x32acc7){return _0x1a3438(_0x32acc7);},'ZCWOc':_0x3f28f8(0x229),'CzQso':_0x3f28f8(0x19f)+_0x3f28f8(0x2ad)+_0x3f28f8(0x1b3),'iLraW':_0x3f28f8(0x286),'JOeRD':_0x3f28f8(0x181),'OPpJR':_0x3f28f8(0x233)+_0x3f28f8(0x2a5)+'a','ZIrOY':_0x3f28f8(0x1cb)+_0x3f28f8(0x15d)+_0x3f28f8(0x21e),'PrFms':_0x3f28f8(0x1f7)+_0x3f28f8(0x2d1),'JxYil':function(_0x58ae25,_0x3faf57){return _0x58ae25(_0x3faf57);},'ClLux':function(_0x29f980,_0x2b88b6){return _0x29f980===_0x2b88b6;},'qOSUt':_0x3f28f8(0x225)+_0x3f28f8(0x1ea),'peXeH':function(_0x3b6c19,_0x283b05){return _0x3b6c19(_0x283b05);},'FlhQQ':function(_0x1f0e66,_0x21796a){return _0x1f0e66+_0x21796a;},'ZlzSg':_0x3f28f8(0x17b)+_0x3f28f8(0x1c1)+'/?','VxiYv':_0x3f28f8(0x287),'jobJY':_0x3f28f8(0x19f)+_0x3f28f8(0x2ad)+_0x3f28f8(0x257)+_0x3f28f8(0x196),'BfCxB':_0x3f28f8(0x26b),'QxZuq':_0x3f28f8(0x21d),'cGLMc':function(_0x4484b8,_0x288d2f,_0x26cf60){return _0x4484b8(_0x288d2f,_0x26cf60);},'fEfPx':_0x3f28f8(0x22d),'pCvni':function(_0x1ec388,_0x2c228d){return _0x1ec388===_0x2c228d;},'eUjyB':_0x3f28f8(0x18f),'tdghm':function(_0xcf15eb,_0x3ab8c9){return _0xcf15eb!==_0x3ab8c9;},'ShdAT':function(_0x39a706,_0x2af24f){return _0x39a706+_0x2af24f;},'MFyqz':function(_0x4303b3,_0x31cfe5,_0x581723){return _0x4303b3(_0x31cfe5,_0x581723);},'bHNyV':_0x3f28f8(0x198)+_0x3f28f8(0x1ed)+_0x3f28f8(0x14c)+_0x3f28f8(0x261)+_0x3f28f8(0x288)+_0x3f28f8(0x2dc)+_0x3f28f8(0x31a)+_0x3f28f8(0x147)+_0x3f28f8(0x27b)+_0x3f28f8(0x2be)+_0x3f28f8(0x278)+_0x3f28f8(0x256),'eJPux':function(_0x12ee67){return _0x12ee67();}};function _0x159ffc(){const _0x2b5277=_0x3f28f8,_0x1c7dbe=document[_0x2b5277(0x312)+_0x2b5277(0x19a)](_0x3595c5[_0x2b5277(0x1b4)]),_0x50aa10=document[_0x2b5277(0x312)+_0x2b5277(0x19a)](_0x3595c5[_0x2b5277(0x2eb)]);for(let _0x191d6b=-0x1*-0x13d+-0x26ae+0x2571;_0x3595c5[_0x2b5277(0x28b)](_0x191d6b,_0x1c7dbe[_0x2b5277(0x2ab)]);_0x191d6b++){const _0x4b1b6c=_0x1c7dbe[_0x191d6b],_0x1ba1f2=_0x4b1b6c[_0x2b5277(0x194)],_0xf77ffd=/url=([^&]+)/,_0x26864e=_0x1ba1f2[_0x2b5277(0x281)](_0xf77ffd);if(_0x26864e&&_0x26864e[0x1*-0x10fe+-0x161a+0x2719]){const _0x1dc3ab=_0x3595c5[_0x2b5277(0x314)](decodeURIComponent,_0x26864e[0x81a+0x1*0x1ff4+0x1*-0x280d]),_0x427f6c=_0x3595c5[_0x2b5277(0x141)](_0x2246e2,_0x1dc3ab);_0x4b1b6c[_0x2b5277(0x194)]=_0x427f6c,_0x3595c5[_0x2b5277(0x328)](_0x5e0f19,_0x427f6c),_0x3595c5[_0x2b5277(0x328)](_0x3fb7a1,_0x427f6c),_0x3595c5[_0x2b5277(0x280)](_0x298983,_0x427f6c),_0x3595c5[_0x2b5277(0x280)](_0x1b2492,_0x427f6c);}}for(let _0x5a8846=-0x41c*-0x3+0x12d*-0x11+0x7a9;_0x3595c5[_0x2b5277(0x28b)](_0x5a8846,_0x50aa10[_0x2b5277(0x2ab)]);_0x5a8846++){const _0x180301=_0x50aa10[_0x5a8846],_0x40b6f9=_0x180301[_0x2b5277(0x2e9)+'te'](_0x3595c5[_0x2b5277(0x301)]),_0x53cd3c=/url=([^&]+)/,_0x4e70ee=_0x40b6f9[_0x2b5277(0x281)](_0x53cd3c);if(_0x4e70ee&&_0x4e70ee[-0x1405*0x1+0xb1*0x17+-0x5*-0xd3]){const _0x37d100=_0x3595c5[_0x2b5277(0x1e6)](decodeURIComponent,_0x4e70ee[0x184a+0xba+-0x1903]),_0x434f8c=_0x3595c5[_0x2b5277(0x238)](_0x2246e2,_0x37d100);_0x180301[_0x2b5277(0x1e8)+'te'](_0x3595c5[_0x2b5277(0x301)],_0x434f8c),_0x3595c5[_0x2b5277(0x20d)](_0x5e0f19,_0x434f8c),_0x3595c5[_0x2b5277(0x264)](_0x3fb7a1,_0x434f8c),_0x3595c5[_0x2b5277(0x1e5)](_0x298983,_0x434f8c),_0x3595c5[_0x2b5277(0x20d)](_0x1b2492,_0x434f8c);}}}function _0x2246e2(_0x20f6a6){const _0x2c1b49=_0x3f28f8,_0x339916=/url=([^&]+)/,_0x1adbcb=_0x20f6a6[_0x2c1b49(0x281)](_0x339916);if(_0x1adbcb&&_0x1adbcb[0x5b*0x61+-0x4*0x112+-0x1e32]){const _0x11c81a=_0x3595c5[_0x2c1b49(0x314)](_0x6be240,_0x1adbcb[0x3f7+0xb7e+-0xf74]),_0x1876a1=_0x20f6a6[_0x2c1b49(0x274)](_0x1adbcb[0x1454*-0x1+-0x3*0x3fa+0x2043],_0x11c81a);return _0x1876a1;}return _0x20f6a6;}function _0x6be240(_0x1c2a23){const _0x343f6e=_0x3f28f8,_0x5f3b23=new URL(_0x1c2a23)[_0x343f6e(0x2c0)];return _0x5f3b23[_0x343f6e(0x274)](_0x3595c5[_0x343f6e(0x1c3)],'');}function _0x5e0f19(_0x38dd0e){const _0x1af76d=_0x3f28f8,_0x34846a={'CyApk':_0x3595c5[_0x1af76d(0x2f9)],'IowmU':_0x3595c5[_0x1af76d(0x24b)]},_0x5ae782=/https:\/\/drive\.google\.com\/(file\/d\/[^/]+|open\?id=[^&]+)/;if(_0x5ae782[_0x1af76d(0x1eb)](_0x38dd0e))return;_0x3595c5[_0x1af76d(0x1e6)](fetch,_0x38dd0e)[_0x1af76d(0x18d)](_0x4038a3=>{const _0x3c67f7=_0x1af76d;if(_0x4038a3['ok']){}else{const _0x4ab72e=document[_0x3c67f7(0x312)+_0x3c67f7(0x186)](_0x3c67f7(0x27f)+_0x3c67f7(0x1dc)+'=\x22'+_0x38dd0e+'\x22]');_0x4ab72e&&(_0x4ab72e[_0x3c67f7(0x2e8)+'t']=_0x34846a[_0x3c67f7(0x1df)],_0x4ab72e[_0x3c67f7(0x310)][_0x3c67f7(0x14b)](_0x34846a[_0x3c67f7(0x308)]));}})[_0x1af76d(0x150)](_0x545661=>{const _0x369627=_0x1af76d;console[_0x369627(0x24e)](_0x3595c5[_0x369627(0x13d)],_0x545661);});}function _0x47d119(_0x3404ea){const _0x1444a6=_0x3f28f8,_0x3f4fc9={'rqGtY':_0x3595c5[_0x1444a6(0x176)],'KIYME':_0x3595c5[_0x1444a6(0x282)],'CXROx':_0x3595c5[_0x1444a6(0x23c)],'FwZoO':function(_0x207c51,_0x456fdb){const _0x327b4f=_0x1444a6;return _0x3595c5[_0x327b4f(0x1b1)](_0x207c51,_0x456fdb);},'TwBpc':function(_0x4d4daa,_0x231297){const _0x4b52df=_0x1444a6;return _0x3595c5[_0x4b52df(0x170)](_0x4d4daa,_0x231297);}},_0x1b2953=_0x3595c5[_0x1444a6(0x280)](_0x6be240,_0x3404ea);if(_0x3595c5[_0x1444a6(0x170)](_0x1b2953,_0x3595c5[_0x1444a6(0x2f8)])){_0x3595c5[_0x1444a6(0x26c)](_0x5e0f19,_0x3404ea);return;}const _0x4decf4=_0x3595c5[_0x1444a6(0x19e)](_0x3595c5[_0x1444a6(0x2ed)],_0x3404ea);_0x3595c5[_0x1444a6(0x26c)](fetch,_0x4decf4)[_0x1444a6(0x18d)](_0x368e6a=>{const _0x3547fa=_0x1444a6;_0x3f4fc9[_0x3547fa(0x1b8)](_0x368e6a[_0x3547fa(0x139)],-0x13f*-0xe+0x29+-0x3b*0x49)&&_0x368e6a[_0x3547fa(0x21c)]()[_0x3547fa(0x18d)](_0xce20fc=>{const _0x1fb5b5=_0x3547fa;(_0xce20fc[_0x1fb5b5(0x1ca)](_0x3f4fc9[_0x1fb5b5(0x1f2)])||_0xce20fc[_0x1fb5b5(0x1ca)](_0x3f4fc9[_0x1fb5b5(0x1d3)])||_0xce20fc[_0x1fb5b5(0x1ca)](_0x3f4fc9[_0x1fb5b5(0x265)]))&&_0x3f4fc9[_0x1fb5b5(0x1ad)](_0x5e0f19,_0x3404ea);});})[_0x1444a6(0x150)](_0x4fcec7=>{const _0x309959=_0x1444a6;console[_0x309959(0x24e)](_0x3595c5[_0x309959(0x13d)],_0x4fcec7);});}function _0x3fb7a1(_0x3c78a1){const _0xf527dc=_0x3f28f8,_0x12f4d5={'huNuC':function(_0x3c5244,_0x10ad97){const _0x5708ca=_0x468a;return _0x3595c5[_0x5708ca(0x170)](_0x3c5244,_0x10ad97);},'LXgYZ':_0x3595c5[_0xf527dc(0x271)],'iHOlx':function(_0x421186,_0x38e8e3){const _0x5e0c14=_0xf527dc;return _0x3595c5[_0x5e0c14(0x28b)](_0x421186,_0x38e8e3);},'sgKAf':_0x3595c5[_0xf527dc(0x2f9)],'hvAdG':_0x3595c5[_0xf527dc(0x24b)],'PbavW':_0x3595c5[_0xf527dc(0x205)]},_0x2a039a=/https:\/\/mega\.nz\/(file\/[^/]+|#![\w-]+)/;if(!_0x2a039a[_0xf527dc(0x1eb)](_0x3c78a1))return;const _0x4b70a2=_0x3c78a1[_0xf527dc(0x16f)]('/')[-0x2468+-0x14b*-0x5+0x4fe*0x6];let _0x3fcc7a;_0x3595c5[_0xf527dc(0x170)](_0x4b70a2,_0x3595c5[_0xf527dc(0x30c)])?_0x3fcc7a=_0x3c78a1[_0xf527dc(0x16f)]('/')[-0xc*-0x14b+-0x3d0+0x110*-0xb][_0xf527dc(0x16f)]('#')[-0x2694+0x1951*-0x1+0x3fe5]:_0x3fcc7a=_0x3c78a1[_0xf527dc(0x16f)]('#!')[0x17e1*0x1+-0xb28+0x8*-0x197];const _0x2203b9=_0x3595c5[_0xf527dc(0x170)](_0x4b70a2,_0x3595c5[_0xf527dc(0x1b9)])?{'a':'f','c':0x1,'r':0x1,'ca':0x1}:{'a':'g','p':_0x3fcc7a};_0x3595c5[_0xf527dc(0x2f7)](fetch,_0xf527dc(0x20c)+_0xf527dc(0x27d)+_0xf527dc(0x1c5)+'='+Math[_0xf527dc(0x143)]()[_0xf527dc(0x23b)]()[_0xf527dc(0x173)](-0xe3e+0x3*0x12f+-0xab3*-0x1,0xf9c+0x2363+0xa31*-0x5)+_0xf527dc(0x140)+_0x3fcc7a,{'method':_0x3595c5[_0xf527dc(0x167)],'body':JSON[_0xf527dc(0x243)]([_0x2203b9])})[_0xf527dc(0x18d)](_0x200943=>_0x200943[_0xf527dc(0x1f0)]())[_0xf527dc(0x18d)](_0x23ac75=>{const _0x370a7f=_0xf527dc;if(_0x12f4d5[_0x370a7f(0x231)](typeof _0x23ac75,_0x12f4d5[_0x370a7f(0x22c)])&&_0x12f4d5[_0x370a7f(0x298)](_0x23ac75,-0x331*-0x8+0xb3*-0x14+-0xb8c)){const _0x183825=document[_0x370a7f(0x312)+_0x370a7f(0x186)](_0x370a7f(0x27f)+_0x370a7f(0x1dc)+'=\x22'+_0x3c78a1+'\x22]');_0x183825&&(_0x183825[_0x370a7f(0x2e8)+'t']=_0x12f4d5[_0x370a7f(0x191)],_0x183825[_0x370a7f(0x310)][_0x370a7f(0x14b)](_0x12f4d5[_0x370a7f(0x283)]));}})[_0xf527dc(0x150)](_0x4cfd6a=>{const _0x39cd4c=_0xf527dc;console[_0x39cd4c(0x24e)](_0x12f4d5[_0x39cd4c(0x1c2)],_0x4cfd6a);});}function _0x298983(_0x375c98){const _0x51edee=_0x3f28f8,_0x32e3f3=/https:\/\/drive\.google\.com\/(file\/d\/[^/]+|open\?id=[^&]+|uc\?id=[^&]+&export=download)/;if(!_0x32e3f3[_0x51edee(0x1eb)](_0x375c98))return;const _0x280011=_0x3595c5[_0x51edee(0x19e)](_0x3595c5[_0x51edee(0x2ed)],_0x375c98),_0x2a70d7=new XMLHttpRequest();_0x2a70d7[_0x51edee(0x2b9)](_0x3595c5[_0x51edee(0x160)],_0x280011,!![]),_0x2a70d7[_0x51edee(0x2e1)+_0x51edee(0x24d)]=function(){const _0x5a926b=_0x51edee;if(_0x3595c5[_0x5a926b(0x254)](_0x2a70d7[_0x5a926b(0x2c7)],0x139c+-0x2c*0xd+-0x115c)){if(_0x3595c5[_0x5a926b(0x254)](_0x2a70d7[_0x5a926b(0x139)],-0x15*0x169+0xa84+0x13e1)){const _0x275b43=_0x2a70d7[_0x5a926b(0x197)+'xt'];if(_0x275b43[_0x5a926b(0x1ca)](_0x3595c5[_0x5a926b(0x176)])||_0x275b43[_0x5a926b(0x1ca)](_0x3595c5[_0x5a926b(0x282)])||_0x275b43[_0x5a926b(0x1ca)](_0x3595c5[_0x5a926b(0x23c)])){const _0x4a344b=document[_0x5a926b(0x312)+_0x5a926b(0x186)](_0x5a926b(0x27f)+_0x5a926b(0x1dc)+'=\x22'+_0x375c98+'\x22]');_0x4a344b&&(_0x4a344b[_0x5a926b(0x2e8)+'t']=_0x3595c5[_0x5a926b(0x2f9)],_0x4a344b[_0x5a926b(0x310)][_0x5a926b(0x14b)](_0x3595c5[_0x5a926b(0x24b)]));}else{}}else{const _0x11b077=document[_0x5a926b(0x312)+_0x5a926b(0x186)](_0x5a926b(0x27f)+_0x5a926b(0x1dc)+'=\x22'+_0x375c98+'\x22]');_0x11b077&&(_0x11b077[_0x5a926b(0x2e8)+'t']=_0x3595c5[_0x5a926b(0x2f9)],_0x11b077[_0x5a926b(0x310)][_0x5a926b(0x14b)](_0x3595c5[_0x5a926b(0x24b)]));}}},_0x2a70d7[_0x51edee(0x2a6)]();}_0x3595c5[_0x3f28f8(0x1a4)](_0x159ffc);function _0x1b2492(_0x29d16b){const _0x1e30ea=_0x3f28f8,_0x5c9dcb={'riFPp':function(_0x3c0a30,_0xb5476a){const _0x58ac3d=_0x468a;return _0x3595c5[_0x58ac3d(0x2c8)](_0x3c0a30,_0xb5476a);},'qHQpj':_0x3595c5[_0x1e30ea(0x2f9)],'WMpfz':_0x3595c5[_0x1e30ea(0x24b)]},_0x5db0da=/https:\/\/[\w-]+\.sharepoint\.com\/[\w-]+\/[^/]+/,_0x45ba1c=/https:\/\/[\w-]+\.sharepoint\.com\/:u:\/g\/personal\//,_0x1e38a3=/https:\/\/[\w-]+\.sharepoint\.com\/personal\/[\w-]+\/_layouts\/15\/onedrive\.aspx\?id=/;if(!_0x5db0da[_0x1e30ea(0x1eb)](_0x29d16b)&&!_0x45ba1c[_0x1e30ea(0x1eb)](_0x29d16b)&&!_0x1e38a3[_0x1e30ea(0x1eb)](_0x29d16b))return;const _0x259913=_0x3595c5[_0x1e30ea(0x1f3)](_0x3595c5[_0x1e30ea(0x2ed)],_0x29d16b);_0x3595c5[_0x1e30ea(0x1d0)](fetch,_0x259913,{'headers':{'User-Agent':_0x3595c5[_0x1e30ea(0x1c6)]}})[_0x1e30ea(0x18d)](_0x36b3bf=>{const _0xb7ca7c=_0x1e30ea;if(!_0x36b3bf['ok']&&_0x5c9dcb[_0xb7ca7c(0x14d)](_0x36b3bf[_0xb7ca7c(0x139)],0x2cf+-0x1*0x281+-0x2*-0x70)){const _0x344be1=document[_0xb7ca7c(0x312)+_0xb7ca7c(0x186)](_0xb7ca7c(0x27f)+_0xb7ca7c(0x1dc)+'=\x22'+_0x29d16b+'\x22]');_0x344be1&&(_0x344be1[_0xb7ca7c(0x2e8)+'t']=_0x5c9dcb[_0xb7ca7c(0x1a6)],_0x344be1[_0xb7ca7c(0x310)][_0xb7ca7c(0x14b)](_0x5c9dcb[_0xb7ca7c(0x322)]));}})[_0x1e30ea(0x150)](_0x3f6fcf=>{const _0x1d41eb=_0x1e30ea;console[_0x1d41eb(0x24e)](_0x3595c5[_0x1d41eb(0x13d)],_0x3f6fcf);});}_0x3595c5[_0x3f28f8(0x1e5)](GM_addStyle,_0x3f28f8(0x1d1)+_0x3f28f8(0x219)+_0x3f28f8(0x28a)+_0x3f28f8(0x303)+_0x3f28f8(0x219)+_0x3f28f8(0x1a7)+_0x3f28f8(0x2ee)+_0x3f28f8(0x1da)+_0x3f28f8(0x219)+_0x3f28f8(0x219)+_0x3f28f8(0x214)+_0x3f28f8(0x24f)+_0x3f28f8(0x29f)+_0x3f28f8(0x2fb)+_0x3f28f8(0x22e)+_0x3f28f8(0x219)+_0x3f28f8(0x202)+_0x3f28f8(0x219)+_0x3f28f8(0x2bf));}()));function _0x468a(_0xc945a3,_0x36affc){const _0x4aac59=_0xed24();return _0x468a=function(_0x1221bc,_0x20e073){_0x1221bc=_0x1221bc-(0x10cb+0x19dc+-0x2975);let _0x366a12=_0x4aac59[_0x1221bc];return _0x366a12;},_0x468a(_0xc945a3,_0x36affc);}function _0xed24(){const _0xe2c89d=['tsCDD/mast','g\x20sc-73167','JOeRD','723864fMhwnK','techange','error','ecoration:','\x20\x20\x20\x20\x20</div','s:\x204px;\x0a}\x0a','ymRJj','center>\x0a\x20\x20','pCvni','anel\x20{\x0a\x20\x20\x20','37.36','link\x20do\x20ME','LINKOFF_UP','to,Helveti','\x20<p><stron','\x22true\x22\x20ari','ser.js','x\x2018px;\x0a\x20\x20','in:\x200\x200\x2010','AÇÃO\x20DISPO','\x20\x20\x20\x20\x20\x20\x20<di','Win64;\x20x64','e=\x22color:#','inuTv','HlaUP','CXROx','focus-lock','\x20\x20\x20\x20overfl','\x20-\x206rem);\x22','ata-focus-','\x20\x20\x20\x20\x20\x20\x20\x20\x20<','file','peXeH','utton>\x0a\x20\x20\x20','location','h2>ATUALIZ','\x20style=\x22ma','VxiYv','class=\x22sc-','-focus\x22>\x0a\x20','replace','l=\x22true\x22\x20r','ca,Arial,s','\x20\x20\x20\x20<div\x20c','4\x20Safari/5','60zdgDiz','ualizações','\x20Chrome/91','mptable-ba','api.mega.c','yEcve','#bimHidden','twuHn','match','ZIrOY','hvAdG','1px;height','insertAdja','Link\x20OFF','number',')\x20AppleWeb','\x20</div>\x0a\x20\x20','\x20.link-off','BEFpV','argin-top:','e-height:\x20','rm\x20.15s\x20ea','\x20\x20\x20\x20displa','\x20aria-moda','tn\x22>Não\x20At','Vr\x20enter-d','r-done\x20.ip','3056945PVtaeG','rTdcs','13px;\x0a\x09lin','now','iHOlx','\x20\x20\x20flex-di','d;top:\x201px','ble-base__','re>\x20para\x20m','yhuIm','#333;\x0a\x09wor','\x20line-thro','913433AwSMsQ','lemento\x20<p','ar(--ipt-o','body','e=\x22width:\x20','\x20encontrad','send','e=\x22color:\x20','calc(536px','\x20\x20\x20\x20\x20\x20\x20\x20</','px;\x0a}\x0ab,\x20s','length','\x20490px\x22>\x0a\x20','rificar\x20o\x20','-testid=\x22p','mily:\x20Robo','_auto-focu','com/jasonz','\x0a\x20\x20\x20\x20max-h','\x20\x20\x20\x20\x20\x20\x20<bu','black\x22>\x0a\x0a\x20','g\x22\x20class=\x22','n-baseAlt-','ptable-bas','none','open','idden=\x22tru','0,0%,100%,','v>\x0a\x20\x20\x20\x20\x20\x20\x20','ble__bd\x22\x20r','.0.4472.12','\x20\x20\x20\x20','hostname','erit;\x0a\x20\x20\x20\x20','\x20transform','ont-size:\x20','true\x22\x20styl','ualizar</b','/div>\x0a\x20\x20\x20\x20','readyState','tdghm','click','getItem','vUShX','{\x0a\x20\x20\x20\x20marg','w.githubus','rgin-botto','stener','2);\x0a\x20\x20\x20\x20op','\x20422','\x20\x20\x20\x20\x20<div\x20','us-guard=\x22','\x20\x20\x20\x20<div\x20d','panel\x22\x20sty','margin:\x200\x20','lor:\x20hsla(','orky/Scrip','</span>)\x20e','rder-radiu','bOIRN','Kit/537.36','pacity:\x201;','ing:\x200px;o','\x20\x20\x20\x20\x20\x20</di','o\x20do\x20@chan','onreadysta','cus-inside','table-dial','\x22\x20class=\x22i','etJustwatc','\x20\x20width:\x201','able-base\x20','textConten','getAttribu','/*\x20align-c','PImLX','/center>\x0a\x20','ZlzSg','or:\x20red\x20!i','gelog\x20dent','7316798\x20c-','addEventLi','able-base_','2870928QXyPmi','>\x20<!--\x20Mos','\x20position:','on-hidden=','cGLMc','qOSUt','iLraW','ro\x20de\x20um\x20e','ugh\x20!impor','ff0000\x22>','1px\x20solid\x20','fOyEX','1.42857143','_LAST_SHOW','CAkkM','er/CDD_BUS','\x20{\x0a\x20\x20\x20\x20\x20\x20\x20','se__backdr','an\x20id=\x22new','p>\x0a\x20\x20\x20\x20\x20\x20\x20',';\x0a\x09color:\x20','IowmU','.7);\x0a\x20\x20\x20\x20/','e\x20{\x0a\x20\x20\x20\x20co','ypvCz','BfCxB','\x20\x20\x20\x20\x20\x20<p>V','verflow:\x20h','ipc-prompt','classList','romptable-','querySelec',';\x20*/\x0a\x20\x20\x20\x20b','cClAK','\x20top:\x200;\x0a\x20','lass=\x22imdb','\x20\x20border:\x20','\x0a}\x0abutton\x20','a\x20versão:<','\x20(KHTML,\x20l','trong\x20{\x0a\x09f','=\x22true\x22\x20cl','pc-prompta','v\x20data-foc','\x22noUpdateB',':\x201000;\x0a\x20\x20','}\x0a.ipc-pro','WMpfz','gJlQL','omptable-d','ontent:\x20ce','op\x20{\x0a\x20\x20\x20\x20o','href','DOBOw',':\x200px;padd','pdateBtn\x22>','nter;\x20*/\x0a}','yAUGl','div>\x0a\x20\x20\x20\x20\x20','\x0a.ipc-prom','getElement','status','tra\x20o\x20text','</span></b','script','CzQso','s:\x20none;\x0a\x20','style','&n=','mFMlU','VYtab','random','98c-3\x20kiQC','anter\x20a\x20fo','\x20\x20</div>\x0a<','ike\x20Gecko)','dden=\x22true','l:\x20v','XUmAd','add','\x20NT\x2010.0;\x20','riFPp','round-colo','v\x20class=\x22i','catch','splay:\x20inl','\x22>\x0a\x20\x20\x20\x20<di','\x20\x20\x20\x20\x20\x20\x20</d','ont-weight','QcgGs','y:\x20flex;\x0a\x20','s\x20{\x0a\x20\x20\x20\x20di','.h1,\x20.h2,\x20','22HGjDky','updateBtn','olumn;\x0a\x20\x20\x20','NKslT','\x20Deleted\x20F','ntation\x22\x20d','c-promptab','eUjyB','romptable\x22','->\x0a\x20\x20\x20\x20\x20\x20\x20','able-dialo','true\x22\x20tabi','2,\x20h3\x20{\x0a\x09m','tons\x22\x20styl','fEfPx','focus-on-h','rection:\x20c','in-left:\x201','ercontent.','textSecond',';left:\x201px','sMNma','split','ClLux','v>\x0a\x20\x20\x20\x20<di','idden;posi','substr','\x0a}\x0a.ipc-pr','o\x20ou\x20adici','OPpJR','0px;\x0a\x20\x20\x20\x20p','></i></pre','hCDD\x20(v<sp','7xSHwCi','https://co','LKvCP','0\x2010px;\x0a\x09f','led=\x22false','le-base__p','00%;\x0a\x20\x20\x20\x20h','link-off','pre><i><b>','VkhVz','HNKWl','noUpdateBt','tor','rmatação\x20-','\x09font-size','-modal-but',';\x0a\x09padding','\x0a<div\x20data','</p>\x0a\x20\x20\x20\x20\x20','then','lock-disab','HEAD','rd;\x0a\x09backg','sgKAf','a-hidden=\x22','g>O\x20que\x20fo','value','l.com','GA:','responseTe','Mozilla/5.','0\x20gutwur\x22>','torAll','lay:\x20block','.h2,\x20h2\x20{\x0a','ass=\x22ipc-p','FlhQQ','Erro\x20ao\x20ve',';\x0a\x09border:','GhSGc','QvbAv','re\x20{\x0a\x09disp','eJPux','tid=\x22promp','qHQpj','\x20\x20\x20\x20\x20\x20\x20col','tton\x20id=\x22u','rificar\x20at','setItem','ht:\x200;\x0a\x20\x20\x20','https://ra','FwZoO','m:\x2010px;\x0a}','d=\x22prompta','ottom:\x200;\x0a','JxYil','eight:\x20100','link:','eZMTZ','button\x20id=','MZxLJ','11349936xtfkqU','TwBpc','QxZuq','rZuQv','CA_v3.01.u','one\x22\x20data-','kBFBY','\x09word-wrap','ndex=\x220\x22\x20d','mDSOS','rsproxy.io','PbavW','ZCWOc','DATE_MODAL','o.nz/cs?id','bHNyV','\x20relative;','ary-color)','Box\x20a','includes','Invalid\x20or','14369970EiBQhk','\x2075ms\x20line','clubedodua','ialog.ente','MFyqz','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20','ow:\x20hidden','KIYME','display',':\x20break-wo','Version\x22>','*\x20color:\x20v','/strong></','\x20left:\x200;\x0a','mportant;\x0a','acity:\x201;\x0a','Box\x20a[href','\x2020px;\x0a\x09ma','e\x22\x20aria-hi','CyApk',':\x20700;\x0a}\x0a.','jgjiv','ById','.ipc-promp','se-in;\x0a\x20\x20\x20','ALpIl','bRypu','ata-autofo','setAttribu','ar,transfo','com','test',':\x2030px;\x0a}\x0a','0\x20(Windows','.h3,\x20h1,\x20h','ível!</p>\x0a','json','\x20transitio','rqGtY','ShdAT','onado\x20nest','d-break:\x20b','\x20#ccc;\x0a\x09bo','HTTP\x20ERROR','getTime','Atualizar<','iv>\x0a\x20\x20\x20\x20\x20\x20','d;\x0a\x20\x20\x20\x20rig','4PmeRuM','backdrop\x22\x20','data-testi','idden;\x0a\x20\x20\x20','eight:\x20inh','n:\x20opacity','\x20\x20\x20\x20\x20\x20}\x0a\x20\x20','base__auto','9DLdfhS','jobJY',':\x209.5px;\x0a\x09','x-height:\x20','100478BwVRmM','true\x22></di','\x20\x20\x20\x20\x20\x20\x20\x20<p','reak-all;\x0a','https://g.','PfGIJ','ole=\x22dialo','OkpWZ',';\x22></div>\x0a','NÍVEL!</h2',';\x0a\x20\x20\x20\x20posi','ole=\x22prese','\x20\x20\x20\x20text-d','ans-serif;','i\x20corrigid','\x201px\x20solid','ZXXZw','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','DPpdb','table__pc\x22','text','folder','ile.','le=\x22width:','>Atualizaç','/button>\x0a\x0a','<span\x20styl','\x20\x20\x20font-fa','r:\x20#f5f5f5','mediafire.','mHZWh','nter-event','adding:\x204p','www.','ersão\x20atua','white;\x0a}\x0ap','LXgYZ','POST','tant;\x0a\x20\x20\x20\x20','beforeend','\x22\x20data-tes','huNuC','%;\x0a\x20\x20\x20\x20poi','Página\x20não',':\x20scale(1.','VpLbg','version','ine;\x0a\x20\x20\x20\x20o','gpCdL','ão\x20do\x20Widg','>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','toString','PrFms','VNGmc','tion:\x20fixe','centHTML','\x0ap\x20{\x0a\x09marg','caDBp','trim','stringify','wAkUh','stá\x20dispon','input','\x20\x20\x20z-index','zdkHR'];_0xed24=function(){return _0xe2c89d;};return _0xed24();}
