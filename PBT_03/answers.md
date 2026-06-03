# PHIẾU BÀI TẬP 03 — CSS CORE

## PHẦN A — KIỂM TRA ĐỌC HIỂU

### Câu A1 — 3 Cách nhúng CSS (5 điểm)

**1. Inline CSS**
- **Ví dụ:**
```html
<h1 style="color: blue; font-size: 24px;">Tiêu đề</h1>
```
- **Ưu điểm:**
  - Dễ dàng override styles khác
  - Không cần file riêng
  - Thích hợp cho style một phần tử duy nhất
- **Nhược điểm:**
  - Không tái sử dụng được, code dài dòng
  - Khó bảo trì khi nhiều element
  - Làm lộn xộn HTML
  - Không hỗ trợ pseudo-class (`:hover`, `:focus`)
  - Không hỗ trợ media query
- **Khi nào dùng:** Chỉ cho style một vài element duy nhất

**2. Internal CSS (Embedded in `<style>`)**
- **Ví dụ:**
```html
<head>
    <style>
        h1 { color: blue; font-size: 24px; }
        p { line-height: 1.5; }
    </style>
</head>
```
- **Ưu điểm:**
  - Tập trung tất cả style trong 1 file HTML
  - Hỗ trợ pseudo-class, media query
  - Dễ sửa khi file nhỏ
  - Ưu tiên cao hơn external CSS
- **Nhược điểm:**
  - Không tái sử dụng giữa các trang
  - Làm file HTML dài hơn
  - Khó bảo trì khi dự án lớn
- **Khi nào dùng:** Cho dự án nhỏ, 1 trang HTML hoặc style chung toàn trang

**3. External CSS (Linked file)**
- **Ví dụ:**
```html
<head>
    <link rel="stylesheet" href="style.css">
</head>
```
File `style.css`:
```css
h1 { color: blue; font-size: 24px; }
p { line-height: 1.5; }
```
- **Ưu điểm:**
  - Tái sử dụng trên nhiều trang
  - Dễ bảo trì, organize code
  - File HTML sạch sẽ, tách biệt logic
  - Browser cache file CSS → tải nhanh
  - Hỗ trợ pseudo-class, media query
- **Nhược điểm:**
  - Cần tạo file riêng
  - Tải thêm 1 file HTTP request
- **Khi nào dùng:** Cho mọi dự án production, đặc biệt khi có nhiều trang

---

**Khi cả 3 cách áp dụng đồng thời:**
```html
<head>
    <style>
        h1 { color: blue; }  /* Internal */
    </style>
    <link rel="stylesheet" href="style.css">  <!-- style.css: h1 { color: red; } -->
</head>
<body>
    <h1 style="color: green;">Hello</h1>  <!-- Inline -->
</body>
```

**Cách nào "thắng"? → Inline CSS (màu xanh)**

**Giải thích - Cascading Order (từ thấp đến cao):**
1. Browser default styles
2. External CSS (độ ưu tiên thấp nhất)
3. Internal CSS (` <style>`)
4. **Inline CSS (độ ưu tiên cao nhất)**

Inline CSS có độ ưu tiên cao nhất vì nó trực tiếp gắn vào element, không thể bị override bởi bất kỳ stylesheet nào (trừ `!important` trong external/internal).

---

### Câu A2 — CSS Selectors - Dự đoán kết quả (8 điểm)

**Đáp án:**

```
1. h1
   → Chọn: "ShopTLU"

2. .price
   → Chọn: "25.990.000đ" và "45.990.000đ" (cả 2 thẻ p có class="price")

3. #app header
   → Chọn: Toàn bộ thẻ <header> (với "ShopTLU" và navigation)

4. nav a:first-child
   → Chọn: "Home" (link đầu tiên trong nav)

5. .product.featured h2
   → Chọn: "MacBook Pro" (h2 trong article có class="product featured")

6. article > p
   → Chọn: 
      - "25.990.000đ"
      - "Mô tả sản phẩm..." (từ article iPhone 16)
      - "45.990.000đ"
      - "Mô tả sản phẩm..." (từ article MacBook Pro)
      (Tất cả thẻ <p> là con trực tiếp của <article>)

7. a[href="/"]
   → Chọn: "Home" (link có href="/")

8. .top-bar.dark h1
   → Chọn: "ShopTLU" (h1 trong header có cả class top-bar và dark)
```

---

### Câu A3 — Box Model - Tính toán kích thước (7 điểm)

**Công thức:**
- **content-box (mặc định):** Kích thước hiển thị = width + padding-left + padding-right + border-left + border-right
- **border-box:** Kích thước hiển thị = width (đã bao gồm padding + border)

---

**Trường hợp 1: content-box**
```css
.box-1 {
    width: 400px;
    padding: 20px;                 /* 20px trên, dưới, trái, phải */
    border: 5px solid black;       /* 5px trên, dưới, trái, phải */
    margin: 10px;                  /* 10px trên, dưới, trái, phải */
}
```

- **Chiều rộng hiển thị (layout width):**
  - = 400 + 20 + 20 + 5 + 5
  - = **450px**

- **Không gian chiếm trên trang (total space):**
  - = 450 + 10 + 10 (margin-left + margin-right)
  - = **470px**

---

**Trường hợp 2: border-box**
```css
.box-2 {
    box-sizing: border-box;
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
```

- **Chiều rộng hiển thị (layout width):**
  - = 400px (width đã bao gồm padding + border)
  - = **400px**

- **Kích thước content thực tế:**
  - = 400 - 20 - 20 - 5 - 5
  - = 400 - 50
  - = **350px**

- **Không gian chiếm trên trang (total space):**
  - = 400 + 10 + 10 (margin)
  - = **420px**

---

**Trường hợp 3: Margin collapse (Collapse lề)**
```css
.box-a { margin-bottom: 25px; }
.box-b { margin-top: 40px; }
```

- **Khoảng cách giữa box-a và box-b:**
  - = **40px** (NOT 65px)
  - Lý do: Khi 2 block element nằm dọc (vertical), margins của chúng sẽ "collapse" (gộp lại). Khoảng cách = margin-bottom lớn hơn hoặc margin-top lớn hơn, KHÔNG phải cộng lại.
  - Công thức: `max(25px, 40px) = 40px`

---

**Nâng cao: Negative margin**
```css
.box-a { margin-bottom: -10px; }
.box-b { margin-top: 40px; }
```

- **Khoảng cách:**
  - = `max(-10px, 40px)`
  - = **40px** (giá trị dương thắng)
  - Margin collapse luôn chọn giá trị lớn hơn (về giá trị tuyệt đối nếu có negative)

---

### Câu A4 — Specificity (Độ ưu tiên) (5 điểm)

**Tính Specificity Score (a, b, c):**
- **a** = số lượng ID selector (#id)
- **b** = số lượng class selector (.class), attribute selector ([attr]), pseudo-class (:hover)
- **c** = số lượng element selector (div, p, a)
- **Inline style** = (1, 0, 0, 0) - cao nhất
- **!important** = override tất cả (trừ inline !important)

---

**Cho element: `<p class="price" id="main-price">`**

```css
p { color: black; }                    /* Rule A */
.price { color: blue; }               /* Rule B */
#main-price { color: red; }           /* Rule C */
p.price { color: green; }             /* Rule D */
```

**1. Tính specificity score:**
- Rule A: `p` → (0, 0, 1) = 1 điểm
- Rule B: `.price` → (0, 1, 0) = 10 điểm
- Rule C: `#main-price` → (1, 0, 0) = 100 điểm
- Rule D: `p.price` → (0, 1, 1) = 11 điểm

**Thứ tự ưu tiên (từ cao đến thấp):**
- Rule C (100) - ID selector
- Rule D (11) - Element + class
- Rule B (10) - Class
- Rule A (1) - Element

**2. Element sẽ có màu gì?**
- → **Màu đỏ (red)**
- Giải thích: ID selector có specificity cao nhất (100 > 11 > 10 > 1)

**3. Nếu thêm inline style:**
```html
<p class="price" id="main-price" style="color: orange;">
```

- Inline style có specificity = (1, 0, 0, 0) = 1000 điểm
- → Element sẽ có màu **cam (orange)**
- Inline style override tất cả CSS rules

**4. Nếu Rule A thêm `!important`:**
```css
p { color: black !important; }
```

- Specificity của Rule A với !important = cao nhất (trừ inline !important)
- → Element sẽ có màu **đen (black)**
- **Giải thích:** `!important` override tất cả rules khác (trừ !important của inline style)
- **Quy tắc:** `!important` có độ ưu tiên cao hơn tất cả selectors, chỉ bị override bởi `!important` khác hoặc inline style

**Tóm tắt thứ tự ưu tiên (từ cao → thấp):**
1. Inline style `!important`
2. CSS !important
3. Inline style (không !important)
4. Specificity cao nhất (ID)
5. Specificity trung bình (class)
6. Specificity thấp (element)
7. Browser default

---

## PHẦN B — THỰC HÀNH CODE

### Bài B1 — Style trang Profile (20 điểm)

**File:** `profile.html` + `style.css`

**Checklist hoàn thành:**
- ✅ Dòng đầu: `* { box-sizing: border-box; }`
- ✅ **Body:** font-family ("Segoe UI"), background-color (#f5f5f5), color (#333), line-height (1.6)
- ✅ **Header:** background gradient (135deg, #667eea → #764ba2), color white, padding 20px
- ✅ **Navigation links:**
  - Mặc định: color white, text-decoration none
  - Hover: color #ffd700, border-bottom 3px solid, text-decoration underline
  - Active (.active): border-bottom #ffd700, color #ffd700, font-weight bold
- ✅ **Table kỹ năng:**
  - border-collapse: collapse
  - thead: background #333, color white, padding 15px
  - tbody tr:nth-child(even): background #f9f9f9 (zebra striping)
  - tbody tr:hover: background #e8f5e9
- ✅ **Footer:** background #333, color #ccc, text-align center, padding 20px

**Selector Types dùng (10+ loại):**
1. **Element Selector:** body, header, nav, main, section, table, footer, ul, li, a, p, img, figure
2. **Class Selector:** .active
3. **Descendant Selector:** nav ul li a, section article, section article figure img
4. **Child Combinator:** table > thead, table > tbody
5. **Pseudo-class :hover:** nav ul li a:hover, table tbody tr:hover, aside a:hover
6. **Pseudo-class :nth-child():** table tbody tr:nth-child(even)
7. **Type Selector (Element):** thead, tbody, tfoot
8. **Attribute Selector (implicit):** [href], [alt]
9. **ID Selector (có thể):** #contact (trong aside)
10. **Grouped Selector:** section h2, aside h2 (cùng style)
11. **Universal Selector:** * (box-sizing reset)
12. **Media Query:** @media (max-width: 768px) - responsive design

---

### Bài B2 — Box Model Lab (10 điểm)

**File:** `boxmodel_lab.html` + `boxmodel.css`

**Phần 1: Content-box vs Border-box**

Cả 2 hộp có `width: 300px`, `padding: 20px`, `border: 5px`:

| Hộp | Box-sizing | Công thức | Chiều rộng thực tế |
|-----|-----------|----------|------------------|
| **Hộp 1** | content-box | 300 + 20 + 20 + 5 + 5 | **350px** |
| **Hộp 2** | border-box | 300px (bao gồm tất cả) | **300px** |

**Giải thích:**
- **Content-box (mặc định):** width = kích thước nội dung. Padding + border được thêm vào ngoài → tổng = 350px
- **Border-box:** width = bao gồm content + padding + border → tổng = 300px

**Phần 2: Layout 3 Cột**

Container rộng **1000px**, 3 cột với border-box:

| Cột | Width | Padding | Tính toán | Kích thước thực tế |
|-----|-------|---------|----------|------------------|
| Trái | 250px | 15px | Bao gồm padding (border-box) | 250px |
| Giữa | 500px | 20px | Bao gồm padding (border-box) | 500px |
| Phải | 250px | 15px | Bao gồm padding (border-box) | 250px |
| **TỔNG** | - | - | 250 + 500 + 250 | **1000px** |
✅ 3 cột nằm cạnh nhau trên 1 dòng vì tổng = 1000px chính xác.
**Nếu không dùng border-box:**
- Cột trái: 250 + 15 + 15 = 280px
- Cột giữa: 500 + 20 + 20 = 540px
- Cột phải: 250 + 15 + 15 = 280px
- **TỔNG = 1100px > 1000px → Layout bị vỡ! ❌**
**Phần 3: Kết luận**
🎯 **Vì sao phải dùng `* { box-sizing: border-box; }`?**
- Padding không làm tăng chiều rộng element
- Dễ tính layout, dễ dự đoán kích thước
- Giải pháp standard cho modern CSS
---
