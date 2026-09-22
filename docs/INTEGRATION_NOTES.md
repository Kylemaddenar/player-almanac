# Tutorial integration notes

## Source ownership

`ui/help-content.js` owns task/step content and registers `help.*` keys in the existing EN/DE message tables. `[[translation.key]]` tokens are rendered as emphasized live control labels through `PA.t`, without HTML injection. `ui/help.js` owns the read-only Help route, search and nonmodal companion. `ui/folio.css` remains the stylesheet source. `tools/build.py` embeds all three into the standalone HTML before computing BUILD and RELEASE identities.

## Application hooks

The Application creates/disposes its HelpController, supports `#/help` and `#/help/<topic>`, adds navigation entries and notifies the companion after rendering/status changes. DialogManager provides a change notification after an existing modal is fully created or closed. The original dialog focus trap, history and close barriers stay intact.

The blank-character form notifies after creation and navigation succeed. Import notifies only after its existing commit/confirmation path (or successful retry). Export notifies after the existing download request, deliberately not claiming external retention. The existing roll event reports that an optional real roll occurred.

The tutorial never directly calls a character command, import, media picker, network request, ownership takeover or add-on activation. Start/step navigation uses existing save barriers. Closing instructions does not discard forms or reverse real user work. Application route changes can still commit a valid field under the original saving rules.

## Layout and lifecycle

Targets are real DOM elements with an outline and an added descriptive relationship; no intercepting spotlight covers them. Show control focuses and reveals them. References are re-resolved after route, render, language and modal changes. Read-only/missing/wrong-character states are explained instead of targeting imaginary controls.

Wide screens reserve a right dock. Smaller screens reserve bottom-sheet space above the actual bottom navigation. Very short visual viewports use a scrollable inline companion with all actions still present. During a native modal, the companion moves inside the active dialog body and leaves native controls usable. Resize/visualViewport handlers and a ResizeObserver maintain spacing; listeners, descriptions and transient target attributes are removed on disposal.

Tutorial preference JSON is versioned and scope-specific. Parsing and storage failures are nonfatal. Reload is opt-in resume, never an automatic blocking overlay. Help can be read with no open character; its workspace link explains when a character is needed.

## Test boundary

The tests inject isolated transaction/localStorage/media adapters through the application's existing constructor options on about:blank. These adapters are not a native-browser persistence model or a replacement production backend. File selection/download are captured only in cases that need to exercise downstream form/export behavior. See TESTING_AND_COVERAGE.md before interpreting the results.
