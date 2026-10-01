"""
Google Slides — the published PyPI wheel.

GENERATED — do not edit. Fix weaver's template/ and regenerate.

Runs against the PUBLISHED wheel, installed by name into a fresh venv.
Every other test here imports from ../src and cannot see the packaging —
a missing py.typed or an unshipped module passes there and breaks for
every user.
"""

from importlib.metadata import requires

from fancy_google_slides._fake import FakeValues, seed_for_call
from fancy_google_slides.faker import respond

GOLDENS = [
    {
        "operation": "presentation_create",
        "config": {},
        "expected": {
            "presentationId": "1Slide_fake_069dd03c2fdb",
            "title": "Untitled presentation",
        },
    },
    {
        "operation": "presentation_get",
        "config": {},
        "expected": {
            "presentationId": "1Slide_fake_f5354a08d2f8",
            "title": "Untitled presentation",
            "locale": "en",
            "slides": [
                {
                    "objectId": "slide_fake_186e6009598a",
                    "pageElements": [
                        {
                            "objectId": "title_fake_92815b64845d",
                            "shape": {
                                "shapeType": "TEXT_BOX",
                                "placeholder": {
                                    "type": "CENTERED_TITLE",
                                },
                                "text": {
                                    "textElements": [],
                                },
                            },
                        },
                        {
                            "objectId": "subtitle_fake_7603348102f0",
                            "shape": {
                                "shapeType": "TEXT_BOX",
                                "placeholder": {
                                    "type": "SUBTITLE",
                                },
                                "text": {
                                    "textElements": [],
                                },
                            },
                        },
                    ],
                },
            ],
        },
    },
]


def main() -> None:
    # Zero runtime dependencies is a design constraint, checked on the
    # INSTALLED distribution rather than on the pyproject that claimed it.
    declared = requires("fancy-google-slides")
    assert not declared, f"expected no runtime dependencies, got {declared}"
    print("  ok   zero runtime dependencies on the installed distribution")

    for golden in GOLDENS:
        operation, config = golden["operation"], golden["config"]
        fake = FakeValues(seed_for_call("google_slides", operation, config))
        faked = respond(operation, {"config": config, "fake": fake})

        assert faked == golden["expected"], (
            f"the PUBLISHED wheel produced different bytes for {operation} than the repo does"
        )
        print(f"  ok   {operation}")

    print(f"\n  {len(GOLDENS)} operations verified against the published wheel.")


if __name__ == "__main__":
    main()
