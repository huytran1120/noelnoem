# 🎄 Voxel Christmas Tree

An interactive 3D Christmas visualization created with Three.js

## Features
- ✨ Fairy lights animation (blink/pulse)
- ❄️ Dynamic falling snow (900+ particles optimized)
- 🎁 Presents at the foot of the tree
- 🎮 Auto-rotate camera (OrbitControls)
- 📱 Responsive design

## How to Use
Open `tree.html` directly in the browser

## Browser Support
Chrome, Firefox, Safari (WebGL enabled)

## Performance
- ~60 FPS on desktop
- Optimized for mobile








Cây cao & to hơn
trunkHeight: 4 → 6
layers: 20 → 28

maxRadius: 7 → 9
Đảo tuyết cũng rộng hơn một chút để cây không tràn mép
islandRadius: 9 → 11

Camera lùi xa + nhìn cao hơn chút để ôm trọn cây
từ (18, 16, 22) → (22, 20, 26)
controls.target nâng từ y = 6 → y = 8

Cây vẫn chưa “mịn” như mong muốn → mình có thể tiếp tục giảm voxelSize hoặc tăng layers.

Đèn quá nhiều / quá sáng → mình chỉnh lại tỷ lệ random và emissiveIntensity cho bạn.

 Trường hợp ảnh “có mà như không thấy”
Một vài khả năng:
Quá nhỏ: tăng spriteSize lên 4 hoặc 5.
Đứng đúng trục cây → bị thân cây che một phần: thử dịch ra trước một chút:
sprite.position.set(0, 2 * voxelSize, 1.5 * voxelSize);