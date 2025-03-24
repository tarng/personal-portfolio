from PIL import Image, ImageDraw, ImageFont
import os

def create_solution_image(number, color):
    # 創建一個 1200x800 的圖片
    width = 1200
    height = 800
    image = Image.new('RGB', (width, height), color)
    draw = ImageDraw.Draw(image)
    
    # 添加漸變效果
    for y in range(height):
        r = int(color[0] + (255 - color[0]) * y / height)
        g = int(color[1] + (255 - color[1]) * y / height)
        b = int(color[2] + (255 - color[2]) * y / height)
        draw.line([(0, y), (width, y)], fill=(r, g, b))
    
    # 添加文字
    try:
        font = ImageFont.truetype("Arial.ttf", 120)
    except:
        font = ImageFont.load_default()
    
    text = f"Solution {number}"
    text_bbox = draw.textbbox((0, 0), text, font=font)
    text_width = text_bbox[2] - text_bbox[0]
    text_height = text_bbox[3] - text_bbox[1]
    
    x = (width - text_width) // 2
    y = (height - text_height) // 2
    
    # 添加陰影效果
    shadow_offset = 5
    draw.text((x + shadow_offset, y + shadow_offset), text, font=font, fill=(0, 0, 0, 128))
    draw.text((x, y), text, font=font, fill=(255, 255, 255))
    
    return image

# 創建 images 目錄（如果不存在）
os.makedirs('images', exist_ok=True)

# 為每個解決方案生成圖片
colors = [
    (41, 128, 185),  # 藍色
    (46, 204, 113),  # 綠色
    (155, 89, 182),  # 紫色
    (230, 126, 34),  # 橙色
    (231, 76, 60),   # 紅色
    (52, 152, 219),  # 淺藍色
    (26, 188, 156),  # 青色
    (241, 196, 15)   # 黃色
]

for i in range(1, 9):
    image = create_solution_image(i, colors[i-1])
    image.save(f'images/solution{i}.jpg', quality=95)

print("所有解決方案圖片已生成完成！") 