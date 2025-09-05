'use client';

import * as React from 'react';

type Props = {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  durationMs?: number;   // default 1200ms
  formatter?: 'money' | 'number';
};

export function AnimatedStat({
  value,
  label,
  prefix = '',
  suffix = '',
  durationMs = 1200,
  formatter = 'number',
}: Props) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [display, setDisplay] = React.useState(0);
  const [hasRun, setHasRun] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasRun) {
          setHasRun(true);
          animate();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(node);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, hasRun]);

  function animate() {
    const start = performance.now();
    const from = 0;
    const to = value;

    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / durationMs);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setDisplay(from + (to - from) * eased);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  const formatted =
    formatter === 'money'
      ? `${prefix}${Math.round(display).toLocaleString('pt-BR')}${suffix}`
      : `${prefix}${Math.round(display)}${suffix}`;

  return (
    <div ref={ref} className="text-left">
      <div className="text-3xl sm:text-4xl font-bold text-[#27C4F2]">
        {formatted}
      </div>
      <div className="text-xs sm:text-sm text-slate-600">{label}</div>
    </div>
  );
}
