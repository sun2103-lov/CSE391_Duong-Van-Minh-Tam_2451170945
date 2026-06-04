# 📋 PHIẾU BÀI TẬP 04
# **CSS LAYOUT — Positioning, Flexbox & Grid**

> **Tài liệu tham chiếu:** `tuan_2_css_core/12_css_positioning.md` + `tuan_3_css_advanced/
## PHẦN A — KIỂM TRA ĐỌC HIỂU (20 điểm)
### Câu A1 (10đ) — 5 Loại Positioning
| Position | Vẫn chiếm chỗ trong flow? | Tham chiếu vị trí | Cuộn theo trang? | Use case |  
|----------|-------------------------|------------------|------------------|----------|  
| **static** | ✅ Có | Không dùng (mặc định) | Có | Mặc định — không cần viết CSS |  
| **relative** | ✅ Có | Vị trí gốc của nó | Có | Làm anchor cho absolute con, dịch nhẹ phần tử |  
| **absolute** | ❌ Không | Cha relative gần nhất | Không | Badge, dropdown, tooltip, overlay, modal |  
| **fixed** | ❌ Không | Viewport (cửa sổ trình duyệt) | Không | Chat button, cookie banner, header cố định |  
| **sticky** | ✅→❌ (thay đổi) | Viewport (khi dính) | Có (cho đến khi dính) | Sticky header, sticky table header, sidebar |  
📌 Khi nào absolute tham chiếu parent
Khi cha (hoặc tổ tiên gần nhất) có position là relative, absolute, fixed, hoặc sticky.
Lúc này, phần tử absolute sẽ căn chỉnh theo khung chứa của ancestor đó, chứ không phải toàn bộ trang.
👉 Ví dụ:
css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 10px;
  left: 20px;
}
child sẽ nằm cách góc trên trái của .parent 10px và 20px.
📌 Khái niệm nearest positioned ancestor
Đây là tổ tiên gần nhất (cha, ông, hoặc cao hơn) có position khác static.
Phần tử absolute sẽ căn theo tổ tiên này.
Nếu không tìm thấy, nó sẽ căn theo viewport.
### Câu A2 (10đ) — Flexbox vs Grid
/* Trường hợp 1 */
+------+------+------+------+
|  1   |  2   |  3   |  4   |
+------+------+------+------+
/* Trường hợp 2 */
+------+------+
|  1   |  2   |
+------+------+
|  3   |  4   |
+------+------+
|  5   |  6   |
+------+------+
/* Trường hợp 3 */
+--------------------------------------+
|                                      |
| 1              2                3    |
|                                      |
+--------------------------------------+
/* Trường hợp 4 */
+------+------------------+------+
|  1   |        2         |  3   |
+------+------------------+------+
/* Trường hợp 5 */
+----+----+----+
| 1  | 2  | 3  |
+----+----+----+
| 4  | 5  | 6  |
+----+----+----+
| 7  |    |    |
+----+----+----+
---

## PHẦN C — SUY LUẬN (20 điểm)

### Câu C1 (10đ) — Flexbox vs Grid: Khi nào dùng gì?
1.Navigation bar ngang (logo + menu + buttons)
→ Dùng Flexbox.
Vì navbar là bố cục một chiều theo hàng ngang. Flexbox giúp căn logo bên trái, menu ở giữa, các nút bên phải và căn giữa theo chiều dọc rất dễ dàng.

2.Lưới ảnh Instagram (3 cột đều nhau, số ảnh không biết trước)
→ Dùng Grid.

Vì đây là bố cục dạng lưới gồm nhiều hàng và nhiều cột. Grid giúp tạo 3 cột bằng nhau và tự động xuống hàng khi có thêm ảnh.

3.Layout blog: main content + sidebar
→ Dùng Grid.

Vì trang được chia thành các vùng rõ ràng gồm phần nội dung chính và sidebar. Grid giúp chia cột chính xác và dễ quản lý hơn Flexbox.

4.Footer với 4 cột thông tin (Về chúng tôi, Liên kết, Hỗ trợ, Liên hệ)
→ Dùng Grid.

Vì footer gồm nhiều cột song song. Grid giúp tạo 4 cột đều nhau nhanh chóng và bố cục ổn định.

5.Card sản phẩm (ảnh trên, text giữa, nút dưới, nút luôn dính đáy)
→ Dùng Flexbox.
### Câu C2 (10đ) — Debug Flexbox
Lỗi 1: Cards không đều chiều cao, nút "Mua" bị lệch
-Nguyên nhân:
Các card có lượng nội dung khác nhau nên chiều cao khác nhau. Nút "Mua" nằm ngay sau nội dung nên card nào nhiều chữ thì nút thấp hơn, card nào ít chữ thì nút cao hơn.
-code sửa:
.card-container{
    display: flex;
    flex-wrap: wrap;
}

.card{
    width: 30%;
    margin: 1.5%;

    display: flex;
    flex-direction: column;
}

.card img{
    width: 100%;
}

.card .btn{
    margin-top: auto;
    padding: 10px;
}

Lỗi 2: Nội dung không nằm giữa màn hình

Nguyên nhân:
Container .hero có display: flex nhưng chưa dùng thuộc tính căn chỉnh Flexbox.

Code sửa:

.hero{
    height: 100vh;
    display: flex;

    justify-content: center;
    align-items: center;
}

.hero-content{
    text-align: center;
}

Lỗi 3: Sidebar bị co lại
Nguyên nhân:
Trong Flexbox, các item mặc định có thể bị thu nhỏ (flex-shrink: 1). Khi content quá dài, sidebar bị ép nhỏ hơn 250px.

Code sửa:

.layout{
    display: flex;
}

.sidebar{
    width: 250px;
    flex-shrink: 0;
}

.content{
    flex: 1;
}