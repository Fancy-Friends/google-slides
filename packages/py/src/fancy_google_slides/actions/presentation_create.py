# GENERATED FILE — do not edit.
#
# Emitted from provider/actions/presentation-create.json by weaver's
# generator.
# A hand-edit here is destroyed by the next protocol sync, which is worse than
# being rejected, because it works until it silently does not. Fix
# provider/actions/presentation-create.json (or weaver's template/) and
# regenerate:
#
# npm run provider -- google_slides

"""Create a blank Google Slides presentation.

POST /v1/presentations —
https://developers.google.com/workspace/slides/api/reference/rest/v1/presentations/create

This describes the request. `call` resolves the connection, picks the
estate, and either calls Google Slides or calls the faker.
"""

from __future__ import annotations

from typing import Any

from .._runtime import CallResult, ConnectorConfigError, Mode, call
from ..service import descriptor

OPERATION = "presentation_create"
METHOD = "POST"
PATH = "/v1/presentations"
SIDE_EFFECTS = "unsafe-to-replay"


def body(config: dict[str, Any]) -> dict[str, Any]:
    """Build the JSON body for one call, failing loudly and specifically."""
    if config.get("title") is None or config.get("title") == "":
        raise ConnectorConfigError(
            "presentation_create: \"title\" is required (Title)."
        )

    out: dict[str, Any] = {}
    _value = config.get("title")
    if _value is None or _value == "":
        raise ConnectorConfigError("presentation_create: \"title\" is required.")

    out["title"] = str(_value)

    return out


def presentation_create(
    config: dict[str, Any],
    *,
    credentials: dict[str, str | None] | None = None,
    mode: Mode = "auto",
    connection_id: str | None = None,
    attempts: int = 3,
) -> CallResult:
    """Create a blank Google Slides presentation."""
    return call(
        descriptor(),
        operation=OPERATION,
        method=METHOD,
        path=PATH,
        json_body=body(config),
        config=config,
        credentials=credentials,
        mode=mode,
        connection_id=connection_id,
        attempts=attempts,
    )
