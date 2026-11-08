# GENERATED FILE — do not edit.
#
# Emitted from provider/actions/ by weaver's generator.
# A hand-edit here is destroyed by the next protocol sync, which is worse than
# being rejected, because it works until it silently does not. Fix
# provider/actions/ (or weaver's template/) and regenerate:
#
# npm run provider -- google_slides

from .batch_update import batch_update
from .presentation_create import presentation_create
from .presentation_get import presentation_get
from .text_replace import text_replace

__all__ = [
    "batch_update",
    "presentation_create",
    "presentation_get",
    "text_replace",
]
