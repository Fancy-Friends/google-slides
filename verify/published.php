<?php

declare(strict_types=1);

/*
 * Google Slides — the published Composer package.
 *
 * GENERATED — do not edit. Fix weaver's template/ and regenerate.
 *
 * This runs against the PUBLISHED package, installed by name from the
 * registry into a project that has never seen this repo. Every other test
 * here imports from ../src and therefore cannot see the packaging.
 */

$autoload = getcwd().'/vendor/autoload.php';

if (! is_file($autoload)) {
    fwrite(STDERR, 'No vendor/autoload.php in '.getcwd().PHP_EOL);
    fwrite(STDERR, 'Run this from a project that has composer-required the published package:'.PHP_EOL);
    fwrite(STDERR, '    composer require particle-academy/google-slides-php'.PHP_EOL);
    exit(2);
}

require $autoload;

use ParticleAcademy\Connectors\FakeValues;
use ParticleAcademy\GoogleSlides\GoogleSlidesFaker;

$goldens = [
    [
        'operation' => 'presentation_create',
        'config' => [],
        'expected' => [
            'presentationId' => '1Slide_fake_069dd03c2fdb',
            'title' => 'Untitled presentation',
        ],
    ],
    [
        'operation' => 'presentation_get',
        'config' => [],
        'expected' => [
            'presentationId' => '1Slide_fake_f5354a08d2f8',
            'title' => 'Untitled presentation',
            'locale' => 'en',
            'slides' => [
                [
                    'objectId' => 'slide_fake_186e6009598a',
                    'pageElements' => [
                        [
                            'objectId' => 'title_fake_92815b64845d',
                            'shape' => [
                                'shapeType' => 'TEXT_BOX',
                                'placeholder' => [
                                    'type' => 'CENTERED_TITLE',
                                ],
                                'text' => [
                                    'textElements' => [],
                                ],
                            ],
                        ],
                        [
                            'objectId' => 'subtitle_fake_7603348102f0',
                            'shape' => [
                                'shapeType' => 'TEXT_BOX',
                                'placeholder' => [
                                    'type' => 'SUBTITLE',
                                ],
                                'text' => [
                                    'textElements' => [],
                                ],
                            ],
                        ],
                    ],
                ],
            ],
        ],
    ],
];

foreach ($goldens as $golden) {
    $operation = $golden['operation'];
    $config = $golden['config'];

    $fake = new FakeValues(FakeValues::seedForCall('google_slides', $operation, $config));
    $faked = GoogleSlidesFaker::respond($operation, ['config' => $config, 'fake' => $fake]);

    if ($faked !== $golden['expected']) {
        fwrite(STDERR, "the PUBLISHED package produced different bytes for {$operation}\n");
        fwrite(STDERR, '  got:      '.json_encode($faked)."\n");
        fwrite(STDERR, '  expected: '.json_encode($golden['expected'])."\n");
        exit(1);
    }

    echo "  ok   {$operation}\n";
}

echo "\n  ".count($goldens)." operations verified against the published package.\n";
