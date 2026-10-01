<?php

declare(strict_types=1);

namespace ParticleAcademy\GoogleSlides\Flow;

use FancyFlow\Attributes\FlowNode;
use FancyFlow\Contracts\NodeExecutor;
use FancyFlow\Runtime\ExecutionContext;
use FancyFlow\Runtime\Port;
use FancyFlow\Runtime\RunEvent;
use ParticleAcademy\Connectors\ConnectorClient;
use ParticleAcademy\GoogleSlides\Actions\PresentationGet;
use ParticleAcademy\GoogleSlides\GoogleSlides;

/*
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/presentation-get.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/presentation-get.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- google_slides
 */
/**
 * Google Slides presentation, run on a fancy-flow-php host.
 *
 * The PHP twin of `googleSlidesPresentationGetExecutor` in
 * @particle-academy/google-slides-js: the same request, built from the node's
 * config by the same `Actions\PresentationGet` a host would call directly, and
 * the same value on `out` — the client's `{data, mode, connection}`.
 *
 * The client resolves the connection and the estate from the config. With
 * nothing configured that is FAKE, so a node dropped on a canvas runs against
 * the faker rather than Google Slides. To reach a real estate, pass a
 * `ConnectorClient` that knows the host's connections — or bind one in the
 * container, which resolves the constructor by type.
 */
#[FlowNode(
    name: '@particle-academy/google_slides_presentation_get',
    aliases: [
        'google_slides_presentation_get',
    ],
    category: 'io',
    label: 'Google Slides presentation',
    description: 'Read a presentation\'s slides and the objectId of every element on them -- the prerequisite for targeting a specific shape or placeholder with a future edit.',
    inputs: [
        [
            'id' => 'in',
        ],
    ],
    outputs: [
        [
            'id' => 'out',
        ],
    ],
    sideEffects: 'none',
    outputShape: [
        [
            'path' => 'data.presentationId',
            'type' => 'string',
            'description' => 'Echoes what was asked.',
        ],
        [
            'path' => 'data.title',
            'type' => 'string',
            'description' => 'The presentation\'s title.',
        ],
        [
            'path' => 'data.locale',
            'type' => 'string',
            'description' => 'BCP 47 language tag.',
        ],
        [
            'path' => 'data.slides',
            'type' => 'array',
            'description' => 'One entry per slide, in order: objectId, and pageElements -- each with its own objectId and exactly one of shape/image/table/line/video/wordArt/sheetsChart/elementGroup/speakerSpotlight set, naming what kind of element it is. A placeholder shape\'s text (when it has one) lives at pageElements[].shape.text, published raw -- this connector does not flatten Slides\' own rich-text run structure.',
        ],
        [
            'path' => 'mode',
            'type' => 'string',
            'description' => 'Which estate this ran against. Google has no sandbox, so: fake or live.',
        ],
    ],
)]
final class PresentationGetExecutor implements NodeExecutor
{
    public function __construct(private readonly ?ConnectorClient $client = null) {}

    public function execute(ExecutionContext $ctx): mixed
    {
        $config = $ctx->config();

        $result = ($this->client ?? new ConnectorClient)->call(
            GoogleSlides::descriptor(),
            PresentationGet::OPERATION,
            $config,
            [
                'method' => PresentationGet::METHOD,
                'path' => PresentationGet::path($config),
                'query' => PresentationGet::body($config),
            ],
            $ctx->input('in'),
        );

        $id = is_array($result->data) ? ($result->data['id'] ?? null) : null;
        $ctx->emit(RunEvent::log(
            'info',
            'google_slides presentation_get'.(is_scalar($id) ? ' '.$id : '').' ('.$result->mode->value.')',
            $ctx->node->id,
        ));

        return Port::only('out', $result->toArray());
    }
}
