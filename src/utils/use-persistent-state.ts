import { useCallback, useState } from 'react';

/**
 * Read and validate a JSON value from localStorage, falling back to `fallback`
 * when storage is unavailable, empty, malformed, or fails the `sanitize` guard.
 * `sanitize` receives the parsed value and must coerce it into a safe `T`.
 */
export function readPersistedValue<T>(
  key: string,
  fallback: T,
  sanitize: (value: unknown) => T
): T {
  if (typeof window === 'undefined') {
    return fallback;
  }

  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) {
      return fallback;
    }

    return sanitize(JSON.parse(raw));
  } catch {
    return fallback;
  }
}

function writePersistedValue<T>(key: string, value: T) {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore quota/availability errors - persistence is best-effort.
  }
}

/**
 * Like `useState`, but the value is seeded from and mirrored to localStorage
 * under `key`. Every update writes the new value back so the selection survives
 * reloads. Pass a `sanitize` guard to validate previously stored data.
 */
export function usePersistentState<T>(key: string, fallback: T, sanitize: (value: unknown) => T) {
  const [value, setValue] = useState<T>(() => readPersistedValue(key, fallback, sanitize));

  const setPersistedValue = useCallback(
    (next: T | ((previous: T) => T)) => {
      setValue((previous) => {
        const resolved = typeof next === 'function' ? (next as (previous: T) => T)(previous) : next;
        writePersistedValue(key, resolved);
        return resolved;
      });
    },
    [key]
  );

  return [value, setPersistedValue] as const;
}
