<?php

declare(strict_types=1);

namespace ParticleAcademy\GoogleSlides;

use ParticleAcademy\Connectors\Mode;
use ParticleAcademy\Connectors\PreparedRequest;
use ParticleAcademy\Connectors\SandboxKind;
use ParticleAcademy\Connectors\ServiceDescriptor;

/*
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/manifest.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/manifest.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- google_slides
 */
/**
 * Google Slides, as one service descriptor shared by every Google Slides
 * operation.
 *
 * The PHP twin of the js package's `src/service.ts`.
 *
 * ## The sandbox trap, written down where it is used
 *
 * Google has no sandbox for Slides. A test presentation is a real one in a
 * real Drive, so every create is real -- use the faker while developing and
 * clean up any live test presentations.
 */
final class GoogleSlides
{
    // The connector API version this package was GENERATED against. A
    // literal, never imported: an imported constant lets an upgrade rewrite
    // the very claim it exists to detect.
    public const CONNECTOR_API_VERSION = 1;

    public const SERVICE = 'google_slides';

    public const LIVE_URL = 'https://slides.googleapis.com';

    /** @var list<string> Credential keys a remote call cannot proceed without. */
    public const REQUIRES = [
        'accessToken',
        'refreshToken',
        'clientId',
        'clientSecret',
    ];

    public static function descriptor(): ServiceDescriptor
    {
        return new ServiceDescriptor(
            service: self::SERVICE,
            title: 'Google Slides',
            sandbox: SandboxKind::None,
            baseUrls: [
                Mode::Live->value => self::LIVE_URL,
            ],
            requires: self::REQUIRES,
            authorize: self::authorize(...),
            faker: GoogleSlidesFaker::respond(...),
        );
    }

    /**
     * Apply Google Slides's auth scheme to an outgoing request.
     *
     *
     *
     * @param array<string,string> $credentials
     */
    public static function authorize(array $credentials, PreparedRequest $request, Mode $mode): void
    {
        $request->withHeader('Authorization', 'Bearer '.($credentials['accessToken'] ?? ''));
    }
}
