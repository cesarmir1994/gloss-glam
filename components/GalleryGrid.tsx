"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import {
  galleryCategories,
  type GalleryCategory,
  type GalleryItem,
} from "@/content/gallery";

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [filter, setFilter] = useState<"todas" | GalleryCategory>("todas");
  const [active, setActive] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      filter === "todas"
        ? items
        : items.filter((item) => item.category === filter),
    [filter, items],
  );

  useEffect(() => {
    setActive(null);
  }, [filter]);

  useEffect(() => {
    if (active === null) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(null);
      }
      if (event.key === "ArrowRight") {
        setActive((current) =>
          current === null ? null : (current + 1) % filtered.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setActive((current) =>
          current === null
            ? null
            : (current - 1 + filtered.length) % filtered.length,
        );
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [active, filtered.length]);

  const current = active === null ? null : filtered[active];

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {galleryCategories.map((category) => {
          const selected = filter === category.id;
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setFilter(category.id)}
              aria-pressed={selected}
              className={`rounded-full border px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.18em] transition ${
                selected
                  ? "border-burgundy bg-burgundy text-cream"
                  : "border-burgundy/20 bg-transparent text-burgundy hover:border-burgundy hover:bg-blush/40"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActive(index)}
            className="group relative aspect-[4/5] overflow-hidden rounded-[1.4rem] bg-sand text-left"
            aria-label={`Ampliar imagen: ${item.label}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/5 to-transparent opacity-80 transition group-hover:opacity-95" />
            <span className="absolute inset-x-0 bottom-0 p-5">
              <span className="block text-[9px] font-medium uppercase tracking-[0.24em] text-cream/60">
                {item.category}
              </span>
              <span className="mt-1 block font-display text-xl text-cream">
                {item.label}
              </span>
            </span>
          </button>
        ))}
      </div>

      {current && active !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.label}
          className="fixed inset-0 z-[100] flex flex-col bg-ink/95 p-4 backdrop-blur-sm sm:p-8"
          onClick={() => setActive(null)}
        >
          <div className="flex items-center justify-between text-cream">
            <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-cream/60">
              {current.category} · {active + 1} / {filtered.length}
            </p>
            <button
              type="button"
              onClick={() => setActive(null)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 transition hover:bg-cream/10"
              aria-label="Cerrar imagen"
            >
              <X size={20} />
            </button>
          </div>

          <div
            className="relative mx-auto mt-4 h-[72vh] w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <div
            className="mx-auto flex w-full max-w-4xl items-center justify-between gap-4 pt-4 text-cream"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() =>
                setActive(
                  (active - 1 + filtered.length) % filtered.length,
                )
              }
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 transition hover:bg-cream/10"
              aria-label="Imagen anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <p className="text-center font-display text-lg">{current.label}</p>
            <button
              type="button"
              onClick={() => setActive((active + 1) % filtered.length)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 transition hover:bg-cream/10"
              aria-label="Imagen siguiente"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
