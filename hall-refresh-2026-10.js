/* 2026-10-26 웨딩홀 재수집(2027.11 기준, 보증 200/250). build: scratchpad/build.py */
(function(R){
R.rows.forEach(function(r){if(!HALLS.some(function(h){return h[0]===r[0];}))HALLS.push(r);});
HALLS.forEach(function(h){var u=R.update[h[0]];if(u){h[2]=u[0];h[3]=u[1];h[4]=u[2];h[5]=u[3];h[6]=u[4];h[7]=u[5];}});
Object.keys(R.quotes).forEach(function(k){if(R.quotes[k].length)CAFE_QUOTES[k]=R.quotes[k];});
Object.keys(R.info).forEach(function(k){HALL_INFO[k]=Object.assign(HALL_INFO[k]||{},R.info[k]);});
window.HALL_REFRESH_DEAL=R.deal;
})({
"quotes": {
"아펠가모 선릉점": [
{
"rent": 11000000,
"meal": 110000,
"guarantee": 200,
"title": "27.H2 · 후기 · 후기(27년 하반기 정가 표기); 음주류 8,800원 별도; 최대수용 400",
"cafe": "27.H2 · 후기",
"url": "https://m.blog.naver.com/hyoseuni/224372115634",
"posted": "2026-08"
},
{
"rent": 11000000,
"meal": 110000,
"guarantee": 230,
"title": "27.07 · 비수기 · 토 · 정가 · 후기: 정가 대관 1,100만/식대 11만, 230명으로 견적 요청; 할인 견적 숫자는 비공개",
"cafe": "27.07 · 비수기 · 토 · 정가",
"url": "https://m.blog.naver.com/haenor/224329622740",
"posted": "2026-06"
},
{
"rent": 11000000,
"meal": 96800,
"guarantee": 300,
"title": "연도미표기 · 정가 · 정가(참가격 2026-08-18 공개, 웨딩노트): 보증 300명 조건 식대 96,800 / 180명 조건 61,600; 음주류 8,800 별도",
"cafe": "연도미표기 · 정가",
"url": "https://www.weddingnote.co.kr/halls/seoul/apelgamo-seonreung",
"posted": "확인일 2026-10"
},
{
"rent": 11000000,
"meal": 110000,
"guarantee": null,
"title": "연도미표기 · 플랫폼가 · 플랫폼가(kgwed, 예식연도 표기 없음)",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://kgwed.com/apelgamoseolleung/",
"posted": "확인일 2026-10"
}
],
"노블발렌티 대치": [
{
"rent": 13000000,
"meal": 100000,
"guarantee": null,
"title": "27.08 · 비수기 · 토 12:30 · 후기 · 후기 계약O: 대관료에 생화장식·4중주 포함, 식대 음료 포함; 보증+10%까지; 27년 8·9·11월 토 마감 안내",
"cafe": "27.08 · 비수기 · 토 12:30 · 후기",
"url": "https://m.blog.naver.com/livelikecarrot/224437152621",
"posted": "2026-10"
},
{
"rent": 13000000,
"meal": 100000,
"guarantee": 200,
"title": "2027 · 잔여타임 · 후기 · 후기(27년 잔여타임 상담): 음주류 1만원 별도; 최소보증 200(토 12:30·14:00은 300); 생화장식 대관료 포함",
"cafe": "2027 · 잔여타임 · 후기",
"url": "https://m.blog.naver.com/juiletwlals/224426129222",
"posted": "2026-09"
},
{
"rent": 13000000,
"meal": 100000,
"guarantee": null,
"title": "27.07 · 비수기 · 저녁 · 후기 · 후기: 7월 비수기 저녁 견적, 당일계약 할인 거의 없음",
"cafe": "27.07 · 비수기 · 저녁 · 후기",
"url": "https://m.blog.naver.com/ifed0629/224371525416",
"posted": "2026-08"
},
{
"rent": 13000000,
"meal": 99000,
"guarantee": null,
"title": "연도미표기 · 정가 · 정가(참가격 2026-06-21, 웨딩노트): 식대 75,000~99,000(상한 기재), 장식비 580만~1,210만",
"cafe": "연도미표기 · 정가",
"url": "https://www.weddingnote.co.kr/halls/seoul/noble-valenti-daechijeom",
"posted": "확인일 2026-10"
},
{
"rent": 13000000,
"meal": 100000,
"guarantee": 300,
"title": "연도미표기 · 플랫폼가 · 플랫폼가(kgwed, 예식연도 표기 없음): Chapel Hall",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://kgwed.com/noblevalentidaechi/",
"posted": "확인일 2026-10"
}
],
"셀럽앤어셈": [
{
"rent": 16000000,
"meal": 110000,
"guarantee": null,
"title": "27.H2 · 후기 · 후기(2027 정가): 하반기 대관 1,600만/식대 11만, 상반기 1,450만/98,000; 보증 약 200~280",
"cafe": "27.H2 · 후기",
"url": "https://m.blog.naver.com/hey_lauren/224413102104",
"posted": "2026-09"
},
{
"rent": 14500000,
"meal": 98000,
"guarantee": 300,
"title": "2027 · 후기 · 후기(2027 정상가 VAT포함): 대관료에 꽃장식·연출 포함, 최소보증 300 기준, 음주류는 견적 제외",
"cafe": "2027 · 후기",
"url": "https://m.blog.naver.com/topnbottom/224381582700",
"posted": "2026-08"
},
{
"rent": 16000000,
"meal": 110000,
"guarantee": null,
"title": "27.03 · 비수기 · 잔여타임 · 후기 · 후기(제목: 27년 잔여타임 견적): '2027년 3월 기준' 웨딩프로그램 1,600만, 와인·프리드링크 1인 15,000 별도, 보증 약 200~280",
"cafe": "27.03 · 비수기 · 잔여타임 · 후기",
"url": "https://m.blog.naver.com/kyhdragon1212/224363165801",
"posted": "2026-07"
},
{
"rent": 14500000,
"meal": 98000,
"guarantee": null,
"title": "연도미표기 · 플랫폼가 · 플랫폼가(스마트웨딩, 예식연도 표기 없음): 대관 1,450만~(생화 꽃장식 포함), 음주류 1인 15,000~ 별도",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://smartwedding-besthall.com/celebnassem",
"posted": "확인일 2026-10"
},
{
"rent": 14500000,
"meal": 98000,
"guarantee": 330,
"title": "연도미표기 · 플랫폼가 · 플랫폼가(kgwed, 예식연도 표기 없음): 디아이올라홀, 음료·주류 1인 5,000 별도",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://kgwed.com/celebnassem/",
"posted": "확인일 2026-10"
}
],
"더화이트베일": [
{
"rent": 9500000,
"meal": 95000,
"guarantee": null,
"title": "2027 · 후기 · 후기(27년 정가, 홀 미표기); 보증 추천 200",
"cafe": "2027 · 후기",
"url": "https://m.blog.naver.com/no_luv528/224437742708",
"posted": "2026-10"
},
{
"rent": 8500000,
"meal": 72000,
"guarantee": null,
"title": "연도미표기 · 플랫폼가 · 플랫폼가(스마트웨딩, 예식연도 표기 없음): 대관 850만~(생화 꽃장식 포함)·뷔페 72,000~",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://smartwedding-besthall.com/thewhiteveil",
"posted": "확인일 2026-10"
},
{
"rent": 9500000,
"meal": 95000,
"guarantee": null,
"title": "연도미표기 · 플랫폼가 · 플랫폼가(보통의 특별한 날, 예식연도 표기 없음): 홀 3개 공통 대관 950만, 식대 8.5~9.5만(상한 기재)",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://simplyspecial.kr/halls/%EC%84%9C%EC%9A%B8/%EC%84%9C%EC%B4%88%EA%B5%AC/1176183198",
"posted": "확인일 2026-10"
},
{
"rent": 9500000,
"meal": 95000,
"guarantee": 250,
"title": "연도미표기 · 플랫폼가 · 플랫폼가(kgwed, 예식연도 표기 없음): 화이트베일·V·W홀 대관 950만, 최소보증 250",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://kgwed.com/thewhiteveil/",
"posted": "확인일 2026-10"
}
],
"더컨벤션 송파문정": [
{
"rent": 12000000,
"meal": 130000,
"guarantee": null,
"title": "2027 · 정가 · 후기(정가) 아모르홀; 소인 45,000",
"cafe": "2027 · 정가",
"url": "https://m.blog.naver.com/tpdls973/224431055316",
"posted": "2026-10"
},
{
"rent": 13000000,
"meal": 130000,
"guarantee": null,
"title": "2027 · 정가 · 후기(정가) 그랜드볼룸; 소인 45,000",
"cafe": "2027 · 정가",
"url": "https://m.blog.naver.com/tpdls973/224430546160",
"posted": "2026-10"
},
{
"rent": null,
"meal": 130000,
"guarantee": null,
"title": "27.H2 · 후기 · 후기(27년 정가): 대관료 1,100만~1,200만 범위",
"cafe": "27.H2 · 후기",
"url": "https://m.blog.naver.com/springonion_eggs/224428878810",
"posted": "2026-10"
},
{
"rent": 12000000,
"meal": 97000,
"guarantee": 200,
"title": "연도미표기 · 정가 · 정가(참가격 2026-06-12, 웨딩노트): 식대 53,000~97,000(상한), 장식비 430만~1,000만; 아모르 대관 1,100만/식대 51,000~94,000/장식 350만~920만",
"cafe": "연도미표기 · 정가",
"url": "https://www.weddingnote.co.kr/halls/seoul/deo-convention-songpamunjeong",
"posted": "확인일 2026-10"
},
{
"rent": 12000000,
"meal": 130000,
"guarantee": 350,
"title": "연도미표기 · 플랫폼가 · 플랫폼가(kgwed, 예식연도 표기 없음): 그랜드볼룸; 아모르홀 1,120만·최소보증 300",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://kgwed.com/theconventionmunjeong/",
"posted": "확인일 2026-10"
}
],
"이스턴베니비스": [],
"보테가마지오": [
{
"rent": 15000000,
"meal": 110000,
"guarantee": null,
"title": "2027 · 잔여타임 · 후기 · 후기(27년 잔여타임 견적): '정가 총 1500만원'(필수사항), FREE DRINK 1인 15,000 별도",
"cafe": "2027 · 잔여타임 · 후기",
"url": "https://m.blog.naver.com/juiletwlals/224398439163",
"posted": "2026-09"
},
{
"rent": 15000000,
"meal": 110000,
"guarantee": null,
"title": "2027 · 정가 · 후기(정가) 로스타뇨홀; 플라워 필수",
"cafe": "2027 · 정가",
"url": "https://m.blog.naver.com/no_luv528/224410514175",
"posted": "2026-09"
},
{
"rent": 15000000,
"meal": 110000,
"guarantee": null,
"title": "연도미표기 · 플랫폼가 · 플랫폼가(스마트웨딩, 예식연도 표기 없음): 대관 1,500만~·뷔페 110,000~, 생화 꽃장식 포함, 음주류 식대포함 표기",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://smartwedding-besthall.com/bottegamaggio",
"posted": "확인일 2026-10"
},
{
"rent": 15000000,
"meal": 110000,
"guarantee": 300,
"title": "연도미표기 · 플랫폼가 · 플랫폼가(kgwed, 예식연도 표기 없음): 로스타뇨홀, 음료 1인 15,000 별도",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://kgwed.com/bottegamaggio/",
"posted": "확인일 2026-10"
}
],
"레노스블랑쉬 왕십리": [
{
"rent": 2300000,
"meal": 53000,
"guarantee": 200,
"title": "연도미표기 · 정가 · 정가(참가격 2026-09-09, 웨딩노트): 대관료 100만~230만, 식대 48,000~53,000(상한 기재), 장식비 대관료 포함",
"cafe": "연도미표기 · 정가",
"url": "https://www.weddingnote.co.kr/halls/seoul/renoseu-blanc-swi-weddinghall",
"posted": "확인일 2026-10"
},
{
"rent": 3300000,
"meal": 55000,
"guarantee": null,
"title": "연도미표기 · 플랫폼가 · 플랫폼가(스마트웨딩, 예식연도 표기 없음): 대관 330만~(생화 꽃장식 포함)·한식 55,000~",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://smartwedding-besthall.com/renosblanche",
"posted": "확인일 2026-10"
},
{
"rent": 3300000,
"meal": 55000,
"guarantee": 200,
"title": "연도미표기 · 플랫폼가 · 플랫폼가(kgwed, 예식연도 표기 없음): 블랑쉬홀",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://kgwed.com/renosblanche/",
"posted": "확인일 2026-10"
}
],
"로카우스 용산": [
{
"rent": 1100000,
"meal": 120000,
"guarantee": 100,
"title": "2027 · 정가 · 스몰웨딩 플래너(오딩) 홍보글: 10F 루프탑 분리웨딩 100인 견적, 디렉팅+전체 생화연출 630만, 출장비 11만, 총 19,510,000",
"cafe": "2027 · 정가",
"url": "https://m.blog.naver.com/milanoooo/224444298206",
"posted": "2026-10"
},
{
"rent": 12100000,
"meal": 100000,
"guarantee": 200,
"title": "연도미표기 · 성수기 · 정가 · 정가(참가격 2026-05-11, 웨딩노트): 성수기(3~6·9~12월) 기준; 비수기 1,100만/90,000; 대관료에 꽃장식·피아노3중주·연출 포함; 음료 별도(맥주 8,800 등)",
"cafe": "연도미표기 · 성수기 · 정가",
"url": "https://www.weddingnote.co.kr/halls/seoul/nine-tree-premier-rokaus-hotel-seoul-yongsan",
"posted": "확인일 2026-10"
},
{
"rent": 3300000,
"meal": 110000,
"guarantee": 200,
"title": "연도미표기 · 플랫폼가 · 플랫폼가(신부야, 예식연도 표기 없음): 하모니스홀 대관 330만+연출 330만, 꽃장식 660만~(생화+조화), 부대 연출(예도+연주+스냅) 242만; 모의견적 예시 2027-10-16 300명 4,850만",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://www.sinbuya.com/product/details/9810",
"posted": "확인일 2026-10"
},
{
"rent": 4400000,
"meal": 100000,
"guarantee": 200,
"title": "연도미표기 · 플랫폼가 · 플랫폼가(다이렉트웨딩, 예식연도 표기 없음): 양식 100,000, 대관 440만·연출 330만·꽃장식 880만 필수",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://www.directwedding.co.kr/weddinghall/hall0076",
"posted": "확인일 2026-10"
},
{
"rent": 4400000,
"meal": 110000,
"guarantee": 200,
"title": "연도미표기 · 플랫폼가 · 플랫폼가(kgwed, 예식연도 표기 없음): 하모니스홀, 뷔페 110,000",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://kgwed.com/ninetreepremierrokaus/",
"posted": "확인일 2026-10"
}
],
"가천컨벤션센터": [
{
"rent": 9000000,
"meal": 88000,
"guarantee": null,
"title": "27.H2 · 정가 · 후기(정가); 소인 66,000",
"cafe": "27.H2 · 정가",
"url": "https://m.blog.naver.com/kyungjinsss/224396686033",
"posted": "2026-09"
},
{
"rent": 9900000,
"meal": 88000,
"guarantee": 300,
"title": "2027 · 비수기 · 후기 · 후기(제목 27년 비수기): 대관료 990만원~, 코스요리, 음주류 식대포함",
"cafe": "2027 · 비수기 · 후기",
"url": "https://m.blog.naver.com/panoramatic/224413628376",
"posted": "2026-09"
},
{
"rent": 9900000,
"meal": null,
"guarantee": 300,
"title": "2027 · 후기 · 후기: 대관료 990만(본식스냅 포함), 비수기 보증 250(나이트 제외), 할인은 대관료에서",
"cafe": "2027 · 후기",
"url": "https://m.blog.naver.com/beatus220/224271882640",
"posted": "2026-05"
},
{
"rent": 9900000,
"meal": 88000,
"guarantee": 300,
"title": "연도미표기 · 플랫폼가 · 플랫폼가(다이렉트웨딩, 예식연도 표기 없음): 퓨전코스, 연출·꽃장식 대관료 포함, 음주류 식대 포함, 최소보증 300",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://www.directwedding.co.kr/weddinghall/hall0027",
"posted": "확인일 2026-10"
},
{
"rent": 9900000,
"meal": 88000,
"guarantee": null,
"title": "연도미표기 · 플랫폼가 · 플랫폼가(스마트웨딩, 예식연도 표기 없음): 생화 꽃장식 포함, 80분 간격",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://smartwedding-besthall.com/gachoncc",
"posted": "확인일 2026-10"
}
],
"WI컨벤션": [
{
"rent": 7000000,
"meal": 74000,
"guarantee": null,
"title": "27.H1 · 정가 · 후기(정가) W홀 700만 / I홀 650만, 꽃장식 포함, 주류 서비스; 1~3월 희망",
"cafe": "27.H1 · 정가",
"url": "https://m.blog.naver.com/suun4842/224291770096",
"posted": "2026-05"
},
{
"rent": 6500000,
"meal": 74000,
"guarantee": 200,
"title": "27.H1 · 후기 · 후기 계약O(정가) I홀; W홀 700만·최소보증 300",
"cafe": "27.H1 · 후기",
"url": "https://m.blog.naver.com/gia96_/224295509816",
"posted": "2026-05"
},
{
"rent": 7000000,
"meal": 74000,
"guarantee": null,
"title": "연도미표기 · 플랫폼가 · 플랫폼가(스마트웨딩, 예식연도 표기 없음): W홀 700만~ / I홀 650만~",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://smartwedding-besthall.com/wiconvention",
"posted": "확인일 2026-10"
},
{
"rent": 7000000,
"meal": 74000,
"guarantee": 400,
"title": "연도미표기 · 플랫폼가 · 플랫폼가(kgwed, 예식연도 표기 없음): W홀 최소보증 400; I홀 650만·최소보증 300",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://kgwed.com/suwonwiconvention/",
"posted": "확인일 2026-10"
}
],
"ICT밸리컨벤션": [
{
"rent": 7900000,
"meal": 73000,
"guarantee": null,
"title": "27.H2 · 정가 · 후기(정가)",
"cafe": "27.H2 · 정가",
"url": "https://m.blog.naver.com/kyungjinsss/224353593486",
"posted": "2026-07"
},
{
"rent": 6900000,
"meal": 68000,
"guarantee": null,
"title": "2027 · 성수기 · 정가 · 정가/공식 홈페이지 가격표(2027년 1~12월 예식): 성수기 피크타임(최고가) 할인가; 비수기 590만/64,000; 정상가 790만/73,000; 대관료에 연출·생화장식 포함",
"cafe": "2027 · 성수기 · 정가",
"url": "https://www.ictconvention.co.kr/guide/price/",
"posted": "확인일 2026-10"
}
],
"아이벡스컨벤션 광명": [
{
"rent": 16500000,
"meal": 120000,
"guarantee": null,
"title": "27.H2 · 후기 · 후기 본문 기재 금액(정가와 동일)",
"cafe": "27.H2 · 후기",
"url": "https://m.blog.naver.com/hehezip/224437801864",
"posted": "2026-10"
},
{
"rent": 12000000,
"meal": 99000,
"guarantee": null,
"title": "27.H2 · 성수기 · 정가 · 블로거 정리표 하반기 성수기 할인가; 하반기 비수기 950만/92,000, 상반기 성수기 1,050만/95,000·비수기 920만/90,000, 정상가 1,650만/120,000; 음주류 포함",
"cafe": "27.H2 · 성수기 · 정가",
"url": "https://m.blog.naver.com/kt7102/224379617807",
"posted": "2026-08"
},
{
"rent": 16500000,
"meal": 120000,
"guarantee": null,
"title": "연도미표기 · 정가 · 정가(참가격 2026-09-30, 웨딩노트): 장식비 대관료 포함, 식음료 식대 포함",
"cafe": "연도미표기 · 정가",
"url": "https://www.weddingnote.co.kr/halls/gyeonggi/aibekseu-convention",
"posted": "확인일 2026-10"
},
{
"rent": 12000000,
"meal": 99000,
"guarantee": null,
"title": "27.H2 · 성수기 · 정가 · 정가/공식 홈페이지 가격표: 27년 하반기 성수기 피크타임(최고가) 할인가; 비수기 950만/92,000; 정상가 1,650만/120,000; 상반기 성수기 1,050만/95,000·비수기 920만/90,000; 식대 음주류 포함",
"cafe": "27.H2 · 성수기 · 정가",
"url": "https://www.ivexwed.co.kr/view/price",
"posted": "확인일 2026-10"
},
{
"rent": 16500000,
"meal": 120000,
"guarantee": 300,
"title": "연도미표기 · 플랫폼가 · 플랫폼가(kgwed 정보페이지, 예식연도 표기 없음): 대관료에 연출료·꽃장식 포함, 최소보증 300",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://kgwed.com/gwangmyeongivexconvention/",
"posted": "확인일 2026-10"
}
],
"아펠가모 반포": [
{
"rent": 4400000,
"meal": 63800,
"guarantee": 200,
"title": "27.03 · 비수기 · 월(3/1) 11:00 · 정가 · 홈페이지 스마트예약 캡처. 식대는 총액 12,760,000원/200명으로 나눠 계산. 브랜드대상 기념 대관료 추가 50% 할인+호텔숙박권(~10/12)",
"cafe": "27.03 · 비수기 · 월(3/1) 11:00 · 정가",
"url": "https://m.blog.naver.com/rkdeeoddl/224432243446",
"posted": "2026-10"
},
{
"rent": 7700000,
"meal": 80300,
"guarantee": 250,
"title": "27.04 · 성수기 · 일 11:00 · 정가 · 홈페이지 스마트예약 캡처. 식대는 총액 20,075,000원/250명으로 나눠 계산. 대관료 추가 50% 할인 프로모션 표기",
"cafe": "27.04 · 성수기 · 일 11:00 · 정가",
"url": "https://m.blog.naver.com/rkdeeoddl/224432243446",
"posted": "2026-10"
},
{
"rent": 6270000,
"meal": 71500,
"guarantee": 200,
"title": "27.06 · 성수기 · 일 17:00 · 정가 · 스마트예약 캡처. 식대는 총액 14,300,000원/200명으로 나눠 계산",
"cafe": "27.06 · 성수기 · 일 17:00 · 정가",
"url": "https://m.blog.naver.com/oraartstudio/224451182393",
"posted": "2026-10"
},
{
"rent": 7700000,
"meal": 80300,
"guarantee": 250,
"title": "27.06 · 성수기 · 일 11:00 · 정가 · 스마트예약 캡처. 식대는 총액 20,075,000원/250명으로 나눠 계산. '방문 시 대관료 200만원 할인' 표기",
"cafe": "27.06 · 성수기 · 일 11:00 · 정가",
"url": "https://m.blog.naver.com/oraartstudio/224451182393",
"posted": "2026-10"
},
{
"rent": 7700000,
"meal": 80300,
"guarantee": 250,
"title": "27.06 · 성수기 · 일 12:30 · 정가 · 스마트예약 캡처. 식대는 총액 20,075,000원/250명으로 나눠 계산. 방문 시 대관료 200만원 추가 할인 표기",
"cafe": "27.06 · 성수기 · 일 12:30 · 정가",
"url": "https://m.blog.naver.com/thdudxxx/224448368633",
"posted": "2026-10"
},
{
"rent": null,
"meal": null,
"guarantee": 200,
"title": "27.05 · 성수기 · 잔여타임 · 토(5/8) · 정가 · 잔여타임이라 대관료 50% 추가 할인. 보증 200명 기준 총 1,930만원(대관료+식대, 따로 나눈 금액 없음)",
"cafe": "27.05 · 성수기 · 잔여타임 · 토(5/8) · 정가",
"url": "https://m.blog.naver.com/minsj1169/224453541230",
"posted": "2026-10"
},
{
"rent": null,
"meal": 62700,
"guarantee": 200,
"title": "연도미표기 · 정가 · 참가격(price.go.kr) 등록가, 웨딩노트 경유, 적용 예식월 미표기, VAT 포함. 보증 200명 조건. 대관료 440~979만원(범위만 있음). 공개일 2026-08-18",
"cafe": "연도미표기 · 정가",
"url": "https://www.weddingnote.co.kr/halls/seoul/apelgamo-banpo",
"posted": "2026-08"
},
{
"rent": null,
"meal": 97900,
"guarantee": 300,
"title": "연도미표기 · 정가 · 참가격(price.go.kr) 등록가, 웨딩노트 경유, 적용 예식월 미표기, VAT 포함. 보증 300명 조건. 대관료 440~979만원(범위만 있음). 공개일 2026-08-18",
"cafe": "연도미표기 · 정가",
"url": "https://www.weddingnote.co.kr/halls/seoul/apelgamo-banpo",
"posted": "2026-08"
},
{
"rent": 11000000,
"meal": 110000,
"guarantee": 300,
"title": "연도미표기 · LL 단독홀 · 플랫폼가 · 플랫폼가(다이렉트결혼준비). 예식연도 표기 없음. 최소 보증 300명, 90분 분리예식",
"cafe": "연도미표기 · LL 단독홀 · 플랫폼가",
"url": "https://www.directwedding.co.kr/weddinghall/hall0344",
"posted": "확인일 2026-10"
}
],
"노블발렌티 삼성": [
{
"rent": 13000000,
"meal": 100000,
"guarantee": null,
"title": "27.09 · 성수기 · 정가 · 27년 하반기 정가. 대관료에 꽃장식·VAT 포함. 식대는 A코스 기준, 음주류 별도(B 12만/C 15만). 본식스냅 필수 120~160만. 9·12월 성수기, 10·11월 극성수기로 안내",
"cafe": "27.09 · 성수기 · 정가",
"url": "https://m.blog.naver.com/ddudal-/224395365756",
"posted": "2026-08"
},
{
"rent": 13000000,
"meal": 100000,
"guarantee": null,
"title": "연도미표기 · 정가 · '2027년도 PRICE' 가격표. 대관료에 꽃장식 포함. 코스 A 100,000/B 120,000/C 150,000원",
"cafe": "연도미표기 · 정가",
"url": "https://m.blog.naver.com/propix/224410306976",
"posted": "2026-09"
},
{
"rent": 13000000,
"meal": 100000,
"guarantee": null,
"title": "연도미표기 · 정가 · 27년 견적. 식대는 A코스 기준. 음료 6,600/맥주 8,800/소주 9,900/와인 66,000원으로 마신 만큼 계산. 2시간 단독 대관",
"cafe": "연도미표기 · 정가",
"url": "https://m.blog.naver.com/leejeegoo_/224447108684",
"posted": "2026-10"
},
{
"rent": 13000000,
"meal": 100000,
"guarantee": 200,
"title": "27.12 · 비수기 · 정가 · 정가 기준(당일 계약 할인 금액은 공개 안 함). 잔치국수·음료 추가 항목",
"cafe": "27.12 · 비수기 · 정가",
"url": "https://m.blog.naver.com/onjoo5078/224409652152",
"posted": "2026-09"
},
{
"rent": 13000000,
"meal": null,
"guarantee": null,
"title": "연도미표기 · 정가 · 참가격(price.go.kr) 등록가, 웨딩노트 경유, 적용 예식월 미표기, VAT 포함. 식대 74,000~99,000원(범위만 있음), 장식비 560~1,230만원. 공개일 2026-06-21",
"cafe": "연도미표기 · 정가",
"url": "https://www.weddingnote.co.kr/halls/seoul/noble-valenti-samseongjeom",
"posted": "2026-06"
},
{
"rent": 13000000,
"meal": 100000,
"guarantee": 300,
"title": "연도미표기 · The Classic 5F · 플랫폼가 · 플랫폼가(다이렉트결혼준비). 예식연도 표기 없음. 최소 보증 300명, 120분 분리예식",
"cafe": "연도미표기 · The Classic 5F · 플랫폼가",
"url": "https://www.directwedding.co.kr/weddinghall/hall0084",
"posted": "확인일 2026-10"
}
],
"상록아트홀": [
{
"rent": 10500000,
"meal": 105000,
"guarantee": null,
"title": "27.12 · 비수기 · 정가 · 정가는 1년 내내 같음(대관료 10,500,000원/식대 105,000원). 그랜드볼룸 계약. 음주류 별도, VAT 포함. 공무원 할인(성수기에는 식대 2,000원)",
"cafe": "27.12 · 비수기 · 정가",
"url": "https://m.blog.naver.com/kgji1117/224379841757",
"posted": "2026-08"
},
{
"rent": 9800000,
"meal": 98000,
"guarantee": null,
"title": "연도미표기 · 정가 · 27년 정가로 기재. 대관료+식대 합계는 3,430만원으로 기재",
"cafe": "연도미표기 · 정가",
"url": "https://m.blog.naver.com/ellyrama/224449436145",
"posted": "2026-10"
},
{
"rent": null,
"meal": null,
"guarantee": 200,
"title": "연도미표기 · 정가 · 참가격(price.go.kr) 등록가, 웨딩노트 경유, 적용 예식월 미표기, VAT 포함. 대관료 500~1,050만원, 식대 65,000~105,000원(범위만 있음). 보증 200명부터(최대 250/280명). 공개일 2026-07-29",
"cafe": "연도미표기 · 정가",
"url": "https://www.weddingnote.co.kr/halls/seoul/sangrok-art-hall",
"posted": "2026-07"
}
],
"빌라드지디 수서": [
{
"rent": 10000000,
"meal": 99000,
"guarantee": null,
"title": "연도미표기 · 정가 · 정가 기준. 생화장식 880만원 필수(빼기 불가), 원판 99만원. 총 견적 3,000~4,000만원대로 기재",
"cafe": "연도미표기 · 정가",
"url": "https://m.blog.naver.com/kt7102/224365720751",
"posted": "2026-08"
},
{
"rent": 21790000,
"meal": 99000,
"guarantee": null,
"title": "연도미표기 · 정가 · 정가로 기재(대관료 21,790,000원). 꽃장식 포함 여부는 적혀 있지 않음",
"cafe": "연도미표기 · 정가",
"url": "https://m.blog.naver.com/ellyrama/224442007063",
"posted": "2026-10"
},
{
"rent": null,
"meal": null,
"guarantee": null,
"title": "연도미표기 · 정가 · 27년 상반기 상담(26년 7월). 생화장식비 880만원 필수(할인 불가), 원판 99만원 필수. 음주류 별도(1인 free drink 10,000원 또는 병 단위 계산)",
"cafe": "연도미표기 · 정가",
"url": "https://m.blog.naver.com/bonnyworkspace/224367251723",
"posted": "2026-08"
},
{
"rent": null,
"meal": null,
"guarantee": 300,
"title": "연도미표기 · 정가 · 참가격(price.go.kr) 등록가, 웨딩노트 경유, 적용 예식월 미표기, VAT 포함. 대관료 400~800만원, 식대 75,000~87,000원(범위만 있음). 장식비 880만원. 보증 300명. 공개일 2026-05-29",
"cafe": "연도미표기 · 정가",
"url": "https://www.weddingnote.co.kr/halls/seoul/villa-de-jidi-suseo",
"posted": "2026-05"
}
],
"루이비스 송파문정": [
{
"rent": 9800000,
"meal": 93000,
"guarantee": 300,
"title": "연도미표기 · 토 · 정가 · 27년 하반기(8·9·11월 토요일 문의). 대관료에 플라워데코·혼구·본식스냅 포함. 식대에 음료 포함. 기계식 플라워샤워 20만원 필수(당일계약 서비스). 12·1·2시대 보증 300명. 당일계약 추가 할인(금액 미공개)",
"cafe": "연도미표기 · 토 · 정가",
"url": "https://m.blog.naver.com/livelikecarrot/224437207917",
"posted": "2026-10"
},
{
"rent": 9800000,
"meal": 93000,
"guarantee": 300,
"title": "연도미표기 · 정가 · 대관료 980만원~, 식대 93,000원~, 보증 300~600명",
"cafe": "연도미표기 · 정가",
"url": "https://m.blog.naver.com/asdora1/224425025760",
"posted": "2026-09"
},
{
"rent": 9800000,
"meal": 93000,
"guarantee": null,
"title": "27.08 · 비수기 · 정가 · 정가(대관료 980만원/식대 9.3만원). 플라워샤워 20만원",
"cafe": "27.08 · 비수기 · 정가",
"url": "https://m.blog.naver.com/pinkku00/224384049095",
"posted": "2026-08"
},
{
"rent": 9800000,
"meal": 93000,
"guarantee": null,
"title": "연도미표기 · 정가 · 27년 대관료(생화장식 포함) 980만원~, 뷔페 식대(음료·주류 포함) 93,000원~",
"cafe": "연도미표기 · 정가",
"url": "https://m.blog.naver.com/cktoa7/224443479822",
"posted": "2026-10"
},
{
"rent": 9800000,
"meal": 93000,
"guarantee": 200,
"title": "연도미표기 · 정가 · 참가격(price.go.kr) 등록가, 웨딩노트 경유, 적용 예식월 미표기, VAT 포함. 보증 200명부터(최대 300명). 공개일 2026-08-14",
"cafe": "연도미표기 · 정가",
"url": "https://www.weddingnote.co.kr/halls/seoul/luvis-convention-songpamunjeongjeom",
"posted": "2026-08"
},
{
"rent": 9500000,
"meal": 87000,
"guarantee": 300,
"title": "연도미표기 · 그레이스홀·아모리스홀 · 플랫폼가 · 플랫폼가(다이렉트결혼준비). 예식연도 표기 없음. 두 홀 모두 같은 금액, 최소 보증 300명",
"cafe": "연도미표기 · 그레이스홀·아모리스홀 · 플랫폼가",
"url": "https://www.directwedding.co.kr/weddinghall/hall0192",
"posted": "확인일 2026-10"
}
],
"루벨 강동": [
{
"rent": 8030000,
"meal": 91300,
"guarantee": 300,
"title": "27.11 · 성수기 · 토 점심 · 정가 · 카톡 견적 캡처: 대관료 1,000만원→803만원, 식대 10만원→91,300원. 같은 글에 플래너 엑셀은 대관료 900만원/식대 96,000원으로 따로 적힘",
"cafe": "27.11 · 성수기 · 토 점심 · 정가",
"url": "https://m.blog.naver.com/lhh99_/224377185892",
"posted": "2026-08"
},
{
"rent": 3300000,
"meal": 63800,
"guarantee": 200,
"title": "27.05 · 성수기 · 수(5/5) 18:30 · 정가 · 홈페이지 예약 캡처. 특별할인 적용가(프로모션 중복 불가). 식대는 총액 12,760,000원/200명으로 나눠 계산",
"cafe": "27.05 · 성수기 · 수(5/5) 18:30 · 정가",
"url": "https://m.blog.naver.com/bookfoodconcert/224433187546",
"posted": "2026-10"
},
{
"rent": 6820000,
"meal": 78100,
"guarantee": 250,
"title": "27.05 · 성수기 · 토(5/8) 14:00 · 정가 · 홈페이지 예약 캡처. 식대는 총액 19,525,000원/250명으로 나눠 계산",
"cafe": "27.05 · 성수기 · 토(5/8) 14:00 · 정가",
"url": "https://m.blog.naver.com/bookfoodconcert/224433187546",
"posted": "2026-10"
},
{
"rent": 6710000,
"meal": 78100,
"guarantee": 230,
"title": "27.05 · 성수기 · 토(5/8) 15:30 · 정가 · 홈페이지 예약 캡처. 식대는 총액 17,963,000원/230명으로 나눠 계산",
"cafe": "27.05 · 성수기 · 토(5/8) 15:30 · 정가",
"url": "https://m.blog.naver.com/bookfoodconcert/224433187546",
"posted": "2026-10"
},
{
"rent": 6050000,
"meal": 70400,
"guarantee": 200,
"title": "27.05 · 성수기 · 토(5/8) 17:00 · 정가 · 홈페이지 예약 캡처. 식대는 총액 14,080,000원/200명으로 나눠 계산",
"cafe": "27.05 · 성수기 · 토(5/8) 17:00 · 정가",
"url": "https://m.blog.naver.com/bookfoodconcert/224433187546",
"posted": "2026-10"
},
{
"rent": 6930000,
"meal": 77000,
"guarantee": 250,
"title": "27.10 · 성수기 · 일(10/3) 14:00 · 정가 · 홈페이지 예약 캡처. 식대는 총액 19,250,000원/250명으로 나눠 계산",
"cafe": "27.10 · 성수기 · 일(10/3) 14:00 · 정가",
"url": "https://m.blog.naver.com/ou__ub/224403979400",
"posted": "2026-09"
},
{
"rent": 10000000,
"meal": 107000,
"guarantee": null,
"title": "연도미표기 · 정가 · 27년 정가(대관료 1,000만원~, 식대 107,000원~)",
"cafe": "연도미표기 · 정가",
"url": "https://m.blog.naver.com/panoramatic/224405921578",
"posted": "2026-09"
},
{
"rent": null,
"meal": 56100,
"guarantee": 150,
"title": "연도미표기 · 정가 · 참가격(price.go.kr) 등록가, 웨딩노트 경유, 적용 예식월 미표기, VAT 포함. 보증 150명 조건. 대관료 396~803만원(범위만 있음). 공개일 2026-06-03",
"cafe": "연도미표기 · 정가",
"url": "https://www.weddingnote.co.kr/halls/seoul/rubel",
"posted": "2026-06"
},
{
"rent": null,
"meal": 91300,
"guarantee": 300,
"title": "연도미표기 · 정가 · 참가격(price.go.kr) 등록가, 웨딩노트 경유, 적용 예식월 미표기, VAT 포함. 보증 300명 조건. 대관료 396~803만원(범위만 있음). 공개일 2026-06-03",
"cafe": "연도미표기 · 정가",
"url": "https://www.weddingnote.co.kr/halls/seoul/rubel",
"posted": "2026-06"
}
],
"H스퀘어": [
{
"rent": 7000000,
"meal": 76000,
"guarantee": null,
"title": "연도미표기 · 정가 · 2027년 대관료 700만원, 식대 7만6천원",
"cafe": "연도미표기 · 정가",
"url": "https://m.blog.naver.com/propix/224388913686",
"posted": "2026-08"
},
{
"rent": 7000000,
"meal": null,
"guarantee": null,
"title": "연도미표기 · 정가 · 27년 상반기 목표로 2026-04 상담. 대관료 정가 700만원(2~3년 전보다 약 150만원 오름). 동문·지인 할인 있음. 식대 숫자는 없음",
"cafe": "연도미표기 · 정가",
"url": "https://m.blog.naver.com/soybean200/224245263643",
"posted": "2026-04"
},
{
"rent": 7000000,
"meal": 76000,
"guarantee": 250,
"title": "연도미표기 · 6F 단독홀 · 플랫폼가 · 플랫폼가(다이렉트결혼준비). 예식연도 표기 없음. 최소 보증 250명, 90분 분리예식",
"cafe": "연도미표기 · 6F 단독홀 · 플랫폼가",
"url": "https://www.directwedding.co.kr/weddinghall/hall0011",
"posted": "확인일 2026-10"
}
],
"웨딩스퀘어 강변": [
{
"rent": 7500000,
"meal": 75000,
"guarantee": 250,
"title": "27.03 · 비수기 · 토 · 정가 · 4층 그레이스홀 기본 단가. 대관료에 본식스냅 포함(원본·수정본 별도). 소인 35,000원. 음주류는 free drink 1인 10,000원. 당일혜택으로 음주류 무료+대관료 할인(금액 미공개)",
"cafe": "27.03 · 비수기 · 토 · 정가",
"url": "https://m.blog.naver.com/bindung_zip/224452087952",
"posted": "2026-10"
},
{
"rent": 8000000,
"meal": null,
"guarantee": 250,
"title": "연도미표기 · 정가 · 참가격(price.go.kr) 등록가, 웨딩노트 경유, 적용 예식월 미표기, VAT 포함. 식대 47,000~71,000원(범위만 있음). 장식비 110~630만원. 홀에 따라 보증 200/250명. 공개일 2026-06-12",
"cafe": "연도미표기 · 정가",
"url": "https://www.weddingnote.co.kr/halls/seoul/wedding-square-gangbyeon",
"posted": "2026-06"
},
{
"rent": 7500000,
"meal": 75000,
"guarantee": 300,
"title": "연도미표기 · 그레이스홀 4F · 플랫폼가 · 플랫폼가(다이렉트결혼준비). 예식연도 표기 없음. 최소 보증 300명",
"cafe": "연도미표기 · 그레이스홀 4F · 플랫폼가",
"url": "https://www.directwedding.co.kr/weddinghall/hall0397",
"posted": "확인일 2026-10"
},
{
"rent": 7500000,
"meal": 75000,
"guarantee": 250,
"title": "연도미표기 · 루시드홀·베니르홀 3F · 플랫폼가 · 플랫폼가(다이렉트결혼준비). 예식연도 표기 없음. 최소 보증 250명",
"cafe": "연도미표기 · 루시드홀·베니르홀 3F · 플랫폼가",
"url": "https://www.directwedding.co.kr/weddinghall/hall0397",
"posted": "확인일 2026-10"
}
],
"엔티움": [],
"라온스퀘어": [],
"파티움하우스 수원": [
{
"rent": 4800000,
"meal": 69000,
"guarantee": null,
"title": "연도미표기 · 그레이스켈리홀 성수기 피크타임 · 정가 · 정가(공식 홈페이지 할인가). '2027년 7월~12월 예식까지' 표. 정상가는 대관료 7,300,000원/식대 75,000원. 식대에 음료·주류 포함, VAT 포함. 공정위 자율가격표시제 참여",
"cafe": "연도미표기 · 그레이스켈리홀 성수기 피크타임 · 정가",
"url": "https://www.partyumhouse.com/guide/price/",
"posted": "확인일 2026-10"
},
{
"rent": 3800000,
"meal": 65000,
"guarantee": null,
"title": "연도미표기 · 그레이스켈리홀 비수기 피크타임 · 정가 · 정가(공식 홈페이지 할인가). '2027년 7월~12월 예식까지' 표. 식대에 음료·주류 포함",
"cafe": "연도미표기 · 그레이스켈리홀 비수기 피크타임 · 정가",
"url": "https://www.partyumhouse.com/guide/price/",
"posted": "확인일 2026-10"
},
{
"rent": 4300000,
"meal": 69000,
"guarantee": null,
"title": "연도미표기 · 파티움홀 성수기 피크타임 · 정가 · 정가(공식 홈페이지 할인가). '2027년 7월~12월 예식까지' 표. 정상가는 대관료 7,300,000원/식대 75,000원. 식대에 음료·주류 포함",
"cafe": "연도미표기 · 파티움홀 성수기 피크타임 · 정가",
"url": "https://www.partyumhouse.com/guide/price/",
"posted": "확인일 2026-10"
},
{
"rent": 3300000,
"meal": 65000,
"guarantee": null,
"title": "연도미표기 · 파티움홀 비수기 피크타임 · 정가 · 정가(공식 홈페이지 할인가). '2027년 7월~12월 예식까지' 표. 식대에 음료·주류 포함",
"cafe": "연도미표기 · 파티움홀 비수기 피크타임 · 정가",
"url": "https://www.partyumhouse.com/guide/price/",
"posted": "확인일 2026-10"
},
{
"rent": 4500000,
"meal": 67000,
"guarantee": null,
"title": "연도미표기 · 그레이스켈리홀 성수기 피크타임 · 정가 · 정가(공식 홈페이지 할인가). '2027년 1월~6월 예식까지' 표. 정상가는 대관료 7,000,000원/식대 72,000원. 식대에 음료·주류 포함",
"cafe": "연도미표기 · 그레이스켈리홀 성수기 피크타임 · 정가",
"url": "https://www.partyumhouse.com/guide/price/",
"posted": "확인일 2026-10"
},
{
"rent": 3500000,
"meal": 63000,
"guarantee": null,
"title": "연도미표기 · 그레이스켈리홀 비수기 피크타임 · 정가 · 정가(공식 홈페이지 할인가). '2027년 1월~6월 예식까지' 표",
"cafe": "연도미표기 · 그레이스켈리홀 비수기 피크타임 · 정가",
"url": "https://www.partyumhouse.com/guide/price/",
"posted": "확인일 2026-10"
},
{
"rent": 4000000,
"meal": 67000,
"guarantee": null,
"title": "연도미표기 · 파티움홀 성수기 피크타임 · 정가 · 정가(공식 홈페이지 할인가). '2027년 1월~6월 예식까지' 표. 정상가는 대관료 7,000,000원/식대 72,000원",
"cafe": "연도미표기 · 파티움홀 성수기 피크타임 · 정가",
"url": "https://www.partyumhouse.com/guide/price/",
"posted": "확인일 2026-10"
},
{
"rent": 3000000,
"meal": 63000,
"guarantee": null,
"title": "연도미표기 · 파티움홀 비수기 피크타임 · 정가 · 정가(공식 홈페이지 할인가). '2027년 1월~6월 예식까지' 표",
"cafe": "연도미표기 · 파티움홀 비수기 피크타임 · 정가",
"url": "https://www.partyumhouse.com/guide/price/",
"posted": "확인일 2026-10"
},
{
"rent": 7000000,
"meal": 72000,
"guarantee": 200,
"title": "연도미표기 · 그레이스켈리홀·파티움홀 · 플랫폼가 · 플랫폼가(다이렉트결혼준비 홀 정보). 예식연도 표기 없음. 두 홀 모두 대관료 7,000,000원/식대 72,000원, 최소 보증 200명",
"cafe": "연도미표기 · 그레이스켈리홀·파티움홀 · 플랫폼가",
"url": "https://www.directwedding.co.kr/weddinghall/hall0485",
"posted": "확인일 2026-10"
}
],
"광명무역센터컨벤션": [
{
"rent": 9200000,
"meal": 89000,
"guarantee": null,
"title": "연도미표기 · 성수기 피크타임 · 정가 · 가격표 '2027년 7~12월 예식까지'. 성수기 피크타임 할인가(최고가). 정상가는 대관료 16,000,000원/식대 110,000원. 식대에 음료·주류 포함, VAT 포함. 그랜드볼룸",
"cafe": "연도미표기 · 성수기 피크타임 · 정가",
"url": "https://m.blog.naver.com/chae_recordz/224420261993",
"posted": "2026-09"
},
{
"rent": 7700000,
"meal": 82000,
"guarantee": null,
"title": "연도미표기 · 비수기 피크타임 · 정가 · 가격표 '2027년 7~12월 예식까지'. 비수기 피크타임 할인가(최고가). 식대에 음료·주류 포함, VAT 포함",
"cafe": "연도미표기 · 비수기 피크타임 · 정가",
"url": "https://m.blog.naver.com/chae_recordz/224420261993",
"posted": "2026-09"
},
{
"rent": 16000000,
"meal": 110000,
"guarantee": null,
"title": "연도미표기 · 정가 · 27년 상반기 상담 가격표(정가). 대관료에 혼구·연출·꽃장식·본식사진 포함. 식대에 free drink(탄산·맥주·소주) 포함. 소인 41,000원",
"cafe": "연도미표기 · 정가",
"url": "https://m.blog.naver.com/e-m_m-e/224360483130",
"posted": "2026-07"
},
{
"rent": 16000000,
"meal": 110000,
"guarantee": null,
"title": "연도미표기 · 정가 · 참가격(price.go.kr) 등록가, 웨딩노트 경유, 적용 예식월 미표기, VAT 포함. 공개일 2026-09-30",
"cafe": "연도미표기 · 정가",
"url": "https://www.weddingnote.co.kr/halls/gyeonggi/gwangmyeongmuyeok-center-convention",
"posted": "2026-09"
},
{
"rent": 8700000,
"meal": 85000,
"guarantee": null,
"title": "연도미표기 · 성수기 피크타임 · 정가 · 정가(공식 홈페이지 할인가). '2027년 1월~6월 예식까지' 표에서 성수기 피크타임 최고가. 정상가는 대관료 14,000,000원/식대 95,000원. 식대에 음료·주류 포함, VAT 포함",
"cafe": "연도미표기 · 성수기 피크타임 · 정가",
"url": "https://www.gtcwed.co.kr/guide/wedding/",
"posted": "확인일 2026-10"
},
{
"rent": 7200000,
"meal": 78000,
"guarantee": null,
"title": "연도미표기 · 비수기 피크타임 · 정가 · 정가(공식 홈페이지 할인가). '2027년 1월~6월 예식까지' 표에서 비수기 피크타임 최고가. 식대에 음료·주류 포함, VAT 포함",
"cafe": "연도미표기 · 비수기 피크타임 · 정가",
"url": "https://www.gtcwed.co.kr/guide/wedding/",
"posted": "확인일 2026-10"
},
{
"rent": 9200000,
"meal": 89000,
"guarantee": null,
"title": "연도미표기 · 성수기 피크타임 · 정가 · 정가(공식 홈페이지 할인가). '2027년 7월~12월 예식까지' 표에서 성수기 피크타임 최고가. 정상가는 대관료 16,000,000원/식대 110,000원. 식대에 음료·주류 포함",
"cafe": "연도미표기 · 성수기 피크타임 · 정가",
"url": "https://www.gtcwed.co.kr/guide/wedding/",
"posted": "확인일 2026-10"
},
{
"rent": 7700000,
"meal": 82000,
"guarantee": null,
"title": "연도미표기 · 비수기 피크타임 · 정가 · 정가(공식 홈페이지 할인가). '2027년 7월~12월 예식까지' 표에서 비수기 피크타임 최고가. 식대에 음료·주류 포함",
"cafe": "연도미표기 · 비수기 피크타임 · 정가",
"url": "https://www.gtcwed.co.kr/guide/wedding/",
"posted": "확인일 2026-10"
}
],
"더채플앳청담": [
{
"rent": 12000000,
"meal": 120000,
"guarantee": null,
"title": "2027 · 정가 · 27년 정가 기준, 채플홀·커티지홀 동일, 각 180석",
"cafe": "2027 · 정가",
"url": "https://m.blog.naver.com/kt7102/224386669008",
"posted": "2026-08"
},
{
"rent": null,
"meal": 66000,
"guarantee": 150,
"title": "연도미표기 · 정가 · [참가격 정가] 참가격 공개일 2026-08-18, 채플홀·커티지홀 동일. 대관료 6,600,000~11,220,000원, 기본 150명 식대 66,000원(300명 기준 106,700원), 음주류 11,000원 별도. 예식연도 표기 없음",
"cafe": "연도미표기 · 정가",
"url": "https://www.weddingnote.co.kr/halls/seoul/deochaepeuraetcheongdam",
"posted": "확인일 2026-10"
},
{
"rent": 12000000,
"meal": 120000,
"guarantee": 300,
"title": "연도미표기 · 플랫폼가 · [플랫폼가 다이렉트결혼준비] 채플홀·커티지홀 동일, 꽃장식은 대관료에 포함, 음주류는 식대에 포함으로 표기. 예식연도 표기 없음",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://www.directwedding.co.kr/weddinghall/hall0141",
"posted": "확인일 2026-10"
}
],
"더컨벤션 신사": [
{
"rent": 16500000,
"meal": 160000,
"guarantee": 300,
"title": "2027 · 정가 · 27년 정가, 300명 기준 총 6,450만원. 같은 작성자의 2026-10 글(ellyrama/224450722613)에도 같은 정가와 함께 대관료에 꽃장식·연출·혼구·피아노4중주·전문사회자·포토테이블·플라워샤워 포함으로 적혀 있음",
"cafe": "2027 · 정가",
"url": "https://m.blog.naver.com/ellyrama/224301869446",
"posted": "2026-05"
},
{
"rent": 16500000,
"meal": null,
"guarantee": 300,
"title": "연도미표기 · 정가 · [참가격 정가] 참가격 공개일 2026-06-12, 그랜드볼룸 대관 정가. 식대 79,000~110,000원, 장식비 6,000,000~12,000,000원, 본식 DVD 550,000원. 예식연도 표기 없음",
"cafe": "연도미표기 · 정가",
"url": "https://www.weddingnote.co.kr/halls/seoul/deo-convention-sinsa",
"posted": "확인일 2026-10"
},
{
"rent": 16500000,
"meal": 160000,
"guarantee": 300,
"title": "연도미표기 · 플랫폼가 · [플랫폼가 다이렉트결혼준비] 그랜드볼룸, 생화는 대관료에 포함, 음주류는 식대에 포함. 예식연도 표기 없음",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://www.directwedding.co.kr/weddinghall/hall0144",
"posted": "확인일 2026-10"
}
],
"그랜드힐컨벤션": [
{
"rent": 10000000,
"meal": 105000,
"guarantee": 350,
"title": "2027 · 성수기 · 12:00/15:00/18:00 · 정가 · 그랜드볼룸(3층) 2027 정가, 식대 105,000~120,000원(메뉴별), 10인 테이블당 와인 1병 필수, 기타 음료는 당일 소모량대로",
"cafe": "2027 · 성수기 · 12:00/15:00/18:00 · 정가",
"url": "https://m.blog.naver.com/lhj950/224376934175",
"posted": "2026-08"
},
{
"rent": 9000000,
"meal": 105000,
"guarantee": 300,
"title": "2027 · 성수기 · 11:30/14:30/17:30 · 정가 · 사브리나홀(2층) 2027 정가, 식대 105,000~120,000원(메뉴별), 와인 테이블당 1병 필수",
"cafe": "2027 · 성수기 · 11:30/14:30/17:30 · 정가",
"url": "https://m.blog.naver.com/lhj950/224376934175",
"posted": "2026-08"
},
{
"rent": 8000000,
"meal": 105000,
"guarantee": 250,
"title": "2027 · 성수기 · 12:00/15:00/18:00 · 정가 · 플로리아홀(1층) 2027 정가, 식대 105,000~120,000원(메뉴별), 와인 테이블당 1병 필수",
"cafe": "2027 · 성수기 · 12:00/15:00/18:00 · 정가",
"url": "https://m.blog.naver.com/lhj950/224376934175",
"posted": "2026-08"
},
{
"rent": 14000000,
"meal": 105000,
"guarantee": null,
"title": "2027 · 정가 · 플로리아홀 2027 대관료(꽃장식 포함), 식대 퓨전한식A 105,000, 퓨전한식B·양식A 120,000원. 같은 글에 그랜드볼룸 대관료 1,800만원",
"cafe": "2027 · 정가",
"url": "https://m.blog.naver.com/no_luv528/224439848775",
"posted": "2026-10"
},
{
"rent": 16000000,
"meal": null,
"guarantee": 350,
"title": "연도미표기 · 플랫폼가 · [플랫폼가 다이렉트결혼준비] 그랜드볼룸 대관료(생화 포함), 양식 퓨전코스 99,000~130,000원, 음주류는 당일 소모량. 사브리나홀도 16,000,000원/최소 300명으로 표기. 예식연도 표기 없음",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://www.directwedding.co.kr/weddinghall/hall0065",
"posted": "확인일 2026-10"
}
],
"라시따시어터": [
{
"rent": 18000000,
"meal": 120000,
"guarantee": null,
"title": "2027 · 정가 · 27년 하반기 정가, 최소 보증 250~300명, 90분 간격",
"cafe": "2027 · 정가",
"url": "https://m.blog.naver.com/springonion_eggs/224399779690",
"posted": "2026-09"
},
{
"rent": 16000000,
"meal": 110000,
"guarantee": 250,
"title": "2027 · 정가 · 27년 정가, 250명 기준 총 4,350만원, 보증 250~300명(요일·시간별)",
"cafe": "2027 · 정가",
"url": "https://m.blog.naver.com/ellyrama/224263123756",
"posted": "2026-04"
},
{
"rent": 13500000,
"meal": 99000,
"guarantee": null,
"title": "27.07~12 · 성수기 · 정가 · [공식 홈페이지 자율가격표시] 2027년 7~12월 예식, 성수기 피크타임(최고가) 할인가. 정상가 대관료 18,000,000원, 식대 120,000원(음주류 포함)",
"cafe": "27.07~12 · 성수기 · 정가",
"url": "https://www.lacittatheater.co.kr/view/price",
"posted": "확인일 2026-10"
},
{
"rent": 9900000,
"meal": 89000,
"guarantee": null,
"title": "27.07~12 · 비수기 · 정가 · [공식 홈페이지 자율가격표시] 2027년 7~12월 예식, 비수기 피크타임 할인가. 정상가 18,000,000원/120,000원",
"cafe": "27.07~12 · 비수기 · 정가",
"url": "https://www.lacittatheater.co.kr/view/price",
"posted": "확인일 2026-10"
},
{
"rent": 12000000,
"meal": 95000,
"guarantee": null,
"title": "27.01~06 · 성수기 · 정가 · [공식 홈페이지 자율가격표시] 2027년 1~6월 예식, 성수기 피크타임(최고가) 할인가. 정상가 대관료 16,000,000원, 식대 110,000원",
"cafe": "27.01~06 · 성수기 · 정가",
"url": "https://www.lacittatheater.co.kr/view/price",
"posted": "확인일 2026-10"
},
{
"rent": 9600000,
"meal": 85000,
"guarantee": null,
"title": "27.01~06 · 비수기 · 정가 · [공식 홈페이지 자율가격표시] 2027년 1~6월 예식, 비수기 피크타임 할인가. 정상가 16,000,000원/110,000원",
"cafe": "27.01~06 · 비수기 · 정가",
"url": "https://www.lacittatheater.co.kr/view/price",
"posted": "확인일 2026-10"
}
],
"서울웨딩타워": [
{
"rent": 10500000,
"meal": 130000,
"guarantee": null,
"title": "2027 · 정가 · 정가(음주류 포함 식대). 시간대별: 11시/15시 대관료 900~990만, 식대 95,000~98,000원, 보증 250명 / 12:20·13:40 900~990만, 95,000~98,000원, 300명 / 16:20·17:30 850~900만, 85,000~90,000원, 250명 / 18:40 700~800만, 75,000~80,000원, 200명",
"cafe": "2027 · 정가",
"url": "https://m.blog.naver.com/propix/224368050333",
"posted": "2026-08"
},
{
"rent": 10500000,
"meal": 110000,
"guarantee": null,
"title": "2027 · 정가 · 27년 하반기 상담, 가격표시제 공개가. 2027년 예식까지 기존 식대 적용, 2028년부터 뷔페 식대로 인상 예정",
"cafe": "2027 · 정가",
"url": "https://m.blog.naver.com/junan9e/224409961175",
"posted": "2026-09"
},
{
"rent": 10500000,
"meal": null,
"guarantee": 350,
"title": "연도미표기 · 플랫폼가 · [플랫폼가 다이렉트결혼준비] 퓨전 코스·뷔페 95,000~110,000원(26년 8월부터 뷔페 전환), 꽃장식·연출 대관료에 포함, 음주류는 식대에 포함. 예식연도 표기 없음",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://www.directwedding.co.kr/weddinghall/hall0289",
"posted": "확인일 2026-10"
}
],
"더베르지 영등포": [
{
"rent": 18000000,
"meal": 120000,
"guarantee": null,
"title": "2027 · 정가 · 2027 가격표(5월~) 정가. 대관료는 대관 포함 웨딩프로그램 금액, 음주류 1인 2만원 별도. 할인가: 비시즌 토 600~1,050만/식대 78,000~97,000, 일 500~850만/62,000~90,000 / 시즌 토 850~1,250만/81,000~99,000, 일 750~1,150만/72,000~93,000",
"cafe": "2027 · 정가",
"url": "https://m.blog.naver.com/kt7102/224386740275",
"posted": "2026-08"
},
{
"rent": 18000000,
"meal": 120000,
"guarantee": null,
"title": "2027 · 정가 · 27년 상담 견적표상 정가",
"cafe": "2027 · 정가",
"url": "https://m.blog.naver.com/ellyrama/224443186074",
"posted": "2026-10"
}
],
"벨라루체웨딩홀 서울점": [
{
"rent": 8800000,
"meal": 88000,
"guarantee": 200,
"title": "연도미표기 · 플랫폼가 · [플랫폼가 다이렉트결혼준비] 벨라루체웨딩홀 서울점(구 웨딩헤너스, 회기)으로 확인. 플로체홀·루체홀 등 동일, 꽃장식 대관료에 포함, 음주류 식대 포함. 예식연도 표기 없음",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://www.directwedding.co.kr/weddinghall/hall0219",
"posted": "확인일 2026-10"
},
{
"rent": 6500000,
"meal": 77000,
"guarantee": null,
"title": "연도미표기 · 플랫폼가 · [플랫폼가 요즘웨딩] 벨라루체웨딩홀 서울점, 벨라·루체·플로체홀 모두 같은 금액, 부가세·봉사료·연출료 포함. 예식연도 표기 없음",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://yozmwedding.co.kr/venue/?bmode=view&idx=148787694",
"posted": "확인일 2026-10"
}
],
"루이비스 중구": [
{
"rent": 10500000,
"meal": 87000,
"guarantee": 250,
"title": "27.05 · 성수기 · 잔여타임 · 토 13:20 · 정가 · 27년 잔여타임 할인 전 견적(5/29)",
"cafe": "27.05 · 성수기 · 잔여타임 · 토 13:20 · 정가",
"url": "https://m.blog.naver.com/parkdkfma77/224441233110",
"posted": "2026-10"
},
{
"rent": 10500000,
"meal": 87000,
"guarantee": 250,
"title": "27.06 · 성수기 · 잔여타임 · 토 12:10 · 정가 · 27년 잔여타임 할인 전 견적(6/26)",
"cafe": "27.06 · 성수기 · 잔여타임 · 토 12:10 · 정가",
"url": "https://m.blog.naver.com/parkdkfma77/224441233110",
"posted": "2026-10"
},
{
"rent": 9500000,
"meal": 87000,
"guarantee": 300,
"title": "연도미표기 · 플랫폼가 · [플랫폼가 다이렉트결혼준비] 다산홀(18층 단독), 생화는 대관료에 포함, 음주류는 식대에 포함. 예식연도 표기 없음",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://www.directwedding.co.kr/weddinghall/hall0193",
"posted": "확인일 2026-10"
}
],
"남산예술원": [
{
"rent": 9000000,
"meal": 68000,
"guarantee": 200,
"title": "2027 · 성수기 · 정가 · 2027년 4~5월 상담. 대관 및 연출 900만원, 기본 상차림 식대, 본식 사진(필수) 약 140만원 별도, 정찰제",
"cafe": "2027 · 성수기 · 정가",
"url": "https://m.blog.naver.com/silvergomm/224405019028",
"posted": "2026-09"
},
{
"rent": 11000000,
"meal": 73000,
"guarantee": 150,
"title": "연도미표기 · 정가 · [참가격 정가] 참가격 공개일 2026-09-09, 가든홀 기본 150~250명, 장식비는 대관료에 포함, 음주류는 식대에 포함(대관 외 시간·반출 시 7,000원), 사진 촬영 1,400,000원. 예식연도 표기 없음",
"cafe": "연도미표기 · 정가",
"url": "https://www.weddingnote.co.kr/halls/seoul/namsanyesurwon",
"posted": "확인일 2026-10"
},
{
"rent": 8000000,
"meal": 66000,
"guarantee": 300,
"title": "연도미표기 · 플랫폼가 · [플랫폼가 다이렉트결혼준비] 가든홀 한식, 꽃장식·연출 대관료에 포함, 음주류는 식대에 포함. 예식연도 표기 없음",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://www.directwedding.co.kr/weddinghall/hall0078",
"posted": "확인일 2026-10"
}
],
"위례 밀리토피아호텔": [
{
"rent": null,
"meal": 77000,
"guarantee": 250,
"title": "27.06 · 성수기 · 정가 · 카멜리아홀 상담, 군간부 할인 조건, 소인 33,000원, 본식사진 포함. 대관료는 본문에 없음",
"cafe": "27.06 · 성수기 · 정가",
"url": "https://m.blog.naver.com/dlarma7128/224436599118",
"posted": "2026-10"
},
{
"rent": 4840000,
"meal": 73000,
"guarantee": 250,
"title": "연도미표기 · 플랫폼가 · [플랫폼가 다이렉트결혼준비] 카멜리아홀·아이리스홀 동일, 생화 대관료에 포함, 음주류 식대 포함. 예식연도 표기 없음",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://www.directwedding.co.kr/weddinghall/hall0213",
"posted": "확인일 2026-10"
},
{
"rent": 7150000,
"meal": 100000,
"guarantee": 300,
"title": "연도미표기 · 플랫폼가 · [플랫폼가 다이렉트결혼준비] 그랜드볼룸(호텔 건물) 양식, 생화는 대관료에 포함, 음주류는 당일 소모량. 예식연도 표기 없음",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://www.directwedding.co.kr/weddinghall/hall0213",
"posted": "확인일 2026-10"
}
],
"노블레스웨딩컨벤션 수원": [
{
"rent": 5700000,
"meal": 68000,
"guarantee": 250,
"title": "연도미표기 · 성수기 · 정가 · [공식 홈페이지 가격표] 7층 컨벤션홀, 성수기 피크타임(최고가), 생화비 포함. 비수기 피크타임(최저가) 4,900,000원/63,000원/최소 200명. 적용 연도 표기 없음",
"cafe": "연도미표기 · 성수기 · 정가",
"url": "http://swed.co.kr/Weddingprogram",
"posted": "확인일 2026-10"
},
{
"rent": 4900000,
"meal": 68000,
"guarantee": 200,
"title": "연도미표기 · 성수기 · 정가 · [공식 홈페이지 가격표] 5층 노블레스홀, 성수기 피크타임(최고가), 생화비 포함. 비수기 피크타임(최저가) 4,200,000원/63,000원/최소 150명. 적용 연도 표기 없음",
"cafe": "연도미표기 · 성수기 · 정가",
"url": "http://swed.co.kr/Weddingprogram",
"posted": "확인일 2026-10"
},
{
"rent": 8400000,
"meal": 79000,
"guarantee": 250,
"title": "연도미표기 · 플랫폼가 · [플랫폼가 다이렉트결혼준비] 7층 컨벤션홀, 꽃장식·연출 대관료에 포함, 음주류 식대 포함. 5층 노블레스홀도 8,400,000원/79,000원/최소 200명. 예식연도 표기 없음",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://www.directwedding.co.kr/weddinghall/hall0308",
"posted": "확인일 2026-10"
}
],
"라포에트 광명역사": [
{
"rent": 9300000,
"meal": 82000,
"guarantee": 200,
"title": "2027 · 정가 · 27년 하반기 정상가, 대관료 플라워 포함, 식대 음료·주류 포함(본문 표기 '82,000만원'), 소인 35,000원, 특정 시간 150명 가능",
"cafe": "2027 · 정가",
"url": "https://m.blog.naver.com/riley369/224384966202",
"posted": "2026-08"
},
{
"rent": 8800000,
"meal": 76000,
"guarantee": 200,
"title": "연도미표기 · 플랫폼가 · [플랫폼가 다이렉트결혼준비] 단독홀 B1F, 꽃장식·연출 대관료에 포함, 음주류는 식대에 포함. 예식연도 표기 없음",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://www.directwedding.co.kr/weddinghall/hall0041",
"posted": "확인일 2026-10"
}
],
"더채플앳논현": [
{
"rent": 10670000,
"meal": 110000,
"guarantee": 250,
"title": "27.H2 · 일 13:00 · 정가 · 라포레홀, 홈페이지 할인가 조회값. 글에는 식대 총액 27,500,000원(250명)으로 표기→1인 환산",
"cafe": "27.H2 · 일 13:00 · 정가",
"url": "https://m.blog.naver.com/todaysdiary-u_u/224421344820",
"posted": "2026-09"
},
{
"rent": 10670000,
"meal": 110000,
"guarantee": null,
"title": "27.H2 · 정가 · 라포레홀 상담일 견적(날짜 비공개, 홈페이지가와 동일). 정가 대관 13,000,000/식대 130,000+음주류 11,000. 소인 49,500",
"cafe": "27.H2 · 정가",
"url": "https://m.blog.naver.com/beany9/224413321531",
"posted": "2026-09"
},
{
"rent": 13000000,
"meal": 130000,
"guarantee": 300,
"title": "27.H2 · 토 점심 · 정가 · 라포레홀 정가(꽃장식 포함). 보증: 토17:30 270, 토19:00·일16:00/17:30 250, 그외 300",
"cafe": "27.H2 · 토 점심 · 정가",
"url": "https://m.blog.naver.com/pairissoul/224341860365",
"posted": "2026-07"
},
{
"rent": 12000000,
"meal": 120000,
"guarantee": null,
"title": "2027 · 정가 · 라메르홀 정가 기준",
"cafe": "2027 · 정가",
"url": "https://m.blog.naver.com/dailystamp/224432363116",
"posted": "2026-10"
},
{
"rent": 12000000,
"meal": 120000,
"guarantee": null,
"title": "2027 · 플랫폼가 · 플랫폼가(웨딩북 정가) 라메르홀_27년. 소인 47,300, 음주류 11,000 옵션 표기, 추천인원 300",
"cafe": "2027 · 플랫폼가",
"url": "https://www.weddingbook.com/weddinghall/55cf2fc7-3841-11ea-9bb0-0ab3aefe6e38",
"posted": "확인일 2026-10"
},
{
"rent": 13000000,
"meal": 130000,
"guarantee": null,
"title": "2027 · 플랫폼가 · 플랫폼가(웨딩북 정가) 라포레홀_27년. 소인 49,500, 음주류 11,000 옵션 표기, 추천인원 300",
"cafe": "2027 · 플랫폼가",
"url": "https://www.weddingbook.com/weddinghall/55cf2fc7-3841-11ea-9bb0-0ab3aefe6e38",
"posted": "확인일 2026-10"
},
{
"rent": null,
"meal": 66000,
"guarantee": 180,
"title": "연도미표기 · 정가 · 정가(한국소비자원 참가격 공개, 웨딩노트 게재, 기준일 2026-08-18, 예식연도 미표기) 라포레홀 기본 180명. 대관료 6,600,000~12,320,000(행별 매핑 미표기), 음주류 11,000 별도",
"cafe": "연도미표기 · 정가",
"url": "https://www.weddingnote.co.kr/halls/seoul/deochaepeuraetnonhyeon",
"posted": "확인일 2026-10"
},
{
"rent": null,
"meal": 119900,
"guarantee": 300,
"title": "연도미표기 · 정가 · 정가(참가격, 웨딩노트, 기준일 2026-08-18) 라포레홀 기본 300명. 대관료 6,600,000~12,320,000, 음주류 11,000 별도",
"cafe": "연도미표기 · 정가",
"url": "https://www.weddingnote.co.kr/halls/seoul/deochaepeuraetnonhyeon",
"posted": "확인일 2026-10"
}
],
"더컨벤션 반포": [
{
"rent": 12000000,
"meal": 120000,
"guarantee": 300,
"title": "27.H2 · 정가 · 정가. 대관료 생화 포함, 식대 뷔페·음주류 포함, 보증 300~650",
"cafe": "27.H2 · 정가",
"url": "https://m.blog.naver.com/dkdlvhsvhdpt/224327132826",
"posted": "2026-06"
},
{
"rent": 12000000,
"meal": 120000,
"guarantee": 300,
"title": "2027 · 정가 · 정가 기준. 꽃장식(생화) 대관료 포함, 보증 300~650",
"cafe": "2027 · 정가",
"url": "https://m.blog.naver.com/stealmight/224399796941",
"posted": "2026-09"
},
{
"rent": 12000000,
"meal": 120000,
"guarantee": null,
"title": "27.H1 · 정가 · 정상가. 소인 45,000. 포토테이블·플라워샤워 서비스",
"cafe": "27.H1 · 정가",
"url": "https://m.blog.naver.com/thatsnohnoh/224245695415",
"posted": "2026-04"
},
{
"rent": 12000000,
"meal": 120000,
"guarantee": null,
"title": "27.H1 · 정가 · 상담 안내가",
"cafe": "27.H1 · 정가",
"url": "https://m.blog.naver.com/clara0512/224353140181",
"posted": "2026-07"
},
{
"rent": 12000000,
"meal": 120000,
"guarantee": null,
"title": "연도미표기 · 플랫폼가 · 플랫폼가(웨딩북 정가, 연도 미표기) 그랜드볼룸홀. 소인 동일, 추천인원 300",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://www.weddingbook.com/weddinghall/dc222138-cd56-11ea-9bb0-0ab3aefe6e38",
"posted": "확인일 2026-10"
},
{
"rent": 12000000,
"meal": null,
"guarantee": 300,
"title": "연도미표기 · 정가 · 정가(참가격, 웨딩노트, 기준일 2026-06-12) 그랜드볼룸 기본 300명. 식비 50,000~89,000, 장식비 2,000,000~8,500,000",
"cafe": "연도미표기 · 정가",
"url": "https://www.weddingnote.co.kr/halls/seoul/deo-convention-banpo",
"posted": "확인일 2026-10"
}
],
"엘타워": [
{
"rent": 6600000,
"meal": 140000,
"guarantee": 300,
"title": "2027 · 정가 · 그랜드홀 정가(식대 그랜드C 코스). 필수 별도: 현장생중계 등 2,200,000·파이프오르간 500,000·원판스냅 1,650,000~. 음주류 당일 소모량",
"cafe": "2027 · 정가",
"url": "https://m.blog.naver.com/no_luv528/224445625631",
"posted": "2026-10"
},
{
"rent": 6600000,
"meal": 130000,
"guarantee": 250,
"title": "27.H2 · 정가 · 정가. 대관료 3개 홀 동일 660만, 식대 디럭스C 13만, 꽃장식(필수) 700만 표기. 최소보증 오르체 250/그 외 300",
"cafe": "27.H2 · 정가",
"url": "https://m.blog.naver.com/ddudal-/224402122816",
"posted": "2026-09"
},
{
"rent": 11000000,
"meal": 140000,
"guarantee": 300,
"title": "27.H2 · 정가 · 그랜드볼룸 정가 '~부터'. 생화 820만~, 연출료 50만~, 음주류 당일 소모량",
"cafe": "27.H2 · 정가",
"url": "https://m.blog.naver.com/dkdlvhsvhdpt/224418715123",
"posted": "2026-09"
},
{
"rent": null,
"meal": 90000,
"guarantee": null,
"title": "연도미표기 · 정가 · 그레이스홀 할인 견적: 식대 9만, 대관료 포함 총합 약 700만(정가 식대 13만, 총 약 1,100만). 예식월 미기재",
"cafe": "연도미표기 · 정가",
"url": "https://m.blog.naver.com/formetravel/224443532081",
"posted": "2026-10"
},
{
"rent": 21000000,
"meal": 140000,
"guarantee": null,
"title": "연도미표기 · 11:30/14:30/17:30 · 플랫폼가 · 플랫폼가(웨딩북 정가, 연도 미표기) 뉴그랜드홀. 파이프오르간 500,000 필수, 추천인원 300",
"cafe": "연도미표기 · 11:30/14:30/17:30 · 플랫폼가",
"url": "https://www.weddingbook.com/weddinghall/5802b8e1-0d00-11e6-93b9-0abe8d4f74d3",
"posted": "확인일 2026-10"
},
{
"rent": 20000000,
"meal": 130000,
"guarantee": null,
"title": "연도미표기 · 12:00/15:00/18:00 · 플랫폼가 · 플랫폼가(웨딩북 정가) 그레이스홀. 추천인원 300/250",
"cafe": "연도미표기 · 12:00/15:00/18:00 · 플랫폼가",
"url": "https://www.weddingbook.com/weddinghall/5802b8e1-0d00-11e6-93b9-0abe8d4f74d3",
"posted": "확인일 2026-10"
},
{
"rent": 20000000,
"meal": 130000,
"guarantee": null,
"title": "연도미표기 · 11:00/14:00/17:00 · 플랫폼가 · 플랫폼가(웨딩북 정가) 오르체홀. 추천인원 250",
"cafe": "연도미표기 · 11:00/14:00/17:00 · 플랫폼가",
"url": "https://www.weddingbook.com/weddinghall/5802b8e1-0d00-11e6-93b9-0abe8d4f74d3",
"posted": "확인일 2026-10"
}
],
"더컨벤션 잠실": [
{
"rent": 12000000,
"meal": 130000,
"guarantee": null,
"title": "27.H2 · 정가 · 1F 그랜드볼룸 정가로 읽힘. 같은 글 다른 홀 대관료 13,000,000 / 3F 비스타홀 9,000,000, 식대 모두 130,000",
"cafe": "27.H2 · 정가",
"url": "https://m.blog.naver.com/ableshs/224426463600",
"posted": "2026-09"
},
{
"rent": 12000000,
"meal": 130000,
"guarantee": null,
"title": "2027 · 정가 · 정가, 대관료 꽃장식 포함, 소인도 13만. 홀 미기재",
"cafe": "2027 · 정가",
"url": "https://m.blog.naver.com/no_luv528/224450566021",
"posted": "2026-10"
},
{
"rent": 11000000,
"meal": 110000,
"guarantee": null,
"title": "27.H2 · 비수기 · 정가 · 그랜드볼룸 대관료 1,100만~ (비스타 760만~, 아모르 1,200만~), 식대 11만 동일",
"cafe": "27.H2 · 비수기 · 정가",
"url": "https://m.blog.naver.com/panoramatic/224425931553",
"posted": "2026-09"
},
{
"rent": 12000000,
"meal": 110000,
"guarantee": 250,
"title": "2027 · 정가 · 그랜드볼룸 정가, 250명 총 39,500,000. 소인 45,000",
"cafe": "2027 · 정가",
"url": "https://m.blog.naver.com/ellyrama/224285873275",
"posted": "2026-05"
},
{
"rent": 12000000,
"meal": 130000,
"guarantee": null,
"title": "연도미표기 · 플랫폼가 · 플랫폼가(웨딩북 정가, 연도 미표기) 그랜드볼룸홀. 추천인원 300",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://www.weddingbook.com/weddinghall/3e94ae5f-3782-11e6-93b9-0abe8d4f74d3",
"posted": "확인일 2026-10"
},
{
"rent": 13000000,
"meal": 130000,
"guarantee": null,
"title": "연도미표기 · 플랫폼가 · 플랫폼가(웨딩북 정가) 아모르홀. 추천인원 300/220",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://www.weddingbook.com/weddinghall/3e94ae5f-3782-11e6-93b9-0abe8d4f74d3",
"posted": "확인일 2026-10"
},
{
"rent": 9000000,
"meal": 130000,
"guarantee": null,
"title": "연도미표기 · 플랫폼가 · 플랫폼가(웨딩북 정가) 비스타홀. 추천인원 220",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://www.weddingbook.com/weddinghall/3e94ae5f-3782-11e6-93b9-0abe8d4f74d3",
"posted": "확인일 2026-10"
},
{
"rent": 7600000,
"meal": null,
"guarantee": 200,
"title": "연도미표기 · 정가 · 정가(참가격, 웨딩노트, 기준일 2026-06-12) 비스타 기본 200명. 식비 48,000~75,000, 장식비 1,900,000~6,000,000",
"cafe": "연도미표기 · 정가",
"url": "https://www.weddingnote.co.kr/halls/seoul/deo-convention-jamsil",
"posted": "확인일 2026-10"
},
{
"rent": 12000000,
"meal": null,
"guarantee": 300,
"title": "연도미표기 · 정가 · 정가(참가격, 웨딩노트, 기준일 2026-06-12) 아모르 기본 300명. 식비 55,000~94,000, 장식비 3,200,000~9,500,000",
"cafe": "연도미표기 · 정가",
"url": "https://www.weddingnote.co.kr/halls/seoul/deo-convention-jamsil",
"posted": "확인일 2026-10"
},
{
"rent": 11000000,
"meal": null,
"guarantee": 300,
"title": "연도미표기 · 정가 · 정가(참가격, 웨딩노트, 기준일 2026-06-12) 그랜드볼룸 기본 300명. 식비 51,000~90,000, 장식비 2,500,000~8,600,000",
"cafe": "연도미표기 · 정가",
"url": "https://www.weddingnote.co.kr/halls/seoul/deo-convention-jamsil",
"posted": "확인일 2026-10"
}
],
"아펠가모 잠실": [
{
"rent": 11000000,
"meal": 110000,
"guarantee": 280,
"title": "27.11 · 성수기 · 토 11:00 · 정가 · 정가(11/6). 소인 42,900. 계약금 400만",
"cafe": "27.11 · 성수기 · 토 11:00 · 정가",
"url": "https://m.blog.naver.com/ydyd2da/224365996188",
"posted": "2026-08"
},
{
"rent": 11000000,
"meal": 110000,
"guarantee": 300,
"title": "27.11 · 성수기 · 토 14:00 · 정가 · 정가(11/27). 소인 42,900",
"cafe": "27.11 · 성수기 · 토 14:00 · 정가",
"url": "https://m.blog.naver.com/ydyd2da/224365996188",
"posted": "2026-08"
},
{
"rent": 11000000,
"meal": 110000,
"guarantee": 250,
"title": "27.01 · 비수기 · 토 11:00 · 정가 · 정상가, 음주류 8,800 별도. 프로모션: 식대 10만 미만·사용료 800만 미만·음주류 서비스",
"cafe": "27.01 · 비수기 · 토 11:00 · 정가",
"url": "https://m.blog.naver.com/do_bear/224384983709",
"posted": "2026-08"
},
{
"rent": 8800000,
"meal": 96800,
"guarantee": 300,
"title": "2027 · 정가 · 2027년 최고가 기준(홈페이지 표). 최저: 대관 473만/식대 57,200/보증 200",
"cafe": "2027 · 정가",
"url": "https://m.blog.naver.com/enjoyles/224437933228",
"posted": "2026-10"
},
{
"rent": 11000000,
"meal": 110000,
"guarantee": null,
"title": "2027 · 플랫폼가 · 플랫폼가(웨딩북 정가) 단독홀_27년. 소인 42,900, 음주류 8,800 옵션 표기, 추천인원 300",
"cafe": "2027 · 플랫폼가",
"url": "https://www.weddingbook.com/weddinghall/bc8e931c-2091-11e6-93b9-0abe8d4f74d3",
"posted": "확인일 2026-10"
},
{
"rent": null,
"meal": 61600,
"guarantee": 200,
"title": "연도미표기 · 정가 · 정가(참가격, 웨딩노트, 기준일 2026-08-18) 기본 200명. 대관료 4,730,000~8,800,000, 음주류 8,800 별도",
"cafe": "연도미표기 · 정가",
"url": "https://www.weddingnote.co.kr/halls/seoul/apelgamo-jamsil",
"posted": "확인일 2026-10"
},
{
"rent": null,
"meal": 96800,
"guarantee": 300,
"title": "연도미표기 · 정가 · 정가(참가격, 웨딩노트, 기준일 2026-08-18) 기본 300명. 대관료 4,730,000~8,800,000, 음주류 8,800 별도",
"cafe": "연도미표기 · 정가",
"url": "https://www.weddingnote.co.kr/halls/seoul/apelgamo-jamsil",
"posted": "확인일 2026-10"
}
],
"SW컨벤션센터": [
{
"rent": 8000000,
"meal": 80000,
"guarantee": 200,
"title": "2027 · 정가 · 정가 '~부터'. 보증 날짜/시기에 따라 150~180 조율 가능",
"cafe": "2027 · 정가",
"url": "https://m.blog.naver.com/asdora1/224401110220",
"posted": "2026-09"
},
{
"rent": 6000000,
"meal": 70000,
"guarantee": 200,
"title": "2027 · 정가 · 정상가(다이렉트웨딩 공개정보), 대관료에 연출·꽃장식 포함, 200명 합계 20,000,000",
"cafe": "2027 · 정가",
"url": "https://m.blog.naver.com/topnbottom/224417360754",
"posted": "2026-09"
},
{
"rent": 8000000,
"meal": 80000,
"guarantee": 200,
"title": "2027 · 정가 · 대관료 꽃장식 포함, 식대 8만~",
"cafe": "2027 · 정가",
"url": "https://m.blog.naver.com/propix/224380473496",
"posted": "2026-08"
},
{
"rent": 8000000,
"meal": 80000,
"guarantee": null,
"title": "연도미표기 · 플랫폼가 · 플랫폼가(웨딩북 정가, 연도 미표기) 노블레스홀. 소인 42,000, 추천인원 250",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://www.weddingbook.com/weddinghall/d353ec0b-9124-11e6-93b9-0abe8d4f74d3",
"posted": "확인일 2026-10"
}
],
"로얄파크컨벤션": [
{
"rent": 16000000,
"meal": 139000,
"guarantee": 250,
"title": "2027 · 정가 · 정가, 250명 총 50,750,000",
"cafe": "2027 · 정가",
"url": "https://m.blog.naver.com/ellyrama/224447043426",
"posted": "2026-10"
},
{
"rent": 14500000,
"meal": 129000,
"guarantee": null,
"title": "2027 · 정가 · 정가. 대관료 및 꽃장식 등 필수 항목 합계, 소인 44,000",
"cafe": "2027 · 정가",
"url": "https://m.blog.naver.com/propix/224376645598",
"posted": "2026-08"
},
{
"rent": null,
"meal": null,
"guarantee": null,
"title": "27.09 · 성수기 · 잔여타임 · 토 15:30 · 정가 · 로얄홀 잔여타임 특가. 식대 '9만원대 초반', 보증 250명 미만(정확 수치 비공개), 계약금 300만",
"cafe": "27.09 · 성수기 · 잔여타임 · 토 15:30 · 정가",
"url": "https://m.blog.naver.com/joinu1110/224445805972",
"posted": "2026-10"
},
{
"rent": 16000000,
"meal": 137000,
"guarantee": null,
"title": "27.09 · 성수기 · 정가 · 27년 9월 기준 정가. 홀대관 1600만, 식대 대인 13.7만",
"cafe": "27.09 · 성수기 · 정가",
"url": "https://m.blog.naver.com/gmlfk9350/224439524597",
"posted": "2026-10"
},
{
"rent": 16000000,
"meal": 139000,
"guarantee": null,
"title": "연도미표기 · 플랫폼가 · 플랫폼가(웨딩북 정가, 연도 미표기, 상담가능 ~2027-11) 파크홀. 추천인원 300",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://www.weddingbook.com/weddinghall/0e46289c-0a58-11ee-a251-0ac98913430c",
"posted": "확인일 2026-10"
},
{
"rent": 16000000,
"meal": 139000,
"guarantee": null,
"title": "연도미표기 · 플랫폼가 · 플랫폼가(웨딩북 정가) 로얄홀. 추천인원 300",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://www.weddingbook.com/weddinghall/0e46289c-0a58-11ee-a251-0ac98913430c",
"posted": "확인일 2026-10"
}
],
"W스퀘어컨벤션": [
{
"rent": 8000000,
"meal": 79000,
"guarantee": 250,
"title": "2027 · 정가 · 판교 채플홀 기본가. 당일계약 혜택: 대관·식비 할인, 주류(와인제외) 제공. 원판스냅 필수",
"cafe": "2027 · 정가",
"url": "https://m.blog.naver.com/kongsoii/224407045007",
"posted": "2026-09"
},
{
"rent": 7000000,
"meal": 69000,
"guarantee": 150,
"title": "2027 · 정가 · 판교 그레이스홀 기본가",
"cafe": "2027 · 정가",
"url": "https://m.blog.naver.com/kongsoii/224407045007",
"posted": "2026-09"
},
{
"rent": 8000000,
"meal": 79000,
"guarantee": null,
"title": "연도미표기 · 정가 · 판교 채플홀 정가표. 연출료·꽃장식 대관료 포함, 음주류 당일 소모량, 본식스냅 100만 필수",
"cafe": "연도미표기 · 정가",
"url": "https://m.blog.naver.com/valentinechoco/224442831067",
"posted": "2026-10"
},
{
"rent": 9000000,
"meal": 85000,
"guarantee": null,
"title": "연도미표기 · 플랫폼가 · 플랫폼가(웨딩북 정가, 연도 미표기) 판교 채플홀. 본식사진 1,000,000 필수, 추천인원 250/150",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://www.weddingbook.com/weddinghall/1ce6e63b-05b9-11e6-8df2-0ad1e74e4f7d",
"posted": "확인일 2026-10"
},
{
"rent": 8000000,
"meal": 75000,
"guarantee": null,
"title": "연도미표기 · 플랫폼가 · 플랫폼가(웨딩북 정가) 판교 그레이스홀. 본식사진 1,000,000 필수, 추천인원 150",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://www.weddingbook.com/weddinghall/1ce6e63b-05b9-11e6-8df2-0ad1e74e4f7d",
"posted": "확인일 2026-10"
},
{
"rent": null,
"meal": null,
"guarantee": 200,
"title": "연도미표기 · 정가 · 정가(참가격, 웨딩노트, 기준일 2026-08-14) 8F 채플홀 기본 200명(최대 250). 식비 69,000~79,000, 대관료 6,000,000~8,000,000(장식비 포함)",
"cafe": "연도미표기 · 정가",
"url": "https://www.weddingnote.co.kr/halls/gyeonggi/w-square-convention",
"posted": "확인일 2026-10"
},
{
"rent": null,
"meal": null,
"guarantee": 150,
"title": "연도미표기 · 정가 · 정가(참가격, 웨딩노트, 기준일 2026-08-14) L층 그레이스홀 기본 150명(최대 200). 식비 59,000~69,000, 대관료 5,000,000~7,000,000(장식비 포함)",
"cafe": "연도미표기 · 정가",
"url": "https://www.weddingnote.co.kr/halls/gyeonggi/w-square-convention",
"posted": "확인일 2026-10"
}
],
"호텔리츠컨벤션": [
{
"rent": 7800000,
"meal": 78000,
"guarantee": 200,
"title": "27.01 · 비수기 · 일 11:00 · 정가 · 정가. 대관료=필수항목(연출·꽃장식 등) 정가 총액. 음료·주류 6,000원이나 상담 시 포함 제시, 소인 30,000",
"cafe": "27.01 · 비수기 · 일 11:00 · 정가",
"url": "https://m.blog.naver.com/tkdgjs07/224284605615",
"posted": "2026-05"
},
{
"rent": 5000000,
"meal": 66000,
"guarantee": 200,
"title": "27.01 · 비수기 · 정가 · 최저 견적, 총 1,820만. 정상 대관 1,000만/식대 76,000",
"cafe": "27.01 · 비수기 · 정가",
"url": "https://m.blog.naver.com/ghc7788/224331003028",
"posted": "2026-06"
},
{
"rent": 790000,
"meal": 79000,
"guarantee": null,
"title": "연도미표기 · 플랫폼가 · 플랫폼가(웨딩북 정가, 호텔라뷔포레 빌라 드 샬롯). 대관료 790,000 표기 그대로, 소인 30,000, 추천인원 150",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://www.weddingbook.com/weddinghall/1aa301dd-f883-11e5-b038-0afd0b3d84dd",
"posted": "확인일 2026-10"
}
],
"디에스컨벤션 수원": [
{
"rent": 7000000,
"meal": 69000,
"guarantee": 150,
"title": "27.H2 · 정가 · 정가 '~부터'. 대관료+생화 700만. 보증 150~200",
"cafe": "27.H2 · 정가",
"url": "https://m.blog.naver.com/dkdlvhsvhdpt/224398515114",
"posted": "2026-09"
},
{
"rent": 7000000,
"meal": 69000,
"guarantee": null,
"title": "2027 · 정가 · 정가 '~부터'. 생화·음주류 추가비용 없음",
"cafe": "2027 · 정가",
"url": "https://m.blog.naver.com/panoramatic/224453968050",
"posted": "2026-10"
},
{
"rent": null,
"meal": 69000,
"guarantee": null,
"title": "27.H2 · 정가 · 식대 정가만 기재",
"cafe": "27.H2 · 정가",
"url": "https://m.blog.naver.com/happeuny/224443800233",
"posted": "2026-10"
},
{
"rent": 7000000,
"meal": 69000,
"guarantee": null,
"title": "연도미표기 · 플랫폼가 · 플랫폼가(웨딩북 정가, 연도 미표기) 디에스홀. 소인 62,000, 추천인원 200",
"cafe": "연도미표기 · 플랫폼가",
"url": "https://www.weddingbook.com/weddinghall/36d9f756-f636-11e9-a3d0-0ab3aefe6e38",
"posted": "확인일 2026-10"
},
{
"rent": 7000000,
"meal": 68000,
"guarantee": null,
"title": "연도미표기 · 오전·오후 2팀 · 플랫폼가 · 플랫폼가(웨딩북 정가) 더 디올. 추천인원 200",
"cafe": "연도미표기 · 오전·오후 2팀 · 플랫폼가",
"url": "https://www.weddingbook.com/weddinghall/36d9f756-f636-11e9-a3d0-0ab3aefe6e38",
"posted": "확인일 2026-10"
}
],
"L7 롯데호텔 광명(구 테이크호텔)": [
{
"rent": 13670000,
"meal": 93000,
"guarantee": null,
"title": "27.H2 · 정가 · L7 광명 by 롯데호텔 정가. 소인 42,000. 보증 스튜디오홀 150-230 / 그랜드볼룸 100-120",
"cafe": "27.H2 · 정가",
"url": "https://m.blog.naver.com/hehezip/224437308089",
"posted": "2026-10"
},
{
"rent": 15000000,
"meal": 93500,
"guarantee": null,
"title": "연도미표기 · 11:00/13:00/15:00/17:00 · 플랫폼가 · 플랫폼가(웨딩북 정가, L7광명 바이 롯데호텔) 스튜디오. 추천인원 150/100",
"cafe": "연도미표기 · 11:00/13:00/15:00/17:00 · 플랫폼가",
"url": "https://www.weddingbook.com/weddinghall/f2ca4afb-6dec-11ec-950d-02bd85e5606e",
"posted": "확인일 2026-10"
},
{
"rent": 15000000,
"meal": 99000,
"guarantee": null,
"title": "연도미표기 · 11:30/14:30/17:30 · 플랫폼가 · 플랫폼가(웨딩북 정가) 그랜드볼룸. 추천인원 100",
"cafe": "연도미표기 · 11:30/14:30/17:30 · 플랫폼가",
"url": "https://www.weddingbook.com/weddinghall/f2ca4afb-6dec-11ec-950d-02bd85e5606e",
"posted": "확인일 2026-10"
},
{
"rent": 3000000,
"meal": null,
"guarantee": 150,
"title": "연도미표기 · 정가 · 정가(참가격, 웨딩노트, 기준일 2026-05-08) 스튜디오 기본 150명. 식비 총액 12,000,000~14,000,000(1인 단가 미표기), 추가 1인 99,000, 장식비 880,000~5,000,000",
"cafe": "연도미표기 · 정가",
"url": "https://www.weddingnote.co.kr/halls/gyeonggi/teikeu-hotel-seoul-gwangmyeong",
"posted": "확인일 2026-10"
},
{
"rent": 3000000,
"meal": null,
"guarantee": 80,
"title": "연도미표기 · 정가 · 정가(참가격, 웨딩노트, 기준일 2026-05-08) 그랜드볼룸 기본 80명. 식비 총액 5,600,000~6,700,000, 추가 1인 88,000, 장식비 880,000~5,000,000",
"cafe": "연도미표기 · 정가",
"url": "https://www.weddingnote.co.kr/halls/gyeonggi/teikeu-hotel-seoul-gwangmyeong",
"posted": "확인일 2026-10"
}
]
},
"info": {
"아펠가모 선릉점": {
"interval": "90분",
"parking": "350대; 무료시간 확인 안 됨",
"hallCount": "단독홀",
"mealType": "뷔페",
"station": "선릉역 도보 2~3분",
"aisle": "24m"
},
"노블발렌티 대치": {
"parking": "400대; 하객 2시간 무료",
"hallCount": "단독홀",
"station": "삼성역"
},
"셀럽앤어셈": {
"interval": "90분",
"hallCount": "단독홀",
"aisle": "25m"
},
"더화이트베일": {
"parking": "전용 600대; 하객 2시간 지원",
"mealType": "뷔페",
"station": "남부터미널역 4-1번 출구 앞"
},
"더컨벤션 송파문정": {},
"이스턴베니비스": {},
"보테가마지오": {
"station": "서울숲역 도보 2분"
},
"레노스블랑쉬 왕십리": {
"parking": "500대 / 1시간 30분 무료",
"station": "왕십리역"
},
"로카우스 용산": {
"interval": "120분",
"parking": "호텔 내부 약 100대 / 3시간 무료",
"hallCount": "단독홀",
"mealType": "뷔페",
"station": "용산역 도보 약 5분, 신용산역 도보 약 7분"
},
"가천컨벤션센터": {
"interval": "80분",
"parking": "1500대",
"hallCount": "단독홀",
"mealType": "코스",
"station": "가천대역 연결통로"
},
"WI컨벤션": {
"interval": "60분",
"parking": "2500대, 무료 2시간",
"mealType": "뷔페"
},
"ICT밸리컨벤션": {
"mealType": "뷔페",
"station": "기흥역 도보 15분"
},
"아이벡스컨벤션 광명": {
"mealType": "뷔페",
"station": "광명역 도보 5분"
},
"아펠가모 반포": {
"interval": "90분",
"parking": "250대; 무료시간 확인 안 됨",
"hallCount": "단독홀",
"mealType": "뷔페",
"station": "고속터미널역"
},
"노블발렌티 삼성": {
"interval": "120분",
"parking": "1,000대(아이웨딩); 무료시간 확인 안 됨",
"hallCount": "단독홀",
"mealType": "코스",
"station": "삼성역·봉은사역"
},
"상록아트홀": {
"station": "선릉역"
},
"빌라드지디 수서": {
"interval": "150분",
"parking": "300대, 가든파이브 주차장 3시간 무료",
"hallCount": "단독홀",
"mealType": "뷔페",
"station": "수서역 셔틀 운행, 차량 약 5분",
"aisle": "18m"
},
"루이비스 송파문정": {},
"루벨 강동": {
"interval": "90분",
"parking": "무료 2시간",
"hallCount": "단독홀",
"mealType": "뷔페"
},
"H스퀘어": {
"interval": "90분",
"parking": "300대 / 하객 90분 무료",
"hallCount": "단독홀",
"mealType": "한상",
"station": "한양대역 도보 5분, 왕십리역 도보 10분"
},
"웨딩스퀘어 강변": {
"parking": "2,500대 / 하객 2시간 무료",
"mealType": "뷔페",
"station": "강변역"
},
"엔티움": {},
"라온스퀘어": {},
"파티움하우스 수원": {
"interval": "90분",
"parking": "약 1000대, 하객 무료 2시간",
"mealType": "뷔페",
"station": "수원시청역 10번 출구 앞"
},
"광명무역센터컨벤션": {
"interval": "70분",
"parking": "700대",
"hallCount": "단독홀",
"mealType": "뷔페",
"station": "광명역 도보 5분",
"aisle": "25m"
},
"더채플앳청담": {},
"더컨벤션 신사": {
"interval": "90분",
"parking": "236대; 하객 2시간 무료",
"hallCount": "단독홀",
"mealType": "뷔페"
},
"그랜드힐컨벤션": {
"parking": "800대; 하객 3시간 무료",
"station": "삼성역; 셔틀 운행"
},
"라시따시어터": {},
"서울웨딩타워": {},
"더베르지 영등포": {
"interval": "90분",
"parking": "약 400대, 무료 2시간",
"hallCount": "단독홀",
"mealType": "뷔페",
"station": "영등포구청역 도보 약 10분"
},
"벨라루체웨딩홀 서울점": {},
"루이비스 중구": {
"interval": "70분",
"parking": "540대 / 하객 2시간 무료",
"hallCount": "단독홀",
"mealType": "뷔페",
"station": "충정로역 도보 약 3분"
},
"남산예술원": {
"parking": "공개 자료 간 주차 대수 상이: 약 150대 또는 500대 표기",
"hallCount": "단독홀",
"station": "한강진역"
},
"위례 밀리토피아호텔": {
"station": "남위례역 도보 8분"
},
"노블레스웨딩컨벤션 수원": {
"interval": "60분",
"parking": "1500대, 무료 1.5시간",
"mealType": "뷔페",
"aisle": "25m"
},
"라포에트 광명역사": {},
"더채플앳논현": {
"interval": "90분",
"parking": "약 150대(게시물 기준); 무료시간 확인 안 됨",
"mealType": "뷔페",
"station": "언주역 도보 약 2~3분"
},
"더컨벤션 반포": {
"interval": "90분",
"parking": "150대(아이웨딩); 하객 2시간 무료",
"hallCount": "단독홀",
"mealType": "뷔페",
"station": "신반포역 도보 약 10분"
},
"엘타워": {
"interval": "180분",
"parking": "1,700대; 무료 2시간",
"mealType": "코스",
"station": "양재역 연결"
},
"더컨벤션 잠실": {
"interval": "90분",
"parking": "최대 1,000대 지원, 2시간 무료",
"station": "잠실역"
},
"아펠가모 잠실": {
"interval": "90분",
"parking": "200대",
"hallCount": "단독홀",
"mealType": "뷔페",
"station": "잠실역 도보 5분"
},
"SW컨벤션센터": {
"parking": "500대 / 하객 1시간 30분 무료",
"hallCount": "단독홀",
"mealType": "뷔페",
"station": "동묘앞역 6번 출구 바로 앞"
},
"로얄파크컨벤션": {
"interval": "90분",
"parking": "1,000대 / 하객 2시간 무료",
"mealType": "뷔페",
"station": "삼각지역 도보 약 5분"
},
"W스퀘어컨벤션": {
"station": "판교역 도보 6분"
},
"호텔리츠컨벤션": {
"station": "수원시청역 도보 5분"
},
"디에스컨벤션 수원": {},
"L7 롯데호텔 광명(구 테이크호텔)": {}
},
"rows": [
[
"더화이트베일",
"서초 남부터미널",
"2027 · 후기",
950,
95000,
200,
"후기견적",
"blog.naver.com 2026-10",
0,
0
],
[
"로카우스 용산",
"용산구",
"연도미표기 · 성수기 · 정가",
1210,
100000,
200,
"정가",
"weddingnote.co.kr 확인일 2026-10",
0,
0
],
[
"가천컨벤션센터",
"성남 가천대역",
"27.H2 · 정가",
900,
88000,
200,
"정가",
"blog.naver.com 2026-09",
0,
0
],
[
"WI컨벤션",
"경기",
"27.H1 · 후기",
650,
74000,
200,
"후기견적",
"blog.naver.com 2026-05",
0,
0
],
[
"ICT밸리컨벤션",
"용인 기흥",
"2027 · 성수기 · 정가",
690,
68000,
200,
"정가",
"ictconvention.co.kr 확인일 2026-10",
0,
0
],
[
"아이벡스컨벤션 광명",
"광명역",
"27.H2 · 성수기 · 정가",
1200,
99000,
200,
"정가",
"ivexwed.co.kr 확인일 2026-10",
0,
0
],
[
"파티움하우스 수원",
"수원 인계동",
"연도미표기 · 그레이스켈리홀 성수기 피크타임 · 정가",
480,
69000,
200,
"정가",
"partyumhouse.com 확인일 2026-10",
0,
0
],
[
"광명무역센터컨벤션",
"광명역",
"연도미표기 · 성수기 피크타임 · 정가",
870,
85000,
200,
"정가",
"gtcwed.co.kr 확인일 2026-10",
0,
0
],
[
"더컨벤션 신사",
"강남 신사",
"2027 · 정가",
1650,
160000,
300,
"정가",
"blog.naver.com 2026-05",
0,
0
],
[
"노블레스웨딩컨벤션 수원",
"수원",
"연도미표기 · 성수기 · 정가",
570,
68000,
250,
"정가",
"swed.co.kr 확인일 2026-10",
0,
0
],
[
"라포에트 광명역사",
"광명역",
"2027 · 정가",
930,
82000,
200,
"정가",
"blog.naver.com 2026-08",
0,
0
],
[
"W스퀘어컨벤션",
"성남 판교",
"연도미표기 · 정가",
800,
79000,
200,
"정가",
"blog.naver.com 2026-10",
0,
0
],
[
"호텔리츠컨벤션",
"수원시청역",
"연도미표기 · 플랫폼가",
79,
79000,
200,
"플랫폼가",
"weddingbook.com 확인일 2026-10",
0,
0
],
[
"디에스컨벤션 수원",
"수원 화서",
"2027 · 정가",
700,
69000,
200,
"정가",
"blog.naver.com 2026-10",
0,
0
],
[
"L7 롯데호텔 광명(구 테이크호텔)",
"광명역",
"27.H2 · 정가",
1367,
93000,
200,
"정가",
"blog.naver.com 2026-10",
0,
0
]
],
"update": {
"아펠가모 선릉점": [
"27.H2 · 후기",
1100,
110000,
200,
"후기견적",
"blog.naver.com 2026-08"
],
"노블발렌티 대치": [
"연도미표기 · 정가",
1300,
99000,
200,
"정가",
"weddingnote.co.kr 확인일 2026-10"
],
"셀럽앤어셈": [
"27.H2 · 후기",
1600,
110000,
200,
"후기견적",
"blog.naver.com 2026-09"
],
"더컨벤션 송파문정": [
"2027 · 정가",
1200,
130000,
200,
"정가",
"blog.naver.com 2026-10"
],
"보테가마지오": [
"2027 · 정가",
1500,
110000,
200,
"정가",
"blog.naver.com 2026-09"
],
"레노스블랑쉬 왕십리": [
"연도미표기 · 정가",
230,
53000,
200,
"정가",
"weddingnote.co.kr 확인일 2026-10"
],
"아펠가모 반포": [
"27.04 · 성수기 · 일 11:00 · 정가",
770,
80300,
250,
"정가",
"blog.naver.com 2026-10"
],
"노블발렌티 삼성": [
"27.09 · 성수기 · 정가",
1300,
100000,
200,
"정가",
"blog.naver.com 2026-08"
],
"상록아트홀": [
"연도미표기 · 정가",
980,
98000,
200,
"정가",
"blog.naver.com 2026-10"
],
"빌라드지디 수서": [
"연도미표기 · 정가",
2179,
99000,
200,
"정가",
"blog.naver.com 2026-10"
],
"루이비스 송파문정": [
"연도미표기 · 토 · 정가",
980,
93000,
300,
"정가",
"blog.naver.com 2026-10"
],
"루벨 강동": [
"27.11 · 성수기 · 토 점심 · 정가",
803,
91300,
300,
"정가",
"blog.naver.com 2026-08"
],
"H스퀘어": [
"연도미표기 · 정가",
700,
76000,
200,
"정가",
"blog.naver.com 2026-08"
],
"웨딩스퀘어 강변": [
"연도미표기 · 그레이스홀 4F · 플랫폼가",
750,
75000,
300,
"플랫폼가",
"directwedding.co.kr 확인일 2026-10"
],
"더채플앳청담": [
"2027 · 정가",
1200,
120000,
200,
"정가",
"blog.naver.com 2026-08"
],
"그랜드힐컨벤션": [
"2027 · 성수기 · 12:00/15:00/18:00 · 정가",
1000,
105000,
350,
"정가",
"blog.naver.com 2026-08"
],
"라시따시어터": [
"27.07~12 · 성수기 · 정가",
1350,
99000,
200,
"정가",
"lacittatheater.co.kr 확인일 2026-10"
],
"서울웨딩타워": [
"2027 · 정가",
1050,
110000,
200,
"정가",
"blog.naver.com 2026-09"
],
"더베르지 영등포": [
"2027 · 정가",
1800,
120000,
200,
"정가",
"blog.naver.com 2026-10"
],
"벨라루체웨딩홀 서울점": [
"연도미표기 · 플랫폼가",
880,
88000,
200,
"플랫폼가",
"directwedding.co.kr 확인일 2026-10"
],
"루이비스 중구": [
"27.05 · 성수기 · 잔여타임 · 토 13:20 · 정가",
1050,
87000,
250,
"정가",
"blog.naver.com 2026-10"
],
"남산예술원": [
"2027 · 성수기 · 정가",
900,
68000,
200,
"정가",
"blog.naver.com 2026-09"
],
"위례 밀리토피아호텔": [
"연도미표기 · 플랫폼가",
484,
73000,
250,
"플랫폼가",
"directwedding.co.kr 확인일 2026-10"
],
"더채플앳논현": [
"2027 · 정가",
1200,
120000,
200,
"정가",
"blog.naver.com 2026-10"
],
"더컨벤션 반포": [
"2027 · 정가",
1200,
120000,
300,
"정가",
"blog.naver.com 2026-09"
],
"엘타워": [
"2027 · 정가",
660,
140000,
300,
"정가",
"blog.naver.com 2026-10"
],
"더컨벤션 잠실": [
"2027 · 정가",
1200,
130000,
200,
"정가",
"blog.naver.com 2026-10"
],
"아펠가모 잠실": [
"27.11 · 성수기 · 토 11:00 · 정가",
1100,
110000,
280,
"정가",
"blog.naver.com 2026-08"
],
"SW컨벤션센터": [
"2027 · 정가",
800,
80000,
200,
"정가",
"blog.naver.com 2026-09"
],
"로얄파크컨벤션": [
"27.09 · 성수기 · 정가",
1600,
137000,
200,
"정가",
"blog.naver.com 2026-10"
]
},
"deal": {
"아펠가모 선릉점": {
"r": 1100,
"m": 96800,
"n": "연도미표기 · 정가",
"d": "확인일 2026-10 weddingnote.co.kr",
"v": 1
},
"셀럽앤어셈": {
"r": 1450,
"m": 98000,
"n": "2027 · 후기",
"d": "2026-08 blog.naver.com",
"v": 1
},
"더컨벤션 송파문정": {
"r": 1200,
"m": 97000,
"n": "연도미표기 · 정가",
"d": "확인일 2026-10 weddingnote.co.kr",
"v": 1
},
"로카우스 용산": {
"r": 110,
"m": 120000,
"n": "2027 · 정가",
"d": "2026-10 blog.naver.com",
"v": 1
},
"아펠가모 반포": {
"r": 440,
"m": 63800,
"n": "27.03 · 비수기 · 월(3/1) 11:00 · 정가",
"d": "2026-10 blog.naver.com",
"v": 1
},
"빌라드지디 수서": {
"r": 1000,
"m": 99000,
"n": "연도미표기 · 정가",
"d": "2026-08 blog.naver.com",
"v": 1
},
"루벨 강동": {
"r": 330,
"m": 63800,
"n": "27.05 · 성수기 · 수(5/5) 18:30 · 정가",
"d": "2026-10 blog.naver.com",
"v": 1
},
"파티움하우스 수원": {
"r": 300,
"m": 63000,
"n": "연도미표기 · 파티움홀 비수기 피크타임 · 정가",
"d": "확인일 2026-10 partyumhouse.com",
"v": 1
},
"광명무역센터컨벤션": {
"r": 720,
"m": 78000,
"n": "연도미표기 · 비수기 피크타임 · 정가",
"d": "확인일 2026-10 gtcwed.co.kr",
"v": 1
},
"그랜드힐컨벤션": {
"r": 800,
"m": 105000,
"n": "2027 · 성수기 · 12:00/15:00/18:00 · 정가",
"d": "2026-08 blog.naver.com",
"v": 1
},
"라시따시어터": {
"r": 960,
"m": 85000,
"n": "27.01~06 · 비수기 · 정가",
"d": "확인일 2026-10 lacittatheater.co.kr",
"v": 1
},
"노블레스웨딩컨벤션 수원": {
"r": 490,
"m": 68000,
"n": "연도미표기 · 성수기 · 정가",
"d": "확인일 2026-10 swed.co.kr",
"v": 1
},
"더채플앳논현": {
"r": 1067,
"m": 110000,
"n": "27.H2 · 일 13:00 · 정가",
"d": "2026-09 blog.naver.com",
"v": 1
},
"엘타워": {
"r": 660,
"m": 130000,
"n": "27.H2 · 정가",
"d": "2026-09 blog.naver.com",
"v": 1
},
"더컨벤션 잠실": {
"r": 1100,
"m": 110000,
"n": "27.H2 · 비수기 · 정가",
"d": "2026-09 blog.naver.com",
"v": 1
},
"아펠가모 잠실": {
"r": 880,
"m": 96800,
"n": "2027 · 정가",
"d": "2026-10 blog.naver.com",
"v": 1
},
"SW컨벤션센터": {
"r": 600,
"m": 70000,
"n": "2027 · 정가",
"d": "2026-09 blog.naver.com",
"v": 1
},
"로얄파크컨벤션": {
"r": 1450,
"m": 129000,
"n": "2027 · 정가",
"d": "2026-08 blog.naver.com",
"v": 1
},
"W스퀘어컨벤션": {
"r": 700,
"m": 69000,
"n": "2027 · 정가",
"d": "2026-09 blog.naver.com",
"v": 1
}
}
});
