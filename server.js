require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');

const app = express();
const PORT = process.env.PORT || 3000;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || '59274daf@gmail.com';
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.post('/api/contact', async (req, res) => {
  const { name, phone, email } = req.body || {};

  if (!name || !phone || !email) {
    return res.status(400).json({
      message: '이름, 전화번호, 이메일을 모두 입력해 주세요.',
    });
  }

  if (!resend) {
    console.error('RESEND_API_KEY가 설정되지 않았습니다. .env 파일에 키를 추가하세요.');
    return res.status(503).json({
      message: '이메일 서비스가 설정되지 않았습니다. 관리자에게 문의하세요.',
    });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: `일본어 퀴즈 문의 <${CONTACT_FROM_EMAIL}>`,
      to: [CONTACT_TO_EMAIL],
      subject: `[일본어 퀴즈] 문의: ${name}`,
      html: `
        <h2>새 문의가 도착했습니다</h2>
        <p><strong>이름:</strong> ${escapeHtml(name)}</p>
        <p><strong>전화번호:</strong> ${escapeHtml(phone)}</p>
        <p><strong>이메일:</strong> ${escapeHtml(email)}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({
        message: '이메일 전송에 실패했습니다. 잠시 후 다시 시도해 주세요.',
      });
    }

    res.status(200).json({ success: true, id: data?.id });
  } catch (err) {
    console.error('Contact send error:', err);
    res.status(500).json({
      message: '전송 중 오류가 발생했습니다.',
    });
  }
});

function escapeHtml(text) {
  if (typeof text !== 'string') return '';
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

app.listen(PORT, () => {
  console.log(`서버 실행: http://localhost:${PORT}`);
  if (!RESEND_API_KEY) {
    console.warn('⚠ RESEND_API_KEY가 없습니다. .env에 추가하면 문의 이메일이 전송됩니다.');
  }
});
