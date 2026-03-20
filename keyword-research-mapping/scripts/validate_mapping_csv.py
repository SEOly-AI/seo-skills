#!/usr/bin/env python3
"""Validate keyword mapping CSV required columns and basic rules."""

from __future__ import annotations

import argparse
import csv
import sys
from pathlib import Path

REQUIRED = (
    "cluster_id",
    "primary_keyword",
    "intent_primary",
    "target_url",
    "page_role",
    "priority",
)


def validate_row(i: int, row: dict[str, str], errors: list[str]) -> None:
    prefix = f"row {i + 2}"
    for col in REQUIRED:
        val = (row.get(col) or "").strip()
        if not val:
            errors.append(f"{prefix}: missing or empty '{col}'")
    url = (row.get("target_url") or "").strip()
    if url and not url.startswith("/"):
        errors.append(f"{prefix}: target_url should start with '/' (got {url!r})")


def main() -> int:
    parser = argparse.ArgumentParser(description="Validate keyword mapping CSV.")
    parser.add_argument("csv_path", type=Path, help="Path to mapping CSV file")
    args = parser.parse_args()
    path: Path = args.csv_path
    if not path.is_file():
        print(f"Error: file not found: {path}", file=sys.stderr)
        return 2

    errors: list[str] = []
    with path.open(newline="", encoding="utf-8-sig") as f:
        reader = csv.DictReader(f)
        if reader.fieldnames is None:
            print("Error: empty or invalid CSV header", file=sys.stderr)
            return 2
        header = [h.strip() for h in reader.fieldnames if h]
        for col in REQUIRED:
            if col not in reader.fieldnames and col not in header:
                errors.append(f"Missing column: {col}")
        if errors:
            for e in errors:
                print(e, file=sys.stderr)
            return 1
        for i, row in enumerate(reader):
            validate_row(i, row, errors)

    if errors:
        for e in errors:
            print(e, file=sys.stderr)
        return 1
    print("OK: mapping CSV passed basic validation.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

