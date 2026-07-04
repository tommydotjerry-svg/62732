const qrPattern = [
  1, 1, 1, 0, 1, 0, 1, 1, 1,
  1, 0, 1, 0, 1, 0, 1, 0, 1,
  1, 1, 1, 0, 1, 1, 1, 1, 1,
  0, 0, 0, 0, 0, 0, 1, 0, 0,
  1, 1, 0, 1, 1, 0, 1, 1, 0,
  0, 1, 0, 1, 0, 0, 0, 1, 0,
  1, 1, 1, 0, 1, 1, 1, 0, 1,
  1, 0, 0, 1, 0, 0, 1, 0, 0,
  1, 1, 1, 0, 1, 1, 1, 1, 1,
];

const timeline = [
  { step: '01', title: '进入扫码页', desc: '用户从首页或商户入口进入扫码页面。' },
  { step: '02', title: '授权摄像头', desc: '请求相机权限并展示取景框。' },
  { step: '03', title: '识别二维码', desc: '自动解析二维码内容，展示商户与金额。' },
  { step: '04', title: '确认支付', desc: '用户确认支付后进入处理状态。' },
  { step: '05', title: '展示结果', desc: '支付成功或失败后给出明确反馈。' },
];

const features = [
  {
    title: '扫码识别',
    content: '支持二维码自动识别、手动输入兜底、闪光灯辅助和重试机制。',
  },
  {
    title: '支付确认',
    content: '扫码后先展示商户、订单号和金额，再允许用户确认支付。',
  },
  {
    title: '异常兜底',
    content: '提供权限拒绝、弱光、网络异常、超时失败等提示与处理。',
  },
  {
    title: '可上线部署',
    content: '当前页面可直接部署到 Vercel / Netlify 供他人在线查看。',
  },
];

const sections = [
  {
    title: '1. 背景与目标',
    content:
      '用户在线下支付、活动核销、身份验证等场景中需要快速扫码完成动作。本项目聚焦“手机扫码支付”主流程，目标是在 3 秒内完成扫码、识别与确认，降低操作成本并提升转化率。',
  },
  {
    title: '2. 核心流程',
    content:
      '打开扫码页 -> 自动识别/手动输入 -> 展示识别结果 -> 用户确认支付 -> 调起支付渠道 -> 返回成功/失败状态。',
  },
  {
    title: '3. 指标定义',
    content:
      '关键指标包括：扫码成功率、首帧识别时间、支付成功率、异常退出率、二次扫码率。',
  },
  {
    title: '4. 风险与控制',
    content:
      '重点处理相机权限拒绝、光线不足、二维码失真、网络异常、支付超时等问题，并提供兜底手动输入与重试机制。',
  },
];

export default function Page() {
  return (
    <main>
      <section className="hero">
        <div className="card hero-copy">
          <span className="kicker">手机扫码支付 PRD + 在线网页展示</span>
          <h1 className="title">把这份资料做成可线上查看的前端网页</h1>
          <p className="subtitle">
            这个页面把 PRD 内容、原型图、产品流程和部署建议整合为一个响应式网页，适合直接发布到线上给别人访问和查看。
          </p>
          <div className="pills">
            <span className="pill">移动端适配</span>
            <span className="pill">PRD 展示</span>
            <span className="pill">原型图</span>
            <span className="pill">可部署</span>
          </div>
        </div>
        <div className="card phone-shell">
          <div className="phone">
            <div className="screen">
              <div className="status">
                <span>9:41</span>
                <span>4G  ▮▮▮  100%</span>
              </div>
              <div className="scan-area">
                <div className="qr-box">
                  <div className="qr-grid" aria-hidden="true">
                    {qrPattern.map((value, index) => (
                      <span key={index} className={value ? 'cell on' : 'cell'} />
                    ))}
                  </div>
                </div>
                <button className="scan-btn">立即扫码支付</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="card section">
        <div className="section-head">
          <div>
            <span className="badge">Overview</span>
            <h2>网页概览</h2>
          </div>
          <p>适合在线分享、评审、演示和后续接入真实扫码能力。</p>
        </div>
        <div className="feature-grid">
          {features.map((item) => (
            <div className="feature-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card section">
        <div className="section-head">
          <div>
            <span className="badge">PRD</span>
            <h2>产品说明</h2>
          </div>
          <p>下面展示的是已经整理好的 PRD 内容，适合直接在线查看。</p>
        </div>
        <div className="grid-2">
          {sections.map((item) => (
            <div className="subcard" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card section">
        <div className="section-head">
          <div>
            <span className="badge">Flow</span>
            <h2>用户流程</h2>
          </div>
          <p>从进入页面到完成支付的完整路径。</p>
        </div>
        <div className="timeline">
          {timeline.map((item) => (
            <div className="timeline-item" key={item.step}>
              <div className="timeline-step">{item.step}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card section">
        <div className="section-head">
          <div>
            <span className="badge">Prototype</span>
            <h2>原型图</h2>
          </div>
          <p>以下为页面原型结构，可用于设计评审。</p>
        </div>
        <div className="proto">
          ┌──────────────────────────────┐
          <br />│ 状态栏：时间 / 电量 / 信号 │
          <br />├──────────────────────────────┤
          <br />│ 标题：手机扫码支付            │
          <br />│ 说明：请将二维码置于框内      │
          <br />│                              │
          <br />│ ┌──────────────────────────┐ │
          <br />│ │        扫码取景框        │ │
          <br />│ │   自动识别二维码/条码    │ │
          <br />│ └──────────────────────────┘ │
          <br />│                              │
          <br />│ [手动输入]   [切换闪光灯]     │
          <br />│                              │
          <br />│ 扫码结果：商户A / 订单123     │
          <br />│ 金额：¥128.00                 │
          <br />│                              │
          <br />│        [确认支付]             │
          <br />└──────────────────────────────┘
        </div>
      </section>

      <section className="card section">
        <div className="section-head">
          <div>
            <span className="badge">Deploy</span>
            <h2>上线部署建议</h2>
          </div>
          <p>当前项目已具备网页展示形态，可直接上线供他人查看。</p>
        </div>
        <ul className="deploy-list">
          <li>前端：Next.js App Router + TypeScript</li>
          <li>部署：Vercel 一键部署最省事</li>
          <li>分享方式：生成线上链接后即可发送给他人查看</li>
          <li>后续可继续接入真实扫码 SDK 与支付接口</li>
        </ul>
      </section>
    </main>
  );
}