#!/usr/bin/env python3
"""Print standard mapping CSV header and one example row to stdout."""

from __future__ import annotations

HEADER = (
    "cluster_id,primary_keyword,intent_primary,intent_secondary,"
    "target_url,page_role,priority,notes"
)

EXAMPLE = (
    "c01,example keyword,informational,,/guide/example/,pillar,P1,replace with real data"
)


def main() -> None:
    print(HEADER)
    print(EXAMPLE)


if __name__ == "__main__":
    main()

