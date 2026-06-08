/**
 * Nature Green Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "전윤호",
    nameEn: "Jeon Yunho",
    father: "전영철",
    mother: "조성혜",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "김수진",
    nameEn: "Kim Sujin",
    father: "김성기",
    mother: "김영애",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-10-10",
    time: "12:30",
    venue: "H스퀘어 웨딩홀",
    hall: "헤리티지홀",
    address: "서울특별시 성동구 행당동 15-1 H스퀘어(한양대 동문회관)",
    tel: "02-2299-9999",
    mapLinks: {
      kakao: "https://place.map.kakao.com/10931903",
      naver: "https://naver.me/GgW8fTWQ"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "별 것 아닌 이야기로 한참을 웃던 밤, \n힘든 하루 끝에 아무 말 없이 건네주던 위로, \n사소한 취향 하나까지 기억해주던 다정함.\n\n그 모든 순간들이 쌓여\n저희는 서로에게 가장 소중한 사람이 되었습니다.\n\n앞으로의 날들도\n지금처럼 서로를 아끼고 이해하며\n천천히 오래 함께 걸어가려 합니다.\n\n소중한 걸음으로 함께해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks와 캘린더는 location 섹션 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "전윤호", bank: "국민은행", number: "000-000-000000" },
      { role: "아버지", name: "전영철", bank: "신한은행", number: "000-000-000000" },
      { role: "어머니", name: "조성혜", bank: "우리은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "김수진", bank: "국민은행", number: "839202-04-264561" },
      { role: "아버지", name: "김성기", bank: "기업은행", number: "000-000-000000" },
      { role: "어머니", name: "김영애", bank: "농협은행", number: "000-000-000000" }
    ]
  },

  // ── 배경 음악 ──
  // music/1.mp3 파일을 해당 경로에 넣으면 자동 재생됩니다.
  // useMusic: false 로 설정하면 음악 기능을 비활성화합니다.
  music: {
    useMusic: true,
    path: "music/1.mp3",   // 음악 파일 경로 (mp3, ogg, wav 지원)
    loop: true,            // 반복 재생 여부
    volume: 0.5            // 볼륨 (0.0 ~ 1.0)
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "전윤호 ♥ 김수진 결혼합니다",
    description: "2026년 10월 10일, 소중한 분들을 초대합니다."
  }
};
