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