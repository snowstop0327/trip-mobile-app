        // ==================== 1. DEFAULT 23-STOP ITINERARY DATA & CURATED PHOTOS ====================
        // Default curated scenic photos mapped by stop ID so existing users immediately get photos too!
        // 原版用的是 Unsplash 圖庫照（跟景點本身無關），改成在執行時向維基百科抓「該景點的真實照片」
        const LEGACY_STOCK_PREFIX = "https://images.unsplash.com/";
        const defaultStopPhotos = {}; // 保留變數名稱，讓下方行程資料的 img 欄位維持空白
        // 景點照片：已從維基百科下載到 photos/ 資料夾（開放授權照片），不用再即時連維基，離線也看得到
        const STOP_PHOTOS = {
            s1: 'taoyuan-city', s2: 'tpe-airport', s3: 'tpe-t1', s4: 'yonago-airport', s5: 'voxy',
            s6: 'mizuki-road', s7: 'mizuki-road', s8: 'matsue-castle', s9: 'mankusen', s10: 'izumo-soba',
            s11: 'izumo-taisha', s12: 'hinomisaki-lighthouse', s13: 'hinomisaki-shrine', s14: 'conan',
            s15: 'pear-museum', s16: 'snow-crab', s17: 'yonago-station', s18: 'yonago-castle', s19: 'voxy',
            s20: 'yonago-airport', s21: 'tpe-t1', s22: 'tpe-airport', s23: 'taoyuan-city'
        };
        const PHOTO_CREDITS = {
            'taoyuan-city': { title: '桃園市', file: 'Qingpu,_Taoyuan_City_Skyline_2024.jpg' },
            'tpe-airport': { title: '臺灣桃園國際機場', file: 'Taoyuan_International_Airport.jpg' },
            'tpe-t1': { title: '臺灣桃園國際機場第一航廈', file: 'Exterior_of_Terminal_1,_Taoyuan_Airport_20141230.jpg' },
            'yonago-airport': { title: '美保飛行場', file: '150321_Yonago_Airport_Yonago_Tottori_pref_Japan01s3.jpg' },
            'voxy': { title: 'トヨタ・ヴォクシー', file: '2022_Toyota_Voxy_(Indonesia)_front_view.jpg' },
            'mizuki-road': { title: '水木しげるロード', file: 'Mizuki_Shigeru_Road_2026.jpg' },
            'matsue-castle': { title: '松江城', file: 'Matsue_Castle_Keep_Tower_20230617.jpg' },
            'mankusen': { title: '万九千神社', file: 'Makusenoyashiro.JPG' },
            'izumo-soba': { title: '出雲そば', file: 'IzumoSoba_WarigoSoba_5dan.jpg' },
            'izumo-taisha': { title: '出雲大社', file: 'Haiden_of_Izumo-taisha-1.JPG' },
            'hinomisaki-lighthouse': { title: '出雲日御碕灯台', file: 'Hinomisaki_lighthouse_Izumo01bs3200.jpg' },
            'hinomisaki-shrine': { title: '日御碕神社', file: 'Hinomisaki-jinja_Two-storied_Gate_001.jpg' },
            'conan': { title: '青山剛昌ふるさと館', file: 'Gosho_Aoyama_Manga_Factory.jpg' },
            'pear-museum': { title: '鳥取二十世紀梨記念館', file: 'Tottori_Nijisseiki_Pear_Museum01n4592.jpg' },
            'snow-crab': { title: 'ズワイガニ', file: 'Chionoecetes_opilio_Kanikkokan.jpg' },
            'yonago-station': { title: '米子駅', file: '米子駅駅舎.jpg' },
            'yonago-castle': { title: '米子城', file: 'Yonago_Castle,_honmaru-1.jpg' }
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

        function getStopPhoto(stop) {
            if (stop.img) return stop.img;
            const name = STOP_PHOTOS[stop.id];
            return name ? `photos/${name}.jpg` : '';
        }
        function getStopPhotoFallback(stop) { return ''; }
        function getStopPhotoCredit(stop) {
            if (stop.img) return '';
            const name = STOP_PHOTOS[stop.id];
            const c = name && PHOTO_CREDITS[name];
            return c ? (c.note || `照片：維基百科「${c.title}」`) : '';
        }
        function ensureWikiPhotos() { /* 照片已內建，不需要再抓 */ }

        function saveItineraryToStorage() {
            localStorage.setItem('sanin_custom_itinerary_v3', JSON.stringify(itineraryData));
        }

        // ==================== 2. JAPANESE POINT-AND-SPEAK PHRASEBOOK DATA ====================
        // 分類：一般旅遊會用到的短句（basic/dining/shop/move/car/hotel/sos），以及這趟行程專用的長句（trip）
        const JP_CATEGORIES = [
            { id: 'basic',  label: '👋 基本' },
            { id: 'dining', label: '🍜 餐廳' },
            { id: 'shop',   label: '🛍️ 購物' },
            { id: 'move',   label: '🚶 問路交通' },
            { id: 'car',    label: '🚐 開車' },
            { id: 'hotel',  label: '♨️ 飯店' },
            { id: 'sos',    label: '🆘 緊急' },
            { id: 'trip',   label: '🗾 這趟專用' }
        ];
        const P = (category, zh, jp, romaji, extra) => Object.assign({ category, zh, jp, romaji }, extra || {});
        const japaneseCards = {
            // 👋 基本
            hello:      P('basic', '你好', 'こんにちは', 'Konnichiwa'),
            thanks:     P('basic', '謝謝', 'ありがとうございます', 'Arigatou gozaimasu'),
            excuse:     P('basic', '不好意思／請問一下', 'すみません', 'Sumimasen'),
            sorry:      P('basic', '對不起', 'ごめんなさい', 'Gomen nasai'),
            yesno:      P('basic', '是的／不是', 'はい／いいえ', 'Hai / Iie', { say: 'はい。いいえ。' }),
            ok:         P('basic', '好的，沒問題', '大丈夫です', 'Daijoubu desu'),
            nojp:       P('basic', '我不太會說日文', '日本語があまり話せません', 'Nihongo ga amari hanasemasen'),
            slowly:     P('basic', '可以說慢一點嗎？', 'ゆっくり話してもらえますか？', 'Yukkuri hanashite moraemasu ka?'),
            write:      P('basic', '可以寫下來給我看嗎？', '書いてもらえますか？', 'Kaite moraemasu ka?'),
            english:    P('basic', '會說英文嗎？', '英語は話せますか？', 'Eigo wa hanasemasu ka?'),
            taiwan:     P('basic', '我們是從台灣來的', '台湾から来ました', 'Taiwan kara kimashita'),
            photo_ok:   P('basic', '這裡可以拍照嗎？', '写真を撮ってもいいですか？', 'Shashin wo totte mo ii desu ka?'),
            photo_us:   P('basic', '可以幫我們拍照嗎？', '写真を撮ってもらえますか？', 'Shashin wo totte moraemasu ka?'),

            // 🍜 餐廳
            four:       P('dining', '我們 4 個人', '4人です', 'Yonin desu'),
            noresv:     P('dining', '我們沒有預約', '予約していません', 'Yoyaku shite imasen'),
            wait:       P('dining', '大概要等多久？', 'どのくらい待ちますか？', 'Dono kurai machimasu ka?'),
            menu:       P('dining', '請給我菜單', 'メニューをください', 'Menyuu wo kudasai'),
            menu_en:    P('dining', '有中文或英文菜單嗎？', '中国語か英語のメニューはありますか？', 'Chuugokugo ka eigo no menyuu wa arimasu ka?'),
            recommend:  P('dining', '有推薦的嗎？', 'おすすめは何ですか？', 'Osusume wa nan desu ka?'),
            this_one:   P('dining', '我要這個（手指菜單）', 'これをお願いします', 'Kore wo onegaishimasu'),
            two_this:   P('dining', '這個要兩份', 'これを2つお願いします', 'Kore wo futatsu onegaishimasu'),
            water:      P('dining', '請給我水', 'お水をください', 'Omizu wo kudasai'),
            plates:     P('dining', '請給我們小盤子（分著吃）', '取り皿をください', 'Torizara wo kudasai'),
            noraw:      P('dining', '我不敢吃生的', '生ものが食べられません', 'Namamono ga taberaremasen'),
            oishii:     P('dining', '很好吃！', 'とてもおいしいです！', 'Totemo oishii desu!'),
            bill:       P('dining', '麻煩結帳', 'お会計お願いします', 'Okaikei onegaishimasu'),
            separate:   P('dining', '可以分開付嗎？', '別々に払えますか？', 'Betsubetsu ni haraemasu ka?'),
            takeout:    P('dining', '可以外帶嗎？', '持ち帰りできますか？', 'Mochikaeri dekimasu ka?'),

            // 🛍️ 購物
            howmuch:    P('shop', '這個多少錢？', 'これはいくらですか？', 'Kore wa ikura desu ka?'),
            card:       P('shop', '可以刷卡嗎？', 'カードは使えますか？', 'Kaado wa tsukaemasu ka?'),
            taxfree:    P('shop', '可以免稅嗎？', '免税できますか？', 'Menzei dekimasu ka?'),
            other_col:  P('shop', '有其他顏色嗎？', 'ほかの色はありますか？', 'Hoka no iro wa arimasu ka?'),
            justlook:   P('shop', '我只是看看', '見ているだけです', 'Mite iru dake desu'),
            nobag:      P('shop', '不用袋子', '袋はいりません', 'Fukuro wa irimasen'),
            bag:        P('shop', '請給我袋子', '袋をください', 'Fukuro wo kudasai'),
            gift:       P('shop', '可以幫我包成送禮用的嗎？', 'プレゼント用に包んでもらえますか？', 'Purezento-you ni tsutsunde moraemasu ka?'),
            receipt:    P('shop', '請給我收據', 'レシートをください', 'Reshiito wo kudasai'),
            goshuin2:   P('shop', '（神社）請幫我寫御朱印', '御朱印をお願いします', 'Goshuin wo onegaishimasu'),

            // 🚶 問路交通
            toilet:     P('move', '廁所在哪裡？', 'トイレはどこですか？', 'Toire wa doko desu ka?'),
            here:       P('move', '這個地方要怎麼去？（手指地圖）', 'ここへはどうやって行きますか？', 'Koko e wa dou yatte ikimasu ka?'),
            walk:       P('move', '走路到得了嗎？', '歩いて行けますか？', 'Aruite ikemasu ka?'),
            howlong:    P('move', '要多久時間？', 'どのくらいかかりますか？', 'Dono kurai kakarimasu ka?'),
            station:    P('move', '車站在哪裡？', '駅はどこですか？', 'Eki wa doko desu ka?'),
            konbini:    P('move', '附近有便利商店嗎？', '近くにコンビニはありますか？', 'Chikaku ni konbini wa arimasu ka?'),
            taxi_call:  P('move', '可以幫我叫計程車嗎？', 'タクシーを呼んでもらえますか？', 'Takushii wo yonde moraemasu ka?'),
            taxi_go:    P('move', '（計程車）請到這個地址', 'この住所までお願いします', 'Kono juusho made onegaishimasu'),

            // 🚐 開車
            park_where: P('car', '停車場在哪裡？', '駐車場はどこですか？', 'Chuushajou wa doko desu ka?'),
            park_ok:    P('car', '車可以停在這裡嗎？', 'ここに車を停めてもいいですか？', 'Koko ni kuruma wo tomete mo ii desu ka?'),
            park_fee:   P('car', '停車費多少錢？', '駐車料金はいくらですか？', 'Chuusha ryoukin wa ikura desu ka?'),
            fillup:     P('car', '一般汽油，加滿', 'レギュラー満タンでお願いします', 'Regyuraa mantan de onegaishimasu'),
            rental:     P('car', '我有預約租車', 'レンタカーを予約しています', 'Rentakaa wo yoyaku shite imasu'),
            carhelp:    P('car', '車子出問題了', '車が故障しました', 'Kuruma ga koshou shimashita'),

            // ♨️ 飯店
            checkin:    P('hotel', '我要辦理入住', 'チェックインお願いします', 'Chekku-in onegaishimasu'),
            luggage:    P('hotel', '可以幫我寄放行李嗎？', '荷物を預かってもらえますか？', 'Nimotsu wo azukatte moraemasu ka?'),
            breakfast:  P('hotel', '早餐幾點開始？', '朝食は何時からですか？', 'Choushoku wa nanji kara desu ka?'),
            bath:       P('hotel', '溫泉開到幾點？', 'お風呂は何時までですか？', 'Ofuro wa nanji made desu ka?'),
            wifi:       P('hotel', 'Wi-Fi 密碼是什麼？', 'Wi-Fiのパスワードを教えてください', 'Wai-fai no pasuwaado wo oshiete kudasai', { say: 'ワイファイのパスワードを教えてください' }),
            checkout:   P('hotel', '我要退房', 'チェックアウトお願いします', 'Chekku-auto onegaishimasu'),

            // 🆘 緊急
            help:       P('sos', '請幫幫我！', '助けてください！', 'Tasukete kudasai!'),
            ambulance:  P('sos', '請叫救護車', '救急車を呼んでください', 'Kyuukyuusha wo yonde kudasai'),
            sick:       P('sos', '我身體不舒服', '気分が悪いです', 'Kibun ga warui desu'),
            pharmacy:   P('sos', '附近有藥局嗎？', '近くに薬局はありますか？', 'Chikaku ni yakkyoku wa arimasu ka?'),
            hospital:   P('sos', '附近有醫院嗎？', '近くに病院はありますか？', 'Chikaku ni byouin wa arimasu ka?'),
            lost_item:  P('sos', '我的錢包不見了', '財布をなくしました', 'Saifu wo nakushimashita'),
            lost_way:   P('sos', '我迷路了', '道に迷いました', 'Michi ni mayoimashita'),
            police:     P('sos', '派出所在哪裡？', '交番はどこですか？', 'Kouban wa doko desu ka?'),

            // 🗾 這趟專用（行程卡片上的按鈕會打開這些）
            walkin4:      P('trip', '不好意思，我們沒有預約，現在 4 個人有位子嗎？', 'すみません、予約していませんが、4人入れますか？', 'Sumimasen, yoyaku shite imasen ga, yonin hairemasu ka?', { badge: '🦀 沒訂位進餐廳' }),
            waitlist:     P('trip', '我們可以等。名字要寫在哪裡？大概要等多久？', '待ちます。名前はどこに書きますか？どのくらい待ちますか？', 'Machimasu. Namae wa doko ni kakimasu ka? Dono kurai machimasu ka?', { badge: '📝 客滿候位' }),
            soba:         P('trip', '請給我們「三段割子蕎麥麵」，還有推薦什麼？', '三段割子そばをお願いします。おすすめは何ですか？', 'Sandan warigo soba wo onegaishimasu. Osusume wa nan desu ka?', { badge: '🍜 出雲蕎麥麵' }),
            crab_meat:    P('trip', '我們想吃松葉蟹或鳥取和牛，有適合 4 個人的套餐嗎？', '松葉ガニか鳥取和牛を食べたいです。4人におすすめのセットはありますか？', 'Matsubagani ka Tottori wagyuu wo tabetai desu. Yonin ni osusume no setto wa arimasu ka?', { badge: '🦀 螃蟹／和牛' }),
            no_raw:       P('trip', '請給我們 4 個小盤子。可以刷卡嗎？', '取り皿を4枚お願いします。カードは使えますか？', 'Torizara wo yonmai onegaishimasu. Kaado wa tsukaemasu ka?', { badge: '🍽️ 分食＆刷卡' }),
            airport_car:  P('trip', '我們有預約 TOYOTA 租車，接駁車在哪裡搭？', 'トヨタレンタカーを予約しています。送迎バスの乗り場はどこですか？', 'Toyota rentakaa wo yoyaku shite imasu. Sougei basu no noriba wa doko desu ka?', { badge: '🛬 米子機場租車' }),
            foldseat:     P('trip', '我們 4 個人有大行李，可以幫忙把第三排座椅收起來嗎？', '4人で大きい荷物があるので、3列目のシートをたたんでもらえますか？', 'Yonin de ookii nimotsu ga aru node, sanretsume no shiito wo tatande moraemasu ka?', { badge: '🚐 取車收座椅' }),
            gas:          P('trip', '一般汽油加滿，請給我收據（還車要用）', 'レギュラー満タンでお願いします。レシートをください。', 'Regyuraa mantan de onegaishimasu. Reshiito wo kudasai.', { badge: '⛽ 還車前加油' }),
            parking:      P('trip', '請問店家的停車場在哪裡？', 'お店の駐車場はどこですか？', 'Omise no chuushajou wa doko desu ka?', { badge: '🅿️ 找店家停車場' }),
            hotel_checkin:P('trip', '我們要辦入住，4 個人。車要停在哪裡？', 'チェックインお願いします。4人です。駐車場はどこですか？', 'Chekku-in onegaishimasu. Yonin desu. Chuushajou wa doko desu ka?', { badge: '♨️ 飯店入住' }),
            goshuin:      P('trip', '請幫我寫這裡的御朱印', 'こちらの御朱印をお願いします', 'Kochira no goshuin wo onegaishimasu', { badge: '⛩️ 神社御朱印' })
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
                            <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(stop.mapQuery || stop.name)}" target="_blank" rel="noopener" class="pixel-btn bg-[#FFF8E7] text-[#2B5B84] text-sm px-3 py-1.5 font-bold flex items-center gap-1.5">
                                <i class="fa-solid fa-images"></i> 地圖看實景照
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
                                🍜 周邊美食
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
        const JP_PILL_ON = "pixel-btn bg-[#E07A2E] text-white text-sm font-bold px-3.5 py-2 whitespace-nowrap pixel-font";
        const JP_PILL_OFF = "pixel-btn bg-white text-[#4A2E1B] text-sm font-bold px-3.5 py-2 whitespace-nowrap pixel-font";

        function renderJpCategoryPills() {
            const wrap = document.getElementById('jp-cat-pills');
            if (!wrap) return;
            const cats = [{ id: 'all', label: '全部' }, ...JP_CATEGORIES];
            wrap.innerHTML = cats.map(c => `
                <button onclick="filterJapaneseCards('${c.id}')" class="${c.id === currentJpCategory ? JP_PILL_ON : JP_PILL_OFF}">${c.label}</button>
            `).join('');
        }

        function filterJapaneseCards(category) {
            currentJpCategory = category;
            renderJapaneseCards();
        }

        function renderJapaneseCards() {
            renderJpCategoryPills();
            const list = document.getElementById('japanese-cards-list');
            const cats = currentJpCategory === 'all' ? JP_CATEGORIES : JP_CATEGORIES.filter(c => c.id === currentJpCategory);
            list.innerHTML = cats.map(cat => {
                const entries = Object.entries(japaneseCards).filter(([, item]) => item.category === cat.id);
                if (!entries.length) return '';
                return `
                <div class="space-y-2">
                    <div class="text-base font-black text-[#4A2E1B] pixel-font pt-1">${cat.label}</div>
                    ${entries.map(([key, item]) => `
                    <div class="pixel-box bg-white flex items-stretch">
                        <button onclick="openFlashcardModal('${key}')" class="flex-1 text-left p-3 min-w-0">
                            ${item.badge ? `<span class="inline-block bg-[#FCE4B8] text-[#4A2E1B] border border-[#4A2E1B] text-xs font-bold px-2 py-0.5 rounded pixel-font mb-1">${item.badge}</span>` : ''}
                            <div class="text-sm font-bold text-[#6E472B]">${item.zh}</div>
                            <div class="text-lg font-black text-[#231815] leading-snug mt-0.5">${item.jp}</div>
                            <div class="text-xs text-[#D63E2F] font-mono font-bold mt-0.5">${item.romaji}</div>
                        </button>
                        <button onclick="speakJapanese('${key}')" aria-label="播放日文" class="shrink-0 w-14 border-l-2 border-[#4A2E1B] bg-[#388E3C] text-white text-xl flex items-center justify-center">
                            <i class="fa-solid fa-volume-high"></i>
                        </button>
                    </div>`).join('')}
                </div>`;
            }).join('');
        }

        function openFlashcardModal(key) {
            const item = japaneseCards[key];
            if (!item) return;
            document.getElementById('modal-zh').innerText = `中文意思：${item.zh}`;
            document.getElementById('modal-jp').innerText = item.jp;
            document.getElementById('modal-romaji').innerText = item.romaji;
            const speakBtn = document.getElementById('modal-speak-btn');
            speakBtn.onclick = () => speakJapanese(key);

            const modal = document.getElementById('flashcard-modal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }

        function closeFlashcardModal() {
            const modal = document.getElementById('flashcard-modal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }

        // 手機（尤其 iPhone）只設 lang 不一定會換成日文聲音，常常用系統預設的中文聲音去唸，
        // 所以要從手機內建的聲音清單裡「指定」一個日文聲音
        let jaVoice = null;
        function pickJapaneseVoice() {
            if (!('speechSynthesis' in window)) return null;
            const voices = window.speechSynthesis.getVoices();
            const ja = voices.filter(v => /^ja([-_]|$)/i.test(v.lang));
            // 偏好順序：Kyoko / O-ren / Google 日本語 / 其他日文聲音
            jaVoice = ja.find(v => /kyoko/i.test(v.name)) || ja.find(v => /o-?ren/i.test(v.name))
                || ja.find(v => /google/i.test(v.name)) || ja[0] || null;
            return jaVoice;
        }
        if ('speechSynthesis' in window) {
            pickJapaneseVoice();
            window.speechSynthesis.addEventListener?.('voiceschanged', pickJapaneseVoice);
        }

        function speakJapanese(keyOrText) {
            const item = japaneseCards[keyOrText];
            // 括號裡的讀音、手指提示不要唸出來
            const text = (item ? (item.say || item.jp) : String(keyOrText)).replace(/（[^）]*）/g, '');
            try {
                if (!('speechSynthesis' in window)) {
                    showToast("這支手機不支援語音，請直接把大字卡給店員看！");
                    return;
                }
                const synth = window.speechSynthesis;
                synth.cancel();
                const voice = jaVoice || pickJapaneseVoice();
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.lang = 'ja-JP';
                if (voice) utterance.voice = voice;
                utterance.rate = 0.85;
                synth.speak(utterance);
                if (voice) {
                    showToast("🔊 播放日文中汪！");
                } else {
                    showToast("⚠️ 手機找不到日文聲音：iPhone 到「設定 → 輔助使用 → 朗讀內容 → 聲音 → 日文」下載 Kyoko");
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

        // ==================== 美食・購物・備案景點 ====================
        // 營業時間查自 じゃらん、食べログ、NAVITIME 等（2026/11 查詢），出發前最好再確認一次
        const GUIDE_DATA = {
            food: [
                {
                    head: 'Day 1 晚餐｜境港（住：御宿野乃 境港）', sub: '12/4 週五・Check-in 約 18:20',
                    tip: '晚上 21:30 飯店有免費「夜鳴きそば」（醬油拉麵），晚餐不用吃太撐！',
                    items: [
                        { name: '山陰のお寿司 ヒトトセ 境港駅前店', zh: '迴轉壽司・山陰海鮮', desc: '離飯店約 70 公尺、走路 1 分鐘。松葉蟹、紅楚蟹、白身魚握壽司，4 個人好入座。', hours: '11:00–21:00（L.O. 20:30）', tel: '0859-44-5522', q: '山陰のお寿司 ヒトトセ 境港駅前店' },
                        { name: 'みづき屋', zh: '海鮮丼・定食', desc: '境港站走路約 5 分鐘的海鮮丼店，晚上有沒有開請先打電話或看 Google 地圖。', hours: '晚上營業時間請先確認', q: 'みづき屋 境港' }
                    ]
                },
                {
                    head: 'Day 2 午餐｜出雲（萬九千神社 → 出雲大社）', sub: '12/5 週六・行程第 10 站',
                    tip: '首選「羽根屋 本店」已排進行程；排太久就直接開去出雲大社門前吃，下面三間都在大社走路 5 分鐘內。',
                    items: [
                        { name: '献上そば 羽根屋 本店', zh: '首選・出雲蕎麥麵', desc: '必點「三段割子そば」。到了先派 1 人進門口寫名字候位。', hours: '中午時段・依現場為準', q: '献上そば 羽根屋 本店', jp: 'soba' },
                        { name: 'そば 荒木屋', zh: '備案・江戶時代老店', desc: '割子蕎麥 3 段約 ¥930，賣完就收。', hours: '11:00–16:00（賣完為止）', q: 'そば 荒木屋 出雲大社' },
                        { name: 'そば処 田中屋 本店', zh: '備案・大社正門前', desc: '石臼磨粉的出雲蕎麥，就在出雲大社鳥居旁。', hours: '11:00–16:00（週四可能公休）', q: 'そば処 田中屋 出雲大社' },
                        { name: '本格手打蕎麦 出雲 砂屋', zh: '備案・十割蕎麥', desc: '神門通入口附近，營業到比較晚。', hours: '10:00–17:00', q: '出雲 砂屋 神門通り' }
                    ]
                },
                {
                    head: 'Day 2 晚餐｜界 出雲', sub: '12/5 週六・飯店會席料理',
                    tip: '晚餐在飯店吃冬季松葉蟹會席，不用另外找餐廳。',
                    items: []
                },
                {
                    head: 'Day 3 午餐｜柯南小鎮（北榮町）', sub: '12/6 週日・行程第 14 站',
                    items: [
                        { name: '喫茶ポアロ（コナンの家 米花商店街）', zh: '柯南主題咖啡廳', desc: '動畫裡的「白羅咖啡廳」，吃主題輕食、拍照打卡。', hours: '依商店街營業時間', q: 'コナンの家 米花商店街' },
                        { name: '香味徳 由良本店', zh: '鳥取名物・牛骨拉麵', desc: '由良站（柯南站）走路 3 分鐘的老店，湯頭是牛骨熬的，鳥取才吃得到。', hours: '11:00–14:00、17:00–20:00（週一、國定假日休）', tel: '0858-37-4933', q: '香味徳 由良店' },
                        { name: '土蔵蕎麦', zh: '倉吉・白壁土藏群旁', desc: '去梨記念館順路，60 年以上的手打蕎麥老店。', hours: '營業時間請先確認', q: '土蔵蕎麦 倉吉' }
                    ]
                },
                {
                    head: 'Day 3 晚餐｜米子（住：Super Hotel 米子駅前）', sub: '12/6 週日',
                    tip: '這晚是週日，有些居酒屋公休；下面都是週日有開的。停好車走路去最輕鬆。',
                    items: [
                        { name: 'かに・郷土料理 海王', zh: '松葉蟹專門店', desc: '活松葉蟹、紅楚蟹、鳥取和牛涮涮鍋。想吃整隻螃蟹選這間。', hours: '營業時間請先打電話確認', q: 'かに・郷土料理 海王 米子', jp: 'crab_meat' },
                        { name: '三代目網元 魚鮮水産 米子駅前店', zh: '海鮮居酒屋', desc: '米子站走路 2 分鐘，生魚片、壽司、螃蟹、岩牡蠣，當天就能訂位。', hours: '17:00–23:00', q: '魚鮮水産 米子駅前店' },
                        { name: '美酒佳肴 ゆらく', zh: '和食居酒屋', desc: '米子站走路 3 分鐘，招牌是鯖魚涮涮鍋（鯖しゃぶ）。', hours: '16:30–24:00', q: '美酒佳肴 ゆらく 米子' }
                    ]
                }
            ],
            shop: [
                {
                    head: '🛍️ 唐吉訶德', sub: '藥妝、零食、伴手禮一次買齊・可退稅',
                    items: [
                        { name: 'MEGAドン・キホーテ 米子店', zh: '山陰最大的唐吉訶德', desc: '2024 年開幕。Day 3 晚上住米子，晚餐後開車約 10 分鐘就到，開到半夜。', hours: '9:00–24:00・無休', q: 'MEGAドン・キホーテ米子店' },
                        { name: 'MEGAドン・キホーテ 出雲店', zh: '出雲市區', desc: 'Day 2 在出雲時順路可以去（出雲市姬原 2 丁目）。', hours: '營業時間請先確認', q: 'MEGAドン・キホーテ 出雲店' }
                    ]
                },
                {
                    head: '💊 松本清（マツモトキヨシ）', sub: '鳥取縣只有 2 間，米子這間離飯店最近',
                    items: [
                        { name: 'マツモトキヨシ 米子久米店', zh: '米子站走路 9 分鐘', desc: '在 Marui（マルイ）久米店 1 樓。Day 3 晚上從 Super Hotel 走路就到。', hours: '9:00–21:00', tel: '0859-36-3939', q: 'マツモトキヨシ 米子久米店' }
                    ]
                },
                {
                    head: '🏔️ mont-bell 大山直營店', sub: '大山登山口・米子開車約 40 分鐘',
                    items: [
                        { name: 'モンベル 大山店', zh: 'mont-bell 直營店', desc: '在大山寺橋旁，旁邊是 mont-bell 經營的「大山參道市場」，還能順便看大山雪景。', hours: '10:00–18:00・無休（官網）', tel: '0859-52-2511', q: 'モンベル 大山店' }
                    ]
                },
                {
                    head: '🏬 其他好逛', sub: '下雨或想補貨時',
                    items: [
                        { name: 'イオン 米子駅前店', zh: 'AEON 超市', desc: '離 Super Hotel 約 300 公尺，買水果、便當、零食。', hours: '食品賣場 8:00–22:00', q: 'イオン米子駅前店' },
                        { name: 'イオンモール日吉津', zh: 'AEON Mall 購物中心', desc: '米子市區開車約 15 分鐘，大型購物中心，下雨天的好去處。', hours: '食品賣場 8:00–23:00', q: 'イオンモール日吉津' }
                    ]
                }
            ],
            spot: [
                {
                    head: 'Day 1｜境港', sub: '晚上還有力氣再出門的話',
                    items: [
                        { name: '水木しげるロード', zh: '水木茂之路（鬼太郎妖怪街）', desc: '離飯店走路就到，177 尊妖怪銅像，晚上有妖怪影子燈，散步消化剛好。', q: '水木しげるロード' }
                    ]
                },
                {
                    head: 'Day 2｜松江・出雲', sub: '時間多出來或下雨時',
                    items: [
                        { name: '島根県立古代出雲歴史博物館', zh: '古代出雲歷史博物館', desc: '出雲大社旁邊，室內展館，下雨天的首選備案。', q: '島根県立古代出雲歴史博物館' },
                        { name: '宍道湖 夕日スポット', zh: '宍道湖夕陽', desc: '日本夕陽百選，松江市區湖邊（嫁ヶ島一帶）。', q: '宍道湖 夕日スポット とるぱ' },
                        { name: '稲佐の浜', zh: '稻佐之濱', desc: '出雲大社開車 3 分鐘的海邊，弁天島很好拍。', q: '稲佐の浜' }
                    ]
                },
                {
                    head: 'Day 3｜倉吉・米子', sub: '順路或晚上的選擇',
                    items: [
                        { name: '倉吉 白壁土蔵群', zh: '白壁土藏群老街', desc: '梨記念館附近，紅瓦白牆的老街，有小店和咖啡廳。', q: '倉吉 白壁土蔵群' },
                        { name: 'とっとり花回廊 イルミネーション', zh: '鳥取花迴廊 冬季點燈', desc: '冬季晚上約 100 萬顆燈。去年是 17:30–21:00、週二休園；今年日期與票價出發前要再查。', q: 'とっとり花回廊' },
                        { name: '皆生温泉', zh: '皆生溫泉', desc: '米子市區的海邊溫泉街，有不住宿也能泡的溫泉。', q: '皆生温泉' },
                        { name: '米子城跡', zh: '米子城跡', desc: '爬 15 分鐘到頂，可以看到米子市區、中海和大山。', q: '米子城跡' }
                    ]
                },
                {
                    head: '想多跑一點（車程較遠）', sub: '',
                    items: [
                        { name: '足立美術館', zh: '足立美術館（日本庭園第一名）', desc: '米子開車約 30 分鐘（安來市），庭園連續多年被評為日本第一。', q: '足立美術館' },
                        { name: '大山', zh: '大山（伯耆富士）', desc: '可以跟 mont-bell 大山店一起排，冬天有機會看到雪景。', q: '大山寺 鳥取' }
                    ]
                }
            ]
        };

        function renderGuideCard(it) {
            const nav = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(it.q)}`;
            return `
            <div class="bg-[#FFF8E7] p-3 rounded border-2 border-[#4A2E1B] space-y-1.5">
                <div class="flex justify-between items-start gap-2">
                    <div class="min-w-0">
                        <h4 class="font-black text-base text-[#4A2E1B] leading-snug">${esc(it.name)}</h4>
                        <div class="text-xs font-bold text-[#D63E2F]">${esc(it.zh)}</div>
                    </div>
                    <a href="${nav}" target="_blank" rel="noopener" class="pixel-btn bg-[#388E3C] text-white text-sm px-3 py-1.5 font-bold whitespace-nowrap">導航</a>
                </div>
                <p class="text-sm text-[#6E472B] leading-relaxed">${esc(it.desc)}</p>
                ${(it.hours || it.tel || it.jp) ? `
                <div class="flex flex-wrap items-center gap-2 text-xs font-bold text-[#4A2E1B]">
                    ${it.hours ? `<span>🕒 ${esc(it.hours)}</span>` : ''}
                    ${it.tel ? `<button onclick="copyText('${esc(it.tel)}', '${esc(it.name)} 電話')" class="pixel-btn bg-white text-[#2B5B84] px-2 py-1 text-xs font-bold">📞 複製電話（車機導航用）</button>` : ''}
                    ${it.jp ? `<button onclick="openFlashcardModal('${esc(it.jp)}')" class="pixel-btn bg-[#F5B041] text-[#4A2E1B] px-2 py-1 text-xs font-bold">🗣️ 點餐日文卡</button>` : ''}
                </div>` : ''}
            </div>`;
        }

        function renderGuide() {
            ['food', 'shop', 'spot'].forEach(kind => {
                const el = document.getElementById(`guide-view-${kind}`);
                if (!el) return;
                const intro = kind === 'food' ? `
                    <div class="pixel-box-cream p-3.5 border-l-8 border-l-[#D63E2F]">
                        <div class="text-base font-bold text-[#D63E2F] pixel-font mb-1">💡 你們 4 人沒有訂餐廳</div>
                        <p class="text-sm text-[#4A2E1B] leading-relaxed font-medium">山陰冬天天黑早、有些店只能現場候位。每餐都放了飯店或景點附近的首選＋備案，進門可以秀「4人入座日文卡」。</p>
                        <button onclick="openFlashcardModal('walkin4')" class="w-full mt-2 pixel-btn bg-[#F5B041] text-[#4A2E1B] font-bold text-sm py-2 pixel-font">🗣️ 秀出「請問 4 位現在有位子嗎？」</button>
                    </div>` : '';
                el.innerHTML = intro + GUIDE_DATA[kind].map(g => `
                    <div class="pixel-box p-4 space-y-3">
                        <div class="border-b-2 border-dashed border-[#4A2E1B]/20 pb-2">
                            <div class="text-base font-black text-[#2B5B84] pixel-font">${esc(g.head)}</div>
                            ${g.sub ? `<div class="text-xs font-bold text-[#6E472B] mt-0.5">${esc(g.sub)}</div>` : ''}
                        </div>
                        ${g.tip ? `<p class="text-sm text-[#6E472B] font-medium">💡 ${esc(g.tip)}</p>` : ''}
                        ${g.items.map(renderGuideCard).join('')}
                    </div>`).join('') + `<p class="text-xs text-[#6E472B] text-center">營業時間為 2026 年 11 月查詢，出發前或到店前建議再看一次 Google 地圖。</p>`;
            });
        }

        function switchGuideSubTab(sub) {
            if (sub === 'shrine') sub = 'spot';
            ['food', 'shop', 'spot'].forEach(k => {
                const view = document.getElementById(`guide-view-${k}`);
                const btn = document.getElementById(`guide-btn-${k}`);
                const on = k === sub;
                view.classList.toggle('hidden', !on);
                btn.className = on
                    ? "pixel-btn bg-[#E07A2E] text-white py-2.5 font-bold text-sm pixel-font"
                    : "pixel-btn bg-white text-[#4A2E1B] py-2.5 font-bold text-sm pixel-font";
            });
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
            }, msg.length > 30 ? 6000 : 2600);
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
            renderGuide();
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
