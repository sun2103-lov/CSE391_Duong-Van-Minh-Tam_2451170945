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

---
## PHẦN C — PHÂN TÍCH & SUY LUẬN
### Câu C1 — Debug Form (10 điểm)
**8 lỗi tìm thấy:**

**Lỗi 1: Dòng 1 — Form không có method và action attribute**
- Sửa: `<form method="POST" action="#">`

**Lỗi 2: Dòng 2 — Input "Tên" không có label with for attribute**
- Sửa: `<label for="name">Tên:</label> <input type="text" id="name" name="name" required>`

**Lỗi 3: Dòng 4 — Input "Email" không có label, id, name attribute**
- Sửa: `<label for="email">Email:</label> <input type="email" id="email" name="email" required>`

**Lỗi 4: Dòng 6 — Input "Password" không có label, id, name, minlength attribute**
- Sửa: `<label for="password">Mật khẩu:</label> <input type="password" id="password" name="password" required minlength="8">`

**Lỗi 5: Dòng 7 — Input "Confirm Password" không có label, id, name**
- Sửa: `<label for="confirm_password">Nhập lại mật khẩu:</label> <input type="password" id="confirm_password" name="confirm_password" required minlength="8">`

**Lỗi 6: Dòng 9 — Input "Phone" dùng type="text" thay vì type="tel", thiếu pattern và validation**
- Sửa: `<label for="phone">Điện thoại:</label> <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required>`

**Lỗi 7: Dòng 11-13 — Select "Thành phố" không có label, id, name attribute**
- Sửa: 
```html
<label for="city">Thành phố:</label>
<select id="city" name="city" required>
    <option value="">-- Chọn --</option>
    <option value="hanoi">Hà Nội</option>
    <option value="hcm">TP.HCM</option>
</select>
```

**Lỗi 8: Dòng 15-17 — Label checkbox không có for attribute, checkbox không có id, name**
- Sửa: 
```html
<label for="terms">
    <input type="checkbox" id="terms" name="terms" required> Tôi đồng ý điều khoản
</label>
```

**Bonus: Dòng 19 — Nên dùng `<button type="submit">Gửi</button>` thay vì `<input type="submit">`** để dễ styling và semantic hơn.

---

### Câu C2 — Chiến lược Validation Form Ngân hàng (10 điểm)

**Yêu cầu:** Form đăng ký ngân hàng số cần validate:
- CMND/CCCD: đúng 12 chữ số
- Số tài khoản: 10-15 chữ số  
- Email: bắt buộc, đúng format

**Chiến lược Validation:**

1. **CMND/CCCD (12 chữ số):**
   - HTML: `<input type="text" id="id_number" name="id_number" pattern="[0-9]{12}" required minlength="12" maxlength="12" title="CMND/CCCD phải có đúng 12 chữ số">`
   - Lý do: Pattern `[0-9]{12}` chỉ chấp nhận 12 chữ số, minlength và maxlength giới hạn độ dài, required bắt buộc nhập

2. **Số tài khoản (10-15 chữ số):**
   - HTML: `<input type="text" id="account_number" name="account_number" pattern="[0-9]{10,15}" required title="Số tài khoản phải có 10-15 chữ số">`
   - Lý do: Pattern `[0-9]{10,15}` cho phép 10 đến 15 chữ số, flexible với các ngân hàng khác nhau

3. **Email (bắt buộc, đúng format):**
   - HTML: `<input type="email" id="email" name="email" required title="Nhập email hợp lệ">`
   - Lý do: type="email" tự động validate format email, required bắt buộc

4. **HTML5 Validation vs JavaScript:**
   - HTML5 validation đủ cho hầu hết trường hợp (client-side validation)
   - Luôn cần server-side validation vì user có thể disable JavaScript hoặc modify request
   - Thông báo lỗi từ browser: "Please match the requested format" (CMND), "Please enter an email address" (Email)

5. **UX tốt:**
   - Thêm `<label>` cho mỗi input để người dùng biết input là gì
   - Thêm `placeholder` để gợi ý định dạng: "000000000000" (CMND)
   - Thêm `title` để giải thích khi hover hoặc có lỗi
   - Dùng `<fieldset>` + `<legend>` để nhóm form thành các phần logic

**Ví dụ code hoàn chỉnh:**
```html
<form method="POST" action="#" novalidate>
    <fieldset>
        <legend>Thông tin cá nhân</legend>
        
        <label for="id_number">CMND/CCCD:</label>
        <input type="text" id="id_number" name="id_number" 
               pattern="[0-9]{12}" required minlength="12" maxlength="12"
               placeholder="000000000000"
               title="Nhập 12 chữ số CMND/CCCD">
        
        <label for="account_number">Số tài khoản:</label>
        <input type="text" id="account_number" name="account_number"
               pattern="[0-9]{10,15}" required
               placeholder="1234567890"
               title="Nhập 10-15 chữ số">
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required
               placeholder="user@example.com">
    </fieldset>
    
    <button type="submit">Đăng ký</button>
</form>
```