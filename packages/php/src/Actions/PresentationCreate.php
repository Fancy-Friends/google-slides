<?php

declare(strict_types=1);

namespace ParticleAcademy\GoogleSlides\Actions;

use ParticleAcademy\GoogleSlides\GoogleSlides;
use ParticleAcademy\Connectors\ConnectorConfigException;

/*
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/presentation-create.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/presentation-create.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- google_slides
 */
/**
 * Create a blank Google Slides presentation.
 *
 * POST /v1/presentations —
 * https://developers.google.com/workspace/slides/api/reference/rest/v1/presentations/create
 *
 * This describes the request. The connector client resolves the connection,
 * picks the estate, and either calls Google Slides or calls the faker.
 */
final class PresentationCreate
{
    public const OPERATION = 'presentation_create';
    public const METHOD = 'POST';
    public const PATH = '/v1/presentations';
    public const SIDE_EFFECTS = 'unsafe-to-replay';

    /**
     * Build the JSON body for one call.
     *
     * Validation fails loudly and specifically here, rather than three frames
     * later as an "invalid request" from Google Slides.
     *
     * @param array<string,mixed> $config
     * An EMPTY body is `{}`, not `[]` — and PHP cannot tell those apart, because
     * both are `array()` and `json_encode` picks the list. So an empty one is
     * returned as an object. TypeScript and Python have no such ambiguity, which
     * is why this is a difference only the byte-parity suite can see.
     *
     * @return array<string,mixed>|\stdClass
     */
    public static function body(array $config): array|\stdClass
    {
        if (($config['title'] ?? null) === null || ($config['title'] ?? null) === '') {
            throw new ConnectorConfigException('presentation_create: "title" is required (Title).');
        }

        $body = [];

        $value = $config['title'] ?? null;
        $body['title'] = (string) $value;

        $body = $body === [] ? new \stdClass() : $body;
        return $body;
    }
}
