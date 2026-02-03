// 퀴즈 데이터
const QUIZ_DATA = {
  hiragana: [
    { char: 'あ', reading: 'a' },
    { char: 'い', reading: 'i' },
    { char: 'う', reading: 'u' },
    { char: 'え', reading: 'e' },
    { char: 'お', reading: 'o' },
    { char: 'か', reading: 'ka' },
    { char: 'き', reading: 'ki' },
    { char: 'く', reading: 'ku' },
    { char: 'け', reading: 'ke' },
    { char: 'こ', reading: 'ko' },
    { char: 'さ', reading: 'sa' },
    { char: 'し', reading: 'shi' },
    { char: 'す', reading: 'su' },
    { char: 'せ', reading: 'se' },
    { char: 'そ', reading: 'so' },
    { char: 'た', reading: 'ta' },
    { char: 'ち', reading: 'chi' },
    { char: 'つ', reading: 'tsu' },
    { char: 'て', reading: 'te' },
    { char: 'と', reading: 'to' },
    { char: 'な', reading: 'na' },
    { char: 'に', reading: 'ni' },
    { char: 'ぬ', reading: 'nu' },
    { char: 'ね', reading: 'ne' },
    { char: 'の', reading: 'no' },
    { char: 'は', reading: 'ha' },
    { char: 'ひ', reading: 'hi' },
    { char: 'ふ', reading: 'fu' },
    { char: 'へ', reading: 'he' },
    { char: 'ほ', reading: 'ho' },
    { char: 'ま', reading: 'ma' },
    { char: 'み', reading: 'mi' },
    { char: 'む', reading: 'mu' },
    { char: 'め', reading: 'me' },
    { char: 'も', reading: 'mo' },
    { char: 'や', reading: 'ya' },
    { char: 'ゆ', reading: 'yu' },
    { char: 'よ', reading: 'yo' },
    { char: 'ら', reading: 'ra' },
    { char: 'り', reading: 'ri' },
    { char: 'る', reading: 'ru' },
    { char: 'れ', reading: 're' },
    { char: 'ろ', reading: 'ro' },
    { char: 'わ', reading: 'wa' },
    { char: 'を', reading: 'wo' },
    { char: 'ん', reading: 'n' },
  ],
  katakana: [
    { char: 'ア', reading: 'a' },
    { char: 'イ', reading: 'i' },
    { char: 'ウ', reading: 'u' },
    { char: 'エ', reading: 'e' },
    { char: 'オ', reading: 'o' },
    { char: 'カ', reading: 'ka' },
    { char: 'キ', reading: 'ki' },
    { char: 'ク', reading: 'ku' },
    { char: 'ケ', reading: 'ke' },
    { char: 'コ', reading: 'ko' },
    { char: 'サ', reading: 'sa' },
    { char: 'シ', reading: 'shi' },
    { char: 'ス', reading: 'su' },
    { char: 'セ', reading: 'se' },
    { char: 'ソ', reading: 'so' },
    { char: 'タ', reading: 'ta' },
    { char: 'チ', reading: 'chi' },
    { char: 'ツ', reading: 'tsu' },
    { char: 'テ', reading: 'te' },
    { char: 'ト', reading: 'to' },
    { char: 'ナ', reading: 'na' },
    { char: 'ニ', reading: 'ni' },
    { char: 'ヌ', reading: 'nu' },
    { char: 'ネ', reading: 'ne' },
    { char: 'ノ', reading: 'no' },
    { char: 'ハ', reading: 'ha' },
    { char: 'ヒ', reading: 'hi' },
    { char: 'フ', reading: 'fu' },
    { char: 'ヘ', reading: 'he' },
    { char: 'ホ', reading: 'ho' },
    { char: 'マ', reading: 'ma' },
    { char: 'ミ', reading: 'mi' },
    { char: 'ム', reading: 'mu' },
    { char: 'メ', reading: 'me' },
    { char: 'モ', reading: 'mo' },
    { char: 'ヤ', reading: 'ya' },
    { char: 'ユ', reading: 'yu' },
    { char: 'ヨ', reading: 'yo' },
    { char: 'ラ', reading: 'ra' },
    { char: 'リ', reading: 'ri' },
    { char: 'ル', reading: 'ru' },
    { char: 'レ', reading: 're' },
    { char: 'ロ', reading: 'ro' },
    { char: 'ワ', reading: 'wa' },
    { char: 'ヲ', reading: 'wo' },
    { char: 'ン', reading: 'n' },
  ],
  vocabulary: [
    { japanese: 'こんにちは', korean: '안녕하세요', reading: 'konnichiwa' },
    { japanese: 'ありがとう', korean: '감사합니다', reading: 'arigatou' },
    { japanese: 'さようなら', korean: '안녕히 가세요', reading: 'sayounara' },
    { japanese: 'おはよう', korean: '좋은 아침', reading: 'ohayou' },
    { japanese: 'こんばんは', korean: '좋은 저녁', reading: 'konbanwa' },
    { japanese: 'すみません', korean: '죄송합니다', reading: 'sumimasen' },
    { japanese: '水', korean: '물', reading: 'mizu' },
    { japanese: '食べる', korean: '먹다', reading: 'taberu' },
    { japanese: '行く', korean: '가다', reading: 'iku' },
    { japanese: '見る', korean: '보다', reading: 'miru' },
    { japanese: '大きい', korean: '크다', reading: 'ookii' },
    { japanese: '小さい', korean: '작다', reading: 'chiisai' },
    { japanese: '暑い', korean: '덥다', reading: 'atsui' },
    { japanese: '寒い', korean: '춥다', reading: 'samui' },
    { japanese: '今日', korean: '오늘', reading: 'kyou' },
    { japanese: '明日', korean: '내일', reading: 'ashita' },
    { japanese: '昨日', korean: '어제', reading: 'kinou' },
    { japanese: '人', korean: '사람', reading: 'hito' },
    { japanese: '友達', korean: '친구', reading: 'tomodachi' },
    { japanese: '学校', korean: '학교', reading: 'gakkou' },
  ],
};

// 상태
let currentQuiz = null;
let questions = [];
let currentIndex = 0;
let score = 0;
let selectedAnswer = null;

// DOM
const quizSelect = document.getElementById('quiz-select');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const progressFill = document.getElementById('progress-fill');
const currentQEl = document.getElementById('current-q');
const totalQEl = document.getElementById('total-q');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers');
const btnBack = document.getElementById('btn-back');
const btnNext = document.getElementById('btn-next');
const btnResult = document.getElementById('btn-result');
const scoreValue = document.getElementById('score-value');
const scoreTotal = document.getElementById('score-total');
const scoreMessage = document.getElementById('score-message');
const btnRetry = document.getElementById('btn-retry');
const questionCountSelect = document.getElementById('question-count');

// 유틸: 셔플
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// 퀴즈 문제 생성
function buildQuestions(quizType, count) {
  const data = QUIZ_DATA[quizType];
  const shuffled = shuffle(data).slice(0, Math.min(count, data.length));

  if (quizType === 'vocabulary') {
    return shuffled.map((item) => {
      const wrong = shuffle(data.filter((d) => d !== item))
        .slice(0, 3)
        .map((d) => d.korean);
      const options = shuffle([item.korean, ...wrong]);
      return {
        question: item.japanese,
        correct: item.korean,
        options,
        reading: item.reading,
      };
    });
  }

  // 히라가나/가타카나: 문자 → 읽기 선택
  return shuffled.map((item) => {
    const wrong = shuffle(data.filter((d) => d !== item))
      .slice(0, 3)
      .map((d) => d.reading);
    const options = shuffle([item.reading, ...wrong]);
    return {
      question: item.char,
      correct: item.reading,
      options,
    };
  });
}

// 화면 전환
function showScreen(screen) {
  quizSelect.classList.add('hidden');
  quizScreen.classList.add('hidden');
  resultScreen.classList.add('hidden');
  screen.classList.remove('hidden');
}

// 퀴즈 시작
function startQuiz(quizType) {
  const count = parseInt(questionCountSelect.value, 10);
  currentQuiz = quizType;
  questions = buildQuestions(quizType, count);
  currentIndex = 0;
  score = 0;
  selectedAnswer = null;

  totalQEl.textContent = questions.length;
  showScreen(quizScreen);
  renderQuestion();
}

// 문제 렌더
function renderQuestion() {
  const q = questions[currentIndex];
  selectedAnswer = null;

  currentQEl.textContent = currentIndex + 1;
  progressFill.style.width = `${((currentIndex + 1) / questions.length) * 100}%`;

  questionText.textContent = q.question;
  if (q.reading) {
    const sub = document.createElement('span');
    sub.className = 'question-reading';
    sub.textContent = ` (${q.reading})`;
    questionText.appendChild(sub);
  }

  answersContainer.innerHTML = '';
  q.options.forEach((opt) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = opt;
    btn.dataset.answer = opt;
    btn.addEventListener('click', () => selectAnswer(btn, opt));
    answersContainer.appendChild(btn);
  });

  btnNext.classList.add('hidden');
  btnResult.classList.add('hidden');
  if (currentIndex === questions.length - 1) {
    btnResult.classList.remove('hidden');
  } else {
    btnNext.classList.remove('hidden');
  }
}

function selectAnswer(btn, answer) {
  if (selectedAnswer !== null) return;
  selectedAnswer = answer;
  const q = questions[currentIndex];
  const buttons = answersContainer.querySelectorAll('.answer-btn');

  buttons.forEach((b) => {
    b.disabled = true;
    if (b.dataset.answer === q.correct) {
      b.classList.add('correct');
    }
    if (b.dataset.answer === answer && answer !== q.correct) {
      b.classList.add('wrong');
    }
  });

  if (answer === q.correct) score++;
}

function nextQuestion() {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    renderQuestion();
  }
}

function showResult() {
  const total = questions.length;
  scoreValue.textContent = score;
  scoreTotal.textContent = total;
  const percent = Math.round((score / total) * 100);
  if (percent === 100) scoreMessage.textContent = '완벽해요! すごい！';
  else if (percent >= 80) scoreMessage.textContent = '잘했어요! よくできました！';
  else if (percent >= 60) scoreMessage.textContent = '좋아요! もう少し頑張りましょう！';
  else scoreMessage.textContent = '다시 도전해 보세요! 頑張って！';
  document.getElementById('score-total').textContent = total;
  showScreen(resultScreen);
}

// 이벤트
document.querySelectorAll('.quiz-card').forEach((card) => {
  card.addEventListener('click', () => startQuiz(card.dataset.quiz));
});

btnBack.addEventListener('click', () => showScreen(quizSelect));
btnNext.addEventListener('click', nextQuestion);
btnResult.addEventListener('click', showResult);
btnRetry.addEventListener('click', () => showScreen(quizSelect));

// 문의하기 모달
const contactModal = document.getElementById('contact-modal');
const btnContact = document.getElementById('btn-contact');
const contactModalClose = document.getElementById('contact-modal-close');
const contactModalCancel = document.getElementById('contact-modal-cancel');
const contactForm = document.getElementById('contact-form');
const contactFormMessage = document.getElementById('contact-form-message');
const formSubmitWrap = document.getElementById('form-submit-wrap');

function openContactModal() {
  contactModal.classList.add('is-open');
  contactModal.setAttribute('aria-hidden', 'false');
  contactForm.reset();
  contactFormMessage.textContent = '';
  contactFormMessage.className = 'form-message';
}

function closeContactModal() {
  contactModal.classList.remove('is-open');
  contactModal.setAttribute('aria-hidden', 'true');
}

btnContact.addEventListener('click', openContactModal);
contactModalClose.addEventListener('click', closeContactModal);
contactModalCancel.addEventListener('click', closeContactModal);
contactModal.addEventListener('click', (e) => {
  if (e.target === contactModal) closeContactModal();
});

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('contact-name').value.trim();
  const phone = document.getElementById('contact-phone').value.trim();
  const email = document.getElementById('contact-email').value.trim();

  contactFormMessage.textContent = '';
  contactFormMessage.className = 'form-message';
  formSubmitWrap.classList.add('loading');

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, email }),
    });
    const data = await res.json().catch(() => ({}));

    if (res.ok) {
      contactFormMessage.textContent = '문의가 접수되었습니다. 감사합니다.';
      contactFormMessage.className = 'form-message success';
      contactForm.reset();
    } else {
      contactFormMessage.textContent = data.message || '전송에 실패했습니다. 나중에 다시 시도해 주세요.';
      contactFormMessage.className = 'form-message error';
    }
  } catch (err) {
    contactFormMessage.textContent = '네트워크 오류가 발생했습니다. 서버가 실행 중인지 확인해 주세요.';
    contactFormMessage.className = 'form-message error';
  } finally {
    formSubmitWrap.classList.remove('loading');
  }
});
