# PHIẾU BÀI TẬP 01 — HTML5 FUNDAMENTALS

## PHẦN A — KIỂM TRA ĐỌC HIỂU

### Câu A1 — HTTP & Browser
1. DNS lookup: trình duyệt gửi yêu cầu đến DNS để tìm IP của `shopee.vn`.
2. TCP handshake: thiết lập kết nối TCP với server trên cổng 443.
3. TLS handshake: trao đổi chứng chỉ và tạo kết nối mã hóa HTTPS.
4. Gửi HTTP request: trình duyệt gửi yêu cầu `GET /` đến server.
5. Server trả về HTTP response gồm HTML.
6. Trình duyệt parse HTML, download CSS/JS/ảnh, và render trang.

> Nguồn: `tuan_1_html5/01_introduction_html_universe.md` — phần HTTP và browser flow.

### Câu A2 — Semantic HTML
Các lỗi semantic trong trang mẫu:
- Dùng `<div class="header">` thay vì `<header>`.
- Dùng `<div class="logo">` thay vì `<h1>` hoặc `<span>` có vai trò tiêu đề.
- Dùng `<div class="menu">` và `<div>` chứa link thay vì `<nav>` + `<ul><li>`.
- Dùng `<div class="main">` thay vì `<main>`.
- Dùng `<div class="product">` thay vì `<article>`.
- Dùng `<div class="title">` thay vì thẻ heading (`<h2>` hoặc `<h3>`).
- Dùng `<div class="price">` và `<div class="image">` thay vì thẻ chứa nghĩa rõ ràng hơn.
- Dùng `<div class="footer">` thay vì `<footer>`.

Sửa lại semantic:
```html
<header>
  <h1>ShopTLU</h1>
  <nav>
    <ul>
      <li><a href="/">Trang chủ</a></li>
      <li><a href="/products">Sản phẩm</a></li>
    </ul>
  </nav>
</header>
<main>
  <article>
    <h2>iPhone 16 Pro</h2>
    <p class="price">25.990.000đ</p>
    <figure>
      <img src="iphone.jpg" alt="iPhone 16 Pro">
      <figcaption>Hình iPhone 16 Pro</figcaption>
    </figure>
  </article>
</main>
<footer>© 2026 ShopTLU</footer>
```

> Nguồn: `tuan_1_html5/04_semantic_html.md`.

### Câu A3 — Block vs Inline
Kết quả hiển thị dự kiến:

```
Hộp 1
Text A Text B
Hộp 2
Text C Text D
Hộp 3
```

Giải thích:
- `<div>` là block-level, nên mỗi `<div>` sẽ xuống dòng mới.
- `<span>` và `<strong>` là inline, nên các nội dung `Text A`, `Text B`, `Text C`, `Text D` sẽ đứng trên cùng dòng với nhau nếu còn chỗ.
- Vì vậy, `Hộp 1` và `Hộp 2` và `Hộp 3` nằm trên các dòng riêng, còn các `span`/`strong` xuất hiện cùng dòng với nhau.

### Câu A4 — Table
- `<thead>` chứa phần header của bảng, định nghĩa tiêu đề cột.
- `<tbody>` chứa phần nội dung chính của bảng.
- `<tfoot>` chứa phần tóm tắt hoặc tổng kết của bảng.

Lý do không nên dùng table để tạo layout:
1. Table không có tính responsive tốt, khó hiển thị trên màn hình nhỏ.
2. Cấu trúc table gây khó khăn cho người dùng assistive technology (screen reader).
3. Dùng table cho layout làm giảm tính semantic và SEO của trang.
4. Table thường chậm hơn và khó bảo trì so với layout bằng CSS.

## PHẦN B — THỰC HÀNH CODE

### B1 — Profile cá nhân
Đã tạo file `PBT_01/profile.html` với cấu trúc semantic HTML5, bao gồm:
- `<header>` với `<nav>` và 3 liên kết nội bộ.
- `<main>` chứa 2 `<section>`: "Về tôi" với `<article>`, `<figure>`, `<figcaption`; "Kỹ năng" với table gồm `<thead>`, `<tbody>`, `<tfoot>`.
- `<aside>` thông tin liên hệ.
- `<footer>` bản quyền.

### B2 — Trang sản phẩm
Đã tạo file `PBT_01/products.html` với:
- Header và navigation
- Section sản phẩm nổi bật gồm 4 `<article>` sản phẩm
- Section bảng so sánh dùng table với `colspan`
- Footer chứa 3 hyperlink: Chính sách, Liên hệ, FAQ

### B3 — Debug HTML
Đã sửa các lỗi trong file `PBT_01/debug.html`.

Các lỗi đã xử lý:
- Thêm `lang="vi"` và `meta charset="UTF-8"`
- Đóng thẻ `<title>` đúng
- Sửa `<!DOCTYPE>` thành `<!DOCTYPE html>`
- Thêm `alt` cho ảnh
- Đóng thẻ `<h1>` và các anchor `<a>` đúng
- Sửa thẻ `<b>`/`</p>` lồng sai vị trí
- Thêm `<thead>` cho bảng
- Chỉ dùng một `<main>` và chuyển nội dung phụ sang `<aside>`
- Đóng thẻ `<footer>` đúng

### B4 — Phân tích trang web thật
## PHẦN C — SUY LUẬN

### C1 — Cấu trúc HTML chi tiết sản phẩm
```html
<header>
  <nav aria-label="breadcrumb">
    <ol>
      <li><a href="/">Trang chủ</a></li>
      <li><a href="/dien-thoai">Điện thoại</a></li>
      <li aria-current="page">iPhone 16</li>
    </ol>
  </nav>
</header>
<main>
  <section aria-labelledby="product-gallery">
    <h2 id="product-gallery">Ảnh sản phẩm</h2>
    <div role="list"> <!-- wrapper vì cần nhóm ảnh -->
      <figure><img src="#" alt="ảnh 1"></figure>
      <figure><img src="#" alt="ảnh 2"></figure>
      <figure><img src="#" alt="ảnh 3"></figure>
      <figure><img src="#" alt="ảnh 4"></figure>
      <figure><img src="#" alt="ảnh 5"></figure>
    </div>
  </section>
  <article aria-labelledby="product-info">
    <h1 id="product-info">Tên sản phẩm</h1>
    <p><strong>Giá:</strong> ...</p>
    <p><span>Đánh giá:</span> ★★★★☆</p>
    <section>
      <h2>Mô tả</h2>
      <p>Thông tin ngắn về sản phẩm.</p>
    </section>
  </article>
  <section aria-labelledby="product-specs">
    <h2 id="product-specs">Thông số kỹ thuật</h2>
    <table>
      <thead>
        <tr><th>Thông số</th><th>Giá trị</th></tr>
      </thead>
      <tbody>
        <tr><td>Màn hình</td><td>...</td></tr>
      </tbody>
    </table>
  </section>
  <section aria-labelledby="reviews">
    <h2 id="reviews">Đánh giá / Bình luận</h2>
    <article>
      <h3>Người dùng A</h3>
      <p>Nội dung review</p>
    </article>
  </section>
</main>
<aside>
  <h2>Sản phẩm tương tự</h2>
  <ul>
    <li><a href="#">Sản phẩm 1</a></li>
    <li><a href="#">Sản phẩm 2</a></li>
  </ul>
</aside>
<footer>
  <p>© 2026 ShopTLU</p>
</footer>
```

### C2 — Phản biện semantic HTML
Semantic HTML không chỉ là viết code đẹp, mà còn ảnh hưởng trực tiếp đến SEO và accessibility. Khi dùng thẻ `<header>`, `<nav>`, `<main>`, `<article>`... máy tìm kiếm và trình đọc màn hình hiểu rõ cấu trúc nội dung hơn. Ví dụ, `<nav>` giúp công cụ tìm kiếm nhận ra khu vực điều hướng, còn `<article>` xác định nội dung chính. Nếu dùng toàn `<div>` rồi thêm class, trang vẫn hiển thị đúng, nhưng search engine sẽ khó xác định loại nội dung và screen reader sẽ khó điều hướng.

Một lợi ích kỹ thuật rõ ràng là accessibility: người dùng đọc màn hình dựa vào semantic tags để nhảy tới `main` hay `nav`. Nếu tất cả là `<div>`, họ sẽ phải đọc toàn bộ trang, rất mất thời gian.

Ví dụ cụ thể: một bài blog dùng `<article>` chứa tiêu đề, tác giả, nội dung sẽ cho phép trình đọc màn hình chuyển trực tiếp đến nội dung chính; nếu chỉ dùng `<div>`, trình đọc sẽ không biết đoạn nào là bài viết.

Một trường hợp `<div>` vẫn phù hợp là khi tạo layout phụ hoặc wrapper để căn lề, gộp các thành phần mà không có ý nghĩa semantic riêng. Ví dụ một grid container không mang ý nghĩa nội dung sâu thì dùng `<div class="grid">` là hợp lý.

