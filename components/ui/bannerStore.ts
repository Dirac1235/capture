"use client";

import { useSyncExternalStore } from "react";

/**
 * Global, persisted dismissal state for the announcement banner.
 *
 * Uses an external store backed by localStorage so the banner stays dismissed
 * across client navigation, full reloads, and other tabs. useSyncExternalStore
 * gives a stable server snapshot (visible) for SSR/hydration.
 */
const KEY = "captureBannerDismissed";
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  window.addEventListener("storage", cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", cb);
  };
}

function getSnapshot() {
  try {
    return localStorage.getItem(KEY) === "1";
  } catch {
    return false;
  }
}

function getServerSnapshot() {
  return false; // banner visible during SSR
}

/** True when the banner has been dismissed. */
export function useBannerDismissed() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/** Dismiss the banner everywhere and persist it. */
export function dismissBanner() {
  try {
    localStorage.setItem(KEY, "1");
  } catch {
    /* ignore */
  }
  emit();
}
