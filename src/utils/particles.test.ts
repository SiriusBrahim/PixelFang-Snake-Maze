import { afterEach, describe, expect, it, vi } from 'vitest';
import { ParticleSystem } from './particles.ts';

describe('ParticleSystem reduced-motion handling', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('clears queued visual effects while reduced motion is enabled', () => {
    vi.spyOn(performance, 'now').mockReturnValue(1000);
    const system = new ParticleSystem();

    system.triggerCrashExplosion([[4, 4], [4, 5], [4, 6]], 20, '#FFFFFF');
    system.triggerBitePulse();
    system.triggerHeadSquash();

    expect(system.hasActiveEffects(1000)).toBe(true);

    // The reduced-motion path exits before touching the canvas context.
    system.updateAndDraw({} as CanvasRenderingContext2D, true);

    expect(system.hasActiveEffects(1000)).toBe(false);
    expect(system.getHeadSquashScale(1000)).toEqual({ scaleX: 1, scaleY: 1 });
    expect(system.getScreenShakeOffset(1000)).toEqual({ x: 0, y: 0 });
  });
});
