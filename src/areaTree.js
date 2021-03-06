const areaTree = {
    "area" : [
        "서울","인천","대전","대구","광주","부산","울산","세종특별자치시",
        "경기도","강원도","충청북도","충청남도","경상북도","경상남도","전라북도","전라남도","제주도"
        ],
    "subArea" : {
        "서울" : [
            "강남구","강동구","강북구","강서구","관악구",
            "광진구","구로구","금천구","노원구","도봉구",
            "동대문구","동작구","마포구","서대문구","서초구",
            "성동구","성북구","송파구","양천구","영등포구",
            "용산구","은평구","종로구","중구","중랑구"
        ],
        "인천" : ["강화군","계양구","미추홀구","남동구","동구","부평구","서구","연수구","옹진군","중구"],
        "대전" : ["대덕구","동구","서구","유성구","중구"],
        "대구" : ["남구","달서구","달성군","동구","북구","서구","수성구","중구"],
        "광주" : ["광산구","남구","동구","북구","서구"],
        "부산" : [
            "강서구","금정구","기장군","남구","동구","동래구",
            "부산진구","북구","사상구","사하구","서구","수영구",
            "연제구","영도구","중구","해운대구"
        ],
        "울산" : ["중구","남구","동구","북구","울주군"],
        "세종특별자치시" : ["세종특별자치시"],
        "경기도" : [
            "가평군","고양시","과천시","광명시","광주시","구리시",
            "군포시","김포시","남양주시","동두천시","부천시","성남시",
            "수원시","시흥시","안산시","안성시","안양시","양주시","양평군",
            "여주시","연천군","오산시","용인시","의왕시","의정부시","이천시",
            "파주시","평택시","포천시","하남시","화성시"
        ],
        "강원도" : [
            "강릉시","고성군","동해시","삼척시","속초시","양구군",
            "양양군","영월군","원주시","인제군","정선군","철원군",
            "춘천시","태백시","평창군","홍천군","화천군","횡성군"
        ],
        "충청북도" : ["괴산군","단양군","보은군","영동군","옥천군","음성군","제천시","진천군","청원군","청주시","충주시","증평군"],
        "충청남도" : [
            "공주시","금산군","논산시","당진시","보령시","부여군","서산시",
            "서천군","아산시","예산군","천안시","청양군","태안군","홍성군","계룡시"
        ],
        "경상북도" : [
            "경산시","경주시","고령군","구미시","군위군","김천시","문경시","봉화군",
            "상주시","성주군","안동시","영덕군","영양군","영주시","영천시","예천군",
            "울릉군","울진군","의성군","청도군","청송군","칠곡군","포항시"
        ],
        "경상남도" : [
            "거제시","거창군","고성군","김해시","남해군","마산시","밀양시",
            "사천시","산청군","양산시","의령군","진주시","진해시","창녕군",
            "창원시","통영시","하동군","함안군","함양군","합천군"
        ],
        "전라북도" : [
            "고창군","군산시","김제시","남원시","무주군","부안군",
            "순창군","완주군","익산시","임실군","장수군","전주시","정읍시","진안군"
        ],
        "전라남도" : [
            "강진군","고흥군","곡성군","광양시","구례군","나주시","담양군","목포시",
            "무안군","보성군","순천시","신안군","여수시","영광군","영암군","완도군",
            "장성군","장흥군","진도군","함평군","해남군","화순군"
        ],
        "제주도" : ["서귀포시","제주시"]
    }
}

const areaTreeEng = {
    "area" : [
        "Seoul","Incheon","Daejeon","Daegu","Gwangju","Busan",
        "Ulsan","Sejong","Gyeonggi-do","Gangwon-do","Chungcheongbuk-do",
        "Chungcheongnam-do","Gyeongsangbuk-do","Gyeongsangnam-do","Jeollabuk-do",
        "Jeollanam-do","Jeju-do"],
    "subArea" : {
        "Seoul" : [
            "Gangnam-gu","Gangdong-gu","Gangbuk-gu","Gangseo-gu","Gwanak-gu","Gwangjin-gu",
            "Guro-gu","Geumcheon-gu","Nowon-gu","Dobong-gu","Dongdaemun-gu","Dongjak-gu",
            "Mapo-gu","Seodaemun-gu","Seocho-gu","Seongdong-gu","Seongbuk-gu","Songpa-gu",
            "Yangcheon-gu","Yeongdeungpo-gu","Yongsan-gu","Eunpyeong-gu","Jongno-gu","Jung-gu",
            "Jungnang-gu"],
        "Incheon" : [
            "Ganghwa-gun","Gyeyang-gu","Michuhol-gu","Namdong-gu","Dong-gu",
            "Bupyeong-gu","Seo-gu","Yeonsu-gu","Ongjin-gun","Jung-gu"],
        "Daejeon" : ["Daedeok-gu","Dong-gu","Seo-gu","Yuseong-gu","Jung-gu"],
        "Daegu" : ["Nam-gu","Dalseo-gu","Dalseong-gun","Dong-gu","Buk-gu","Seo-gu","Suseong-gu","Jung-gu"],
        "Gwangju" : ["Gwangsan-gu","Nam-gu","Dong-gu","Buk-gu","Seo-gu"],
        "Busan" : [
            "Gangseo-gu","Geumjeong-gu","Gijang-gun","Nam-gu","Dong-gu","Dongnae-gu",
            "Busanjin-gu","Buk-gu","Sasang-gu","Saha-gu","Seo-gu","Suyeong-gu","Yeonje-gu",
            "Yeongdo-gu","Jung-gu","Haeundae-gu"],
        "Ulsan" : ["Jung-gu","Nam-gu","Dong-gu","Buk-gu","Ulju-gun"],
        "Sejong" : ["Sejong"],
        "Gyeonggi-do" : [
            "Gapyeong-gun","Goyang-si","Gwacheon-si","Gwangmyeong-si","Gwangju-si","Guri-si",
            "Gunpo-si","Gimpo-si","Namyangju-si","Dongducheon-si","Bucheon-si","Seongnam-si",
            "Suwon-si","Siheung-si","Ansan-si","Anseong-si","Anyang-si","Yangju-si","Yangpyeong-gun",
            "Yeoju-si","Yeoncheon-gun","Osan-si","Yongin-si","Uiwang-si","Uijeongbu-si","Icheon-si",
            "Paju-si","Pyeongtaek-si","Pocheon-si","Hanam-si","Hwaseong-si"],
        "Gangwon-do" : [
            "Gangneung-si","Goseong-gun","Donghae-si","Samcheok-si","Sokcho-si","Yanggu-gun",
            "Yangyang-gun","Yeongwol-gun","Wonju-si","Inje-gun","Jeongseon-gun","Cheorwon-gun",
            "Chuncheon-si","Taebaek-si","Pyeongchang-gun","Hongcheon-gun","Hwacheon-gun","Hoengseong-gun"],
        "Chungcheongbuk-do" : [
            "Goesan-gun","Danyang-gun","Boeun-gun","Yeongdong-gun","Okcheon-gun","Eumseong-gun",
            "Jecheon-si","Jincheon-gun","Cheongwon-gun","Cheongju-si","Chungju-si","Jeungpyeong-gun"],
        "Chungcheongnam-do" : [
            "Gongju-si","Geumsan-gun","Nonsan-si","Dangjin-si","Boryeong-si","Buyeo-gun",
            "Seosan-si","Seocheon-gun","Asan-si","Yesan-gun","Cheonan-si","Cheongyang-gun",
            "Taean-gun","Hongseong-gun", "gyeryong-si"],
        "Gyeongsangbuk-do" : [
            "Gyeongsan-si","Gyeongju-si","Goryeong-gun","Gumi-si",
            "Gunwi-gun","Gimcheon-si","Mungyeong-si","Bonghwa-gun",
            "Sangju-si","Seongju-gun","Andong-si","Yeongdeok-gun","Yeongyang-gun",
            "Yeongju-si","Yeongcheon-si","Yecheon-gun","Ulleung-gun","Uljin-gun",
            "Uiseong-gun","Cheongdo-gun","Cheongsong-gun","Chilgok-gun","Pohang-si"],
        "Gyeongsangnam-do" : [
            "Geoje-si","Geochang-gun","Goseong-gun","Gimhae-si","Namhae-gun","Masan-si","Miryang-si",
            "Sacheon-si","Sancheong-gun","Yangsan-si","Uiryeong-gun","Jinju-si","Jinhae-si",
            "Changnyeong-gun","Changwon-si","Tongyeong-si","Hadong-gun","Haman-gun","Hamyang-gun",
            "Hapcheon-gun"],
        "Jeollabuk-do" : [
            "Gochang-gun","Gunsan-si","Gimje-si","Namwon-si","Muju-gun","Buan-gun","Sunchang-gun",
            "Wanju-gun","Iksan-si","Imsil-gun","Jangsu-gun","Jeonju-si","Jeongeup-si","Jinan-gun"],
        "Jeollanam-do" : [
            "Gangjin-gun","Goheung-gun","Gokseong-gun","Gwangyang-si","Gurye-gun","Naju-si",
            "Damyang-gun","Mokpo-si","Muan-gun","Boseong-gun","Suncheon-si","Sinan-gun","Yeosu-si",
            "Yeonggwang-gun","Yeongam-gun","Wando-gun","Jangseong-gun","Jangheung-gun","Jindo-gun",
            "Hampyeong-gun","Haenam-gun","Hwasun-gun"],
        "Jeju-do" : ["Seogwipo-si","Jeju-si"]
    }
}