# Lighthouse Guide & Optimization Notes / Hướng Dẫn Lighthouse & Các Tối Ưu

## Scope / Phạm Vi

- **EN:** How to measure Lighthouse consistently in local production mode.
- **VI:** Cách đo Lighthouse nhất quán trên môi trường production local.
- **EN:** What was optimized in this pass.
- **VI:** Các hạng mục đã tối ưu trong đợt này.
- **EN:** Before/after metrics for quick tracking.
- **VI:** Số liệu trước/sau để theo dõi nhanh.

## Quick Start (EN + VI)

### 1) Build and run preview / Build và chạy preview

```bash
nvm use 24
```

```bash
pnpm run build
pnpm run preview
```

- **EN:** Preview URL is usually `http://127.0.0.1:4173`.
- **VI:** URL preview thường là `http://127.0.0.1:4173`.

### 2) Run Lighthouse mobile + desktop / Chạy Lighthouse mobile + desktop

```bash
pnpm exec lighthouse "http://127.0.0.1:4173" --quiet --chrome-flags="--headless=new --no-sandbox" --only-categories=performance,accessibility,best-practices,seo --output=json --output-path=".lighthouse/mobile.json"
```

```bash
pnpm exec lighthouse "http://127.0.0.1:4173" --preset=desktop --quiet --chrome-flags="--headless=new --no-sandbox" --only-categories=performance,accessibility,best-practices,seo --output=json --output-path=".lighthouse/desktop.json"
```

### 3) Read scores quickly / Đọc điểm nhanh

```bash
node - <<'NODE'
const fs = require('fs');
for (const [label, path] of [['mobile', '.lighthouse/mobile.json'], ['desktop', '.lighthouse/desktop.json']]) {
  const r = JSON.parse(fs.readFileSync(path, 'utf8'));
  console.log(`=== ${label} ===`);
  for (const key of ['performance', 'accessibility', 'best-practices', 'seo']) {
    console.log(`${key}: ${Math.round((r.categories[key].score || 0) * 100)}`);
  }
  console.log('FCP:', r.audits['first-contentful-paint'].displayValue);
  console.log('LCP:', r.audits['largest-contentful-paint'].displayValue);
  console.log('TTI:', r.audits.interactive.displayValue);
  console.log('TBT:', r.audits['total-blocking-time'].displayValue);
}
NODE
```

## Full Measurement Flow / Quy Trình Đo Đầy Đủ

- **EN:** Always use Node 24, build first, then audit the preview server.
- **VI:** Luôn dùng Node 24, build trước rồi audit trên preview server.
- **EN:** Keep output files in `.lighthouse/` for repeatable comparisons.
- **VI:** Lưu kết quả vào `.lighthouse/` để so sánh các lần đo.
- **EN:** For stable trends, run each profile 2-3 times and compare medians.
- **VI:** Để ổn định số liệu, chạy mỗi profile 2-3 lần rồi so median.

## What Was Optimized / Đã Tối Ưu Gì

### A) Accessibility + navigation semantics / A11y + cấu trúc navigation

- **EN:** Fixed drawer list semantics so `List` children are proper `li`.
- **VI:** Sửa semantics của drawer để con của `List` là `li` đúng chuẩn.
- **EN:** Split drawer content into lazy chunk `src/components/app-drawer-content.tsx`.
- **VI:** Tách drawer content sang lazy chunk `src/components/app-drawer-content.tsx`.

### B) Reduce initial mobile JS / Giảm JS tải ban đầu trên mobile

- **EN:** Route-level lazy loading in `src/app.tsx`.
- **VI:** Lazy load theo route trong `src/app.tsx`.
- **EN:** On mobile, drawer content loads only when menu is opened.
- **VI:** Trên mobile, drawer content chỉ load khi mở menu.
- **EN:** Course nav no longer imports all lessons at startup.
- **VI:** Course nav không còn import toàn bộ lessons ngay lúc khởi động.
- **EN:** Lessons are loaded per course level on expand (deep-link safe).
- **VI:** Lessons được load theo từng level khi expand (an toàn cho deep-link).

### C) Reduce initial CSS/font cost / Giảm chi phí CSS/font ban đầu

- **EN:** UI font subset moved to `src/theme/noto-sans-ui.css` (latin + latin-ext + vietnamese).
- **VI:** Chuyển subset font UI sang `src/theme/noto-sans-ui.css` (latin + latin-ext + vietnamese).
- **EN:** Japanese font loading is deferred.
- **VI:** Font tiếng Nhật được defer, không chặn first paint.

### D) Split i18n payload / Tách payload i18n

- **EN:** Vietnamese translations moved to `src/i18n/translations-vi.ts` (separate chunk).
- **VI:** Bản dịch tiếng Việt chuyển sang `src/i18n/translations-vi.ts` (chunk riêng).
- **EN:** `src/i18n/context.tsx` lazy-loads `vi` when needed.
- **VI:** `src/i18n/context.tsx` lazy-load `vi` khi cần.
- **EN:** `src/main.tsx` preloads `vi` only when stored locale is `vi`.
- **VI:** `src/main.tsx` chỉ preload `vi` khi locale lưu sẵn là `vi`.

## Measured Results / Kết Quả Đo

### Mobile (baseline -> optimized) / Mobile (ban đầu -> sau tối ưu)

- Performance: `69 -> 93`
- Accessibility: `100 -> 100`
- Best Practices: `100 -> 100`
- SEO: `100 -> 100`
- FCP: `4.8s -> 2.3s`
- LCP: `5.0s -> 2.8s`
- Speed Index: `4.8s -> 2.3s`
- TTI: `5.1s -> 2.8s`
- TBT: `50ms -> 30ms`

## Notes / Ghi Chú

- **EN:** Scores vary by machine load and thermal state.
- **VI:** Điểm có thể dao động theo tải máy và nhiệt độ hệ thống.
- **EN:** Compare runs in the same environment for fair trend tracking.
- **VI:** So sánh trong cùng môi trường để theo dõi xu hướng công bằng.
- **EN:** Latest remaining opportunity is mostly `unused-javascript`.
- **VI:** Cơ hội tối ưu còn lại chủ yếu là `unused-javascript`.
