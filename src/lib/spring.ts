/**
 * Tiny frame-based spring, matching the feel of Svelte's `spring()` store
 * that the holo-card reference uses (stiffness / damping per frame).
 */
export class Spring {
  value: number;
  target: number;
  velocity = 0;

  constructor(
    initial: number,
    public stiffness = 0.066,
    public damping = 0.25,
  ) {
    this.value = initial;
    this.target = initial;
  }

  set(target: number, opts: { hard?: boolean; stiffness?: number; damping?: number } = {}) {
    if (opts.stiffness !== undefined) this.stiffness = opts.stiffness;
    if (opts.damping !== undefined) this.damping = opts.damping;
    this.target = target;
    if (opts.hard) {
      this.value = target;
      this.velocity = 0;
    }
  }

  /** Advance one frame; returns true while still moving. */
  step(dt = 1): boolean {
    const delta = this.target - this.value;
    const accel = this.stiffness * delta - this.damping * this.velocity;
    this.velocity += accel * dt;
    this.value += this.velocity * dt;
    if (Math.abs(delta) < 0.02 && Math.abs(this.velocity) < 0.02) {
      this.value = this.target;
      this.velocity = 0;
      return false;
    }
    return true;
  }
}

export const clamp = (v: number, min = 0, max = 100) => Math.min(max, Math.max(min, v));
export const round = (v: number, p = 3) => parseFloat(v.toFixed(p));
export const adjust = (v: number, fromMin: number, fromMax: number, toMin: number, toMax: number) =>
  round(toMin + ((toMax - toMin) * (v - fromMin)) / (fromMax - fromMin));
