#!/usr/bin/env python3
"""官网打包：把 dist/ 打成可上传 nginx 的 zip（index.html 在根）。"""
import os
import re
import zipfile

ROOT = os.path.dirname(os.path.abspath(__file__))
DIST = os.path.join(ROOT, "dist")
VERSION_TS = os.path.join(ROOT, "src", "config", "version.ts")


def read_version() -> str:
    with open(VERSION_TS, "r", encoding="utf-8") as f:
        for line in f:
            m = re.search(r"APP_VERSION\s*=\s*['\"]([^'\"]+)['\"]", line)
            if m:
                return m.group(1)
    raise RuntimeError("APP_VERSION 未在 version.ts 中找到")


def pack(version: str) -> str:
    if not os.path.isdir(DIST):
        raise RuntimeError(f"dist/ 不存在：{DIST}，请先 npm run build")
    out = os.path.join(ROOT, f"seekphoto-site-dist-{version}.zip")
    with zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED) as z:
        for base, _, files in os.walk(DIST):
            for name in files:
                full = os.path.join(base, name)
                # 以 dist/ 为根，index.html 落在 zip 根
                arc = os.path.relpath(full, DIST)
                z.write(full, arc)
    return out


def main() -> None:
    version = read_version()
    out = pack(version)
    # 校验：zip 根必须含 index.html
    with zipfile.ZipFile(out) as z:
        names = z.namelist()
    assert "index.html" in names, "zip 根缺少 index.html"
    size = os.path.getsize(out)
    print(f"PACK_OK version={version} file={os.path.basename(out)} size={size}B entries={len(names)}")


if __name__ == "__main__":
    main()
