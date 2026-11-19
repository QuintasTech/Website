import sys, numpy as np
from PIL import Image
src, out = sys.argv[1], sys.argv[2]
im = np.asarray(Image.open(src).convert('RGB')).astype(float)
a = (255 - im).max(axis=2) / 255.0
a = np.clip((a - 0.06) / 0.94, 0, 1)  # drop faint off-white background
safe = np.where(a > 0, a, 1)[..., None]
col = np.clip((im - 255 * (1 - a[..., None])) / safe, 0, 255)
# brand colours
navy_mask = (a > 0.95) & (col[..., 2] < 110)
blue_mask = (a > 0.95) & (col[..., 2] > 170)
print('navy', '#%02x%02x%02x' % tuple(np.median(col[navy_mask], axis=0).astype(int)))
print('blue', '#%02x%02x%02x' % tuple(np.median(col[blue_mask], axis=0).astype(int)))
def save(arr_col, arr_a, box, name):
    y0, y1, x0, x1 = box
    rgba = np.dstack([arr_col, arr_a * 255]).astype(np.uint8)[y0:y1, x0:x1]
    img = Image.fromarray(rgba, 'RGBA'); bb = img.getbbox(); img = img.crop(bb)
    img.save(f'{out}/{name}.png', optimize=True); print(name, img.size)
# dark-background variant: navy -> white, blue -> brighter blue
b = col[..., 2]
dark = np.empty_like(col)
dark[:] = [255, 255, 255]
from PIL import ImageFilter
cls = np.zeros(b.shape, np.uint8); yy, xx = np.mgrid[0:b.shape[0], 0:b.shape[1]]
reg = (xx >= 845) & (xx <= 945) & (yy >= 298) & (yy <= 500)
cls[reg & (b >= 90)] = 1; cls[b >= 160] = 2
cls[(yy >= 740) & (b - col[..., 0] > 50)] = 2
cls = np.asarray(Image.fromarray(cls * 100).filter(ImageFilter.MedianFilter(5))) // 100
dark[cls == 1] = [150, 185, 255]
dark[cls == 2] = [77, 140, 255]
H, W = a.shape
regions = {'mark': (60, 520, 600, 1180), 'wordmark': (540, 840, 240, 1560), 'full': (0, H, 0, W)}
for n, b in regions.items():
    save(col, a, b, f'{n}-color')
    save(dark, a, b, f'{n}-white')
