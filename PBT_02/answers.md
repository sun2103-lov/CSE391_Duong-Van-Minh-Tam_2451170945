# PHIẾU BÀI TẬP 02 — HTML5 FORMS & MEDIA

## PHẦN A — ĐỌC HIỂU

### Câu A1 — Input Types
1. type="email" → Ô nhập text cho email, trình duyệt kiểm tra cú pháp có @ và tên miền. Dùng cho form đăng ký/đăng nhập email.
2. type="tel" → Ô nhập số điện thoại, trên thiết bị di động hiển thị bàn phím số. Dùng cho nhập số liên hệ hoặc số điện thoại giao hàng.
3. type="date" → Ô chọn ngày bằng trình chọn lịch. Dùng cho nhập ngày sinh hoặc ngày giao hàng.
4. type="number" → Ô nhập số, có nút tăng giảm và chỉ nhận giá trị số. Dùng cho số lượng sản phẩm hoặc số lượng đơn hàng.
5. type="password" → Ô nhập mật khẩu, ký tự bị ẩn. Dùng cho mật khẩu đăng ký/đăng nhập.
6. type="url" → Ô nhập đường dẫn web, trình duyệt kiểm tra định dạng URL. Dùng cho nhập trang web cá nhân hoặc link sản phẩm.
7. type="checkbox" → Ô tích chọn, cho phép chọn nhiều mục. Dùng cho đồng ý điều khoản hoặc chọn thêm sản phẩm.
8. type="radio" → Ô chọn một trong nhiều lựa chọn. Dùng cho chọn phương thức thanh toán hoặc chọn hình thức giao hàng.
9. type="search" → Ô tìm kiếm, thường có nút xóa nhanh và hỗ trợ tìm kiếm trên trang. Dùng cho thanh tìm kiếm sản phẩm.
10. type="range" → Thanh trượt để chọn giá trị liên tục trong khoảng. Dùng cho chọn mức giá, chọn số ngày giao hàng hoặc điều chỉnh mức độ.

### Câu A2 — Validation Attributes
1. <input type="text" required value=""> → Trường bắt buộc, nếu để trống thì trình duyệt ngăn submit và hiển thị thông báo lỗi.
2. <input type="email" value="abc"> → Dữ liệu không đúng định dạng email, trình duyệt ngăn submit và yêu cầu nhập email hợp lệ.
3. <input type="number" min="1" max="10" value="15"> → Giá trị vượt quá max, trình duyệt ngăn submit và thông báo lỗi phạm vi.
4. <input type="text" pattern="[0-9]{10}" value="abc123"> → Dữ liệu không khớp pattern 10 chữ số, trình duyệt ngăn submit và báo lỗi pattern.
5. <input type="password" minlength="8" value="123"> → Dữ liệu ngắn hơn minlength, trình duyệt ngăn submit và yêu cầu nhập ít nhất 8 ký tự.

### Câu A3 — Accessibility
1. <label for="email"> quan trọng vì nó liên kết nhãn với input; screen reader đọc nhãn khi người dùng điều hướng tới input, giúp người dùng hiểu chức năng trường.
2. <fieldset> + <legend> dùng khi nhóm các input có cùng chủ đề, như nhóm giới tính hoặc nhóm phương thức thanh toán. Nó giúp rõ ràng cấu trúc form và cải thiện accessibility.
3. aria-label dùng khi không thể dùng nhãn hiển thị rõ ràng, ví dụ input chỉ có icon. Nếu đã có <label>, không nên dùng aria-label vì có thể gây trùng lặp thông tin và gây nhầm lẫn cho screen reader.

### Câu A4 — Media
1. loading="lazy" trên <img> nghĩa là ảnh chỉ tải khi gần vào vùng nhìn thấy. Nó giảm băng thông và giúp trang tải nhanh hơn. Không nên dùng cho ảnh quan trọng ngay khi trang mở, như logo hoặc ảnh banner đầu trang.
2. Nên cung cấp nhiều <source> trong <video> để đảm bảo hỗ trợ nhiều trình duyệt và thiết bị khác nhau. Các định dạng phổ biến: mp4, webm, ogg.
3. alt trên <img> dùng để mô tả nội dung ảnh cho screen reader và khi ảnh không tải. Ví dụ tốt:
   - Ảnh sản phẩm iPhone 16: alt="iPhone 16 Pro Max màu titan, dung lượng 256GB".
   - Ảnh trang trí: alt="" (để screen reader bỏ qua vì ảnh không có thông tin quan trọng).
   - Ảnh biểu đồ doanh thu Q1/2026: alt="Biểu đồ cột doanh thu quý 1 năm 2026".

### Câu A5 — So sánh <figure> vs <img>
- Cách 1 (<img>) dùng khi ảnh chỉ mang tính minh họa đơn giản và không cần chú thích riêng, ví dụ icon sản phẩm hoặc ảnh background trang.
- Cách 2 (<figure> + <figcaption>) dùng khi ảnh có nội dung quan trọng và cần giải thích, ví dụ ảnh sản phẩm chính kèm chú thích giá hoặc biểu đồ kèm chú thích dữ liệu.

Ví dụ:
- Cách 1: Ảnh icon sản phẩm trên trang danh sách, ảnh trang trí banner.
- Cách 2: Ảnh chi tiết sản phẩm với figcaption mô tả thông số, ảnh biểu đồ doanh thu với figcaption giải thích số liệu.