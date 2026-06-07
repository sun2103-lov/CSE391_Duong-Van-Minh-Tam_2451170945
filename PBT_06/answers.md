# 📋 PHIẾU BÀI TẬP 06
# **CSS FRAMEWORKS — Bootstrap 5 
> **Tài liệu tham chiếu:** `tuan_4_css_frameworks/bootstrap/` hoặc `tuan_4_css_frameworks/tailwindcss/`
## 🅱️ TRACK A — BOOTSTRAP 5
### PHẦN A — ĐỌC HIỂU (20 điểm)
#### Câu A1 (10đ) — Grid System
Mobile (<768px)
Áp dụng col-12
+----------+
|  Box 1   |
+----------+
+----------+
|  Box 2   |
+----------+
+----------+
|  Box 3   |
+----------+
+----------+
|  Box 4   |
+----------+
➡ Mỗi box chiếm toàn bộ chiều ngang.

Tablet (768px - 991px)
Áp dụng col-md-6
+----------+----------+
|  Box 1   |  Box 2   |
+----------+----------+
+----------+----------+
|  Box 3   |  Box 4   |
+----------+----------+
➡ Mỗi box chiếm 6/12 cột = 50%.
➡ 2 box trên một hàng.

Desktop (≥992px)
Áp dụng col-lg-3
+-----+-----+-----+-----+
| B1  | B2  | B3  | B4  |
+-----+-----+-----+-----+
➡ Mỗi box chiếm 3/12 cột = 25%.
➡ 4 box trên một hàng.
**Câu hỏi thêm:** 
col-md-6: Từ màn hình ≥ 768px, phần tử chiếm 6/12 cột (50%) chiều rộng hàng.
Không cần col-sm-12 vì col-12 đã áp dụng cho mọi kích thước màn hình nhỏ hơn md. Khi tới md thì col-md-6 sẽ tự ghi đè.

#### Câu A2 (10đ) — Utilities & Components
1. d-none d-md-block
d-none: Ẩn phần tử (display: none)
d-md-block: Từ màn hình ≥ 768px hiển thị dạng block

 < 768px: Ẩn
 ≥ 768px: Hiện

2. 5 Spacing Utilities
Class	Ý nghĩa
 mt-3	Margin top mức 3
 mb-2	Margin bottom mức 2
 ms-4	Margin start (trái) mức 4
 px-4	Padding trái + phải mức 4
 py-2	Padding trên + dưới mức 2
 mb-auto	Margin bottom tự động

Quy tắc:
m = margin
p = padding
t,b,s,e,x,y = top, bottom, start, end, horizontal, vertical
3. Khác nhau giữa .container, .container-fluid, .container-md
Class	Ý nghĩa
.container	Chiều rộng cố định theo từng breakpoint
.container-fluid	Luôn rộng 100% màn hình
.container-md	100% khi < 768px, từ ≥ 768px mới có chiều rộng cố định
