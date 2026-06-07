# 📋 PHIẾU BÀI TẬP 05
# **CSS RESPONSIVE & SCSS — Responsive Design, Media Queries, Sass**
> **Tài liệu tham chiếu:** `tuan_3_css_advanced/13_creating_responsive_layouts.md` → `16_sass_scss.md`
## PHẦN A — KIỂM TRA ĐỌC HIỂU (20 điểm)
### Câu A1 (5đ) — Viewport & Mobile-First
1. Thẻ viewport chuẩn
<meta name="viewport" content="width=device-width, initial-scale=1.0">
width=device-width: chiều rộng bằng chiều rộng thiết bị.
initial-scale=1.0: mức zoom ban đầu 100%.
2. Nếu thiếu thẻ này

Trình duyệt di động sẽ giả lập trang desktop (~980px), làm:

Trang bị thu nhỏ.
Chữ và nút rất nhỏ.
Responsive hiển thị không đúng.
3. Mobile-First và Desktop-First

Mobile-First: thiết kế cho mobile trước.

.container { width: 100%; }

@media (min-width: 768px) {
    .container { width: 80%; }
}

Desktop-First: thiết kế cho desktop trước.

.container { width: 80%; }

@media (max-width: 768px) {
    .container { width: 100%; }
}

### Câu A2 (5đ) — Breakpoints
Theo Bootstrap:

< 576px → Mobile → Hiển thị 1 cột sản phẩm.
≥ 576px (sm) → Điện thoại lớn → 2 cột.
≥ 768px (md) → Tablet → 2-3 cột.
≥ 992px (lg) → Laptop/Desktop nhỏ → 4 cột.
≥ 1200px (xl) → Desktop lớn → 4-5 cột.
≥ 1400px (xxl) → Màn hình rất lớn → 5-6 cột.

Ví dụ responsive product grid:

Mobile      : 1 cột
Tablet      : 2-3 cột
Laptop      : 4 cột
Desktop lớn : 5-6 cột

Chỉ cần nhớ mốc Bootstrap phổ biến:

sm = 576px
md = 768px
lg = 992px
xl = 1200px
xxl = 1400px
### Câu A3 (5đ) — Media Queries
Media query dùng min-width, nên màn hình sẽ lấy rule cuối cùng thỏa điều kiện.

Chiều rộng màn hình	.container width
375px (iPhone SE)	100%
600px	540px
800px	720px
1000px	960px
1400px	1140px

Giải thích ngắn:

375px < 576px → dùng mặc định width: 100%
600px ≥ 576px → width: 540px
800px ≥ 768px → width: 720px
1000px ≥ 992px → width: 960px
1400px ≥ 1200px → width: 1140px
### Câu A4 (5đ) — SCSS Basics
1. Variables

Dùng để lưu giá trị và tái sử dụng nhiều lần.

$primary-color: blue;

button {
    background: $primary-color;
}
2. Nesting

Cho phép viết CSS lồng nhau theo cấu trúc HTML.

nav {
    a {
        color: white;
    }
}

Biên dịch thành:

nav a {
    color: white;
}
3. Mixins

Tạo một nhóm CSS có thể tái sử dụng.

@mixin center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.box {
    @include center;
}
4. @extend (Inheritance)

Kế thừa thuộc tính từ class khác.

.btn {
    padding: 10px;
    border-radius: 5px;
}

.btn-primary {
    @extend .btn;
    background: blue;
}
Tại sao trình duyệt không đọc được .scss?

Vì SCSS không phải CSS chuẩn, nó chứa các cú pháp mở rộng như:

$variable
@mixin
@include
@extend

Trình duyệt chỉ hiểu CSS.

Cần làm gì để dùng SCSS?

Phải compile (biên dịch) từ:

style.scss
      ↓
   Compile
      ↓
style.css

Sau đó HTML sẽ liên kết tới file:

<link rel="stylesheet" href="style.css">

### Bài B3 (20đ) — SCSS Refactor
scss/
├── _variables.scss
├── _mixins.scss
├── _components.scss
└── style.scss
## PHẦN C — PHÂN TÍCH 
### Câu C1 (10đ) — Phân tích trang web thực
Navigation thay đổi thế nào?

Mobile: menu thu gọn, nhiều thành phần bị ẩn.
Tablet: hiển thị nhiều chức năng hơn.
Desktop: sidebar và navigation đầy đủ.

Lưới content thay đổi mấy cột?

Mobile: 1 cột.
Tablet: 2-3 cột.
Desktop: 5-6 cột.

Elements nào bị ẩn trên mobile?

Sidebar đầy đủ.
Một số nút chức năng phụ.
Một phần navigation.

Font size có thay đổi không?

Có thay đổi nhẹ để phù hợp từng kích thước màn hình.
### Câu C2 (10đ) — Thiết kế Responsive Strategy
Trên mobile thường nhỏ hơn desktop.
1. Wireframe Mobile (<768px)
Hero vẫn hiển thị full width.
Grid ảnh: 1 cột.
Form đặt bàn đặt trên bản đồ để người dùng thao tác ngay.
Header chỉ hiện logo + icon điện thoại.
Có thể ẩn bớt slogan/menu dài nếu có.
+------------------+
| Logo    ☎        |
+------------------+

+------------------+
|                  |
|   HERO IMAGE     |
|                  |
+------------------+

+------------------+
| Ảnh món 1        |
+------------------+
| Ảnh món 2        |
+------------------+
| Ảnh món 3        |
+------------------+
| Ảnh món 4        |
+------------------+
| Ảnh món 5        |
+------------------+
| Ảnh món 6        |
+------------------+

+------------------+
| FORM ĐẶT BÀN     |
| Ngày             |
| Giờ              |
| Số người         |
| Ghi chú          |
+------------------+

+------------------+
| GOOGLE MAPS      |
+------------------+

+------------------+
| FOOTER           |
+------------------+
Mobile: Những gì bị ẩn?
Menu điều hướng dài (nếu có).
Nội dung phụ không quan trọng.
Chỉ giữ Logo + SĐT đặt bàn.
Form nằm đâu?

👉 Nằm dưới gallery ảnh và trên Google Maps.

2. Wireframe Tablet (768px - 1023px)
Grid ảnh chuyển thành 2 cột × 3 hàng.
Form vẫn nằm trên Maps.
Tận dụng chiều ngang nhiều hơn.
+--------------------------------+
| Logo                ☎ Hotline  |
+--------------------------------+

|                                |
|          HERO IMAGE            |
|                                |

+---------------+---------------+
| Ảnh 1         | Ảnh 2         |
+---------------+---------------+
| Ảnh 3         | Ảnh 4         |
+---------------+---------------+
| Ảnh 5         | Ảnh 6         |
+---------------+---------------+

+-------------------------------+
| FORM ĐẶT BÀN                  |
+-------------------------------+

+-------------------------------+
| GOOGLE MAPS                   |
+-------------------------------+

+-------------------------------+
| FOOTER                        |
+-------------------------------+
Tablet: Grid ảnh mấy cột?

👉 2 cột.

Bản đồ nằm đâu?

👉 Dưới Form đặt bàn.

3. Wireframe Desktop (≥1024px)
Dùng layout 2 cột.
Gallery 3 cột × 2 hàng.
Form và Maps đặt cạnh nhau.
+------------------------------------------------+
| Logo                               Hotline ☎   |
+------------------------------------------------+

|                                                |
|                  HERO IMAGE                    |
|                                                |

+-----------+-----------+-----------+
| Ảnh 1     | Ảnh 2     | Ảnh 3     |
+-----------+-----------+-----------+
| Ảnh 4     | Ảnh 5     | Ảnh 6     |
+-----------+-----------+-----------+

+------------------+------------------+
| FORM ĐẶT BÀN     | GOOGLE MAPS      |
|                  |                  |
|                  |                  |
+------------------+------------------+

+--------------------------------------+
| FOOTER                               |
+--------------------------------------+
Desktop: Layout bao nhiêu cột?

👉 Phần chính: 2 cột (Form | Maps).

Sidebar có không?

👉 Không cần sidebar vì đề không yêu cầu. Nếu thêm sẽ làm bố cục rối và tốn diện tích cho chức năng đặt bàn.