# Bundled typography

All faces are bundled under the SIL Open Font License 1.1; each family's licence file sits beside its fonts.

## Foil edition (8.0)

- **Cinzel** 600 and 700 by the Cinzel Project Authors (Natanael Gama): `Cinzel-600.woff2`, `Cinzel-700.woff2`, licence `Cinzel-OFL.txt`. Source: https://github.com/google/fonts/tree/main/ofl/cinzel (variable font `Cinzel[wght].ttf`, instanced at 600 and 700).
- **Rajdhani** 500, 600 and 700 by the Indian Type Foundry: `Rajdhani-500.woff2`, `Rajdhani-600.woff2`, `Rajdhani-700.woff2`, licence `Rajdhani-OFL.txt`. Source: https://github.com/google/fonts/tree/main/ofl/rajdhani (`Rajdhani-Medium`, `-SemiBold`, `-Bold`).

Downloaded from the official Google Fonts repository on 24 October 2026 and produced with `python -I tools/fonts.py --cinzel DIR --rajdhani DIR` (fonttools + brotli). These are modified versions as the OFL permits; neither family declares a Reserved Font Name:

- subset to Google's latin and latin-ext ranges, hinting removed, WOFF2;
- Rajdhani's figures made tabular (each digit takes the widest digit's advance and is centred), because the family has no `tnum` feature and the design needs tabular numbers.

## Folio edition (7.9, retained for one release)

Manrope by the Manrope Project Authors and Fraunces by the Fraunces Project Authors, unmodified TTF, with their licence files and Manrope's FONTLOG. Sources: https://github.com/google/fonts/tree/main/ofl/manrope and https://github.com/google/fonts/tree/main/ofl/fraunces (downloaded 11 September 2026). They stay in this folder so installed 7.9 clients can still repair their cache during the update window, and are removed in the release after 8.0.
