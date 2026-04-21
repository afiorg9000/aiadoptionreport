#!/usr/bin/env bash
# Install LibreOffice to ~/Applications without admin/brew.
# generate-docx.mjs prefers LibreOffice's headless converter for the
# Word download because it preserves brand colors, background shading,
# and CSS layout much better than pandoc's structural-only docx writer.

set -euo pipefail

LO_VERSION="26.2.2"
TARGET="${HOME}/Applications/LibreOffice.app"

if [[ -x "$TARGET/Contents/MacOS/soffice" ]]; then
  echo "LibreOffice already installed at $TARGET"
  "$TARGET/Contents/MacOS/soffice" --version | head -1
  exit 0
fi

ARCH="$(uname -m)"
case "$ARCH" in
  arm64)  PKG="LibreOffice_${LO_VERSION}_MacOS_aarch64.dmg" ;;
  x86_64) PKG="LibreOffice_${LO_VERSION}_MacOS_x86-64.dmg" ;;
  *) echo "Unsupported arch: $ARCH" >&2; exit 1 ;;
esac

URL="https://download.documentfoundation.org/libreoffice/stable/${LO_VERSION}/mac/$( [[ "$ARCH" == "arm64" ]] && echo aarch64 || echo x86_64 )/${PKG}"
TMP="$(mktemp -d)"
DMG="$TMP/$PKG"

echo "Downloading LibreOffice ${LO_VERSION} for ${ARCH} (~280 MB)…"
curl -fL -o "$DMG" "$URL"

echo "Mounting…"
hdiutil attach -nobrowse "$DMG" >/dev/null

mkdir -p "${HOME}/Applications"
echo "Copying LibreOffice.app to ~/Applications/…"
cp -R "/Volumes/LibreOffice/LibreOffice.app" "${HOME}/Applications/"

hdiutil detach "/Volumes/LibreOffice" >/dev/null
rm -rf "$TMP"

echo "Installed:"
"$TARGET/Contents/MacOS/soffice" --version | head -1
