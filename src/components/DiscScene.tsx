import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

/**
 * Lazy-loaded Three.js disc. Only mounted when the production section is in
 * view and WebGL is available; everything is disposed on unmount.
 */
export default function DiscScene({ reduced, onUnavailable }: { reduced: boolean; onUnavailable: () => void }) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
    } catch {
      onUnavailable();
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    host.appendChild(renderer.domElement);
    renderer.domElement.style.display = "block";
    renderer.domElement.setAttribute("aria-hidden", "true");

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50);
    camera.position.set(0, 2.2, 4.2);
    camera.lookAt(0, 0, 0);

    const pmrem = new THREE.PMREMGenerator(renderer);
    const environment = new RoomEnvironment();
    const envTarget = pmrem.fromScene(environment, 0.04);
    environment.dispose();
    scene.environment = envTarget.texture;

    const group = new THREE.Group();
    scene.add(group);

    // Disc body: a thin cylinder with a hole, iridescent coating
    const outer = 1.2;
    const inner = 0.18;
    const thickness = 0.03;

    const dataMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#d4d4d8"),
      metalness: 1,
      roughness: 0.18,
      iridescence: 1,
      iridescenceIOR: 1.6,
      iridescenceThicknessRange: [120, 480],
      clearcoat: 1,
      clearcoatRoughness: 0.08,
      side: THREE.DoubleSide,
    });
    const ringGeo = new THREE.RingGeometry(inner, outer, 128, 1);
    const top = new THREE.Mesh(ringGeo, dataMat);
    top.rotation.x = -Math.PI / 2;
    top.position.y = thickness / 2;
    group.add(top);

    const labelMat = new THREE.MeshStandardMaterial({ color: new THREE.Color("#242428"), roughness: 0.6, metalness: 0.1 });
    const bottom = new THREE.Mesh(ringGeo, labelMat);
    bottom.rotation.x = Math.PI / 2;
    bottom.position.y = -thickness / 2;
    group.add(bottom);

    const rimGeo = new THREE.CylinderGeometry(outer, outer, thickness, 128, 1, true);
    const rimMat = new THREE.MeshPhysicalMaterial({ color: "#f4f4f5", transmission: 0.6, roughness: 0.2, thickness: 0.2, side: THREE.DoubleSide });
    const rim = new THREE.Mesh(rimGeo, rimMat);
    group.add(rim);

    const hubGeo = new THREE.RingGeometry(inner, inner + 0.22, 96);
    const hubMat = new THREE.MeshStandardMaterial({ color: "#a1a1aa", roughness: 0.35, metalness: 0.6, transparent: true, opacity: 0.9, side: THREE.DoubleSide });
    const hub = new THREE.Mesh(hubGeo, hubMat);
    hub.rotation.x = -Math.PI / 2;
    hub.position.y = thickness / 2 + 0.001;
    group.add(hub);

    // red accent ring (the "Blood Rush" band on the printed side)
    const bandGeo = new THREE.RingGeometry(0.42, 0.5, 128);
    const bandMat = new THREE.MeshStandardMaterial({ color: "#9f1d1d", roughness: 0.5, side: THREE.DoubleSide });
    const band = new THREE.Mesh(bandGeo, bandMat);
    band.rotation.x = Math.PI / 2;
    band.position.y = -thickness / 2 - 0.001;
    group.add(band);

    const key = new THREE.DirectionalLight("#fff6e8", 1.6);
    key.position.set(3, 4, 2);
    scene.add(key);
    const fill = new THREE.PointLight("#d9a441", 6, 10);
    fill.position.set(-3, 1.5, 1);
    scene.add(fill);
    scene.add(new THREE.AmbientLight("#ffffff", 0.2));

    group.rotation.x = 0.35;

    // pointer tilt
    const target = { x: 0.35, z: 0 };
    const onPointer = (e: PointerEvent) => {
      if (reduced) return;
      const r = host.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      target.x = 0.35 + py * 0.6;
      target.z = -px * 0.6;
    };
    const onLeave = () => {
      target.x = 0.35;
      target.z = 0;
    };
    host.addEventListener("pointermove", onPointer);
    host.addEventListener("pointerleave", onLeave);

    let raf: number | null = null;
    let visible = true;
    let disposed = false;
    const started = performance.now();
    const stop = () => {
      if (raf !== null) cancelAnimationFrame(raf);
      raf = null;
    };
    const loop = (time: number) => {
      raf = null;
      if (disposed || !visible || document.hidden) return;
      if (!reduced) {
        group.rotation.y = (time - started) * .0005;
        group.rotation.x += (target.x - group.rotation.x) * .06;
        group.rotation.z += (target.z - group.rotation.z) * .06;
      }
      try {
        renderer.render(scene, camera);
      } catch {
        onUnavailable();
        return;
      }
      if (!reduced) raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (!disposed && visible && !document.hidden && raf === null) raf = requestAnimationFrame(loop);
    };
    const visibility = () => { if (document.hidden) stop(); else start(); };
    const contextLost = (event: Event) => { event.preventDefault(); stop(); onUnavailable(); };
    document.addEventListener("visibilitychange", visibility);
    renderer.domElement.addEventListener("webglcontextlost", contextLost);

    const resize = () => {
      const w = host.clientWidth || 1;
      const h = host.clientHeight || 1;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      start();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(host);

    const io = new IntersectionObserver(
      ([en]) => {
        visible = en.isIntersecting;
        if (visible) start();
        else stop();
      },
      { threshold: 0.05 },
    );
    io.observe(host);

    return () => {
      disposed = true;
      stop();
      io.disconnect();
      ro.disconnect();
      host.removeEventListener("pointermove", onPointer);
      host.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", visibility);
      renderer.domElement.removeEventListener("webglcontextlost", contextLost);
      [ringGeo, rimGeo, hubGeo, bandGeo].forEach((g) => g.dispose());
      [dataMat, labelMat, rimMat, hubMat, bandMat].forEach((m) => m.dispose());
      envTarget.dispose();
      pmrem.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      if (renderer.domElement.parentNode === host) host.removeChild(renderer.domElement);
    };
  }, [reduced, onUnavailable]);

  return <div ref={hostRef} className="h-full w-full" />;
}
