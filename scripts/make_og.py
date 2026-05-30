#!/usr/bin/env python3
"""Generate a branded 1200x630 OG share image for the portfolio."""
import math
from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H = 1200, 630
INK = (6, 6, 15)
SAFFRON = (255, 122, 38)
SAFFRON_HOT = (255, 138, 61)
CYAN = (34, 211, 238)
MAGENTA = (236, 72, 153)
GOLD = (212, 175, 55)
WHITE = (245, 245, 245)
MUTED = (150, 150, 165)

ARIAL = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
ARIAL_BLACK = "/System/Library/Fonts/Supplemental/Arial Black.ttf"
ARIAL_REG = "/System/Library/Fonts/Supplemental/Arial.ttf"
MONO = "/System/Library/Fonts/SFNSMono.ttf"
DEVA = "/System/Library/Fonts/Supplemental/Devanagari Sangam MN.ttc"


def font(path, size):
    return ImageFont.truetype(path, size)


def radial_glow(size, color, alpha=70):
    d = size * 2
    g = Image.new("RGBA", (d, d), (0, 0, 0, 0))
    dr = ImageDraw.Draw(g)
    for i in range(size, 0, -2):
        a = int(alpha * (i / size) ** 2)
        dr.ellipse([size - i, size - i, size + i, size + i], fill=color + (a,))
    return g.filter(ImageFilter.GaussianBlur(size * 0.18))


def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))


def gradient_text(text, fnt, stops):
    """Render text filled with a horizontal multi-stop gradient. Returns RGBA."""
    bbox = fnt.getbbox(text)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    pad = 20
    mask = Image.new("L", (tw + pad * 2, th + pad * 2), 0)
    md = ImageDraw.Draw(mask)
    md.text((pad - bbox[0], pad - bbox[1]), text, font=fnt, fill=255)
    grad = Image.new("RGBA", mask.size, (0, 0, 0, 0))
    gw = mask.size[0]
    px = grad.load()
    n = len(stops) - 1
    for x in range(gw):
        t = x / max(1, gw - 1)
        seg = min(n - 1, int(t * n))
        lt = (t * n) - seg
        col = lerp(stops[seg], stops[seg + 1], lt)
        for y in range(mask.size[1]):
            px[x, y] = col + (255,)
    out = Image.new("RGBA", mask.size, (0, 0, 0, 0))
    out.paste(grad, (0, 0), mask)
    return out


def draw_yantra(base, cx, cy, R, rot=0.0):
    """Draw a Sri-Yantra-ish emblem (concentric rings + triangles) on an RGBA layer."""
    layer = Image.new("RGBA", base.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)

    # concentric rings
    for i, (rr, col, a, w) in enumerate([
        (R, GOLD, 90, 2),
        (R * 0.86, SAFFRON, 70, 2),
        (R * 0.7, CYAN, 60, 1),
        (R * 0.52, GOLD, 80, 1),
    ]):
        d.ellipse([cx - rr, cy - rr, cx + rr, cy + rr], outline=col + (a,), width=w)

    # radial spokes
    spokes = 48
    for i in range(spokes):
        a = rot + (i / spokes) * 2 * math.pi
        r1 = R * 0.52
        r2 = R * 0.98
        col = GOLD if i % 3 == 0 else SAFFRON
        alpha = 70 if i % 3 == 0 else 28
        d.line([cx + math.cos(a) * r1, cy + math.sin(a) * r1,
                cx + math.cos(a) * r2, cy + math.sin(a) * r2], fill=col + (alpha,), width=1)

    # interlocking triangles
    def tri(scale, up, col, a):
        pts = []
        for k in range(3):
            ang = rot + (-math.pi / 2 if up else math.pi / 2) + k * (2 * math.pi / 3) * (1 if up else -1)
            pts.append((cx + math.cos(ang) * R * scale, cy + math.sin(ang) * R * scale))
        d.line(pts + [pts[0]], fill=col + (a,), width=2, joint="curve")

    tri(0.62, True, SAFFRON, 150)
    tri(0.5, True, GOLD, 130)
    tri(0.62, False, CYAN, 150)
    tri(0.5, False, MAGENTA, 130)

    # bindu
    d.ellipse([cx - 4, cy - 4, cx + 4, cy + 4], fill=WHITE + (255,))
    return layer


def rounded_mask(size, radius):
    m = Image.new("L", size, 0)
    d = ImageDraw.Draw(m)
    d.rounded_rectangle([0, 0, size[0], size[1]], radius=radius, fill=255)
    return m


def main():
    img = Image.new("RGB", (W, H), INK)

    # background glows
    base = img.convert("RGBA")
    for (cx, cy, col, sz, a) in [
        (120, 90, SAFFRON, 360, 55),
        (W - 120, H - 60, CYAN, 360, 45),
        (W - 320, 120, MAGENTA, 300, 40),
    ]:
        glow = radial_glow(sz, col, a)
        base.alpha_composite(glow, (cx - sz, cy - sz))

    # subtle grid
    grid = Image.new("RGBA", base.size, (0, 0, 0, 0))
    gd = ImageDraw.Draw(grid)
    step = 48
    for x in range(0, W, step):
        gd.line([x, 0, x, H], fill=(255, 255, 255, 7), width=1)
    for y in range(0, H, step):
        gd.line([0, y, W, y], fill=(255, 255, 255, 7), width=1)
    base.alpha_composite(grid)

    # yantra emblem behind the portrait (right side)
    yc_x, yc_y = 945, H // 2
    base.alpha_composite(draw_yantra(base, yc_x, yc_y, 250, rot=0.2))

    # portrait
    try:
        p = Image.open("public/images/portrait.jpg").convert("RGB")
        # crop to 4:5 around the face then resize
        pw, ph = p.size
        target_ratio = 4 / 5
        if pw / ph > target_ratio:
            nw = int(ph * target_ratio)
            p = p.crop(((pw - nw) // 2, 0, (pw + nw) // 2, ph))
        else:
            nh = int(pw / target_ratio)
            p = p.crop((0, 0, pw, nh))
        card_w, card_h = 300, 375
        p = p.resize((card_w, card_h))
        mask = rounded_mask((card_w, card_h), 22)
        px, py = yc_x - card_w // 2, yc_y - card_h // 2
        # frame glow
        fr = Image.new("RGBA", base.size, (0, 0, 0, 0))
        fd = ImageDraw.Draw(fr)
        fd.rounded_rectangle([px - 3, py - 3, px + card_w + 3, py + card_h + 3], radius=24,
                             outline=(255, 255, 255, 40), width=2)
        base.paste(p, (px, py), mask)
        base.alpha_composite(fr)
        # corner brackets
        bd = ImageDraw.Draw(base)
        bl = 22
        for (bx, by, dx, dy, col) in [
            (px - 10, py - 10, 1, 1, SAFFRON), (px + card_w + 10, py - 10, -1, 1, SAFFRON),
            (px - 10, py + card_h + 10, 1, -1, CYAN), (px + card_w + 10, py + card_h + 10, -1, -1, CYAN)]:
            bd.line([bx, by, bx + dx * bl, by], fill=col + (220,), width=3)
            bd.line([bx, by, bx, by + dy * bl], fill=col + (220,), width=3)
    except FileNotFoundError:
        pass

    d = ImageDraw.Draw(base)

    # left column text
    LX = 80

    # status pill
    pill_f = font(MONO, 18)
    d.rounded_rectangle([LX, 70, LX + 250, 104], radius=17, outline=SAFFRON + (110,), width=1)
    d.ellipse([LX + 16, 81, LX + 28, 93], fill=(32, 211, 107, 255))
    d.text((LX + 40, 78), "AVAILABLE · MUMBAI", font=pill_f, fill=MUTED)

    # devanagari name
    try:
        dv = font(DEVA, 30)
        d.text((LX, 130), "रोहन अजय रामानी", font=dv, fill=SAFFRON_HOT)
    except Exception:
        pass

    # big name
    nf = font(ARIAL_BLACK, 96)
    d.text((LX - 4, 178), "ROHAN", font=nf, fill=WHITE)
    d.text((LX - 4, 278), "AJAY", font=nf, fill=WHITE)
    # AJAY width to place RAMANI after it
    ajay_w = nf.getbbox("AJAY ")[2]
    gt = gradient_text("RAMANI", nf, [SAFFRON, MAGENTA, CYAN])
    base.alpha_composite(gt, (LX - 4 + ajay_w - 20, 278 - 20))

    # subtitle
    sf = font(ARIAL, 26)
    d.text((LX, 400), "Engineer → Operator", font=sf, fill=WHITE)
    sf2 = font(ARIAL_REG, 22)
    d.text((LX, 438), "Building Fresh & Select Gro · ex-JPMorganChase", font=sf2, fill=MUTED)

    # bottom coded line
    cf = font(MONO, 17)
    d.text((LX, 520), "19.0760°N · 72.8777°E   ·   IIT MADRAS · SRM IST", font=cf, fill=(120, 120, 140))
    # accent rule
    d.line([LX, 506, LX + 360, 506], fill=SAFFRON + (120,), width=2)

    out = base.convert("RGB")
    out.save("public/og.jpg", quality=88)
    print("wrote public/og.jpg", out.size)


if __name__ == "__main__":
    main()
