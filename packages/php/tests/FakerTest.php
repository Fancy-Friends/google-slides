<?php

declare(strict_types=1);

use ParticleAcademy\GoogleSlides\GoogleSlidesFaker;
use ParticleAcademy\Connectors\FakeValues;

/*
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/fixtures/ by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/fixtures/ (or weaver's template/) and regenerate:
 *
 *     npm run provider -- google_slides
 */
/**
 * The golden fixtures — the SAME values the TypeScript and Python packages
 * assert.
 *
 * Bit-for-bit identical is the claim, and this is what checks it.
 * Cross-runtime drift does not fail loudly on its own: it completes, down one
 * path, with no error.
 */

it('presentation_create fakes the shape Google Slides publishes', function () {
    $config = [];
    $fake = new FakeValues(FakeValues::seedForCall('google_slides', 'presentation_create', $config));

    $faked = GoogleSlidesFaker::respond('presentation_create', ['config' => $config, 'fake' => $fake]);

    expect($faked)->toBe([
        'presentationId' => '1Slide_fake_069dd03c2fdb',
        'title' => 'Untitled presentation',
    ]);
});

it('throws for an operation with no fixture rather than inventing a shape', function () {
    $fake = new FakeValues(FakeValues::seedForCall('google_slides', 'no_such_operation', []));

    expect(fn () => GoogleSlidesFaker::respond('no_such_operation', ['config' => [], 'fake' => $fake]))
        ->toThrow(InvalidArgumentException::class);
});
