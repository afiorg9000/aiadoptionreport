#!/usr/bin/env bash
# Install pandoc to ~/.local/bin without requiring brew/admin.
# Used by `npm run docs:doc` to convert the rendered site HTML into a
# real .docx via pandoc's structured Word writer.

set -euo pipefail

PANDOC_VERSION="3.9.0.2"
DEST="${HOME}/.local/bin"
mkdir -p "$DEST"

if [[ -x "$DEST/pandoc" ]]; then
  echo "pandoc already present at $DEST/pandoc:"
  "$DEST/pandoc" --version | head -1
  exit 0
fi

ARCH="$(uname -m)"
case "$ARCH" in
  arm64) PKG="pandoc-${PANDOC_VERSION}-arm64-macOS.zip"; INNER="pandoc-${PANDOC_VERSION}-arm64/bin/pandoc" ;;
  x86_64) PKG="pandoc-${PANDOC_VERSION}-x86_64-macOS.zip"; INNER="pandoc-${PANDOC_VERSION}-x86_64/bin/pandoc" ;;
  *) echo "Unsupported arch: $ARCH" >&2; exit 1 ;;
esac

URL="https://github.com/jgm/pandoc/releases/download/${PANDOC_VERSION}/${PKG}"
TMP="$(mktemp -d)"
echo "Downloading pandoc ${PANDOC_VERSION} for ${ARCH}…"
curl -fsSL -o "$TMP/pandoc.zip" "$URL"
unzip -q -o "$TMP/pandoc.zip" -d "$TMP"
cp "$TMP/$INNER" "$DEST/pandoc"
chmod +x "$DEST/pandoc"
rm -rf "$TMP"

echo "Installed pandoc to $DEST/pandoc:"
"$DEST/pandoc" --version | head -1
echo
echo "Make sure $DEST is on your PATH, e.g."
echo "  echo 'export PATH=\"\$HOME/.local/bin:\$PATH\"' >> ~/.zshrc"
