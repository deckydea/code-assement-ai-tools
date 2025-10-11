# GitHub Copilot Assessment — Detail & Stepwise Focus

    Paket ini berisi 5 soal: **1 Mudah, 2 Sedang, 1 Sulit, 1 Bug-Fix Sulit**.

    Dirancang untuk menguji hipotesis:
    1) AI Native IDE (Cursor) vs AI Assistant (GitHub Copilot) membentuk pola pikir berbeda.
    2) Cursor mendorong perencanaan & struktur menyeluruh.
    3) Copilot menekankan penyelesaian detail & langkah bertahap.
    4) Perbedaan paradigma tercermin pada strategi & hasil akhir.

    ## Daftar Soal & Estimasi
    | No | Nama | Kesulitan | Estimasi (mnt) |
    |---:|---|---|---:|
    | 01 | parse_query_basic | Mudah | 4 |
| 02 | csv_to_objects | Sedang | 6 |
| 03 | count_log_levels | Sedang | 6 |
| 04 | deep_merge_plain_objects | Sulit | 10 |
| 05 | bugfix_sanitize_filename | Bug-Fix Sulit | 10 |

    ## Menjalankan
    Node.js ≥ 16
    ```bash
    node run_all_tests.js
    # atau jalankan satu test
    node tests/01_*.test.js
    ```
