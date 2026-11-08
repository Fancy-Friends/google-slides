<?php

declare(strict_types=1);

namespace ParticleAcademy\GoogleSlides\Flow;

use FancyFlow\Attributes\FlowNode;
use FancyFlow\Contracts\NodeExecutor;
use FancyFlow\Runtime\ExecutionContext;
use FancyFlow\Runtime\Port;
use FancyFlow\Runtime\RunEvent;
use ParticleAcademy\Connectors\ConnectorClient;
use ParticleAcademy\GoogleSlides\Actions\BatchUpdate;
use ParticleAcademy\GoogleSlides\GoogleSlides;

/*
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/batch-update.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/batch-update.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- google_slides
 */
/**
 * Batch update a Google Slides presentation, run on a fancy-flow-php host.
 *
 * The PHP twin of `googleSlidesBatchUpdateExecutor` in
 * @particle-academy/google-slides-js: the same request, built from the node's
 * config by the same `Actions\BatchUpdate` a host would call directly, and the
 * same value on `out` — the client's `{data, mode, connection}`.
 *
 * The client resolves the connection and the estate from the config. With
 * nothing configured that is FAKE, so a node dropped on a canvas runs against
 * the faker rather than Google Slides. To reach a real estate, pass a
 * `ConnectorClient` that knows the host's connections — or bind one in the
 * container, which resolves the constructor by type.
 */
#[FlowNode(
    name: '@particle-academy/google_slides_batch_update',
    aliases: [
        'google_slides_batch_update',
    ],
    category: 'io',
    label: 'Batch update a Google Slides presentation',
    description: 'Apply a list of Google Slides presentation API requests to a presentation, all or none.',
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
    sideEffects: 'unsafe-to-replay',
    outputShape: [
        [
            'path' => 'data.presentationId',
            'type' => 'string',
            'description' => 'The presentation updated.',
        ],
        [
            'path' => 'data.replies',
            'type' => 'array',
            'description' => 'One reply per request, in order. Many kinds reply with an empty object.',
        ],
        [
            'path' => 'data.writeControl.requiredRevisionId',
            'type' => 'string',
            'description' => 'The presentation\'s revision after the update; pass it to the next batch to guard it.',
        ],
        [
            'path' => 'mode',
            'type' => 'string',
            'description' => 'Which estate this ran against. Google has no sandbox, so: fake or live.',
        ],
    ],
)]
final class BatchUpdateExecutor implements NodeExecutor
{
    public function __construct(private readonly ?ConnectorClient $client = null) {}

    public function execute(ExecutionContext $ctx): mixed
    {
        $config = $ctx->config();

        $result = ($this->client ?? new ConnectorClient)->call(
            GoogleSlides::descriptor(),
            BatchUpdate::OPERATION,
            $config,
            [
                'method' => BatchUpdate::METHOD,
                'path' => BatchUpdate::path($config),
                'json' => BatchUpdate::body($config),
            ],
            $ctx->input('in'),
        );

        $id = is_array($result->data) ? ($result->data['id'] ?? null) : null;
        $ctx->emit(RunEvent::log(
            'info',
            'google_slides batch_update'.(is_scalar($id) ? ' '.$id : '').' ('.$result->mode->value.')',
            $ctx->node->id,
        ));

        return Port::only('out', $result->toArray());
    }
}
