/* sdm-iwedding-audit.js — 아이웨딩 상세페이지·후기 검증 데이터 (2026-10-25, Aside 브라우저 실측)
 * 단위: 만원. grade A=받은 견적, B=아이웨딩 상세 현재 표시가, C=고객 실계약 후기, D=요약카드·홍보·재가공.
 * opts의 on:true는 기본 체크(포함 여부 상충 항목을 보수적으로 더해 둠).
 */
var SDM_IW={
 "checked": "2026-10-25",
 "summary": "아이웨딩 상품 상세페이지 50여 개를 실제 브라우저(Aside)로 열어 가격·구성·추가금을 확인하고, 2025~2026 블로그 후기 55건의 광고·제휴 표기를 하나씩 따졌어요. 화면에 안 나온 값은 0원이 아니라 미확인으로 남겼어요. 핵심 가격 34개 항목은 별도 세션으로 다시 열어 33개 일치, 1개(프라베소 원본 무료) 상충을 확인했어요. 패키지의 \"최대 혜택가\"는 적용 조건 설명이 페이지에 없어 기본가로 쓰지 않았어요.",
 "gradeInfo": {
  "A": "우리가 받은 견적",
  "B": "아이웨딩 상세페이지 현재 표시가",
  "C": "최근 고객 실계약 후기",
  "D": "요약 카드·홍보·재가공",
  "미확인": "근거 없음"
 },
 "roleLabel": {
  "studio": "스튜디오",
  "dress": "드레스",
  "makeup": "메이크업"
 },
 "baseline": [
  {
   "label": "클레 + 에델린 + 제이와이 (받은 견적)",
   "total": 237,
   "grade": "A",
   "parts": "클레 114 + 에델린 85 + 제이와이 실장 촬영+본식 58.5 − 아이웨딩 패키지 추가할인 20 = 237.5 · 노투어 지정 · 추가금 별도"
  },
  {
   "label": "클레 + 메라키 + 제이와이 (받은 견적)",
   "total": 270,
   "grade": "A",
   "parts": "클레 114 + 메라키 118 + 제이와이 실장 촬영+본식 58.5 − 패키지 추가할인 20 = 270.5"
  }
 ],
 "baselineNote": "메이크업 제이와이는 아이웨딩 실장 [촬영+본식] 58.5만(B)이에요. 예전에 적은 \"38만 역산\"은 아이웨딩이 3개 업체 조합에 붙이는 \"패키지 추가 할인 −20만\"이 메이크업 몫처럼 보였던 숫자로 보여요(두 견적 모두 0.5만 차이로 맞음, 견적서 확인 필요). 에델린 85만원은 아이웨딩 상세페이지의 [촬영+본식] 4벌 최대 혜택가와 같아요(B 교차확인). 클레·메라키 단품은 상세페이지가 \"가격 문의\"라 공개가로 교차확인할 수 없어요.",
 "vendors": [
  {
   "role": "studio",
   "name": "클레스튜디오",
   "benefits": [
    "쿠폰 30만원 할인: 웨딩/토탈 A타입, ~2026.12.31",
    "페이지 배너 \"SUPER SALE 50만원 할인\": 대상·기간 미표기",
    "카드 할인·무이자·적립 문구 없음"
   ],
   "total": false,
   "iwUrl": "https://www.iwedding.co.kr/enterprise/info/co_sl_s561",
   "style": "아이웨딩 취향분류 \"인물 중심\". 후기 7건 중 5건이 작가의 손·시선·각도 디렉팅을 칭찬. 아이웨딩 평점 10.0(52개).",
   "products": [
    {
     "name": "[웨딩] 클레 A타입 (헤어메이크업 불포함)",
     "url": "https://www.iwedding.co.kr/enterprise/prd/co_sl_s561/22751",
     "price": "옵션창 총액 160만 → 쿠폰 30 → 130만",
     "grade": "B",
     "cond": "옵션: 비수기 촬영(26.12~27.2, 27.7~8) −11만, 10시 첫타임 −5만 → 114만 = 받은 견적. 촬영 드레스 대여 1~4벌 22~50만, 턱시도 11~15만 옵션"
    },
    {
     "name": "[패키지] 클레+비비드블랑+제이바이로이스타",
     "url": "https://www.iwedding.co.kr/enterprise/prd/co_sl_i001/18109",
     "price": "특전가 298만 / 최대혜택 267만",
     "grade": "B",
     "cond": "개별 구매 427만 기준 · 원본+수정본 무료 표기"
    }
   ],
   "included": [
    "촬영 4시간, 의상 총 4벌",
    "앨범 20P 1권, 아크릴 액자 16R",
    "원본·수정본 데이터 (추가비용 안내에도 \"상품구성에 포함\" — 독립 재검증 일치)"
   ],
   "extras": [
    {
     "k": "촬영 헬퍼비(필수)",
     "v": 25,
     "note": null
    },
    {
     "k": "의상 추가 1벌",
     "v": 16.5,
     "note": null
    },
    {
     "k": "작가 지정",
     "v": 11,
     "note": null
    },
    {
     "k": "대표 작가 지정",
     "v": 33,
     "note": null
    },
    {
     "k": "로드씬",
     "v": 11,
     "note": null
    },
    {
     "k": "촬영시간 추가 1시간",
     "v": 5.5,
     "note": null
    },
    {
     "k": "앨범 1P 추가",
     "v": 3.3,
     "note": null
    },
    {
     "k": "피팅비",
     "v": 5.5,
     "note": null
    },
    {
     "k": "수정본 재수정",
     "v": 22,
     "note": null
    }
   ],
   "unknown": [
    "받은 견적 114만이 비수기·첫타임 조건을 전제로 한 것인지 (계산상 정확히 일치)",
    "SUPER SALE \"최대 50만\" 중 34만의 조건(이벤트 이미지 일부 판독 실패)",
    "야간 촬영비",
    "교통비·부가세 표기"
   ],
   "reviews": {
    "independent": 5,
    "latest": "2026-09-09",
    "items": [
     {
      "date": "2026-09-09",
      "url": "https://m.blog.naver.com/mi_ss/224406104068",
      "kind": "촬영 완료",
      "ad": null,
      "paid": null,
      "good": "작가가 시안의 손 위치, 시선, 몸 각도까지 세세히 디렉팅함. 헤어변형 추천. 헬퍼 이모 챙김. 비 때문에 야외 걱정했지만 저녁에 그쳐서 로드씬 촬영 가능했음",
      "bad": "논현 주차 불편. 셀렉은 아직 안 해서 다른 후기 인용만 있음"
     },
     {
      "date": "2026-07-25",
      "url": "https://m.blog.naver.com/rama713/224357743209",
      "kind": "촬영 완료",
      "ad": "조건부 · 아이웨딩 경유 표기 있음",
      "paid": null,
      "good": "작가 작업물 스타일이 맞아 지정함. 아이웨딩의 리마인드 알림과 체크리스트가 편했음",
      "bad": ""
     },
     {
      "date": "2026-04-02",
      "url": "https://m.blog.naver.com/kdanahz/224238123918",
      "kind": "계약",
      "ad": null,
      "paid": null,
      "good": "비추천 후기가 없었음. 인물 중심이고 그리너리한 느낌. 보정 색감이 따뜻함",
      "bad": "본인 평가로 자연광과 그리너리함은 다른 후보보다 부족함"
     },
     {
      "date": "2025-12-06",
      "url": "https://m.blog.naver.com/rlaguswnd301/224100160543",
      "kind": "촬영 완료",
      "ad": null,
      "paid": null,
      "good": "작가가 손가락 위치까지 조정하고 웃음을 끌어냄. 헬퍼 이모 '금손'. 층별로 분위기가 달라 이동 동선이 편함",
      "bad": "슬림 드레스가 너무 조여 숨쉬기 힘들었다고 적음"
     },
     {
      "date": "2025-12-05",
      "url": "https://m.blog.naver.com/izzzly/224099021628",
      "kind": "촬영 완료",
      "ad": "조건부 · 소품 협찬 언급 있음",
      "paid": null,
      "good": "작가가 시안을 하나씩 체크해 동선을 짜줌. 친근하게 분위기를 풀어줌. 컷마다 어울리는 부케를 골라줌. 핫핑크 드레스 호평",
      "bad": "노을씬과 폭죽씬을 날씨 때문에 못 찍음"
     },
     {
      "date": "2025-09-12",
      "url": "https://w00gee.tistory.com/18",
      "kind": "촬영 완료",
      "ad": null,
      "paid": null,
      "good": "작가 전현곤이 편한 분위기를 만들고 포즈와 표정을 세세히 잡아줌. 예랑 단독샷을 많이 찍어줌. 아이폰 사진만으로도 만족",
      "bad": "날씨 때문에 기대했던 테라스 노을씬을 못 찍음"
     },
     {
      "date": "2025-06-27",
      "url": "https://m.blog.naver.com/amar_98/223913911623",
      "kind": "촬영 완료",
      "ad": null,
      "paid": null,
      "good": "헤어변형 덕분에 컷마다 머리가 마음에 듦. 작가가 소파씬 포즈를 잘 잡아줌. 플래너 부케와 꽃 준비가 좋았음",
      "bad": "메이크업샵 정전으로 장소를 옮김. 비 때문에 헤어가 처짐. 헤어샵에서 스튜디오로 가는 택시 잡기가 어려움"
     }
    ],
    "note": "독립 후기 5건 모두 결과물 셀렉 전 또는 아이폰 사진 기준. 보정본 품질 평가는 아직 부족해요."
   }
  },
  {
   "role": "studio",
   "name": "원규스튜디오",
   "total": true,
   "iwUrl": "https://www.iwedding.co.kr/enterprise/info/co_sl_s060",
   "style": "다양한 컨셉·한옥 세트. 후기는 컨셉 다양성 위주, 인물중심 명시는 1건.",
   "products": [
    {
     "name": "[토탈] 원규스튜디오",
     "url": "https://www.iwedding.co.kr/enterprise/prd/co_sl_s060/12545",
     "price": "가격 문의",
     "grade": "B",
     "cond": "드레스 3+캐주얼 1, 턱시도 1, 헤어메이크업 1회"
    },
    {
     "name": "[패키지] 원규(토탈)+에델린+비기닝",
     "url": "https://www.iwedding.co.kr/enterprise/prd/co_sl_i001/18233",
     "price": "특전가 253만 / 최대혜택 237만",
     "grade": "B",
     "cond": "개별 435만 기준 · 에델린 본식 1벌"
    }
   ],
   "included": [
    "드레스 3벌 + 캐주얼 1벌, 턱시도 1벌",
    "신랑신부 촬영 헤어메이크업 1회",
    "앨범 20P + 액자 20R"
   ],
   "extras": [
    {
     "k": "헬퍼비(현장결제)",
     "v": 25,
     "note": null
    },
    {
     "k": "원본+수정본 \"필수구매\" 표기",
     "v": 44,
     "note": "상품구성에는 포함 표기도 있어 상충"
    },
    {
     "k": "야간 로드씬",
     "v": 22,
     "note": null
    },
    {
     "k": "헤어변형 1회",
     "v": 5.5,
     "note": null
    },
    {
     "k": "작가 지정",
     "v": 10,
     "note": "10~20만"
    },
    {
     "k": "한옥씬 한복 대여",
     "v": 33,
     "note": null
    }
   ],
   "unknown": [
    "원본 44만이 패키지가에 포함인지",
    "교통비(강남권 외 서울 별도 문의)"
   ],
   "reviews": {
    "independent": 1,
    "latest": "2026-01-31",
    "items": [
     {
      "date": "2026-01-31",
      "url": "https://m.blog.naver.com/ppol_ppol_queen/224166769877",
      "kind": "촬영 완료",
      "ad": "조건부 · 할인 링크 공유 있음",
      "paid": null,
      "good": "작가 다영이 표정 트레이닝을 해줌. 계단씬용 드레스 여러 벌 중 선택. 캐주얼 서비스 컷이 좋았음. 헬퍼와 보조 스태프가 세심함",
      "bad": ""
     },
     {
      "date": "2026-01-21",
      "url": "https://m.blog.naver.com/20aug19/224154320605",
      "kind": "촬영 완료",
      "ad": "조건부 · 쿠폰 이벤트 안내 있음",
      "paid": null,
      "good": "카카오톡으로 6주 전, 1달 전, 1주 전 안내. 드레스를 촬영 당일 셀렉하고 사전에 뉴샘플 드레스를 정해갈 수 있음. 한옥 레트로 컨셉과 한복 컷이 좋았음. 개인 탈의실 배정",
      "bad": "중간에 식사 시간이 거의 없어 아침을 꼭 먹고 가라고 조언. 추가금이 여러 개 붙음"
     },
     {
      "date": "2025-07-25",
      "url": "https://ethan-library.tistory.com/56",
      "kind": "촬영 완료",
      "ad": null,
      "paid": null,
      "good": "2층 한옥 세트와 숲속 야외 세트가 있음. 작가가 포즈 예시를 잘 보여줌. 헤어와 메이크업이 촬영 내내 유지됨. 이모님이 찍은 핸드폰 사진이 약 300장",
      "bad": "여러 팀이 동시에 진행되고 주차가 애매할 때가 있다고 적음"
     }
    ],
    "note": "2026년 2건은 할인쿠폰 링크가 달린 글이라 독립 후기로 세지 않았어요."
   }
  },
  {
   "role": "studio",
   "name": "휴일스튜디오",
   "total": true,
   "iwUrl": "https://www.iwedding.co.kr/enterprise/info/co_sl_s288",
   "style": "구 용마랜드. 회전목마·야간·노을 등 배경·실루엣 중심. 인물 중심 조건과는 거리가 있어요.",
   "products": [
    {
     "name": "[토탈] 휴일스튜디오",
     "url": "https://www.iwedding.co.kr/enterprise/prd/co_sl_s288/1942",
     "price": "129만 (정가 179만)",
     "grade": "B",
     "cond": "드레스 3+자유복 1, 턱시도 1, 헤어메이크업 1회"
    },
    {
     "name": "[패키지] 휴일(토탈)+르네아뜰리에+비올",
     "url": "https://www.iwedding.co.kr/enterprise/prd/co_sl_i001/19326",
     "price": "특전가 235.5만 / 최대혜택 224.5만",
     "grade": "B",
     "cond": "개별 329.5만 기준"
    }
   ],
   "included": [
    "드레스 3벌(화이트2+빈티지1), 턱시도 1벌",
    "신랑신부 헤어메이크업 1회",
    "앨범 20P + 액자"
   ],
   "extras": [
    {
     "k": "헬퍼비(필수, 4시간)",
     "v": 25,
     "note": null
    },
    {
     "k": "원본+수정본 \"필수구매\" 표기",
     "v": 44,
     "note": "포함 표기와 상충"
    },
    {
     "k": "야간씬(오후 촬영 시 필수)",
     "v": 22,
     "note": null
    },
    {
     "k": "노을씬",
     "v": 4,
     "note": null
    },
    {
     "k": "스타일 디렉터(헤어변형)",
     "v": 33,
     "note": null
    },
    {
     "k": "추가 드레스 1벌",
     "v": 15,
     "note": null
    }
   ],
   "unknown": [
    "원본 포함 여부",
    "패키지 적용 기간"
   ],
   "reviews": {
    "independent": 0,
    "latest": "2026-09-09",
    "items": [
     {
      "date": "2026-09-09",
      "url": "https://m.blog.naver.com/hyezzunny/224406038806",
      "kind": "촬영 완료",
      "ad": "비독립 · 포인트 제휴 표기 있음",
      "paid": null,
      "good": "작가가 드레스 치마를 날리도록 디렉팅해서 역동적인 사진이 나옴. 노을 실루엣 촬영의 분위기가 좋았음. 날씨가 완벽했음",
      "bad": ""
     },
     {
      "date": "2026-09-06",
      "url": "https://m.blog.naver.com/eileenbelle/224402745343",
      "kind": "촬영 완료",
      "ad": "조건부 · 추천인 코드와 적립 안내 있음",
      "paid": null,
      "good": "회전목마와 야간 조명 촬영. 원하는 헤어와 메이크업, 드레스를 골라 씀. 헤어변형으로 드레스마다 분위기가 달라져 만족도가 높음",
      "bad": ""
     }
    ],
    "note": "확보한 2건 모두 포인트·추천인 코드 표기가 있어 독립 후기 0건이에요."
   }
  },
  {
   "role": "studio",
   "name": "프라베소",
   "total": false,
   "iwUrl": "https://www.iwedding.co.kr/enterprise/info/co_sl_s592",
   "style": "아이웨딩 추천문구 \"인물 중심 + 배경 중심 모두\". 층별 세트가 다양.",
   "products": [
    {
     "name": "[웨딩] 프라베소",
     "url": "https://www.iwedding.co.kr/enterprise/prd/co_sl_s592/23639",
     "price": "가격 문의",
     "grade": "B",
     "cond": "4시간 · 의상 벌수 제한 없음 · 쿠폰 5.5만"
    },
    {
     "name": "[패키지] 프라베소+모네뜨아르+비기닝",
     "url": "https://www.iwedding.co.kr/enterprise/prd/co_sl_i001/18273",
     "price": "특전가 236.5만 / 최대혜택 220.5만",
     "grade": "B",
     "cond": "개별 447만 기준 · 원본 \"무료\"와 \"필수구매 44만\"이 같은 페이지에 함께 표기(상충)"
    }
   ],
   "included": [
    "의상 벌수 제한 없음(4시간 30분 이후 시간당 11만)",
    "로드씬 무료(웨딩촬영)"
   ],
   "extras": [
    {
     "k": "촬영 헬퍼비",
     "v": 25,
     "note": null
    },
    {
     "k": "원본+수정본 \"필수구매\" 표기",
     "v": 44,
     "note": "패키지 페이지에 \"무료\" 표기도 있어 상충"
    },
    {
     "k": "대표 작가 지정",
     "v": 55,
     "note": null
    },
    {
     "k": "작가 지정",
     "v": 22,
     "note": null
    },
    {
     "k": "앨범 1P",
     "v": 3.3,
     "note": null
    }
   ],
   "unknown": [
    "아이웨딩 페이지 후기 2개뿐 — 표본 부족"
   ],
   "reviews": {
    "independent": 1,
    "latest": "2026-10-08",
    "items": [
     {
      "date": "2026-10-08",
      "url": "https://m.blog.naver.com/rlawlgp2205/224434679459",
      "kind": "촬영 완료",
      "ad": "조건부 · 추천인 포인트 안내 있음",
      "paid": null,
      "good": "",
      "bad": ""
     },
     {
      "date": "2026-09-21",
      "url": "https://m.blog.naver.com/cmili1202/224419076978",
      "kind": "촬영 완료",
      "ad": null,
      "paid": "스드메 합계 '200후반대' 로 표기 (스튜디오 단독 가격은 확인 안됨)",
      "good": "층별로 클래식, 심플, 러블리, 감성, 내추럴 분위기가 다름. 레퍼런스 그대로 찍어줌. 입구 쪽 자연광이 좋음. 셀렉 공간이 있음",
      "bad": "층을 옮기면서 드레스와 헤어를 바꾸기 어렵다고 블로거가 조언. 로드신을 비 때문에 촉박하게 찍음"
     },
     {
      "date": "2026-06-26",
      "url": "https://m.blog.naver.com/youdineeeee/224327805337",
      "kind": "동행 관찰",
      "ad": "조건부 · 없음",
      "paid": null,
      "good": "작가 디렉팅이 좋아 전문 모델 같았다는 평. 당일 인스타그램에 사진을 올려줌. 층별 촬영 스팟이 많음",
      "bad": "앨범 추가금이 계속 붙는 구조. 촬영이 4시간 걸림"
     }
    ],
    "note": "동행 관찰·추천인 코드 글이 섞여 독립 촬영 후기는 1건이에요."
   }
  },
  {
   "role": "studio",
   "name": "아우어스튜디오",
   "total": true,
   "iwUrl": "https://www.iwedding.co.kr/enterprise/info/co_sl_s465",
   "style": "아이웨딩 추천문구 \"깔끔하고 따뜻한 인물 중심\". 독립 후기 3건 모두 \"내돈내산\" 또는 무협찬, 포즈·표정 디렉팅 호평.",
   "products": [
    {
     "name": "[토탈] 아우어스튜디오 20P",
     "url": "https://www.iwedding.co.kr/enterprise/prd/co_sl_s465/15615",
     "price": "가격 문의",
     "grade": "B",
     "cond": "드레스 3+한복/캐주얼 1, 턱시도 1, 헤어메이크업 1회 · 쿠폰 20만(~2026.11.15)"
    },
    {
     "name": "[패키지] 아우어(토탈)+모네뜨아르+비기닝",
     "url": "https://www.iwedding.co.kr/enterprise/prd/co_sl_i001/18485",
     "price": "특전가 191만 / 최대혜택 186만",
     "grade": "B",
     "cond": "개별 355만 기준"
    },
    {
     "name": "[패키지] 아우어+르네아뜰리에+비기닝",
     "url": "https://www.iwedding.co.kr/enterprise/prd/co_sl_i001/18088",
     "price": "특전가 238만 / 최대혜택 227만",
     "grade": "B",
     "cond": "개별 450만 기준 · 르네 4벌(비토탈)"
    }
   ],
   "included": [
    "드레스 3벌 + 한복/캐주얼 1벌, 턱시도 1벌",
    "신랑신부 헤어메이크업 1회",
    "앨범 20P + 액자 20R"
   ],
   "extras": [
    {
     "k": "헬퍼비(현장결제)",
     "v": 25,
     "note": null
    },
    {
     "k": "원본+수정본 \"필수구매\" 표기",
     "v": 44,
     "note": "포함 표기와 상충"
    },
    {
     "k": "로드씬",
     "v": 11,
     "note": null
    },
    {
     "k": "폭죽씬",
     "v": 11,
     "note": null
    },
    {
     "k": "드레스 추가 1벌",
     "v": 11,
     "note": null
    },
    {
     "k": "대표 작가 지정",
     "v": 50,
     "note": null
    }
   ],
   "unknown": [
    "원본 포함 여부",
    "보정본 납기(후기: 약 70일)"
   ],
   "reviews": {
    "independent": 3,
    "latest": "2026-05-29",
    "items": [
     {
      "date": "2026-05-29",
      "url": "https://m.blog.naver.com/ldh128/224299708964",
      "kind": "촬영 완료",
      "ad": null,
      "paid": "블로거 기재 총액 1,710,500원. 다만 항목을 더하면 1,701,500원이라 9,000원 차이가 있음 (확인 안됨)",
      "good": "촬영 전 시안을 미리 받아 컨셉을 정함. 작가가 포즈, 표정, 시선을 세세히 알려줌. 헤어변형이 좋았음. 2시간 반 정도로 빨리 끝남",
      "bad": "보정본까지 70일을 기다려야 함. 드레스 추가금이 발생함"
     },
     {
      "date": "2026-05-16",
      "url": "https://m.blog.naver.com/skfl7891006/224287229485",
      "kind": "촬영 완료",
      "ad": null,
      "paid": null,
      "good": "인물 중심의 자연스러운 웨딩촬영. 토탈이라 준비가 편함. 촬영 중 시간 가는 줄 모름",
      "bad": ""
     },
     {
      "date": "2025-05-26",
      "url": "https://m.blog.naver.com/dmgk32/223878062847",
      "kind": "촬영 완료",
      "ad": null,
      "paid": null,
      "good": "작가 포즈 디렉팅으로 인물 사진이 좋음. 헬퍼 이모 핸드폰 사진이 많음. 창가 자연광 스튜디오에서 얼굴이 잘 나옴. 셀렉은 약 1시간 이상이 걸렸는데 작가가 빠르다고 감탄함",
      "bad": "셀렉 전까지 약 4주 대기. 셀렉에서 사진을 추가하면 추가금이 붙음"
     }
    ],
    "note": "2026-05 후기에 세미 B타입 실지출 171만원(세미 110 + 헬퍼 20 + 드레스 추가 33 등) 공개. 세미 상품이라 토탈 패키지와 직접 비교는 안 돼요."
   }
  },
  {
   "role": "studio",
   "name": "라망스튜디오",
   "total": true,
   "iwUrl": "https://www.iwedding.co.kr/enterprise/info/co_sl_s141",
   "style": "아이웨딩 추천문구 \"깨끗하면서 자연스러운 인물표현\". 평점 9.5(221개).",
   "products": [
    {
     "name": "[토탈] 라망 드비 2.0",
     "url": "https://www.iwedding.co.kr/enterprise/prd/co_sl_s141/18803",
     "price": "가격 문의",
     "grade": "B",
     "cond": "드레스 3벌, 턱시도 1, 헤어메이크업 1회 · 쿠폰 33만"
    },
    {
     "name": "[패키지] 라망(토탈)+시그니처B+포레스타",
     "url": "https://www.iwedding.co.kr/enterprise/prd/co_sl_i001/23581",
     "price": "특전가 211만 / 최대혜택 205만",
     "grade": "B",
     "cond": "개별 327.5만 기준"
    },
    {
     "name": "[한정] 라망(토탈)+제이드블랑+고센&끌림",
     "url": "https://www.iwedding.co.kr/enterprise/prd/co_sl_i001/13617",
     "price": "카드 표시 218.5만 · \"1개 남음\"",
     "grade": "D",
     "cond": "상세 가격·조건 확인 불가"
    }
   ],
   "included": [
    "드레스 3벌(화이트2+컬러1), 턱시도 1벌",
    "헤어메이크업 1회",
    "평일 영상촬영·로드씬 무료 쿠폰(~2026.12.31)"
   ],
   "extras": [
    {
     "k": "헬퍼비(현장결제)",
     "v": 25,
     "note": null
    },
    {
     "k": "원본데이터 \"필수구매\" 표기",
     "v": 44,
     "note": "수정본은 원본 구매 시 무료"
    },
    {
     "k": "작가 지정",
     "v": 30,
     "note": null
    },
    {
     "k": "앨범 1P",
     "v": 3.3,
     "note": null
    },
    {
     "k": "4시간 초과",
     "v": 11,
     "note": null
    }
   ],
   "unknown": [
    "원본 포함 여부",
    "본식 드레스(시그니처B) 헬퍼·피팅비"
   ],
   "reviews": {
    "independent": 4,
    "latest": "2025-11-29",
    "items": [
     {
      "date": "2025-11-29",
      "url": "https://m.blog.naver.com/qkrdpdms2000/224092404214",
      "kind": "계약",
      "ad": "조건부 · 플랫폼 계약 특전 표기 있음",
      "paid": null,
      "good": "토탈이라 편했음. 블랙라벨 드레스 추가금을 내고 '뽕 뽑았다'고 평가. 메이크업실 시설 좋음",
      "bad": ""
     },
     {
      "date": "2025-08-23",
      "url": "https://m.blog.naver.com/0superbong0/223980644315",
      "kind": "촬영 완료",
      "ad": null,
      "paid": "원본과 수정본 44만원 (촬영 후 결제). 앨범을 48p로 늘린 견적은 처음 160만원대였다고 적음 (최종 지불 확인 안됨)",
      "good": "",
      "bad": "추가금 부담이 커서 방어에 실패함. 앨범 페이지를 늘리면 비용이 크게 증가함"
     },
     {
      "date": "2025-05-25",
      "url": "https://starmomo.tistory.com/49",
      "kind": "촬영 완료",
      "ad": null,
      "paid": null,
      "good": "촬영 전 안내문이 상세함. 작가가 꽃과 베일을 준비해 줌. 헬퍼 이모 케어. 헤어변형을 필수로 추천",
      "bad": "드레스 이모님이 드레스 펼침이나 포즈 디테일까지 챙기기는 어려움. 개인 컨셉은 작가가 디렉팅하기 조심스러워함"
     },
     {
      "date": "2025-05-25",
      "url": "https://blog.naver.com/ktw2896/223877439896",
      "kind": "계약",
      "ad": null,
      "paid": null,
      "good": "가성비와 인물 중심 기준으로 선택. 최종 평가 '대만족' (검색 스니펫 기준, 본문 전체는 미확인)",
      "bad": ""
     },
     {
      "date": "2025-03-28",
      "url": "https://m.blog.naver.com/a7343/223809382104",
      "kind": "촬영 완료",
      "ad": null,
      "paid": null,
      "good": "배경이 다양하고 야외 촬영이 추천할 만함. 평일 혜택 활용. 셀렉까지 완료",
      "bad": "촬영 중 '여긴 안 찍어도 돼요'라는 말을 여러 번 해야 했던 점이 아쉬움"
     },
     {
      "date": "2025-02-11",
      "url": "https://m.blog.naver.com/jisuqkqh/223756154184",
      "kind": "촬영 완료",
      "ad": "비독립 · 웨딩포인트 지급 표기 있음",
      "paid": null,
      "good": "",
      "bad": "토탈로 진행했다면 비용도 덜 들고 훨씬 편했을 것이라고 후회를 적음"
     }
    ],
    "note": "2025-08 후기: 원본·수정본 44만 촬영 후 결제, 앨범 48P 견적 160만대 → \"추가금 파티\". 앨범 페이지 방어가 핵심이에요."
   }
  },
  {
   "role": "dress",
   "name": "에델린",
   "insta": [
    {
     "handle": "edeline_wedding_official",
     "url": "https://www.instagram.com/edeline_wedding_official/"
    }
   ],
   "instaFeel": "실크(미카도·새틴)와 글리터·비즈 레이스가 반반, 비즈 인상이 더 강함. 머메이드·풍성한 A라인, 아이보리·실버 톤 (최근 게시물 2026-09-07)",
   "benefits": [
    "쿠폰 22만원 할인: 촬영+본식, ~2026.12.31",
    "옵션 \"투어 없이 지정 예약\" −11만 (~12/31) / 투어 진행 +5.5만",
    "전라벨 무료 업그레이드(퍼스트 제외): 지정예약·방문상담 당일결정, ~2026.12.31",
    "컬러 1벌 또는 2부 드레스 무료대여: 촬영+본식 지정예약·당일결정, ~2026.12.31"
   ],
   "fabric": "비즈 위주",
   "iwUrl": "https://www.iwedding.co.kr/enterprise/info/co_sl_d354",
   "style": "아이웨딩 추천포인트 \"화려하고 고급스러운 비즈 드레스\". 화보 육안 확인도 비즈·레이스 위주. 실크는 일부 디자인(상체 실크 등)만 후기에서 확인.",
   "products": [
    {
     "name": "[촬영+본식] 드레스 4벌",
     "url": "https://www.iwedding.co.kr/enterprise/prd/co_sl_d354/17949",
     "price": "판매가 118 − 쿠폰 22 − 노투어 11 = 85만",
     "grade": "B",
     "cond": "옵션창에서 \"투어 없이 지정 예약(~12/31) −11만\" 선택 시 85만 = 받은 견적 (재현 일치). 투어 진행은 +5.5만"
    },
    {
     "name": "[본식] 드레스 1벌",
     "url": "https://www.iwedding.co.kr/enterprise/prd/co_sl_d354/17950",
     "price": "70만 (최대 혜택)",
     "grade": "B",
     "cond": ""
    }
   ],
   "included": [
    "촬영 3벌 + 본식 1벌"
   ],
   "extras": [
    {
     "k": "촬영 헬퍼",
     "v": 25,
     "note": null
    },
    {
     "k": "본식 헬퍼",
     "v": 25,
     "note": null
    },
    {
     "k": "피팅비",
     "v": 5.5,
     "note": null
    },
    {
     "k": "17시 이후 촬영·예식",
     "v": 5,
     "note": null
    },
    {
     "k": "5시간 이상 촬영",
     "v": 5,
     "note": null
    },
    {
     "k": "2부 진행 헬퍼",
     "v": 5,
     "note": null
    }
   ],
   "unknown": [
    "노투어 지정 시 기본 라벨에서 고를 수 있는 실크 벌 수",
    "라벨 업그레이드 금액"
   ],
   "reviews": {
    "independent": 3,
    "latest": "2026-07-26",
    "items": [
     {
      "date": "2026-07-26",
      "url": "https://jinu.shop/direct-dress-shop-tour-tips/",
      "kind": "투어",
      "ad": "아니오 가능성 (추천인 코드 기재)",
      "paid": "스드메 기본 견적 230만 원에 에델린 포함 (글 기준)",
      "good": "에델린 인스타 화보를 보고 신부가 반응했다고 기록",
      "bad": "추가금 25만 원 발생 언급"
     },
     {
      "date": "2026-07-08",
      "url": "https://blog.naver.com/PostView.naver?blogId=lmkyung1000&logNo=224340555285",
      "kind": "본식",
      "ad": null,
      "paid": null,
      "good": "비즈 드레스로 계약 결정. 다른 날 에델린을 재방문해 결정",
      "bad": ""
     },
     {
      "date": "2026-05-17",
      "url": "https://blog.naver.com/PostView.naver?blogId=yoojh3862&logNo=224287898473",
      "kind": "가봉",
      "ad": null,
      "paid": null,
      "good": "잔잔비즈가 화사하고 어두운 홀에서 빛날 것을 기대",
      "bad": ""
     },
     {
      "date": "2026-03-10",
      "url": "https://m.blog.naver.com/yes_shoong/224211216529",
      "kind": "가봉",
      "ad": "제한적 (제휴 표기 있음)",
      "paid": null,
      "good": "하늘하늘한 실크감이 예쁘다고 기록",
      "bad": ""
     },
     {
      "date": "2026-03-08",
      "url": "https://blog.naver.com/PostView.naver?blogId=yes_shoong&logNo=224209271428",
      "kind": "가봉",
      "ad": "제한적 (제휴 표기 있음)",
      "paid": null,
      "good": "상체 실크 디자인이 포인트라고 평가",
      "bad": ""
     },
     {
      "date": "2025-07-15",
      "url": "https://m.blog.naver.com/kkokko_yum/223934599597",
      "kind": "기타",
      "ad": null,
      "paid": null,
      "good": "비즈 드레스 디자인과 반짝임, 초커 디자인, 헬퍼 이모님과 샵 응대 친절",
      "bad": "골드톤이 아쉬워 실버/화이트톤을 원함. 가봉 후 최종 드레스는 다른 드레스로 결정"
     }
    ],
    "note": "실크 언급 후기 2건(2026-03)은 제휴 표기 글이에요. 2026-07 드레스투어 글(추천인 코드)은 에델린 추가금 25만 + 헬퍼 5만을 언급."
   }
  },
  {
   "role": "dress",
   "name": "메라키웨딩",
   "insta": [
    {
     "handle": "merakiwedding_official",
     "url": "https://www.instagram.com/merakiwedding_official/"
    }
   ],
   "instaFeel": "비즈·레이스 볼륨 가운과 새틴 구조형(리본·긴 트레인)이 섞임. 아이웨딩 \"실크 주력\" 분류보다 비즈 비중이 높아 보임 (최근 2026-10-15)",
   "benefits": [
    "옵션 \"투어 없이 지정 예약\" −11만 (~12/31) / 투어 진행 +5.5만",
    "쿠폰 44만원 할인: 기간 내 방문 스케줄 등록 시, ~2026.12.31",
    "10월 페스타 전라벨 무료 업그레이드(퍼스트 포함, 본식 메인 1벌): 지정예약·당일결정, ~2026.11.03",
    "촬영용 또는 애프터 드레스 1벌 무료: 촬영+본식 당일결정·지정예약, ~2026.12.31",
    "10월 라운지 현장혜택 컬러1+애프터1 무료: ~2026.10.25 (종료)"
   ],
   "fabric": "실크·레이스",
   "iwUrl": "https://www.iwedding.co.kr/enterprise/info/co_sl_d351",
   "style": "아이웨딩 추천포인트 \"라인감·패턴감이 예쁜 다양한 디자인의 실크\". 주력소재 태그 실크·레이스. 화보 육안: 새틴·오간자 다수.",
   "products": [
    {
     "name": "[촬영+본식] 드레스 4벌 (MD PICK)",
     "url": "https://www.iwedding.co.kr/enterprise/prd/co_sl_d351/17533",
     "price": "가격 문의",
     "grade": "B",
     "cond": "상세 가격 비공개 → 견적 118만이 유일 근거"
    }
   ],
   "included": [
    "촬영 3벌 + 본식 1벌"
   ],
   "extras": [
    {
     "k": "촬영 헬퍼",
     "v": 25,
     "note": null
    },
    {
     "k": "본식 헬퍼",
     "v": 25,
     "note": null
    },
    {
     "k": "피팅비",
     "v": 5.5,
     "note": null
    },
    {
     "k": "촬영 드레스 추가 1벌",
     "v": 5,
     "note": null
    },
    {
     "k": "야외촬영",
     "v": 5,
     "note": null
    },
    {
     "k": "17시 이후 시작",
     "v": 5,
     "note": null
    },
    {
     "k": "애프터(2부) 헬퍼",
     "v": 5,
     "note": null
    }
   ],
   "unknown": [
    "라벨별 추가금(상세 미표기)",
    "실크 기본 라벨 선택 폭"
   ],
   "reviews": {
    "independent": 1,
    "latest": "2026-09-25",
    "items": [
     {
      "date": "2026-09-25",
      "url": "https://m.blog.naver.com/harp9922/224422498913",
      "kind": "본식",
      "ad": "확인 필요 (제목에 '메라키 웨딩 무료 피팅 체험' 문구)",
      "paid": null,
      "good": "본문에 '10만원 추가'라는 문장이 있으나 항목(메이크업 또는 헤어 등) 확인 안됨",
      "bad": ""
     },
     {
      "date": "2026-08-07",
      "url": "https://blog.naver.com/heyjoyday/224370501264",
      "kind": "가봉",
      "ad": "제한적 (추천인 코드와 포인트 표기 있음)",
      "paid": null,
      "good": "조명 아래에서 가장 빛났다고 평가. 오프숄더 디자인이 얼굴을 작아 보이게 함",
      "bad": ""
     },
     {
      "date": "2026-07-01",
      "url": "https://blog.naver.com/yojne1/224330764709",
      "kind": "본식",
      "ad": null,
      "paid": null,
      "good": "비즈감이 예뻤고 사진에서 존재감이 확실. 지금 다시 골라도 같은 드레스를 선택하겠다고 기록",
      "bad": ""
     },
     {
      "date": "2026-05-10",
      "url": "https://m.blog.naver.com/miaka0125/224280349239",
      "kind": "가봉",
      "ad": "제한적 (추천인 코드 표기 있음)",
      "paid": null,
      "good": "본식은 추가금을 어느 정도 생각하고 갔다고 기록. 금액 확인 안됨",
      "bad": "추가금에 민감했다는 의견 언급 (금액 미확인)"
     },
     {
      "date": "2026-04-19",
      "url": "https://thewedd.com/2026/04/19/%EB%A9%94%EB%9D%BC%ED%82%A4%EC%9B%A8%EB%94%A9-%EB%93%9C%EB%A0%88%EC%8A%A4-%ED%88%AC%EC%96%B4-%ED%9B%84%EA%B8%B0-%EC%B5%9C%EC%A2%85-%EC%84%A0%ED%83%9D-%EC%9D%B4%EC%9C%A0/",
      "kind": "재가공 의심",
      "ad": "같은 문장이 다른 업체 글에도 반복된 템플릿 글 — 집계 제외",
      "paid": "본문 금액 문장: '2벌 500,000원', '280,000원' (항목 맥락 확인 안됨)",
      "good": "추가금 0원 문장 있음 (맥락 확인 필요)",
      "bad": ""
     }
    ],
    "note": "기존 데이터의 \"2026-04 투어 후기\"(thewedd.com)는 제이드블랑 글과 문장이 똑같은 템플릿이라 집계에서 뺐어요. 본식 실착 독립 후기는 1건(비즈 드레스)."
   }
  },
  {
   "role": "dress",
   "name": "르네아뜰리에",
   "insta": [
    {
     "handle": "rene_atelier_official",
     "url": "https://www.instagram.com/rene_atelier_official/"
    }
   ],
   "instaFeel": "미카도 실크 탑·스커트와 튈 A라인 중심, 비즈는 소량 포인트. 깔끔한 화이트·아이보리 (최근 2026-08-11)",
   "fabric": "실크·비즈 반반",
   "iwUrl": "https://www.iwedding.co.kr/enterprise/info/co_sl_d335",
   "style": "구 레이첼웨딩. 아이웨딩 추천포인트 \"깨끗한 실크 드레스와 과하지 않은 비즈\". 화보 육안 실크·새틴 약 절반.",
   "products": [
    {
     "name": "[촬영+본식] 드레스 4벌",
     "url": "https://www.iwedding.co.kr/enterprise/prd/co_sl_d335/13124",
     "price": "가격 문의",
     "grade": "B",
     "cond": "단품 가격 비공개 · 패키지로만 가격 확인"
    }
   ],
   "included": [
    "촬영 3벌 + 본식 1벌"
   ],
   "extras": [
    {
     "k": "촬영 헬퍼",
     "v": 25,
     "note": null
    },
    {
     "k": "본식 헬퍼",
     "v": 25,
     "note": null
    },
    {
     "k": "피팅비",
     "v": 5.5,
     "note": null
    },
    {
     "k": "강남권 외 서울 스튜디오",
     "v": 5,
     "note": null
    },
    {
     "k": "야외촬영",
     "v": 5,
     "note": null
    },
    {
     "k": "2부 헬퍼",
     "v": 5,
     "note": null
    }
   ],
   "unknown": [
    "단품 가격"
   ],
   "reviews": {
    "independent": 3,
    "latest": "2026-07-08",
    "items": [
     {
      "date": "2026-07-08",
      "url": "https://m.blog.naver.com/PostView.naver?blogId=cherry_on-top&logNo=224340480052",
      "kind": "본식",
      "ad": null,
      "paid": null,
      "good": "어두운 홀에서 비즈 드레스 로망을 이뤘고 칭찬을 받았다고 기록",
      "bad": ""
     },
     {
      "date": "2026-06-21",
      "url": "https://m.blog.naver.com/PostView.naver?blogId=yeb0111&logNo=224322432034",
      "kind": "본식",
      "ad": "제한적 (추천인 코드 안내 포함)",
      "paid": "총 66만 원을 포인트로 모아 잔금 결제에 사용 (총 결제액 확인 안됨)",
      "good": "가족, 친구, 지인들이 예쁘다고 칭찬했다고 기록",
      "bad": ""
     },
     {
      "date": "2026-04-10",
      "url": "https://blog.naver.com/PostView.naver?blogId=cherry_on-top&logNo=224247627757",
      "kind": "가봉",
      "ad": null,
      "paid": null,
      "good": "디자인 자체는 가장 예쁜 편이라고 평가",
      "bad": "상체가 통통한 체형이라 팔뚝살이 도드라져 보인다고 기록"
     },
     {
      "date": "2026-02-12",
      "url": "https://blog.naver.com/PostView.naver?blogId=sjean55&logNo=224181025201",
      "kind": "가봉",
      "ad": null,
      "paid": null,
      "good": "2부 드레스 헬퍼 비용 5만 원만 지불하면 무료 대여 조건. 피팅비 33,000원 부과 언급. 액세서리 가격 문장(귀걸이 485만 원, 반지 415만 원)은 맥락 확인 안됨",
      "bad": ""
     }
    ],
    "note": "본식 완료 후기 2건(1건 \"내돈내산\", 1건 추천인 코드) 중 하나는 미카도 실크 메인 드레스."
   }
  },
  {
   "role": "dress",
   "name": "모네뜨아르",
   "insta": [
    {
     "handle": "monetteare_official",
     "url": "https://www.instagram.com/monetteare_official/"
    }
   ],
   "instaFeel": "비즈·스팽글 튈 볼가운과 새틴 볼가운 혼재, 풍성한 볼 실루엣 (최근 2026-09-17, F/W 신상 묶음)",
   "fabric": "비즈·튈 위주",
   "iwUrl": "https://www.iwedding.co.kr/enterprise/info/co_sl_d252",
   "style": "수입+자체제작, 아이웨딩 추천 \"가성비 중시\". 화보 육안 튈·레이스·비즈 약 70%. 아이웨딩 후기 1,519개.",
   "products": [
    {
     "name": "[촬영+본식] 드레스 4벌",
     "url": "https://www.iwedding.co.kr/enterprise/prd/co_sl_d252/11450",
     "price": "가격 문의",
     "grade": "B",
     "cond": ""
    }
   ],
   "included": [
    "촬영 3벌 + 본식 1벌"
   ],
   "extras": [
    {
     "k": "촬영 헬퍼",
     "v": 25,
     "note": null
    },
    {
     "k": "본식 헬퍼",
     "v": 25,
     "note": null
    },
    {
     "k": "피팅비",
     "v": 5.5,
     "note": null
    },
    {
     "k": "17시 이후 리허설",
     "v": 5,
     "note": null
    },
    {
     "k": "5시간 이상",
     "v": 5,
     "note": null
    }
   ],
   "unknown": [
    "단품 가격",
    "골드라벨 금액"
   ],
   "reviews": {
    "independent": 3,
    "latest": "2026-07-25",
    "items": [
     {
      "date": "2026-07-25",
      "url": "https://m.blog.naver.com/30dae_sinbu/224356678666",
      "kind": "본식",
      "ad": null,
      "paid": null,
      "good": "미카도 실크가 반짝일 때마다 예뻤다고 기록. 어두운 곳에서도 괜찮았다고 기록",
      "bad": ""
     },
     {
      "date": "2026-07-20",
      "url": "https://m.blog.naver.com/oui6_6/224351427021",
      "kind": "기타",
      "ad": "확인 필요 (본문 세부 미확인)",
      "paid": null,
      "good": "제목에 '추가금 X'와 '블랙라벨 무료 업그레이드' 언급. 실제 적용 조건 확인 안됨",
      "bad": ""
     },
     {
      "date": "2025-09-18",
      "url": "https://blog.naver.com/eunnyul9264/224012821028",
      "kind": "가봉",
      "ad": null,
      "paid": null,
      "good": "사전 미팅에서 추가금 없는 선에서 진행하기로 했다고 기록. 실제 추가금 확인 안됨",
      "bad": ""
     },
     {
      "date": "2025-08-03",
      "url": "https://m.blog.naver.com/happyflight_s2/223956734677",
      "kind": "기타",
      "ad": null,
      "paid": null,
      "good": "비즈 드레스를 원했던 목적에 맞았다고 기록 (세부 평가 미확인)",
      "bad": ""
     }
    ],
    "note": "2026-07 본식 후기: 미카도 실크가 어두운 곳에서도 괜찮았다는 평."
   }
  },
  {
   "role": "dress",
   "name": "제이드블랑",
   "insta": [
    {
     "handle": "jdeblanc_wedding",
     "url": "https://www.instagram.com/jdeblanc_wedding/"
    }
   ],
   "instaFeel": "2019-01 이후 게시물 없음 — 현재 스타일 판단 불가",
   "fabric": null,
   "iwUrl": null,
   "style": "아이웨딩 업체 상세페이지를 찾지 못했어요. 라망 한정 패키지 카드에만 이름이 보여요.",
   "products": [],
   "included": [],
   "extras": [],
   "unknown": [
    "업체·상품 상세 전부"
   ],
   "reviews": {
    "independent": 0,
    "latest": "2025-09-14",
    "items": [
     {
      "date": "2025-09-14",
      "url": "https://thewedd.com/2025/09/14/%EC%A0%9C%EC%9D%B4%EB%93%9C%EB%B8%94%EB%9E%91-%EC%95%A0%EB%B8%8C%EB%89%B4%EC%A4%80%EC%98%A4-%EB%B3%B8%EC%8B%9D%ED%9B%84%EA%B8%B0/",
      "kind": "재가공 의심",
      "ad": "같은 문장이 다른 업체 글에도 반복된 템플릿 글 — 집계 제외",
      "paid": "본문 금액 문장: '2벌 500,000원', '280,000원' (항목 맥락 확인 안됨)",
      "good": "추가금 0원 문장 있음 (맥락 확인 필요)",
      "bad": ""
     }
    ],
    "note": "확보한 1건은 템플릿 재가공 의심 글이라 근거로 쓰지 않아요."
   }
  },
  {
   "role": "dress",
   "name": "로우케이 (추가 후보)",
   "insta": [
    {
     "handle": "leau__k",
     "url": "https://www.instagram.com/leau__k/"
    }
   ],
   "instaFeel": "\"실크드레스 전문샵\". 미카도·오간자 실크가 대부분, 비즈는 소매 포인트 정도 (최근 2026-10-22)",
   "fabric": "실크",
   "iwUrl": "https://www.iwedding.co.kr/enterprise/info/co_sl_d371",
   "style": "아이웨딩 추천포인트 \"단아한 실크, 실크 맛집, 합리적 가격\". 아이웨딩 후기 5개뿐.",
   "products": [
    {
     "name": "[본식] 드레스 1벌",
     "url": "https://www.iwedding.co.kr/enterprise/prd/co_sl_d371/20428",
     "price": "86만",
     "grade": "B",
     "cond": "촬영 3벌도 86만 별도"
    }
   ],
   "included": [],
   "extras": [
    {
     "k": "촬영 헬퍼",
     "v": 25,
     "note": null
    },
    {
     "k": "본식 헬퍼",
     "v": 25,
     "note": null
    },
    {
     "k": "피팅비",
     "v": 5.5,
     "note": null
    }
   ],
   "unknown": [
    "독립 후기 미확보"
   ],
   "reviews": {
    "independent": 0,
    "latest": null,
    "items": [],
    "note": "후기 조사 대상 밖에서 새로 찾은 후보예요. 후기 근거가 없어 추천에서 뺐어요."
   }
  },
  {
   "role": "dress",
   "name": "안나스포사 (추가 후보)",
   "fabric": "실크",
   "iwUrl": "https://www.iwedding.co.kr/enterprise/info/co_sl_d114",
   "insta": [
    {
     "handle": "annasposaclassic",
     "url": "https://www.instagram.com/annasposaclassic/"
    }
   ],
   "instaFeel": "새틴·미카도 실크 중심, 레이스 소량. 인어형·슬림 A라인, 리본·트레인 디테일 (최근 2026-07-06)",
   "style": "아이웨딩 추천포인트 \"고급스러운 원단·소재 중시\". 아이웨딩 후기 154개.",
   "products": [
    {
     "name": "[본식] 드레스 1벌",
     "url": "https://www.iwedding.co.kr/enterprise/prd/co_sl_d114/16227",
     "price": "최대혜택 80만 · 판매가 102만",
     "grade": "B",
     "cond": "촬영 3벌도 같은 가격 별도"
    }
   ],
   "included": [],
   "extras": [
    {
     "k": "촬영 헬퍼",
     "v": 25,
     "note": null
    },
    {
     "k": "본식 헬퍼",
     "v": 25,
     "note": null
    },
    {
     "k": "피팅비",
     "v": 5.5,
     "note": null
    }
   ],
   "unknown": [
    "독립 후기 미확보"
   ],
   "reviews": {
    "independent": 0,
    "latest": null,
    "items": [],
    "note": "후기 조사 대상 밖 추가 후보예요."
   }
  },
  {
   "role": "dress",
   "name": "아뜰리에모뉴 (추가 후보)",
   "fabric": "실크·레이스",
   "iwUrl": "https://www.iwedding.co.kr/enterprise/info/co_sl_d203",
   "insta": [
    {
     "handle": "atelier_monu",
     "url": "https://www.instagram.com/atelier_monu/"
    },
    {
     "handle": "arvichewedding_official",
     "url": "https://www.instagram.com/arvichewedding_official/"
    }
   ],
   "instaFeel": "새틴 볼가운·튈 스커트에 레이스·비즈 장식. 현 상호 계정은 게시물 적고, 구 아르비체 계정이 활동량 많음",
   "style": "구 아르비체. 아이웨딩 추천 \"대중적인 드레스 라인\". 아이웨딩 후기 541개.",
   "products": [
    {
     "name": "[촬영] 드레스 3벌",
     "url": "https://www.iwedding.co.kr/enterprise/prd/co_sl_d203/12011",
     "price": "65만",
     "grade": "B",
     "cond": ""
    },
    {
     "name": "[본식] 드레스 1벌",
     "url": "https://www.iwedding.co.kr/enterprise/prd/co_sl_d203/12010",
     "price": "70만",
     "grade": "B",
     "cond": ""
    }
   ],
   "included": [],
   "extras": [
    {
     "k": "촬영 헬퍼",
     "v": 25,
     "note": null
    },
    {
     "k": "본식 헬퍼",
     "v": 25,
     "note": null
    },
    {
     "k": "피팅비",
     "v": 5.5,
     "note": null
    }
   ],
   "unknown": [
    "독립 후기 미확보"
   ],
   "reviews": {
    "independent": 0,
    "latest": null,
    "items": [],
    "note": "후기 조사 대상 밖 추가 후보예요."
   }
  },
  {
   "role": "makeup",
   "name": "제이와이 (받은 견적)",
   "iwUrl": "https://www.iwedding.co.kr/enterprise/info/co_sl_m220",
   "insta": [
    {
     "handle": "jy_style_official",
     "url": "https://www.instagram.com/jy_style_official/"
    }
   ],
   "instaFeel": "\"제이와이청담 공식 계정\" (네이버 플레이스 홈페이지 링크 기준, 아이웨딩엔 인스타 링크 없음)",
   "style": "청담. 아이웨딩 평점 9.5(38개), 추천 \"공장형이 아닌 개인 맞춤 스타일링\".",
   "products": [
    {
     "name": "[촬영+본식] 신부신랑 실장",
     "url": "https://www.iwedding.co.kr/enterprise/prd/co_sl_m220/19250",
     "price": "58.5만",
     "grade": "B",
     "cond": "금액 쿠폰 없음 · 실장→부원장 업그레이드 쿠폰(~12.31)"
    },
    {
     "name": "[촬영+본식] 신부신랑 부원장",
     "url": "https://www.iwedding.co.kr/enterprise/prd/co_sl_m220/19260",
     "price": "69.5만",
     "grade": "B",
     "cond": ""
    },
    {
     "name": "[촬영+본식] 신부신랑 원장",
     "url": "https://www.iwedding.co.kr/enterprise/prd/co_sl_m220/19263",
     "price": "80.5만",
     "grade": "B",
     "cond": "본식만·촬영만: 실장 42.5 / 부원장 48 / 원장 53.5"
    }
   ],
   "included": [
    "촬영 1회 + 본식 1회, 신랑 포함(신랑 시술자는 랜덤)"
   ],
   "extras": [
    {
     "k": "05:00~05:59 시작",
     "v": 11,
     "note": null
    },
    {
     "k": "직급 지정",
     "v": 5.5,
     "note": null
    },
    {
     "k": "헤어피스",
     "v": 22,
     "note": "보증금 7.7만 별도·반환"
    },
    {
     "k": "촬영 헤어변형 2시간",
     "v": 22,
     "note": null
    }
   ],
   "unknown": [
    "교통비 표기 없음",
    "휴무일 표기 불일치(아이웨딩 월·일 vs 블로그 월)"
   ],
   "benefits": [
    "실장 → 부원장 직급 업그레이드 (실장 상품, 신규 계약, ~2026.12.31, 조기 마감 가능)",
    "금액 할인 쿠폰은 없음"
   ],
   "reviews": {
    "independent": 3,
    "latest": "2026-09-17",
    "items": [
     {
      "date": "2026-09-17",
      "url": "https://blog.naver.com/daani_34/224414614781",
      "kind": "본식",
      "ad": null,
      "paid": null,
      "good": "신랑 6:4 반깐 헤어 요청대로, 고정력 좋음",
      "bad": "야외 후 앞머리 일부 흐트러짐"
     },
     {
      "date": "2025-11-30",
      "url": "https://blog.naver.com/nosa1015/224093353394",
      "kind": "촬영",
      "ad": "추천인 코드·포인트 고지",
      "paid": null,
      "good": "피부 커버·립·신랑 헤어 만족, 상담 꼼꼼",
      "bad": "발렛 요구, 애교살 표현 기대와 다름"
     },
     {
      "date": "2025-11-01",
      "url": "https://blog.naver.com/mindamsh/224060002539",
      "kind": "본식",
      "ad": null,
      "paid": null,
      "good": "눈 강조·색조·헤어 만족, 부원장→원장 업그레이드됨",
      "bad": "스킨케어 간단해 피부표현 아쉬움, 대기 약 1시간"
     },
     {
      "date": "2026-10-23",
      "url": "https://blog.naver.com/happyerica43/224166598757",
      "kind": "투어 데모",
      "ad": null,
      "paid": null,
      "good": "실장 세심, 미들번 헤어 호평",
      "bad": "속눈썹 옵션 추가비"
     }
    ],
    "note": "본식·촬영 완료 독립 후기 2건 + 투어 데모 1건 + 추천인 코드 글 1건."
   }
  },
  {
   "role": "makeup",
   "name": "비기닝",
   "benefits": [
    "쿠폰 8.5만원 할인 → 쿠폰 적용가 41만 (49.5 − 8.5, 페이지 표기와 일치)",
    "실장 → 부원장 업그레이드 (실장 상품)",
    "직급 지정 5.5만(촬영+본식 1회 결제)"
   ],
   "iwUrl": "https://www.iwedding.co.kr/enterprise/info/co_sl_m167",
   "products": [
    {
     "name": "[촬영+본식] 신부신랑 실장",
     "url": "https://www.iwedding.co.kr/enterprise/prd/co_sl_m167/2288",
     "price": "49.5만",
     "grade": "B",
     "cond": "아이웨딩 판매가"
    }
   ],
   "included": [
    "촬영 1회 + 본식 1회, 신랑 포함"
   ],
   "extras": [
    {
     "k": "05:00~05:30 시작",
     "v": 16.5,
     "note": null
    },
    {
     "k": "헤어피스",
     "v": 16,
     "note": "16~31만, 보증금 포함"
    }
   ],
   "unknown": [],
   "reviews": {
    "independent": 3,
    "latest": "2026-08-20",
    "items": [
     {
      "date": "2026-08-20",
      "url": "https://blog.naver.com/PostView.naver?blogId=jingnizam&logNo=224383285113",
      "kind": "본식",
      "ad": null,
      "paid": null,
      "good": "솔직히 만족스러웠다고 기록",
      "bad": "헤어피스 추가 관련 불편 (세부 확인 필요)"
     },
     {
      "date": "2026-06-12",
      "url": "https://m.blog.naver.com/3jjimni3/224312832883",
      "kind": "본식",
      "ad": "제한적 (포인트 혜택 표기 있음)",
      "paid": null,
      "good": "스펀지 톡톡 흡수 방식으로 피부를 얇고 자연스럽게 표현했다고 묘사",
      "bad": ""
     },
     {
      "date": "2025-12-07",
      "url": "https://blog.naver.com/dkscodms1234/224101095251",
      "kind": "촬영",
      "ad": null,
      "paid": null,
      "good": "",
      "bad": ""
     },
     {
      "date": "2025-11-30",
      "url": "https://m.blog.naver.com/great100_/224093511267",
      "kind": "촬영",
      "ad": null,
      "paid": null,
      "good": "스킨팩을 하지 않아도 피부 표현이 좋았다고 기록",
      "bad": ""
     },
     {
      "date": "2025-04-10",
      "url": "https://m.blog.naver.com/edu8563/223829010547",
      "kind": "촬영",
      "ad": "제한적 (다이렉트 포인트 혜택 표기 있음)",
      "paid": null,
      "good": "피부 지속력과 헤어 유지력이 좋았다고 기록",
      "bad": "신랑 메이크업의 눈썹이 짙게 그려져 아쉬움"
     }
    ],
    "note": "본식 후기 1건에서 헤어피스 추가 권유가 불편했다는 언급."
   }
  },
  {
   "role": "makeup",
   "name": "비올",
   "iwUrl": "https://www.iwedding.co.kr/enterprise/info/co_sl_m166",
   "products": [
    {
     "name": "[촬영+본식] 신부신랑 실장",
     "url": "https://www.iwedding.co.kr/enterprise/prd/co_sl_m166/5092",
     "price": "가격 문의",
     "grade": "B",
     "cond": ""
    }
   ],
   "included": [
    "촬영 1회 + 본식 1회, 신랑 포함"
   ],
   "extras": [
    {
     "k": "05:30 시작",
     "v": 11,
     "note": null
    },
    {
     "k": "05:00 시작",
     "v": 20,
     "note": null
    },
    {
     "k": "헤어피스",
     "v": 15,
     "note": null
    }
   ],
   "unknown": [
    "판매가"
   ],
   "reviews": {
    "independent": 3,
    "latest": "2026-03-29",
    "items": [
     {
      "date": "2026-03-29",
      "url": "https://blog.naver.com/kkoma0210/224233240596",
      "kind": "본식",
      "ad": null,
      "paid": null,
      "good": "처음에는 만족하고 촬영을 진행",
      "bad": "추가 식전영상 제안 이후 만족도가 낮아졌다고 기록. 아쉬운 점을 샵에 전달"
     },
     {
      "date": "2025-09-12",
      "url": "https://blog.naver.com/PostView.naver?blogId=jjini_58&logNo=224004664522&redirect=Dlog",
      "kind": "기타",
      "ad": null,
      "paid": null,
      "good": "신부 헤어와 메이크업 후기 기록 (세부 평가 확인 필요)",
      "bad": "신랑 메이크업이 아쉬웠다고 기록"
     },
     {
      "date": "2025-06-28",
      "url": "https://m.blog.naver.com/hsj080613/223914396146",
      "kind": "기타",
      "ad": null,
      "paid": null,
      "good": "속눈썹과 아이메이크업 포인트를 살린 점, 찐만족이라고 기록",
      "bad": ""
     }
    ],
    "note": "후기 3건 모두 독립. 얼리비 3.3~5.5만, 식전영상 추가 제안 불만 1건."
   }
  },
  {
   "role": "makeup",
   "name": "고센뷰티 (고센&끌림)",
   "benefits": [
    "쿠폰 4만원 할인 → 쿠폰 적용가 60만 (64 − 4, 페이지 표기와 일치)",
    "실장 → 원장 업그레이드 (실장 상품)",
    "배너 \"최대 58만원 상당 할인\": 대상·기간 미표기"
   ],
   "iwUrl": "https://www.iwedding.co.kr/enterprise/info/co_sl_m009",
   "products": [
    {
     "name": "[촬영+본식] 신부신랑 실장",
     "url": "https://www.iwedding.co.kr/enterprise/prd/co_sl_m009/15011",
     "price": "64만",
     "grade": "B",
     "cond": "아이웨딩 판매가"
    }
   ],
   "included": [
    "촬영 1회 + 본식 1회, 신랑 포함"
   ],
   "extras": [
    {
     "k": "05:00~05:59 시작",
     "v": 11,
     "note": null
    },
    {
     "k": "헤어피스 1단",
     "v": 16.5,
     "note": null
    }
   ],
   "unknown": [
    "\"고센&끌림뷰티\"와 사이트의 \"고센뷰티\"가 같은 업체인지"
   ],
   "reviews": {
    "independent": 1,
    "latest": "2026-04-02",
    "items": [
     {
      "date": "2026-04-02",
      "url": "https://blog.naver.com/green_splash/224238852157",
      "kind": "촬영",
      "ad": "제한적 (추천인 코드 표기 있음)",
      "paid": null,
      "good": "",
      "bad": ""
     },
     {
      "date": "2025-11-23",
      "url": "https://blog.naver.com/shm9207/224085305247",
      "kind": "기타",
      "ad": "제한적 (제휴 업체 선택 언급)",
      "paid": null,
      "good": "입술을 제외하면 대만족",
      "bad": "입술 표현이 아쉬움 (세부 확인 안됨)"
     },
     {
      "date": "2025-01-12",
      "url": "https://m.blog.naver.com/nbkmjaal/223723278712",
      "kind": "촬영",
      "ad": null,
      "paid": null,
      "good": "",
      "bad": ""
     }
    ],
    "note": null
   }
  }
 ],
 "combos": [
  {
   "id": "b1",
   "name": "클레 + 에델린 + 제이와이 (받은 견적)",
   "total": false,
   "grade": "A",
   "base": 237,
   "src": "https://www.iwedding.co.kr/enterprise/prd/co_sl_d354/17949",
   "srcLabel": "에델린 상세",
   "defaultCmp": true,
   "cond": "클레 114 = 160 − 쿠폰30 − 비수기11 − 10시 첫타임5, 에델린 85 = 118 − 쿠폰22 − 노투어11 (아이웨딩 옵션창 재현 일치). 비수기가 아닌 날 촬영하면 클레 +11만, 첫타임이 아니면 +5만. 헬퍼·피팅비가 견적에 들어있으면 빼서 보세요.",
   "req": [
    {
     "k": "촬영 헬퍼",
     "v": 25,
     "note": "드레스샵·스튜디오 상세페이지 표기"
    },
    {
     "k": "본식 헬퍼",
     "v": 25,
     "note": "드레스샵 상세페이지 표기"
    },
    {
     "k": "피팅비",
     "v": 5.5,
     "note": "드레스샵 상세페이지 표기"
    }
   ],
   "opts": [
    {
     "k": "비수기 아닌 날 촬영 (클레 비수기 할인 없음)",
     "v": 11
    },
    {
     "k": "10시 첫타임 아님",
     "v": 5
    },
    {
     "k": "클레 작가 지정",
     "v": 11
    },
    {
     "k": "클레 로드씬",
     "v": 11
    },
    {
     "k": "의상 1벌 추가",
     "v": 16.5
    }
   ],
   "disc": [],
   "unknown": [
    "견적서의 제이와이 직급(실장 58.5만 기준으로 맞춤)과 패키지 추가할인 20만 적용 여부, 0.5만 차이",
    "견적서에 헬퍼·피팅비 포함 여부",
    "노투어로 고를 수 있는 실크 드레스 수",
    "메이크업 얼리스타트"
   ]
  },
  {
   "id": "b2",
   "name": "클레 + 메라키 + 제이와이 (받은 견적)",
   "total": false,
   "grade": "A",
   "base": 270,
   "src": "https://www.iwedding.co.kr/enterprise/prd/co_sl_d351/17533",
   "srcLabel": "메라키 상세",
   "defaultCmp": true,
   "cond": "클레 114는 비수기·첫타임 조건으로 재현됨. 메라키 상세는 \"가격 문의\"(옵션창: 노투어 −11만 / 투어 +5.5만)라 118만 공개가 대조 불가.",
   "req": [
    {
     "k": "촬영 헬퍼",
     "v": 25,
     "note": "드레스샵·스튜디오 상세페이지 표기"
    },
    {
     "k": "본식 헬퍼",
     "v": 25,
     "note": "드레스샵 상세페이지 표기"
    },
    {
     "k": "피팅비",
     "v": 5.5,
     "note": "드레스샵 상세페이지 표기"
    }
   ],
   "opts": [
    {
     "k": "비수기 아닌 날 촬영 (클레 비수기 할인 없음)",
     "v": 11
    },
    {
     "k": "10시 첫타임 아님",
     "v": 5
    },
    {
     "k": "클레 작가 지정",
     "v": 11
    },
    {
     "k": "메라키 촬영 드레스 1벌 추가",
     "v": 5
    },
    {
     "k": "메라키 야외촬영",
     "v": 5
    }
   ],
   "disc": [],
   "unknown": [
    "견적서의 제이와이 직급과 패키지 추가할인 20만 적용 여부, 0.5만 차이",
    "견적서에 헬퍼·피팅비 포함 여부",
    "메라키 라벨 업그레이드 금액"
   ]
  },
  {
   "id": "our1",
   "name": "아우어(토탈) + 모네뜨아르 + 비기닝",
   "total": true,
   "grade": "B",
   "base": 191,
   "src": "https://www.iwedding.co.kr/enterprise/prd/co_sl_i001/18485",
   "srcLabel": "패키지 상세",
   "defaultCmp": true,
   "cond": "특전가 211만 − 패키지 추가할인 20만 = 191만. 옵션창 \"투어 없이 지정 예약 −5만\" 선택 시 186만 = 최대혜택가(재현 일치). 촬영 드레스는 스튜디오 것, 본식 드레스만 모네뜨아르 1벌.",
   "req": [
    {
     "k": "촬영 헬퍼",
     "v": 25,
     "note": "드레스샵·스튜디오 상세페이지 표기"
    },
    {
     "k": "본식 헬퍼",
     "v": 25,
     "note": "드레스샵 상세페이지 표기"
    },
    {
     "k": "피팅비",
     "v": 5.5,
     "note": "드레스샵 상세페이지 표기"
    }
   ],
   "opts": [
    {
     "k": "모네뜨아르 투어 없이 지정 예약",
     "v": -5,
     "on": true
    },
    {
     "k": "원본+수정본 44만 (\"필수구매\" 표기 · 포함 표기와 상충)",
     "v": 44,
     "on": true
    },
    {
     "k": "비기닝 부원장 지정",
     "v": 4
    },
    {
     "k": "본식 얼리스타트 05:00~05:30",
     "v": 16.5
    },
    {
     "k": "로드씬",
     "v": 11
    },
    {
     "k": "폭죽씬",
     "v": 11
    }
   ],
   "disc": [],
   "unknown": [
    "원본 44만 포함 여부"
   ]
  },
  {
   "id": "pra",
   "name": "프라베소 + 모네뜨아르 + 비기닝",
   "total": false,
   "grade": "B",
   "base": 236.5,
   "src": "https://www.iwedding.co.kr/enterprise/prd/co_sl_i001/18273",
   "srcLabel": "패키지 상세",
   "defaultCmp": true,
   "cond": "특전가 256.5만 − 20만. 원본은 \"무료\"와 \"필수구매 44만\" 표기가 충돌. 모네뜨아르 4벌.",
   "req": [
    {
     "k": "촬영 헬퍼",
     "v": 25,
     "note": "드레스샵·스튜디오 상세페이지 표기"
    },
    {
     "k": "본식 헬퍼",
     "v": 25,
     "note": "드레스샵 상세페이지 표기"
    },
    {
     "k": "피팅비",
     "v": 5.5,
     "note": "드레스샵 상세페이지 표기"
    }
   ],
   "opts": [
    {
     "k": "원본+수정본 44만 (\"필수구매\" 표기 · 포함 표기와 상충)",
     "v": 44,
     "on": true
    },
    {
     "k": "작가 지정",
     "v": 22
    }
   ],
   "disc": [],
   "unknown": [
    "최대혜택 220.5만과의 차이 16만: 옵션(노투어·비수기 등) 할인으로 추정, 옵션창 미확인",
    "프라베소 독립 후기 1건뿐"
   ]
  },
  {
   "id": "our2",
   "name": "아우어 + 르네아뜰리에 + 비기닝",
   "total": false,
   "grade": "B",
   "base": 238,
   "src": "https://www.iwedding.co.kr/enterprise/prd/co_sl_i001/18088",
   "srcLabel": "패키지 상세",
   "cond": "요약 카드 238만(정가 450만). 르네 4벌.",
   "req": [
    {
     "k": "촬영 헬퍼",
     "v": 25,
     "note": "드레스샵·스튜디오 상세페이지 표기"
    },
    {
     "k": "본식 헬퍼",
     "v": 25,
     "note": "드레스샵 상세페이지 표기"
    },
    {
     "k": "피팅비",
     "v": 5.5,
     "note": "드레스샵 상세페이지 표기"
    }
   ],
   "opts": [
    {
     "k": "원본+수정본 44만 (\"필수구매\" 표기 · 포함 표기와 상충)",
     "v": 44,
     "on": true
    },
    {
     "k": "로드씬",
     "v": 11
    }
   ],
   "disc": [],
   "unknown": [
    "최대혜택 227만과의 차이 11만: 옵션 할인으로 추정, 옵션창 미확인",
    "아우어 웨딩촬영 상품의 원본 포함 여부"
   ]
  },
  {
   "id": "won",
   "name": "원규(토탈) + 에델린 + 비기닝",
   "total": true,
   "grade": "B",
   "base": 253,
   "src": "https://www.iwedding.co.kr/enterprise/prd/co_sl_i001/18233",
   "srcLabel": "패키지 상세",
   "cond": "특전가 273만 − 20만 = 253만. 옵션창: 비수기 −11 + 노투어 −5 → 237만 = 최대혜택가(재현 일치), 평일 첫타임 −11 더하면 226만. 본식 에델린 1벌.",
   "req": [
    {
     "k": "촬영 헬퍼",
     "v": 25,
     "note": "드레스샵·스튜디오 상세페이지 표기"
    },
    {
     "k": "본식 헬퍼",
     "v": 25,
     "note": "드레스샵 상세페이지 표기"
    },
    {
     "k": "피팅비",
     "v": 5.5,
     "note": "드레스샵 상세페이지 표기"
    }
   ],
   "opts": [
    {
     "k": "에델린 투어 없이 지정 예약",
     "v": -5,
     "on": true
    },
    {
     "k": "원규 비수기 촬영(12~2월, 7~8월)",
     "v": -11
    },
    {
     "k": "원규 평일 오전 첫타임(9:30)",
     "v": -11
    },
    {
     "k": "원본+수정본 44만 (\"필수구매\" 표기 · 포함 표기와 상충)",
     "v": 44,
     "on": true
    },
    {
     "k": "야간 로드씬",
     "v": 22
    },
    {
     "k": "헤어변형 1회",
     "v": 5.5
    }
   ],
   "disc": [],
   "unknown": []
  },
  {
   "id": "hol",
   "name": "휴일(토탈) + 르네아뜰리에 + 비올",
   "total": true,
   "grade": "B",
   "base": 235.5,
   "src": "https://www.iwedding.co.kr/enterprise/prd/co_sl_i001/19326",
   "srcLabel": "패키지 상세",
   "cond": "특전가 255.5만 − 20만. 배경 중심 스튜디오.",
   "req": [
    {
     "k": "촬영 헬퍼",
     "v": 25,
     "note": "드레스샵·스튜디오 상세페이지 표기"
    },
    {
     "k": "본식 헬퍼",
     "v": 25,
     "note": "드레스샵 상세페이지 표기"
    },
    {
     "k": "피팅비",
     "v": 5.5,
     "note": "드레스샵 상세페이지 표기"
    }
   ],
   "opts": [
    {
     "k": "원본+수정본 44만 (\"필수구매\" 표기 · 포함 표기와 상충)",
     "v": 44,
     "on": true
    },
    {
     "k": "야간씬 (오후 촬영이면 필수)",
     "v": 22
    },
    {
     "k": "노을씬",
     "v": 4
    }
   ],
   "disc": [],
   "unknown": [
    "최대혜택 224.5만과의 차이 11만: 옵션 할인으로 추정, 옵션창 미확인",
    "독립 후기 0건"
   ]
  },
  {
   "id": "lam",
   "name": "라망(토탈) + 시그니처B + 포레스타",
   "total": true,
   "grade": "B",
   "base": 211,
   "src": "https://www.iwedding.co.kr/enterprise/prd/co_sl_i001/23581",
   "srcLabel": "패키지 상세",
   "cond": "특전가 231만 − 20만.",
   "req": [
    {
     "k": "촬영 헬퍼",
     "v": 25,
     "note": "드레스샵·스튜디오 상세페이지 표기"
    }
   ],
   "opts": [
    {
     "k": "원본+수정본 44만 (\"필수구매\" 표기 · 포함 표기와 상충)",
     "v": 44,
     "on": true
    },
    {
     "k": "앨범 10P 추가",
     "v": 33
    }
   ],
   "disc": [],
   "unknown": [
    "시그니처B 본식 헬퍼·피팅비",
    "최대혜택 205만이 되는 조건"
   ]
  },
  {
   "id": "cv",
   "name": "클레 + 비비드블랑 + 제이바이로이스타",
   "total": false,
   "grade": "B",
   "base": 298,
   "src": "https://www.iwedding.co.kr/enterprise/prd/co_sl_i001/18109",
   "srcLabel": "패키지 상세",
   "cond": "특전가 318만 − 20만. 원본+수정본 무료.",
   "req": [
    {
     "k": "촬영 헬퍼",
     "v": 25,
     "note": "드레스샵·스튜디오 상세페이지 표기"
    }
   ],
   "opts": [],
   "disc": [],
   "unknown": [
    "비비드블랑 본식 헬퍼·피팅비",
    "최대혜택 267만이 되는 조건"
   ]
  }
 ],
 "picks": [
  {
   "rank": "1순위",
   "title": "클레 + 메라키 + 제이와이 (270만, 받은 견적)",
   "why": "인물 중심 근거가 가장 두꺼운 클레(독립 후기 5건, 아이웨딩 평점 10.0)에, 아이웨딩이 \"실크\" 주력으로 분류한 메라키를 붙인 조합이라 밝은 홀·실크 우선 조건에 가장 잘 맞아요.",
   "pros": "에델린(아이웨딩 분류 \"비즈 드레스\")보다 실크 선택 폭이 넓을 가능성이 큼. 메라키 \"전라벨 무료 업그레이드(퍼스트 포함)\"가 2026-11-03까지(지정예약·당일결정). 스튜디오는 그대로.",
   "cons": "메라키 상세가 \"가격 문의\"라 118만을 공개가로 검증할 수 없음. 메라키 본식 실착 독립 후기는 1건(비즈). 공식 인스타 피드는 비즈·레이스 볼륨 가운 비중이 커서, 실크만 보면 르네아뜰리에·로우케이 피드가 더 실크 중심이에요.",
   "diff": "에델린 조합보다 +33만 (헬퍼·피팅비는 두 조합 같은 구조)",
   "risk": "촬영·본식 헬퍼 50만, 피팅비 5.5만, 촬영 드레스 추가 벌당 5만, 야외 +5만",
   "reviews": "클레 독립 촬영 후기 5건(2025-06~2026-09). 메라키 독립 1건 + 추천인·포인트 표기 3건. 템플릿 의심 1건 제외.",
   "links": [
    {
     "label": "클레 A타입",
     "url": "https://www.iwedding.co.kr/enterprise/prd/co_sl_s561/22751"
    },
    {
     "label": "메라키 4벌",
     "url": "https://www.iwedding.co.kr/enterprise/prd/co_sl_d351/17533"
    }
   ],
   "gaps": "제이와이 직급(실장 가정)과 패키지 할인 적용은 견적서로 확인. 메라키 라벨별 추가금 미공개. 클레 보정본 최종 품질 후기 부족."
  },
  {
   "rank": "2순위",
   "title": "클레 + 에델린 + 제이와이 유지 (237만, 받은 견적)",
   "why": "같은 클레로 가장 싸요. 에델린 85만은 아이웨딩 상세 최대혜택가와 정확히 같아 가격 근거가 가장 단단해요(A+B).",
   "pros": "메라키 조합보다 33만 저렴. 독립 후기 3건(본식 가봉 포함).",
   "cons": "아이웨딩 분류가 \"비즈 드레스\"이고 노투어 지정이라 실크를 직접 비교해 볼 기회가 적어요.",
   "diff": "기준 (메라키 조합 대비 −33만)",
   "risk": "촬영 헬퍼 25 + 본식 헬퍼 25 + 피팅 5.5 + 17시 이후·5시간 이상 각 +5만",
   "reviews": "독립 3건(2025-07, 2026-05, 2026-07). 실크 언급 2건은 제휴 표기 글.",
   "links": [
    {
     "label": "에델린 4벌",
     "url": "https://www.iwedding.co.kr/enterprise/prd/co_sl_d354/17949"
    },
    {
     "label": "클레 A타입",
     "url": "https://www.iwedding.co.kr/enterprise/prd/co_sl_s561/22751"
    }
   ],
   "gaps": "노투어 기본 라벨에서 고를 수 있는 실크 벌 수. 견적서의 헬퍼·피팅비 포함 여부."
  },
  {
   "rank": "3순위",
   "title": "아우어(토탈) + 모네뜨아르 + 비기닝 (191만, 공개가)",
   "why": "대체 패키지 중 인물 중심 근거(아이웨딩 \"따뜻한 인물 중심\" + 무협찬 후기 3건)가 있고 기본가가 가장 낮아요.",
   "pros": "기본가가 에델린 조합보다 46만 낮음. 메이크업 직급(실장)과 가격이 공개돼 있음.",
   "cons": "원본 44만이 필수구매로 붙으면 실지불액이 기존 조합과 거의 같아짐. 토탈이라 촬영 드레스는 스튜디오 보유분. 모네뜨아르는 비즈·튈 위주. 보정본 약 70일.",
   "diff": "기본가 −46만 / 노투어·원본 44만 반영 시 실지불액 약 −7만",
   "risk": "원본 44, 헬퍼 50, 피팅 5.5, 로드씬·폭죽씬 각 11",
   "reviews": "아우어 독립 3건(2025-05~2026-05, 내돈내산 2건). 모네뜨아르 독립 3건. 비기닝 독립 3건.",
   "links": [
    {
     "label": "패키지 상세",
     "url": "https://www.iwedding.co.kr/enterprise/prd/co_sl_i001/18485"
    }
   ],
   "gaps": "원본 44만 포함 여부, 아우어 결과물(보정본) 후기. 기존 조합의 클레 114만이 비수기·첫타임 조건이면 날짜에 따라 격차가 최대 16만 더 벌어짐."
  }
 ],
 "roles": [
  [
   "업체 고르기",
   "제휴 업체 안에서 추천, 같은 조합 견적 비교 가능",
   "아이웨딩 상세페이지·후기로 직접 추림 (이 섹션)"
  ],
  [
   "가격·특전 협상",
   "패키지 특전·당일 혜택을 대신 챙김",
   "\"최대 혜택가\" 적용 조건을 직접 물어 서면으로 받기"
  ],
  [
   "드레스 투어·가봉",
   "동행형은 현장 피드백",
   "실크/비즈 각 2벌 이상 입고 메모 (노투어면 기본 라벨 목록 요청)"
  ],
  [
   "일정·리마인드",
   "플래너가 알림",
   "아이웨딩 앱 리마인드(후기에서 편했다는 평) + 캘린더"
  ],
  [
   "추가금 방어",
   "계약 전 안내",
   "헬퍼·피팅·원본·앨범 페이지 상한을 계약서 특약에"
  ],
  [
   "본식 당일",
   "동행형만 현장 관리",
   "헬퍼 이모님·메이크업 시작 시간 직접 확인"
  ]
 ],
 "totalVs": {
  "rows": [
   [
    "촬영 드레스",
    "스튜디오 보유 드레스 3벌 (휴일 화이트2+빈티지1, 라망 화이트2+컬러1). 상위 드레스는 추가금",
    "드레스샵 라인업에서 3벌 선택"
   ],
   [
    "촬영 헤어메이크업",
    "스튜디오 쪽 1회 (아우어는 제휴샵 조이187 청담). 샵·원장 선택 제한",
    "따로 계약한 메이크업샵"
   ],
   [
    "본식 드레스",
    "드레스샵에서 1벌 따로 대여 → 본식 가봉·피팅비·본식 헬퍼 그대로 발생",
    "같은 드레스샵 4벌 중 1벌"
   ],
   [
    "본식 메이크업",
    "따로 계약 (비기닝·비올 등)",
    "같은 메이크업샵"
   ],
   [
    "원본 데이터",
    "원규·아우어·휴일·라망: 44만 \"필수구매\" 표기 (포함 표기와 상충)",
    "클레: \"상품구성에 포함\" 확정"
   ]
  ],
  "claims": [
   [
    "\"본식 때 드레스 또 빌리러 가야 하나?\"",
    "맞음",
    "토탈은 촬영 드레스만 스튜디오 것. 패키지에 \"에델린 본식 1벌\"처럼 들어 있고 가봉은 드레스샵에서."
   ],
   [
    "\"토탈은 안 예쁘다\"",
    "반만 맞음",
    "촬영 드레스 선택 폭이 좁고 상위 드레스는 추가금(휴일 16.5~33만, 아우어 5.5~33만, 후기: 원규 11만×2, 라망 블랙라벨 10만). 결과물이 안 예쁘다는 독립 후기는 0건, 아우어 무협찬 후기 3건은 호평."
   ],
   [
    "\"토탈 메이크업 별로\"",
    "근거 없음",
    "부정 독립 후기 0건(원규 후기: 촬영 내내 유지). 단, 샵·원장을 고를 수 없음. 본식 메이크업은 어느 쪽이든 따로 고름."
   ],
   [
    "\"싼 게 비지떡? 가성비?\"",
    "거의 같은 값",
    "아우어 토탈 191 → 285.5만(노투어 −5 반영) vs 클레+에델린 237 → 292.5만 (헬퍼·피팅·원본44 같은 기준) → 약 7만 차이. 원본이 포함이면 약 51만 저렴, 촬영 드레스 업그레이드하면 차이 축소. 클레 114만이 비수기·첫타임 조건이면 날짜에 따라 격차 최대 +16만."
   ]
  ],
  "verdict": "인물 중심 + 실크 우선이면 비토탈이 맞아요. 토탈은 \"원본 44만 포함\"이 서면으로 확인되고 보유 드레스만으로 만족할 때만 진짜 가성비예요."
 },
 "pages": [
  {
   "label": "셀프 준비 매뉴얼·체크리스트",
   "url": "./sdm-self-planning-guide.html"
  },
  {
   "label": "혼주 한복·신랑 예복 비교",
   "url": "./wedding-attire-comparison.html"
  }
 ]
};
