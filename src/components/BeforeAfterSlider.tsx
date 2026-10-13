import React, { useState, useRef, useCallback } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  altBefore?: string;
  altAfter?: string;
  label?: string;
  location?: string;
  aspectRatioClass?: string;
  initialPosition?: number; // 0 to 100
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  altBefore = "Antes da limpeza",
  altAfter = "Depois da higienização",
  label,
  location,
  aspectRatioClass = "aspect-[4/3]",
  initialPosition = 50,
}) => {
  const [position, setPosition] = useState<number>(initialPosition);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setPosition(Math.round(percentage));
    },
    []
  );

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    handlePointerMove(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handlePointerMove(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignorar se já foi libertado
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault();
      setPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault();
      setPosition((prev) => Math.min(100, prev + 5));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setPosition(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setPosition(100);
    }
  };

  return (
    <div className="relative group select-none">
      <div
        ref={containerRef}
        role="slider"
        aria-label={`Comparação de antes e depois: ${label || 'resultado da higienização'}`}
        aria-valuenow={position}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className={`relative w-full ${aspectRatioClass} overflow-hidden rounded-2xl shadow-soft cursor-ew-resize touch-none focus:outline-none focus:ring-4 focus:ring-brand-dark/30 bg-gray-100`}
      >
        {/* Imagem DEPOIS (camada inferior completa) */}
        <img
          src={afterImage}
          alt={altAfter}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Badge "DEPOIS" */}
        <span className="absolute top-3 right-3 z-10 px-2.5 py-1 text-xs font-bold uppercase tracking-wider rounded-md bg-brand-darker/80 text-white backdrop-blur-sm pointer-events-none shadow-sm">
          Depois
        </span>

        {/* Imagem ANTES (camada superior recortada) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `polygon(0% 0%, ${position}% 0%, ${position}% 100%, 0% 100%)` }}
        >
          <img
            src={beforeImage}
            alt={altBefore}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Badge "ANTES" */}
          <span className="absolute top-3 left-3 z-10 px-2.5 py-1 text-xs font-bold uppercase tracking-wider rounded-md bg-content-main/80 text-white backdrop-blur-sm pointer-events-none shadow-sm">
            Antes
          </span>
        </div>

        {/* Linha Divisória e Manípulo Central */}
        <div
          className="absolute top-0 bottom-0 z-20 pointer-events-none"
          style={{ left: `${position}%` }}
        >
          {/* Linha branca vertical com sombra */}
          <div className="absolute top-0 bottom-0 -left-[1.5px] w-[3px] bg-white shadow-[0_0_8px_rgba(0,0,0,0.5)]" />

          {/* Botão circular central */}
          <div className="absolute top-1/2 -left-5 -translate-y-1/2 w-10 h-10 rounded-full bg-brand-dark text-white border-2 border-white shadow-lg flex items-center justify-center transition-transform group-hover:scale-110">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M8 9l-3 3 3 3m8-6l3 3-3 3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Legenda opcional */}
      {(label || location) && (
        <div className="mt-3 flex items-center justify-between text-sm px-1">
          <span className="font-semibold text-content-main">{label}</span>
          {location && (
            <span className="inline-flex items-center text-xs font-medium text-content-muted bg-surface-light px-2.5 py-0.5 rounded-full border border-gray-200">
              📍 {location}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
