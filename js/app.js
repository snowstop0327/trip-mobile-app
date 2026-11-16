        // ==================== 1. DEFAULT 23-STOP ITINERARY DATA & CURATED PHOTOS ====================
        // Default curated scenic photos mapped by stop ID so existing users immediately get photos too!
        // 原版用的是 Unsplash 圖庫照（跟景點本身無關），改成在執行時向維基百科抓「該景點的真實照片」
        const LEGACY_STOCK_PREFIX = "https://images.unsplash.com/";
        const defaultStopPhotos = {}; // 保留變數名稱，讓下方行程資料的 img 欄位維持空白
        const wikiPhotoTitles = {
            s3: "zh:臺灣桃園國際機場",
            s4: "米子空港",
            s8: "松江城",
            s9: "万九千神社",
            s10: "出雲そば",
            s11: "出雲大社",
            s12: "日御碕灯台",
            s13: "日御碕神社",
            s14: "青山剛昌ふるさと館",
            s15: "鳥取二十世紀梨記念館",
            s16: "ズワイガニ",
            s17: "米子駅",
            s20: "米子空港"
        };

        const defaultItineraryData = {
            1: {
                date: "2026/12/4 (週五)",
                title: "Day 1｜桃園出發 ➔ 米子機場取車 ➔ 境港溫泉",
                departure: "09:30 出發",
                shibaTip: "汪！我幫大家把重點景點都附上實景照片囉！點照片可以放大看，點『📷 換照片』還能換成你們自己截圖或拍的照片汪！",
                stops: [
                    {
                        id: "s1",
                        time: "09:30",
                        stay: "停留 1 小時",
                        name: "桃大源社區",
                        address: "334桃園市八德區興仁里豐田二路98-112號",
                        driveNext: "🚗 約 31 分",
                        tag: "集合出發",
                        note: "檢查護照、台灣駕照正本＋日文譯本、御朱印帳、夾鏈袋（裝稻佐之濱海沙用）！",
                        mapQuery: "桃園市八德區豐田二路98號"
                    },
                    {
                        id: "s2",
                        time: "11:01",
                        stay: "停留 10 分",
                        name: "大園出國停車場｜Dayuan Parking Garage",
                        address: "337桃園市大園區中正東路437-1號",
                        driveNext: "🚗 約 8 分 (接駁車)",
                        tag: "機場停車",
                        note: "停好車後記下停車格號碼，搭接駁車前往桃園機場第一航廈。",
                        mapQuery: "大園出國停車場"
                    },
                    {
                        id: "s3",
                        time: "11:19",
                        stay: "停留 2 小時 30 分",
                        name: "桃園機場第一航廈 (台灣虎航 IT724)",
                        address: "桃園國際機場 T1 (13:25 起飛 ➔ 16:50 抵達米子)",
                        driveNext: "✈️ 飛行約 2 小時 25 分",
                        tag: "航班 IT724",
                        img: defaultStopPhotos.s3,
                        note: "辦理登機託運，準備飛往山陰米子鬼太郎機場！",
                        mapQuery: "桃園國際機場第一航廈"
                    },
                    {
                        id: "s4",
                        time: "16:50",
                        stay: "停留 40 分 (自訂)",
                        name: "米子鬼太郎機場 (Yonago Kitaro Airport)",
                        address: "1634 Sainokamicho, Sakaiminato, Tottori 684-0055 日本",
                        driveNext: "🚌 接駁約 16 分",
                        tag: "入境日本",
                        img: defaultStopPhotos.s4,
                        note: "入境領行李後，到機場大廳 TOYOTA 租車櫃檯報到，搭乘接駁車前往店鋪取車。",
                        mapQuery: "米子鬼太郎空港",
                        jpCardKey: "airport_car"
                    },
                    {
                        id: "s5",
                        time: "17:46",
                        stay: "停留 20 分",
                        name: "Toyota Rent a Car Yonago Kitaro AP",
                        address: "21-4 Koshinozucho, Sakaiminato, Tottori 684-0053 日本",
                        tel: "0859-47-0100",
                        driveNext: "🚗 約 12 分",
                        tag: "取車 VOXY",
                        img: defaultStopPhotos.s5,
                        note: "預訂車型：VOXY Hybrid (W2)，含雪胎與全險，已刷卡 ¥67,606。請店員協助收摺第三排座椅以放入 4 人行李！",
                        mapQuery: "トヨタレンタカー米子鬼太郎空港店",
                        jpCardKey: "foldseat",
                        checkTask: "確認 VOXY 雪胎與收摺第三排座椅"
                    },
                    {
                        id: "s6",
                        time: "18:18",
                        stay: "入住休息 & 境港晚餐",
                        name: "天然溫泉 境港 夕凪之湯 御宿 野乃",
                        address: "〒684-0004 Tottori, Sakaiminato, Taishomachi, 216 番地",
                        tel: "0859-44-5489",
                        tag: "Day1 住宿 & 晚餐",
                        img: defaultStopPhotos.s6,
                        note: "Check-in 後去吃晚餐（推薦免訂位：『廻転すし北海道 境港店』或步行5分鐘『味処 美佐』蟹料理）。21:30 記得回飯店吃免費夜鳴拉麵！",
                        mapQuery: "天然温泉 境港 夕凪の湯 御宿 野乃",
                        jpCardKey: "walkin4",
                        hasFoodRescue: true
                    }
                ]
            },
            2: {
                date: "2026/12/5 (週六)",
                title: "Day 2｜松江城 ➔ 萬九千神社 ➔ 羽根屋蕎麥麵 ➔ 出雲大社 ➔ 界 出雲",
                departure: "08:00 出發",
                shibaTip: "汪！今天是神在月重頭戲！松江城、羽根屋蕎麥麵、出雲大社跟星野『界 出雲』都有附上美照，點照片可以放大欣賞汪！",
                stops: [
                    {
                        id: "s7",
                        time: "08:00",
                        stay: "準備退房 (停留 30 分)",
                        name: "天然溫泉 境港 夕凪之湯 御宿 野乃",
                        address: "〒684-0004 Tottori, Sakaiminato, Taishomachi, 216 番地",
                        driveNext: "🚗 約 38 分 (經江島大橋/中海)",
                        tag: "08:30 出發",
                        note: "享用野乃豐盛海鮮早餐後退房，08:30 準時出發前往松江城！",
                        mapQuery: "天然温泉 境港 夕凪の湯 御宿 野乃"
                    },
                    {
                        id: "s8",
                        time: "09:08",
                        stay: "停留 1 小時 30 分",
                        name: "松江城 (Matsue Castle 国宝天守)",
                        address: "1-5 Tonomachi, Matsue, Shimane 690-0887 日本",
                        tel: "0852-21-4030",
                        driveNext: "🚗 約 40 分",
                        tag: "國寶天守",
                        img: defaultStopPhotos.s8,
                        note: "日本僅存 12 座現存天守之一！登頂 360 度俯瞰宍道湖。⚠️ 進天守閣需脫鞋，12 月木地板很冰，記得穿厚襪子！",
                        mapQuery: "松江城",
                        checkTask: "穿厚襪子登松江城天守閣"
                    },
                    {
                        id: "s9",
                        time: "11:18",
                        stay: "停留 30 分",
                        name: "萬九千神社 (Mankusen Shrine)",
                        address: "258 Hikawa-cho, Izumo, Shimane 699-0615 日本",
                        tel: "0853-72-9444",
                        driveNext: "🚗 約 8 分",
                        tag: "神在月送神",
                        img: defaultStopPhotos.s9,
                        note: "八百萬神明在出雲最後聚會與道別的神社！參拜禮儀同出雲大社為『二禮、四拍手、一禮』，可領御朱印與抽神在みくじ。",
                        mapQuery: "万九千神社",
                        checkTask: "萬九千神社御朱印＋神在みくじ"
                    },
                    {
                        id: "s10",
                        time: "11:56",
                        stay: "停留 1 小時",
                        name: "天皇蕎麥麵 羽根屋 本店 (獻上蕎麥)",
                        address: "〒693-0001 Shimane, Izumo, Imaichicho, 本町549",
                        tel: "0853-21-0058",
                        driveNext: "🚗 約 21 分",
                        tag: "Day2 午餐",
                        img: defaultStopPhotos.s10,
                        note: "皇室獻上出雲蕎麥麵名店！無預約制，抵達後先到門口登記簿寫名字（4名），必點『三段割子そば（三層蕎麥麵）』。",
                        mapQuery: "献上そば 羽根屋 本店",
                        jpCardKey: "soba",
                        hasFoodRescue: true
                    },
                    {
                        id: "s11",
                        time: "13:17",
                        stay: "停留 2 小時",
                        name: "出雲大社 (Izumo Taisha) & 稻佐之濱取沙",
                        address: "195 Taishacho Kizukihigashi, Izumo, Shimane 699-0701 日本",
                        tel: "0853-53-3100",
                        driveNext: "🚗 約 20 分",
                        tag: "神在月大社",
                        img: defaultStopPhotos.s11,
                        note: "💡 建議先順路開 3 分鐘到『稻佐之濱』裝海沙 ➔ 出雲大社（二禮四拍手一禮）➔ 北島國造館領『龍蛇神』御朱印 ➔ 素鵞社換御砂！",
                        mapQuery: "出雲大社",
                        checkTask: "稻佐之濱取沙 ➔ 出雲大社素鵞社換沙"
                    },
                    {
                        id: "s12",
                        time: "15:37",
                        stay: "入住享受溫泉與晚宴",
                        name: "星野集團 界 出雲 (Hoshino Resorts KAI Izumo)",
                        address: "604 Taishacho Hinomisaki, Izumo, Shimane 699-0763",
                        tel: "0853-54-5600",
                        tag: "頂級溫泉宿",
                        img: defaultStopPhotos.s12,
                        note: "位於日御碕燈塔與海岬旁！提早入住泡湯、17:00 欣賞日本海落日、晚上享用冬季限定松葉蟹會席料理與觀賞『石見神樂』演出！",
                        mapQuery: "星野リゾート 界 出雲",
                        jpCardKey: "hotel_checkin"
                    }
                ]
            },
            3: {
                date: "2026/12/6 (週日)",
                title: "Day 3｜界出雲日出 ➔ 柯南米花商店街 ➔ 二十世紀梨館 ➔ 米子海王/Super Hotel",
                departure: "10:00 出發",
                shibaTip: "汪！今天去柯南小鎮、二十世紀梨紀念館與米子吃松葉蟹！大家拍了好看的合照也能直接點『📷 換照片』放進自己的行程表留念汪！",
                stops: [
                    {
                        id: "s13",
                        time: "10:00",
                        stay: "晨間看日出 & 10:00 退房出發",
                        name: "Hoshino Resorts, Kai Izumo (界 出雲)",
                        address: "604 Taishacho Hinomisaki, Izumo, Shimane 699-0763",
                        driveNext: "🚗 約 2 小時 1 分 (山陰自動車道)",
                        tag: "10:00 退房",
                        note: "07:00 可在館內露台看日出、散步去日御碕燈塔與日御碕神社，10:00 退房出發前往鳥取縣北榮町（柯南小鎮）！",
                        mapQuery: "星野リゾート 界 出雲"
                    },
                    {
                        id: "s14",
                        time: "12:01",
                        stay: "停留 1 小時",
                        name: "柯南之家 米花商店街 (Beika Shopping Street)",
                        address: "Yurashuku, Hokuei, Tōhaku District, Tottori 689-2221 日本",
                        tel: "0858-37-1188",
                        driveNext: "🚗 約 20 分",
                        tag: "柯南午餐",
                        img: defaultStopPhotos.s14,
                        note: "內有『喫茶ポアロ（白羅咖啡廳）』拿坡里義大利麵、『Conan's Kitchen』咖哩漢堡、柯南義式冰淇淋與周邊商店。旁邊走路 5 分鐘即為青山剛昌故鄉館！",
                        mapQuery: "コナンの家 米花商店街",
                        jpCardKey: "walkin4",
                        hasFoodRescue: true
                    },
                    {
                        id: "s15",
                        time: "13:21",
                        stay: "停留 1 小時",
                        name: "鳥取二十世紀梨紀念館 なしっこ館",
                        address: "198-4 Dakyojicho, Kurayoshi, Tottori 682-0816",
                        tel: "0858-23-1174",
                        driveNext: "🚗 約 1 小時 3 分",
                        tag: "水梨試吃",
                        img: defaultStopPhotos.s15,
                        note: "門票 ¥300/人！館內有巨型二十世紀梨樹標本、免費試吃三種當季鳥取水梨切盤，必吃香甜清爽的『梨子霜淇淋』！",
                        mapQuery: "鳥取二十世紀梨記念館 なしっこ館",
                        checkTask: "試吃三種水梨＋吃二十世紀梨霜淇淋"
                    },
                    {
                        id: "s16",
                        time: "15:24",
                        stay: "停留 1 小時 (⚠️ 營業時間提醒)",
                        name: "海王 (山陰日本海料理・松葉蟹專門店)",
                        address: "4 Chome-94 Kakubancho, Yonago, Tottori 683-0812 日本",
                        tel: "0859-31-6777",
                        driveNext: "🚗 約 7 分",
                        tag: "米子美食",
                        img: defaultStopPhotos.s16,
                        note: "💡 柴柴貼心提醒：『海王』14:00~17:00 為下午休息時間！若 15:24 抵達建議先去 Super Hotel 放行李或逛 AEON Mall 日吉津，17:00 晚市開門再來吃螃蟹或改吃米子燒肉（大力家族亭）！",
                        mapQuery: "山陰日本海料理 海王 米子",
                        jpCardKey: "crab_meat",
                        hasFoodRescue: true
                    },
                    {
                        id: "s17",
                        time: "16:31",
                        stay: "入住 & 米子市區採買晚餐",
                        name: "Super-Hotel Yonago ekimae (米子駅前)",
                        address: "112 Mannocho, Yonago, Tottori 683-0065 日本",
                        tel: "0859-32-9000",
                        tag: "Day3 住宿",
                        img: defaultStopPhotos.s17,
                        note: "辦理入住後，晚上可去『イオンモール日吉津 (AEON Mall)』採買藥妝伴手禮（營業至21:00），晚餐吃海王螃蟹或鳥取和牛燒肉！",
                        mapQuery: "スーパーホテル米子駅前",
                        jpCardKey: "hotel_checkin"
                    }
                ]
            },
            4: {
                date: "2026/12/7 (週一)",
                title: "Day 4｜米子退房 ➔ 機場加油還車 ➔ 虎航 IT725 返台",
                departure: "09:09 出發",
                shibaTip: "汪！今天早上 09:09 退房去還車前，記得先去機場附近的加油站加滿『Regular (レギュラー 紅色油槍)』並保留收據給 TOYOTA 店員看喔！",
                stops: [
                    {
                        id: "s18",
                        time: "09:09",
                        stay: "退房出發",
                        name: "Super-Hotel Yonago ekimae (米子駅前)",
                        address: "112 Mannocho, Yonago, Tottori 683-0065 日本",
                        driveNext: "🚗 約 22 分 (含順路加油)",
                        tag: "09:09 退房",
                        note: "享用免費早餐、檢查房內有無遺漏充電器與戰利品，出發前往米子機場還車（途經加油站加滿油）。",
                        mapQuery: "スーパーホテル米子駅前"
                    },
                    {
                        id: "s19",
                        time: "09:31",
                        stay: "停留 20 分",
                        name: "Toyota Rent a Car Yonago Kitaro AP (加油 & 還車)",
                        address: "21-4 Koshinozucho, Sakaiminato, Tottori 684-0053 日本",
                        tel: "0859-47-0100",
                        driveNext: "🚌 接駁約 9 分",
                        tag: "還車手續",
                        note: "還車前請在機場周邊加油站加滿『Regular (紅色油槍)』，出示加油收據給店員檢查車況後，搭免費接駁車至米子機場航廈。",
                        mapQuery: "トヨタレンタカー米子鬼太郎空港店",
                        jpCardKey: "gas",
                        checkTask: "加滿 Regular 汽油並保留收據還車"
                    },
                    {
                        id: "s20",
                        time: "10:00",
                        stay: "停留 3 小時 (13:00 起飛)",
                        name: "YGJ Miho Airport (米子鬼太郎機場)",
                        address: "1634 Sainokamicho, Sakaiminato, Tottori 684-0055 日本",
                        driveNext: "✈️ 虎航 IT725 (13:00 ➔ 15:20)",
                        tag: "返台航班",
                        img: defaultStopPhotos.s20,
                        note: "逛機場鬼太郎彩繪玻璃與免稅店（因幡白兔饅頭、大風呂敷、鬼太郎周邊），搭乘 13:00 虎航 IT725 返回桃園！",
                        mapQuery: "米子鬼太郎空港"
                    },
                    {
                        id: "s21",
                        time: "15:20",
                        stay: "落地・入境領行李約 40 分",
                        name: "TPE 桃園國際機場",
                        address: "桃園國際機場第一航廈",
                        driveNext: "🚌 約 8 分",
                        tag: "平安抵台",
                        note: "入境領取行李後，聯絡大園出國停車場接駁車來接。",
                        mapQuery: "桃園國際機場第一航廈"
                    },
                    {
                        id: "s22",
                        time: "16:03",
                        stay: "停留 10 分",
                        name: "大園出國停車場｜Dayuan Parking Garage",
                        address: "337桃園市大園區中正東路437-1號",
                        driveNext: "🚗 約 31 分",
                        tag: "領車返家",
                        note: "領回愛車，準備開回桃園八德！",
                        mapQuery: "大園出國停車場"
                    },
                    {
                        id: "s23",
                        time: "16:44",
                        stay: "溫暖的家",
                        name: "桃大源社區",
                        address: "334桃園市八德區興仁里豐田二路98-112號",
                        tag: "圓滿賦歸",
                        note: "山陰 4 日自駕之旅大成功！記得打開分帳本把最後一筆油錢與過路費算清楚汪！",
                        mapQuery: "桃園市八德區豐田二路98號"
                    }
                ]
            }
        };

        // Load customizable itinerary from localStorage or clone default
        let itineraryData = JSON.parse(localStorage.getItem('sanin_custom_itinerary_v3')) || JSON.parse(JSON.stringify(defaultItineraryData));

        // 清掉舊版存在手機裡的 Unsplash 圖庫照（不是真的景點），讓它改用維基百科真實照片
        Object.keys(itineraryData).forEach(dayKey => {
            const stops = itineraryData[dayKey]?.stops || [];
            stops.forEach(st => {
                if (typeof st.img === 'string' && st.img.startsWith(LEGACY_STOCK_PREFIX)) delete st.img;
            });
        });

        // ---- 維基百科真實照片（抓一次後存在手機，離線也看得到網址快取）----
        let wikiPhotoCache = {};
        try { wikiPhotoCache = JSON.parse(localStorage.getItem('sanin_wiki_photos_v2')) || {}; } catch (e) {}
        const wikiPending = {};
        function getStopPhoto(stop) {
            if (stop.img) return stop.img;
            const c = wikiPhotoCache[stop.id];
            return c && c.src ? c.src : '';
        }
        function getStopPhotoFallback(stop) {
            if (stop.img) return '';
            return wikiPhotoCache[stop.id]?.fallback || '';
        }
        function getStopPhotoCredit(stop) {
            if (stop.img) return '';
            const c = wikiPhotoCache[stop.id];
            return c && c.src ? `照片：維基百科「${c.title}」` : '';
        }
        async function loadWikiPhoto(id) {
            const raw = wikiPhotoTitles[id];
            const c = wikiPhotoCache[id];
            const recentFail = c && !c.src && c.failedAt && Date.now() - c.failedAt < 86400000;
            if (!raw || (c && c.src) || recentFail || wikiPending[id]) return false;
            wikiPending[id] = true;
            const [lang, title] = raw.includes(':') ? raw.split(':') : ['ja', raw];
            try {
                const res = await fetch(`https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`);
                if (!res.ok) throw new Error(res.status);
                const data = await res.json();
                // Wikimedia 只接受固定縮圖寬度（330/500/960/1280…），原圖夠大才用 960，否則直接用原圖
                const thumb = data.thumbnail?.source || '';
                const orig = data.originalimage;
                const src = orig && orig.width > 960 && thumb ? thumb.replace(/\/\d+px-/, '/960px-') : (orig?.source || thumb);
                wikiPhotoCache[id] = { src, fallback: thumb, title: data.title || title };
            } catch (e) {
                wikiPhotoCache[id] = { src: '', title, failedAt: Date.now() };
            }
            try { localStorage.setItem('sanin_wiki_photos_v2', JSON.stringify(wikiPhotoCache)); } catch (e) {}
            return true;
        }
        async function ensureWikiPhotos(day) {
            const stops = itineraryData[day]?.stops || [];
            const results = await Promise.all(stops.filter(st => !st.img).map(st => loadWikiPhoto(st.id)));
            if (results.some(Boolean) && currentDay === day) selectDay(day, { skipFetch: true, keepScroll: true });
        }

        function saveItineraryToStorage() {
            localStorage.setItem('sanin_custom_itinerary_v3', JSON.stringify(itineraryData));
        }

        // ==================== 2. JAPANESE POINT-AND-SPEAK PHRASEBOOK DATA ====================
        const japaneseCards = {
            walkin4: {
                category: "dining",
                badge: "🦀 沒訂位進餐廳必備 #1",
                zh: "不好意思，我們沒有預約，請問現在 4 個人有位子嗎？",
                jp: "すみません、予約していませんが、4人（よにん）入れますか？",
                romaji: "Sumimasen, yoyaku shite imasen ga, yo-nin hairemasu ka?"
            },
            waitlist: {
                category: "dining",
                badge: "📝 餐廳客滿候位必備",
                zh: "我們可以等，請問要在哪裡寫名字登記候位？大概需要等多久呢？",
                jp: "待ちます。名前を書く場所はどこですか？どのくらい待ちますか？",
                romaji: "Machimasu. Namae wo kaku basho wa doko desu ka? Dono kurai machimasu ka?"
            },
            soba: {
                category: "dining",
                badge: "🍜 Day 2 羽根屋蕎麥麵點餐",
                zh: "請給我們「三段割子蕎麥麵（三層出雲蕎麥麵）」，還有推薦的餐點是什麼？",
                jp: "「三段割子そば」をお願いします。あと、おすすめは何ですか？",
                romaji: "Sandan Warigo Soba wo onegaishimasu. Ato, osusume wa nan desu ka?"
            },
            crab_meat: {
                category: "dining",
                badge: "🥩 螃蟹 / 鳥取和牛燒肉點餐",
                zh: "我們想吃當地的松葉蟹 / 鳥取和牛！請問有推薦的 4 人份套餐或拼盤嗎？",
                jp: "地元の松葉ガニ（または鳥取和牛）を食べたいです。4人におすすめのセットや盛り合わせはありますか？",
                romaji: "Jimoto no Matsubagani (matawa Tottori Wagyu) wo tabetai desu. Yo-nin ni osusume no setto wa arimasu ka?"
            },
            no_raw: {
                category: "dining",
                badge: "🍽️ 點餐實用：結帳 & 分食",
                zh: "不好意思，請給我們 4 個分享用的小盤子。另外請問可以刷信用卡嗎？",
                jp: "すみません、取り皿（とりざら）を4枚お願いします。カードは使えますか？",
                romaji: "Sumimasen, torizara wo yon-mai onegaishimasu. Kaado wa tsukaemasu ka?"
            },
            foldseat: {
                category: "car",
                badge: "🚐 Day 1 租車取車必用 (VOXY)",
                zh: "我們有 4 個人和大件行李，可以請您幫我們把「第三排座椅」收摺起來嗎？",
                jp: "4人で大きい荷物があるので、3列目のシートをたたんでいただけますか？",
                romaji: "Yo-nin de ookii nimotsu ga aru node, san-retsu-me no shiito wo tatande itadakemasu ka?"
            },
            gas: {
                category: "car",
                badge: "⛽ Day 4 還車加油站必用",
                zh: "請幫我把「Regular（紅色一般無鉛汽油）」加滿！並請給我收據（還車檢查用）。",
                jp: "レギュラー、満タン（まんたん）でお願いします！あと、領収書（レシート）をください。",
                romaji: "Regyuraa, mantan de onegaishimasu! Ato, ryooshuusho (reshiito) wo kudasai."
            },
            airport_car: {
                category: "car",
                badge: "🛬 Day 1 米子機場租車櫃檯",
                zh: "你好，我們有預約 TOYOTA 租車（VOXY Hybrid），請問接駁車在哪裡搭乘？",
                jp: "トヨタレンタカーを予約しています。送迎バス乗り場はどちらですか？",
                romaji: "Toyota Rentakaa wo yoyaku shite imasu. Soogei basu noriba wa dochira desu ka?"
            },
            parking: {
                category: "car",
                badge: "🅿️ 餐廳與景點找停車場",
                zh: "不好意思，請問這間店的專用停車場在哪裡？",
                jp: "すみません、お店の専用駐車場（ちゅうしゃじょう）はどこですか？",
                romaji: "Sumimasen, omise no senyoo chuushajoo wa doko desu ka?"
            },
            hotel_checkin: {
                category: "hotel",
                badge: "♨️ 飯店 Check-in 與停車",
                zh: "你好，我們要辦理入住（4人），請問車子停在哪裡？晚餐與溫泉的時間是幾點？",
                jp: "チェックインをお願いします（4名です）。駐車場はどこですか？",
                romaji: "Chekku-in wo onegaishimasu (yo-mei desu). Chuushajoo wa doko desu ka?"
            },
            goshuin: {
                category: "hotel",
                badge: "⛩️ 神社領取御朱印",
                zh: "不好意思，請幫我寫這本御朱印帳（或請給我神在月限定的御朱印）。",
                jp: "すみません、こちらの御朱印（ごしゅいん）をお願いします。",
                romaji: "Sumimasen, kochira no goshuin wo onegaishimasu."
            }
        };

        // ==================== 3. STATE & FONT SCALING ====================
        let currentDay = 1;
        let currentJpCategory = 'all';
        let editingStopIndex = null; // null means adding new stop
        let fontLevel = localStorage.getItem('sanin_font_level') || 'large'; // 'normal', 'large', 'xlarge'
        let showPhotos = localStorage.getItem('sanin_show_photos') !== 'false'; // default true

        function togglePhotosVisibility() {
            showPhotos = !showPhotos;
            localStorage.setItem('sanin_show_photos', showPhotos);
            updatePhotoToggleBtn();
            selectDay(currentDay);
            showToast(showPhotos ? "📸 已開啟景點照片顯示！" : "🙈 已隱藏景點照片（純文字清爽模式）");
        }

        function updatePhotoToggleBtn() {
            const iconEl = document.getElementById('toggle-photo-icon');
            const btnEl = document.getElementById('toggle-photo-btn');
            if (!iconEl || !btnEl) return;
            iconEl.className = showPhotos ? 'fa-solid fa-image' : 'fa-solid fa-eye-slash';
            btnEl.className = showPhotos
                ? "pixel-btn bg-[#FFF8E7] text-[#2B5B84] w-8 h-8 text-sm font-black flex items-center justify-center"
                : "pixel-btn bg-[#4A2E1B] text-[#FFF8E7] w-8 h-8 text-sm font-black flex items-center justify-center";
        }

        function applyFontSize() {
            const htmlEl = document.documentElement;
            htmlEl.classList.remove('font-large', 'font-xlarge');
            const labelEl = document.getElementById('font-size-label');
            if (fontLevel === 'large') {
                htmlEl.classList.add('font-large');
                if (labelEl) labelEl.innerText = '大字';
            } else if (fontLevel === 'xlarge') {
                htmlEl.classList.add('font-xlarge');
                if (labelEl) labelEl.innerText = '特大';
            } else {
                if (labelEl) labelEl.innerText = '標準';
            }
        }

        function cycleFontSize() {
            if (fontLevel === 'normal') fontLevel = 'large';
            else if (fontLevel === 'large') fontLevel = 'xlarge';
            else fontLevel = 'normal';
            localStorage.setItem('sanin_font_level', fontLevel);
            applyFontSize();
            showToast(`🔍 已切換為「${fontLevel === 'xlarge' ? '特大字體' : fontLevel === 'large' ? '大字體' : '標準字體'}」！`);
        }

        const shibaQuotes = [
            "汪！現在每一站都可以點『✏️ 編輯』修改時間、地點或備註喔！",
            "汪！想把兩個景點對調？直接點卡片上的『⬆️ ⬇️』就能上下移動順序汪！",
            "汪！餐廳沒預約免緊張，點上方『4人入座卡』就能直接給店員看汪！",
            "汪！出雲大社和萬九千神社參拜是『二禮、四拍手、一禮』，要拍四下喔！",
            "汪！取車時記得請 TOYOTA 店員把 VOXY 第三排椅子收起來，4 個大行李箱才好放汪！",
            "汪！覺得字還不夠大？點右上角可以切換『特大字級』汪！"
        ];

        // Load or initialize tasks
        let completedTasks = JSON.parse(localStorage.getItem('sanin_tasks_v2')) || {};

        // Load or initialize 4 members
        let members = JSON.parse(localStorage.getItem('sanin_members_v2')) || ["我(領隊)", "旅伴A", "旅伴B", "旅伴C"];

        // Load or initialize expenses
        let expenses = JSON.parse(localStorage.getItem('sanin_expenses_v2')) || [
            { id: 1, title: "🚐 TOYOTA VOXY Hybrid 租車(含雪胎全險)", amount: 67606, payer: 0 },
            { id: 2, title: "🍐 二十世紀梨紀念館門票 (4人預估)", amount: 1200, payer: 0 },
            { id: 3, title: "🏯 松江城登閣門票 (4人預估)", amount: 2720, payer: 1 }
        ];

        // Load or initialize packing checklist
        const defaultChecklist = [
            { id: "c1", text: "🪪 台灣駕照正本 ＋ 日文譯本 (絕對必帶！)", done: false },
            { id: "c2", text: "📕 護照 (效期6個月以上) & Visit Japan Web QR", done: false },
            { id: "c3", text: "🛍️ 裝沙用小夾鏈袋 / 小玻璃瓶 (稻佐之濱取沙用)", done: false },
            { id: "c4", text: "📖 御朱印帳 (出雲大社龍蛇神、萬九千神社)", done: false },
            { id: "c5", text: "🧦 厚襪子 (12月進松江城天守閣脫鞋防冰腳)", done: false },
            { id: "c6", text: "🧥 防風保暖大衣 & 暖暖包 (日御碕海邊看夕陽風大)", done: false },
            { id: "c7", text: "🪙 日幣零錢 5円 / 100円 (神社參拜與投幣用)", done: false },
            { id: "c8", text: "🔌 車用 USB 充電線 & 手機架 (導航用)", done: false },
            { id: "c9", text: "📶 日本網卡 / eSIM 已開通", done: false }
        ];
        let checklist = JSON.parse(localStorage.getItem('sanin_checklist_v2')) || defaultChecklist;

        // Mini Pixel Shiba SVG helper for roaming across cards
        function getMiniShibaCarSvg() {
            return `
            <svg class="w-6 h-5 inline-block shiba-drive flex-shrink-0" viewBox="0 0 20 16" shape-rendering="crispEdges">
                <!-- Mini VOXY Van Body -->
                <rect x="2" y="6" width="15" height="7" fill="#2B5B84"/>
                <rect x="4" y="3" width="11" height="4" fill="#2B5B84"/>
                <!-- Window with Shiba Head peeking out -->
                <rect x="5" y="4" width="8" height="4" fill="#FFF8E7"/>
                <rect x="7" y="4" width="5" height="4" fill="#E07A2E"/>
                <rect x="7" y="3" width="1" height="1" fill="#4A2E1B"/>
                <rect x="11" y="3" width="1" height="1" fill="#4A2E1B"/>
                <rect x="10" y="5" width="1" height="1" fill="#231815"/>
                <!-- Wheels -->
                <rect x="4" y="12" width="3" height="3" fill="#231815"/>
                <rect x="12" y="12" width="3" height="3" fill="#231815"/>
                <!-- Headlight -->
                <rect x="16" y="8" width="2" height="2" fill="#F5B041"/>
            </svg>`;
        }

        // ==================== 4. RENDER & EDIT ITINERARY FUNCTIONS ====================
        function getGlobalStopNumber(day, indexInDay) {
            let count = 0;
            for (let d = 1; d < day; d++) {
                count += (itineraryData[d]?.stops?.length || 0);
            }
            return count + indexInDay + 1;
        }

        // ---- 小工具：避免使用者輸入的文字把畫面弄壞 ----
        function esc(str) {
            return String(str ?? '').replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
        }

        // ---- 旅程日期：今天是第幾天、下一站是哪一站 ----
        const TRIP_DATES = { 1: '2026-12-04', 2: '2026-12-05', 3: '2026-12-06', 4: '2026-12-07' };
        function todayStr() {
            const d = new Date();
            return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
        }
        function getTodayTripDay() {
            const t = todayStr();
            const hit = Object.entries(TRIP_DATES).find(([, v]) => v === t);
            return hit ? Number(hit[0]) : null;
        }
        function timeToMin(t) {
            const m = /(\d{1,2}):(\d{2})/.exec(t || '');
            return m ? Number(m[1]) * 60 + Number(m[2]) : null;
        }
        function getNextStopIndex(day) {
            if (getTodayTripDay() !== day) return -1;
            const now = new Date();
            const nowMin = now.getHours() * 60 + now.getMinutes();
            const stops = itineraryData[day]?.stops || [];
            // 「現在所在的那一站」= 最後一個已經到時間的站；如果都還沒到，就是第一站
            let idx = -1;
            stops.forEach((st, i) => { const m = timeToMin(st.time); if (m !== null && m <= nowMin) idx = i; });
            return idx === -1 ? 0 : idx;
        }
        function renderTripCountdown() {
            const el = document.getElementById('trip-countdown');
            if (!el) return;
            const start = new Date(TRIP_DATES[1] + 'T00:00:00');
            const today = new Date(todayStr() + 'T00:00:00');
            const diff = Math.round((start - today) / 86400000);
            const tripDay = getTodayTripDay();
            if (tripDay) el.innerText = `🚗 旅行中・今天是 Day ${tripDay}`;
            else if (diff > 0) el.innerText = `⏳ 距離出發還有 ${diff} 天`;
            else el.innerText = '🎉 山陰之旅已圓滿結束';
        }

        // ---- 天氣（Open-Meteo 免費預報，出發前 16 天內才有資料）----
        const DAY_WEATHER_SPOT = {
            1: { name: '境港', lat: 35.54, lon: 133.23 },
            2: { name: '出雲', lat: 35.40, lon: 132.69 },
            3: { name: '米子', lat: 35.43, lon: 133.33 },
            4: { name: '米子', lat: 35.43, lon: 133.33 }
        };
        let weatherCache = {};
        try { weatherCache = JSON.parse(localStorage.getItem('sanin_weather_v1')) || {}; } catch (e) {}
        function weatherIcon(code) {
            if (code === 0) return ['☀️', '晴'];
            if (code <= 2) return ['🌤️', '晴時多雲'];
            if (code === 3) return ['☁️', '陰'];
            if (code <= 48) return ['🌫️', '有霧'];
            if (code <= 57) return ['🌦️', '毛毛雨'];
            if (code <= 67) return ['🌧️', '下雨'];
            if (code <= 77) return ['❄️', '下雪'];
            if (code <= 82) return ['🌧️', '陣雨'];
            if (code <= 86) return ['🌨️', '陣雪'];
            return ['⛈️', '雷雨'];
        }
        async function loadWeather(day) {
            const spot = DAY_WEATHER_SPOT[day];
            const date = TRIP_DATES[day];
            const key = `${day}_${date}`;
            const cached = weatherCache[key];
            if (cached && Date.now() - cached.at < 3 * 3600 * 1000) return false;
            const daysAhead = Math.round((new Date(date + 'T00:00:00') - new Date(todayStr() + 'T00:00:00')) / 86400000);
            if (daysAhead > 15 || daysAhead < 0) {
                weatherCache[key] = { at: Date.now(), na: true, daysAhead };
                return true;
            }
            try {
                const url = `https://api.open-meteo.com/v1/forecast?latitude=${spot.lat}&longitude=${spot.lon}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunset&timezone=Asia%2FTokyo&start_date=${date}&end_date=${date}`;
                const res = await fetch(url);
                if (!res.ok) throw new Error(res.status);
                const d = (await res.json()).daily;
                weatherCache[key] = {
                    at: Date.now(),
                    code: d.weather_code[0],
                    max: Math.round(d.temperature_2m_max[0]),
                    min: Math.round(d.temperature_2m_min[0]),
                    rain: d.precipitation_probability_max[0],
                    sunset: (d.sunset[0] || '').slice(11, 16)
                };
            } catch (e) {
                return false;
            }
            try { localStorage.setItem('sanin_weather_v1', JSON.stringify(weatherCache)); } catch (e) {}
            return true;
        }
        function renderWeatherChip(day) {
            const spot = DAY_WEATHER_SPOT[day];
            const w = weatherCache[`${day}_${TRIP_DATES[day]}`];
            if (!w) return `<div class="mt-2 text-xs bg-white/15 rounded px-2 py-1.5 font-bold">⛅ ${spot.name}天氣讀取中…</div>`;
            if (w.na) {
                const wait = Math.max(0, (w.daysAhead ?? 16) - 15);
                return `<div class="mt-2 text-xs bg-white/15 rounded px-2 py-1.5 font-bold">⛅ ${spot.name}天氣預報：再 ${wait} 天後開放（出發前 16 天內自動顯示）・12 月平均約 4~11°C</div>`;
            }
            const [icon, label] = weatherIcon(w.code);
            const cold = w.min <= 2 ? '<span class="text-[#F5B041]">・⚠️ 低溫注意路面結冰</span>' : '';
            return `<div class="mt-2 text-sm bg-white/15 rounded px-2 py-1.5 font-bold flex flex-wrap gap-x-3 gap-y-0.5 items-center">
                <span>${icon} ${spot.name} ${label}</span>
                <span class="font-mono">${w.min}~${w.max}°C</span>
                <span>☔ ${w.rain ?? '-'}%</span>
                ${w.sunset ? `<span>🌇 日落 ${w.sunset}</span>` : ''}${cold}
            </div>`;
        }

        function selectDay(day, opts = {}) {
            currentDay = day;
            for (let i = 1; i <= 4; i++) {
                const btn = document.getElementById(`day-btn-${i}`);
                const isToday = getTodayTripDay() === i;
                if (i === day) {
                    btn.className = "pixel-btn py-1.5 px-1 text-center bg-[#E07A2E] text-white font-bold relative";
                } else {
                    btn.className = "pixel-btn py-1.5 px-1 text-center bg-white text-[#4A2E1B] font-bold relative";
                }
                const oldBadge = btn.querySelector('.today-badge');
                if (oldBadge) oldBadge.remove();
                if (isToday) btn.insertAdjacentHTML('beforeend', '<span class="today-badge absolute -top-2 -right-1 bg-[#D63E2F] text-white text-[10px] px-1.5 rounded-full border border-[#4A2E1B] font-black">今天</span>');
            }

            const bottomAddNum = document.getElementById('bottom-add-day-num');
            if (bottomAddNum) bottomAddNum.innerText = day;

            const dayObj = itineraryData[day];
            const dialogueEl = document.getElementById('shiba-dialogue');
            if (dialogueEl) dialogueEl.innerText = dayObj.shibaTip;
            const fabStatusEl = document.getElementById('shiba-fab-status');
            if (fabStatusEl) fabStatusEl.innerText = `Day ${day} 秘笈`;

            const nextIdx = getNextStopIndex(day);

            // Render compact summary banner
            const banner = document.getElementById('day-summary-banner');
            banner.innerHTML = `
                <div class="flex justify-between items-center mb-1.5 flex-wrap gap-1.5">
                    <div class="flex items-center gap-1.5">
                        <span class="text-xs bg-[#F5B041] text-[#4A2E1B] font-black px-2 py-0.5 rounded pixel-font">${esc(dayObj.date)}</span>
                        <span class="text-xs font-mono bg-white/20 px-2 py-0.5 rounded font-bold">🕒 ${esc(dayObj.departure)}</span>
                    </div>
                    ${nextIdx >= 0 ? `
                    <button onclick="scrollToStop(${nextIdx})" class="pixel-btn bg-[#F5B041] text-[#4A2E1B] text-xs px-2.5 py-1 font-black pixel-font flex items-center gap-1">
                        <i class="fa-solid fa-location-crosshairs"></i> 跳到現在
                    </button>` : ''}
                </div>
                <div class="font-bold text-sm sm:text-base pixel-font leading-snug">${esc(dayObj.title)}</div>
                ${renderWeatherChip(day)}
            `;

            // Render stops timeline
            const container = document.getElementById('itinerary-timeline');
            if (!dayObj.stops || dayObj.stops.length === 0) {
                container.innerHTML = `
                    <div class="pixel-box p-6 text-center space-y-3 bg-white">
                        <div class="text-base font-bold text-[#6E472B]">這一天目前沒有行程點汪！</div>
                        <button onclick="openAddStopModal()" class="pixel-btn bg-[#E07A2E] text-white px-4 py-2 font-bold text-sm pixel-font">➕ 立即新增第一個景點</button>
                    </div>
                `;
                return;
            }

            container.innerHTML = dayObj.stops.map((stop, idx) => {
                const isFirst = idx === 0;
                const isLast = idx === dayObj.stops.length - 1;
                const isNext = idx === nextIdx;
                const globalNum = getGlobalStopNumber(day, idx);
                const taskKey = `stop_${stop.id || globalNum}`;
                const isChecked = !!completedTasks[taskKey];
                const mapDestination = stop.mapQuery || stop.address || stop.name;
                const photo = getStopPhoto(stop);
                const credit = getStopPhotoCredit(stop);
                const fallback = getStopPhotoFallback(stop);

                return `
                <div class="relative pl-12" id="stop-card-${idx}">
                    ${!isLast ? `<div class="timeline-line"></div>` : ''}
                    <!-- Stop Number Badge -->
                    <div class="absolute left-0 top-1 w-10 h-10 rounded-full ${isNext ? 'bg-[#F5B041] text-[#4A2E1B]' : 'bg-[#D63E2F] text-white'} border-3 border-[#4A2E1B] flex flex-col items-center justify-center z-10 shadow">
                        <span class="text-[10px] leading-none opacity-90 font-bold">${isNext ? 'NOW' : 'STOP'}</span>
                        <span class="text-sm font-black leading-none mt-0.5">${globalNum}</span>
                    </div>

                    <div class="pixel-box p-3.5 space-y-2.5 ${isNext ? 'is-next' : ''} ${isChecked ? 'opacity-80 bg-[#F4F1EA]' : 'bg-white'}">
                        ${isNext ? `<div class="-mt-1 text-xs font-black text-[#D63E2F] pixel-font">📍 你們現在大概在這一站</div>` : ''}
                        <!-- Top Row: Time Badges & Edit/Move Controls -->
                        <div class="flex justify-between items-center gap-2">
                            <span class="font-mono font-black text-base text-[#D63E2F] bg-[#FFF0EE] px-2 py-0.5 rounded border-2 border-[#D63E2F] whitespace-nowrap">${esc(stop.time || '自訂時間')}</span>

                            <!-- Reorder & Edit Buttons -->
                            <div class="flex items-center gap-1 flex-shrink-0">
                                <button onclick="moveStop(${idx}, -1)" ${isFirst ? 'disabled' : ''} class="pixel-btn px-2 py-1 text-xs font-bold ${isFirst ? 'bg-gray-200 text-gray-400 opacity-50 cursor-not-allowed' : 'bg-[#FFF8E7] text-[#4A2E1B]'}" title="往上移" aria-label="往上移">
                                    <i class="fa-solid fa-arrow-up"></i>
                                </button>
                                <button onclick="moveStop(${idx}, 1)" ${isLast ? 'disabled' : ''} class="pixel-btn px-2 py-1 text-xs font-bold ${isLast ? 'bg-gray-200 text-gray-400 opacity-50 cursor-not-allowed' : 'bg-[#FFF8E7] text-[#4A2E1B]'}" title="往下移" aria-label="往下移">
                                    <i class="fa-solid fa-arrow-down"></i>
                                </button>
                                <button onclick="openEditStopModal(${idx})" class="pixel-btn bg-[#F5B041] text-[#4A2E1B] px-2.5 py-1 text-xs font-black flex items-center gap-1">
                                    <i class="fa-solid fa-pen"></i> 編輯
                                </button>
                            </div>
                        </div>

                        ${(stop.stay || stop.tag) ? `
                        <div class="flex items-center gap-1.5 flex-wrap">
                            ${stop.tag ? `<span class="text-xs font-bold bg-[#FCE4B8] text-[#4A2E1B] px-2 py-0.5 rounded border border-[#4A2E1B]">${esc(stop.tag)}</span>` : ''}
                            ${stop.stay ? `<span class="text-xs font-bold text-[#2E7D32] bg-[#E8F5E9] px-2 py-0.5 rounded border border-[#388E3C]">⏳ ${esc(stop.stay)}</span>` : ''}
                        </div>` : ''}

                        <!-- Stop Title -->
                        <h3 class="font-black text-lg text-[#4A2E1B] leading-snug">${esc(stop.name)}</h3>

                        <!-- Scenic Photo Banner -->
                        ${(showPhotos && photo) ? `
                        <div class="relative rounded-md overflow-hidden border-2 border-[#4A2E1B] bg-[#2C221E] group cursor-pointer shadow-sm" onclick="openPhotoLightbox(${idx})">
                            <img src="${esc(photo)}" alt="${esc(stop.name)}" loading="lazy" referrerpolicy="no-referrer"
                                data-fallback="${esc(fallback)}"
                                onerror="if(this.dataset.fallback && this.src!==this.dataset.fallback){this.src=this.dataset.fallback;}else{this.closest('div').remove();}"
                                class="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300">
                            ${credit ? `<span class="absolute top-1.5 left-1.5 bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded">${esc(credit)}</span>` : ''}
                            <div class="absolute bottom-2 right-2 flex gap-1.5">
                                <span class="bg-black/75 text-white text-xs font-bold px-2 py-1 rounded pixel-font flex items-center gap-1">
                                    <i class="fa-solid fa-magnifying-glass-plus"></i> 放大
                                </span>
                                <button onclick="event.stopPropagation(); openEditStopModal(${idx});" class="bg-[#F5B041] text-[#4A2E1B] border border-[#4A2E1B] text-xs font-black px-2 py-1 rounded pixel-font flex items-center gap-1">
                                    <i class="fa-solid fa-camera"></i> 換照片
                                </button>
                            </div>
                        </div>
                        ` : ''}

                        <!-- Address -->
                        ${stop.address ? `
                        <div class="text-sm text-[#6E472B] flex items-start gap-1.5 font-medium">
                            <i class="fa-solid fa-location-dot text-[#D63E2F] mt-1"></i>
                            <span>${esc(stop.address)}</span>
                        </div>
                        ` : ''}

                        <!-- Note Box -->
                        ${stop.note ? `
                        <div class="text-sm bg-[#FFF8E7] p-3 rounded border-2 border-[#4A2E1B]/40 text-[#4A2E1B] leading-relaxed font-medium whitespace-pre-line">${esc(stop.note)}</div>
                        ` : ''}

                        <!-- Checkable Task -->
                        ${stop.checkTask ? `
                        <label class="flex items-center gap-2.5 bg-[#E8F5E9] p-2.5 rounded border-2 border-[#388E3C] cursor-pointer">
                            <input type="checkbox" class="pixel-check" ${isChecked ? 'checked' : ''} onchange="toggleStopTask('${esc(taskKey)}')">
                            <span class="text-sm font-bold text-[#1B5E20] ${isChecked ? 'line-through' : ''}">任務：${esc(stop.checkTask)}</span>
                        </label>
                        ` : ''}

                        <!-- Action Buttons Row -->
                        <div class="flex flex-wrap gap-2 pt-1">
                            <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapDestination)}&travelmode=driving" target="_blank" rel="noopener" class="pixel-btn bg-[#2B5B84] text-white text-sm px-3 py-1.5 font-bold flex items-center gap-1.5">
                                <i class="fa-solid fa-diamond-turn-right"></i> 開車導航
                            </a>
                            ${(!photo) ? `
                            <button onclick="openEditStopModal(${idx})" class="pixel-btn bg-[#FFF8E7] text-[#4A2E1B] text-sm px-3 py-1.5 font-bold flex items-center gap-1.5">
                                <i class="fa-solid fa-camera text-[#E07A2E]"></i> 加照片
                            </button>
                            ` : ''}
                            ${stop.tel ? `
                            <button onclick="copyStopTel(${idx})" class="pixel-btn bg-white text-[#4A2E1B] text-sm px-3 py-1.5 font-bold flex items-center gap-1.5">
                                <i class="fa-solid fa-copy text-[#D63E2F]"></i> 複製電話 ${esc(stop.tel)}
                            </button>
                            ` : ''}
                            ${stop.jpCardKey ? `
                            <button onclick="openFlashcardModal('${esc(stop.jpCardKey)}')" class="pixel-btn bg-[#F5B041] text-[#4A2E1B] text-sm px-3 py-1.5 font-bold flex items-center gap-1.5">
                                <i class="fa-solid fa-hand-point-up"></i> 日文手指卡
                            </button>
                            ` : ''}
                            ${stop.hasFoodRescue ? `
                            <button onclick="switchTab('guide'); switchGuideSubTab('food');" class="pixel-btn bg-[#D63E2F] text-white text-sm px-3 py-1.5 font-bold flex items-center gap-1.5">
                                🦀 免訂位餐廳攻略
                            </button>
                            ` : ''}
                        </div>
                    </div>

                    ${stop.driveNext ? `
                    <div class="mt-2.5 ml-1 inline-flex items-center gap-2 bg-[#4A2E1B] text-[#FFF8E7] text-xs font-bold px-3 py-1 rounded-full pixel-font shadow-sm">
                        ${getMiniShibaCarSvg()}
                        <span>${esc(stop.driveNext)}</span>
                    </div>
                    ` : ''}
                </div>
                `;
            }).join('');

            if (!opts.skipFetch) {
                if (showPhotos) ensureWikiPhotos(day);
                loadWeather(day).then(changed => {
                    if (changed && currentDay === day) {
                        try { localStorage.setItem('sanin_weather_v1', JSON.stringify(weatherCache)); } catch (e) {}
                        selectDay(day, { skipFetch: true, keepScroll: true });
                    }
                });
            }
        }

        function scrollToStop(idx) {
            const el = document.getElementById(`stop-card-${idx}`);
            if (!el) return;
            const top = el.getBoundingClientRect().top + window.scrollY - document.querySelector('.sticky').offsetHeight - 12;
            window.scrollTo({ top, behavior: 'smooth' });
        }

        function copyStopTel(idx) {
            const stop = itineraryData[currentDay].stops[idx];
            if (stop && stop.tel) copyText(stop.tel, `${stop.name} 電話（可輸入車機導航）`);
        }

        // Move a stop up (-1) or down (+1)
        function moveStop(index, direction) {
            const stops = itineraryData[currentDay].stops;
            const targetIndex = index + direction;
            if (targetIndex < 0 || targetIndex >= stops.length) return;
            const temp = stops[index];
            stops[index] = stops[targetIndex];
            stops[targetIndex] = temp;
            saveItineraryToStorage();
            selectDay(currentDay);
            showToast(direction < 0 ? "⬆️ 已將景點順序往上移！" : "⬇️ 已將景點順序往下移！");
        }

        // Open Edit Modal for existing stop
        function openEditStopModal(index) {
            editingStopIndex = index;
            const stop = itineraryData[currentDay].stops[index];
            document.getElementById('edit-modal-title').innerText = `✏️ 編輯 Day ${currentDay} 景點`;
            document.getElementById('edit-stop-time').value = stop.time || '';
            document.getElementById('edit-stop-stay').value = stop.stay || '';
            document.getElementById('edit-stop-name').value = stop.name || '';
            document.getElementById('edit-stop-tag').value = stop.tag || '';
            document.getElementById('edit-stop-tel').value = stop.tel || '';
            document.getElementById('edit-stop-address').value = stop.address || stop.mapQuery || '';
            document.getElementById('edit-stop-img').value = stop.img || '';
            document.getElementById('edit-stop-file').value = '';
            updateEditPhotoPreview(stop.img || '');
            document.getElementById('edit-stop-note').value = stop.note || '';
            document.getElementById('edit-stop-drive').value = stop.driveNext || '';
            document.getElementById('edit-stop-task').value = stop.checkTask || '';

            document.getElementById('delete-stop-btn').classList.remove('hidden');

            const modal = document.getElementById('edit-stop-modal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }

        // Open Add Modal for new stop
        function openAddStopModal() {
            editingStopIndex = null;
            document.getElementById('edit-modal-title').innerText = `➕ 新增 Day ${currentDay} 景點/餐廳`;
            document.getElementById('edit-stop-time').value = '12:30';
            document.getElementById('edit-stop-stay').value = '停留 1 小時';
            document.getElementById('edit-stop-name').value = '';
            document.getElementById('edit-stop-tag').value = '自訂行程';
            document.getElementById('edit-stop-tel').value = '';
            document.getElementById('edit-stop-address').value = '';
            document.getElementById('edit-stop-img').value = '';
            document.getElementById('edit-stop-file').value = '';
            updateEditPhotoPreview('');
            document.getElementById('edit-stop-note').value = '';
            document.getElementById('edit-stop-drive').value = '';
            document.getElementById('edit-stop-task').value = '';

            document.getElementById('delete-stop-btn').classList.add('hidden');

            const modal = document.getElementById('edit-stop-modal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }

        // Photo preview & local mobile image compression helper
        function updateEditPhotoPreview(src) {
            const wrap = document.getElementById('edit-photo-preview-wrap');
            const img = document.getElementById('edit-photo-preview');
            if (src && src.trim()) {
                img.src = src.trim();
                wrap.classList.remove('hidden');
            } else {
                img.src = '';
                wrap.classList.add('hidden');
            }
        }

        function clearEditStopPhoto() {
            document.getElementById('edit-stop-img').value = '';
            document.getElementById('edit-stop-file').value = '';
            updateEditPhotoPreview('');
            showToast("已移除此站照片（請記得按儲存）");
        }

        function handleStopPhotoUpload(event) {
            const file = event.target.files?.[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = function(e) {
                const imgObj = new Image();
                imgObj.onload = function() {
                    // Resize & compress image to max 720px width so it fits nicely in localStorage
                    const canvas = document.createElement('canvas');
                    const maxW = 720;
                    let w = imgObj.width;
                    let h = imgObj.height;
                    if (w > maxW) {
                        h = Math.round((h * maxW) / w);
                        w = maxW;
                    }
                    canvas.width = w;
                    canvas.height = h;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(imgObj, 0, 0, w, h);
                    const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.78);
                    document.getElementById('edit-stop-img').value = compressedDataUrl;
                    updateEditPhotoPreview(compressedDataUrl);
                    showToast("📸 照片已載入！請點下方『儲存行程修改』");
                };
                imgObj.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }

        function openPhotoLightbox(index) {
            const stop = itineraryData[currentDay].stops[index];
            const photo = stop ? getStopPhoto(stop) : '';
            if (!photo) return;
            document.getElementById('lightbox-title').innerText = `📸 ${stop.name}`;
            const lb = document.getElementById('lightbox-img');
            lb.dataset.fallback = getStopPhotoFallback(stop);
            lb.src = photo;
            document.getElementById('lightbox-caption').innerText = getStopPhotoCredit(stop)
                ? `${getStopPhotoCredit(stop)}・點「✏️ 編輯」可換成你們自己拍的照片`
                : '💡 點擊景點的「✏️ 編輯」可更換成自己拍的照片喔！';
            const modal = document.getElementById('photo-lightbox-modal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }

        function closePhotoLightbox() {
            const modal = document.getElementById('photo-lightbox-modal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }

        function closeEditStopModal() {
            const modal = document.getElementById('edit-stop-modal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }

        function saveStopChanges() {
            const nameVal = document.getElementById('edit-stop-name').value.trim();
            if (!nameVal) {
                showToast("汪！請至少輸入景點或餐廳名稱喔！");
                return;
            }

            const updatedObj = {
                id: editingStopIndex !== null ? (itineraryData[currentDay].stops[editingStopIndex].id || 'custom_' + Date.now()) : 'custom_' + Date.now(),
                time: document.getElementById('edit-stop-time').value.trim() || '彈性時間',
                stay: document.getElementById('edit-stop-stay').value.trim(),
                name: nameVal,
                tag: document.getElementById('edit-stop-tag').value.trim() || '行程點',
                tel: document.getElementById('edit-stop-tel').value.trim(),
                address: document.getElementById('edit-stop-address').value.trim(),
                mapQuery: document.getElementById('edit-stop-address').value.trim() || nameVal,
                img: document.getElementById('edit-stop-img').value.trim(),
                note: document.getElementById('edit-stop-note').value.trim(),
                driveNext: document.getElementById('edit-stop-drive').value.trim(),
                checkTask: document.getElementById('edit-stop-task').value.trim()
            };

            if (editingStopIndex !== null) {
                // Preserve special buttons if they existed
                const orig = itineraryData[currentDay].stops[editingStopIndex];
                if (orig.jpCardKey) updatedObj.jpCardKey = orig.jpCardKey;
                if (orig.hasFoodRescue) updatedObj.hasFoodRescue = orig.hasFoodRescue;
                itineraryData[currentDay].stops[editingStopIndex] = updatedObj;
                showToast("✅ 已儲存行程修改汪！");
            } else {
                itineraryData[currentDay].stops.push(updatedObj);
                showToast("➕ 已新增行程點汪！");
            }

            saveItineraryToStorage();
            closeEditStopModal();
            selectDay(currentDay);
        }

        function deleteCurrentStop() {
            if (editingStopIndex === null) return;
            const removed = itineraryData[currentDay].stops.splice(editingStopIndex, 1);
            saveItineraryToStorage();
            closeEditStopModal();
            selectDay(currentDay);
            showToast(`🗑️ 已刪除「${removed[0]?.name || '景點'}」`);
        }

        function openResetConfirmModal() {
            const modal = document.getElementById('reset-confirm-modal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }

        function closeResetConfirmModal() {
            const modal = document.getElementById('reset-confirm-modal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }

        function confirmResetItinerary() {
            itineraryData = JSON.parse(JSON.stringify(defaultItineraryData));
            saveItineraryToStorage();
            closeResetConfirmModal();
            selectDay(currentDay);
            showToast("🔄 已恢復預設的 23 站完整行程！");
        }

        function toggleStopTask(key) {
            completedTasks[key] = !completedTasks[key];
            localStorage.setItem('sanin_tasks_v2', JSON.stringify(completedTasks));
            selectDay(currentDay);
            showToast(completedTasks[key] ? "汪！完成一項任務！" : "已取消勾選");
        }

        // ==================== 5. JAPANESE HELPER & TTS ====================
        function filterJapaneseCards(category) {
            currentJpCategory = category;
            ['all', 'dining', 'car', 'hotel'].forEach(cat => {
                const btn = document.getElementById(`jp-cat-${cat}`);
                if (cat === category) {
                    btn.className = "pixel-btn bg-[#E07A2E] text-white text-sm font-bold px-3.5 py-2 whitespace-nowrap pixel-font";
                } else {
                    btn.className = "pixel-btn bg-white text-[#4A2E1B] text-sm font-bold px-3.5 py-2 whitespace-nowrap pixel-font";
                }
            });
            renderJapaneseCards();
        }

        function renderJapaneseCards() {
            const list = document.getElementById('japanese-cards-list');
            const entries = Object.entries(japaneseCards).filter(([k, item]) => {
                return currentJpCategory === 'all' || item.category === currentJpCategory;
            });

            list.innerHTML = entries.map(([key, item]) => `
                <div class="pixel-box p-4 space-y-2.5 bg-white hover:bg-[#FFFDF9] transition">
                    <div class="flex justify-between items-center flex-wrap gap-2">
                        <span class="bg-[#FCE4B8] text-[#4A2E1B] border border-[#4A2E1B] text-xs font-bold px-2.5 py-1 rounded pixel-font">${item.badge}</span>
                        <div class="flex gap-2">
                            <button onclick="speakJapanese('${item.jp.replace(/'/g, "\\'")}')" class="pixel-btn bg-[#388E3C] text-white text-sm px-3 py-1.5 font-bold flex items-center gap-1.5">
                                <i class="fa-solid fa-volume-high"></i> 發音
                            </button>
                            <button onclick="openFlashcardModal('${key}')" class="pixel-btn bg-[#D63E2F] text-white text-sm px-3 py-1.5 font-bold flex items-center gap-1.5">
                                <i class="fa-solid fa-expand"></i> 全螢幕放大
                            </button>
                        </div>
                    </div>
                    <div class="text-sm font-bold text-[#6E472B]">🇹🇼 ${item.zh}</div>
                    <div onclick="openFlashcardModal('${key}')" class="bg-[#FFF8E7] p-3.5 rounded border-2 border-[#4A2E1B] cursor-pointer">
                        <div class="text-lg font-black text-[#231815] leading-snug">${item.jp}</div>
                        <div class="text-xs text-[#D63E2F] font-mono font-bold mt-1">${item.romaji}</div>
                    </div>
                </div>
            `).join('');
        }

        function openFlashcardModal(key) {
            const item = japaneseCards[key];
            if (!item) return;
            document.getElementById('modal-zh').innerText = `中文意思：${item.zh}`;
            document.getElementById('modal-jp').innerText = item.jp;
            document.getElementById('modal-romaji').innerText = item.romaji;
            const speakBtn = document.getElementById('modal-speak-btn');
            speakBtn.onclick = () => speakJapanese(item.jp);

            const modal = document.getElementById('flashcard-modal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }

        function closeFlashcardModal() {
            const modal = document.getElementById('flashcard-modal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }

        function speakJapanese(text) {
            try {
                if ('speechSynthesis' in window) {
                    window.speechSynthesis.cancel();
                    const utterance = new SpeechSynthesisUtterance(text);
                    utterance.lang = 'ja-JP';
                    utterance.rate = 0.9;
                    window.speechSynthesis.speak(utterance);
                    showToast("🔊 正在播放日文語音汪！");
                } else {
                    showToast("您的瀏覽器不支援語音合成，請直接將畫面出示給店員看！");
                }
            } catch (e) {
                showToast("請直接將大字卡畫面出示給店員看喔！");
            }
        }

        // ==================== 6. EXPENSE SPLITTER & CHECKLIST ====================
        function renderMembersAndExpenses() {
            const memberInputs = document.getElementById('member-names-inputs');
            memberInputs.innerHTML = members.map((m, idx) => `
                <input type="text" value="${esc(m)}" onchange="updateMemberName(${idx}, this.value)" 
                    class="border-2 border-[#4A2E1B] rounded px-2 py-1.5 text-sm font-bold text-center bg-white w-full">
            `).join('');

            const payerSelect = document.getElementById('exp-payer');
            payerSelect.innerHTML = members.map((m, idx) => `
                <option value="${idx}">💳 由 ${esc(m)} 先墊款</option>
            `).join('');

            updateExpenseUI();
        }

        function updateMemberName(idx, newName) {
            if (!newName.trim()) return;
            members[idx] = newName.trim();
            localStorage.setItem('sanin_members_v2', JSON.stringify(members));
            renderMembersAndExpenses();
            showToast("已更新旅伴暱稱！");
        }

        function addExpense() {
            const titleEl = document.getElementById('exp-title');
            const amountEl = document.getElementById('exp-amount');
            const payerEl = document.getElementById('exp-payer');

            const title = titleEl.value.trim();
            const amount = parseInt(amountEl.value, 10);
            const payer = parseInt(payerEl.value, 10);

            if (!title || isNaN(amount) || amount <= 0) {
                showToast("汪！請輸入項目名稱與正確的日幣金額！");
                return;
            }

            expenses.unshift({
                id: Date.now(),
                title,
                amount,
                payer
            });
            localStorage.setItem('sanin_expenses_v2', JSON.stringify(expenses));
            titleEl.value = '';
            amountEl.value = '';
            updateExpenseUI();
            showToast("💰 已新增記帳汪！");
        }

        function deleteExpense(id) {
            expenses = expenses.filter(e => e.id !== id);
            localStorage.setItem('sanin_expenses_v2', JSON.stringify(expenses));
            updateExpenseUI();
            showToast("已刪除該筆帳目");
        }

        function updateExpenseUI() {
            const rate = parseFloat(document.getElementById('fx-rate-input').value) || 0.215;
            const totalJpy = expenses.reduce((sum, e) => sum + e.amount, 0);
            const perPersonJpy = totalJpy / 4;
            const perPersonTwd = Math.round(perPersonJpy * rate);

            document.getElementById('total-jpy').innerText = `¥${totalJpy.toLocaleString()}`;
            document.getElementById('per-person-twd').innerText = `NT$ ${perPersonTwd.toLocaleString()}`;

            const paidByMember = [0, 0, 0, 0];
            expenses.forEach(e => {
                if (paidByMember[e.payer] !== undefined) {
                    paidByMember[e.payer] += e.amount;
                }
            });

            const settlementBox = document.getElementById('settlement-box');
            settlementBox.innerHTML = `<div class="text-[#F5B041] font-bold mb-1">⚖️ 每人應分攤 ¥${Math.round(perPersonJpy).toLocaleString()} (約 NT$${perPersonTwd.toLocaleString()})：</div>` +
                members.map((m, idx) => {
                    const diffJpy = Math.round(paidByMember[idx] - perPersonJpy);
                    const diffTwd = Math.round(diffJpy * rate);
                    if (diffJpy > 0) {
                        return `<div class="flex justify-between"><span>🟢 ${m} (已墊 ¥${paidByMember[idx].toLocaleString()})</span><span class="text-[#4CAF50] font-bold">應收回 NT$ ${diffTwd.toLocaleString()}</span></div>`;
                    } else if (diffJpy < 0) {
                        return `<div class="flex justify-between"><span>🔸 ${m} (已墊 ¥${paidByMember[idx].toLocaleString()})</span><span class="text-[#FF8A80] font-bold">需給出 NT$ ${Math.abs(diffTwd).toLocaleString()}</span></div>`;
                    } else {
                        return `<div class="flex justify-between"><span>⚪ ${m}</span><span>剛好結清</span></div>`;
                    }
                }).join('') + renderTransfers(paidByMember, perPersonJpy, rate);

            const listEl = document.getElementById('expense-list');
            listEl.innerHTML = expenses.map(e => `
                <div class="pixel-box p-3 bg-white flex justify-between items-center gap-2">
                    <div>
                        <div class="font-bold text-sm text-[#4A2E1B]">${esc(e.title)}</div>
                        <div class="text-xs text-[#6E472B] mt-0.5">先墊：<b>${esc(members[e.payer] || '旅伴')}</b> ｜ 約 NT$ ${Math.round(e.amount * rate).toLocaleString()}</div>
                    </div>
                    <div class="flex items-center gap-2.5">
                        <span class="font-mono font-black text-base text-[#D63E2F]">¥${e.amount.toLocaleString()}</span>
                        <button onclick="deleteExpense(${e.id})" class="text-sm text-gray-400 hover:text-[#D63E2F] px-1.5 py-1">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </div>
            `).join('');
        }

        // 算出「誰該轉給誰多少」，用最少的轉帳次數結清
        function computeTransfers(paidByMember, perPersonJpy) {
            const bal = members.map((m, i) => ({ i, v: Math.round(paidByMember[i] - perPersonJpy) }));
            const debtors = bal.filter(b => b.v < 0).map(b => ({ ...b, v: -b.v })).sort((a, b) => b.v - a.v);
            const creditors = bal.filter(b => b.v > 0).sort((a, b) => b.v - a.v);
            const out = [];
            let d = 0, c = 0;
            while (d < debtors.length && c < creditors.length) {
                const amt = Math.min(debtors[d].v, creditors[c].v);
                if (amt > 0) out.push({ from: debtors[d].i, to: creditors[c].i, jpy: amt });
                debtors[d].v -= amt; creditors[c].v -= amt;
                if (debtors[d].v <= 0) d++;
                if (creditors[c].v <= 0) c++;
            }
            return out;
        }
        function renderTransfers(paidByMember, perPersonJpy, rate) {
            const list = computeTransfers(paidByMember, perPersonJpy);
            if (!list.length) return '';
            return `<div class="mt-2 pt-2 border-t border-[#F5B041]/40">
                <div class="text-[#F5B041] font-bold mb-1">💸 這樣轉帳就結清了（共 ${list.length} 筆）：</div>
                ${list.map(t => `<div class="flex justify-between gap-2 bg-[#4A2E1B] rounded px-2 py-1 mb-1">
                    <span>${esc(members[t.from])} ➜ ${esc(members[t.to])}</span>
                    <span class="font-mono font-bold text-[#F5B041] whitespace-nowrap">NT$ ${Math.round(t.jpy * rate).toLocaleString()}<span class="text-xs text-gray-300">（¥${t.jpy.toLocaleString()}）</span></span>
                </div>`).join('')}
            </div>`;
        }

        function exportExpensesToLine() {
            const rate = parseFloat(document.getElementById('fx-rate-input').value) || 0.215;
            const totalJpy = expenses.reduce((sum, e) => sum + e.amount, 0);
            const perPersonTwd = Math.round((totalJpy / 4) * rate);

            let text = `🐕【山陰 4 日自駕旅費結算單】\n`;
            text += `總花費：¥${totalJpy.toLocaleString()} (匯率 ${rate})\n`;
            text += `每人平均：約 NT$ ${perPersonTwd.toLocaleString()}\n\n`;
            text += `📋 明細：\n`;
            expenses.forEach(e => {
                text += `• ${e.title}：¥${e.amount.toLocaleString()} (${members[e.payer]}墊)\n`;
            });
            const paid = members.map(() => 0);
            expenses.forEach(e => { if (paid[e.payer] !== undefined) paid[e.payer] += e.amount; });
            const transfers = computeTransfers(paid, totalJpy / members.length);
            if (transfers.length) {
                text += `\n💸 轉帳結清：\n`;
                transfers.forEach(t => {
                    text += `• ${members[t.from]} ➜ ${members[t.to]}：NT$ ${Math.round(t.jpy * rate).toLocaleString()}\n`;
                });
            }

            copyText(text, "LINE 分帳結算明細");
        }

        function saveChecklist() {
            localStorage.setItem('sanin_checklist_v2', JSON.stringify(checklist));
        }

        function renderChecklist() {
            const container = document.getElementById('packing-checklist');
            container.innerHTML = checklist.map((item, idx) => `
                <div class="flex items-center gap-2 p-3 rounded bg-[#FFF8E7] border-2 border-[#4A2E1B]">
                    <label class="flex items-center gap-3 flex-1 min-w-0 cursor-pointer">
                        <input type="checkbox" class="pixel-check" ${item.done ? 'checked' : ''} onchange="toggleCheckItem(${idx})">
                        <span class="text-sm font-bold ${item.done ? 'line-through text-gray-400' : 'text-[#4A2E1B]'}">${esc(item.text)}</span>
                    </label>
                    ${item.custom ? `<button onclick="deleteCheckItem(${idx})" class="text-gray-400 hover:text-[#D63E2F] px-1.5" aria-label="刪除"><i class="fa-solid fa-trash-can"></i></button>` : ''}
                </div>
            `).join('');
            const done = checklist.filter(i => i.done).length;
            document.getElementById('checklist-count').innerText = `${done} / ${checklist.length}`;
            document.getElementById('checklist-bar').style.width = checklist.length ? `${Math.round(done / checklist.length * 100)}%` : '0%';
        }

        function toggleCheckItem(idx) {
            checklist[idx].done = !checklist[idx].done;
            saveChecklist();
            renderChecklist();
            if (checklist.every(i => i.done)) showToast("🎉 全部準備好了，出發汪！");
        }

        function addCheckItem() {
            const input = document.getElementById('check-new-item');
            const text = input.value.trim();
            if (!text) return;
            checklist.push({ id: 'c_' + Date.now(), text, done: false, custom: true });
            saveChecklist();
            input.value = '';
            renderChecklist();
            showToast("已加入清單！");
        }

        function deleteCheckItem(idx) {
            checklist.splice(idx, 1);
            saveChecklist();
            renderChecklist();
        }

        // ==================== 7. NAVIGATION & UI HELPERS ====================
        function switchTab(tabName) {
            const tabs = ['itinerary', 'japanese', 'guide', 'voucher', 'expense'];
            const dayBar = document.getElementById('sticky-day-bar');
            if (dayBar) {
                if (tabName === 'itinerary') {
                    dayBar.classList.remove('hidden');
                } else {
                    dayBar.classList.add('hidden');
                }
            }

            tabs.forEach(t => {
                const sec = document.getElementById(`tab-${t}`);
                const navBtn = document.getElementById(`nav-${t}`);
                if (t === tabName) {
                    sec.classList.remove('hidden');
                    navBtn.className = "flex flex-col items-center justify-center py-1.5 rounded bg-[#E07A2E] text-white transition-all relative";
                } else {
                    sec.classList.add('hidden');
                    navBtn.className = "flex flex-col items-center justify-center py-1.5 rounded text-[#FFF8E7] hover:bg-white/10 transition-all relative";
                }
            });
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function switchGuideSubTab(sub) {
            const foodView = document.getElementById('guide-view-food');
            const shrineView = document.getElementById('guide-view-shrine');
            const foodBtn = document.getElementById('guide-btn-food');
            const shrineBtn = document.getElementById('guide-btn-shrine');

            if (sub === 'food') {
                foodView.classList.remove('hidden');
                shrineView.classList.add('hidden');
                foodBtn.className = "pixel-btn bg-[#E07A2E] text-white py-2.5 font-bold text-base pixel-font";
                shrineBtn.className = "pixel-btn bg-white text-[#4A2E1B] py-2.5 font-bold text-base pixel-font";
            } else {
                shrineView.classList.remove('hidden');
                foodView.classList.add('hidden');
                shrineBtn.className = "pixel-btn bg-[#E07A2E] text-white py-2.5 font-bold text-base pixel-font";
                foodBtn.className = "pixel-btn bg-white text-[#4A2E1B] py-2.5 font-bold text-base pixel-font";
            }
        }

        function switchExpenseSubTab(sub) {
            const billView = document.getElementById('exp-view-bill');
            const checkView = document.getElementById('exp-view-check');
            const billBtn = document.getElementById('exp-btn-bill');
            const checkBtn = document.getElementById('exp-btn-check');

            if (sub === 'bill') {
                billView.classList.remove('hidden');
                checkView.classList.add('hidden');
                billBtn.className = "pixel-btn bg-[#E07A2E] text-white py-2.5 font-bold text-base pixel-font";
                checkBtn.className = "pixel-btn bg-white text-[#4A2E1B] py-2.5 font-bold text-base pixel-font";
            } else {
                checkView.classList.remove('hidden');
                billView.classList.add('hidden');
                checkBtn.className = "pixel-btn bg-[#E07A2E] text-white py-2.5 font-bold text-base pixel-font";
                billBtn.className = "pixel-btn bg-white text-[#4A2E1B] py-2.5 font-bold text-base pixel-font";
            }
        }

        function toggleShibaPopover(forceState) {
            const pop = document.getElementById('shiba-popover');
            const dot = document.getElementById('shiba-notif-dot');
            const isHidden = pop.classList.contains('hidden');
            const nextState = typeof forceState === 'boolean' ? forceState : isHidden;

            if (nextState) {
                pop.classList.remove('hidden');
                if (dot) dot.classList.add('hidden');
            } else {
                pop.classList.add('hidden');
            }
        }

        function pokeShiba() {
            const randomQuote = shibaQuotes[Math.floor(Math.random() * shibaQuotes.length)];
            document.getElementById('shiba-dialogue').innerText = randomQuote;
            showToast("🐕 汪汪！（豆助換了一條實用提醒）");
        }

        function copyText(text, label) {
            const fallback = () => {
                const textarea = document.createElement('textarea');
                textarea.value = text;
                textarea.setAttribute('readonly', '');
                textarea.style.position = 'fixed';
                textarea.style.opacity = '0';
                document.body.appendChild(textarea);
                textarea.select();
                let ok = false;
                try { ok = document.execCommand('copy'); } catch (err) {}
                document.body.removeChild(textarea);
                showToast(ok ? `已複製：${label}` : "複製失敗，請長按文字手動複製");
            };
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(text).then(() => showToast(`已複製：${label}`), fallback);
            } else {
                fallback();
            }
        }

        let toastTimer = null;
        function showToast(msg) {
            const toast = document.getElementById('pixel-toast');
            document.getElementById('pixel-toast-msg').innerText = msg;
            toast.classList.remove('hidden');
            toast.classList.add('flex');
            if (toastTimer) clearTimeout(toastTimer);
            toastTimer = setTimeout(() => {
                toast.classList.add('hidden');
                toast.classList.remove('flex');
            }, 2600);
        }

        // Initialize App on Load
        window.onload = function () {
            applyFontSize();
            updatePhotoToggleBtn();
            renderTripCountdown();
            const tripDay = getTodayTripDay();
            selectDay(tripDay || 1);
            if (tripDay) setTimeout(() => scrollToStop(getNextStopIndex(tripDay)), 400);
            // 旅行中每分鐘更新一次「現在在哪站」
            setInterval(() => {
                renderTripCountdown();
                if (getTodayTripDay() === currentDay && !document.getElementById('tab-itinerary').classList.contains('hidden')) {
                    selectDay(currentDay, { skipFetch: true });
                }
            }, 60000);
            renderJapaneseCards();
            renderMembersAndExpenses();
            renderChecklist();
        };

        // ==================== 8. 網頁 App：離線快取 ====================
        if ('serviceWorker' in navigator && location.protocol !== 'file:') {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('sw.js').catch(() => {});
            });
            // 第一次開啟時，字型與照片在離線快取啟動「之前」就載完了，這裡補抓一次讓它們也存進手機
            navigator.serviceWorker.ready.then(() => {
                const warm = () => {
                    const hosts = ['fonts.googleapis.com', 'fonts.gstatic.com', 'cdnjs.cloudflare.com', 'upload.wikimedia.org', 'thumb.wikimedia.org'];
                    performance.getEntriesByType('resource')
                        .map(e => e.name)
                        .filter(u => { try { return hosts.includes(new URL(u).hostname); } catch (e) { return false; } })
                        // 字型檔要用 cors 模式存，之後瀏覽器才肯拿來用；照片和樣式表用 no-cors 即可
                        .forEach(u => {
                            const h = new URL(u).hostname;
                            const mode = (h === 'fonts.gstatic.com' || h === 'cdnjs.cloudflare.com') ? 'cors' : 'no-cors';
                            fetch(u, { mode }).catch(() => {});
                        });
                };
                const warmTwice = () => { warm(); setTimeout(warm, 5000); }; // 字型檔常常晚一點才載，5 秒後再補一次
                if (navigator.serviceWorker.controller) warmTwice();
                else navigator.serviceWorker.addEventListener('controllerchange', warmTwice, { once: true });
            });
        }
