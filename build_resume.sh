#!/usr/bin/env bash
# Convert resume.html to A4 PDF using headless Chromium

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
INPUT_HTML="${SCRIPT_DIR}/resume.html"
OUTPUT_PDF="${SCRIPT_DIR}/assets/Chris_Wise_CV.pdf"

echo "Compiling ${INPUT_HTML} to ${OUTPUT_PDF}..."

chromium \
  --headless=new \
  --no-sandbox \
  --disable-gpu \
  --disable-software-rasterizer \
  --disable-dev-shm-usage \
  --user-data-dir=/tmp/chrome_resume_build \
  --print-to-pdf="${OUTPUT_PDF}" \
  --no-pdf-header-footer \
  "${INPUT_HTML}" 2>/dev/null

echo "✓ Successfully generated ${OUTPUT_PDF}"

