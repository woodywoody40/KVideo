/**
 * MovieGrid - Grid layout for movie cards with infinite scroll
 * Handles movie display and loading states
 */

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { MovieCard } from './MovieCard';
import { Icons } from '@/components/ui/Icon';
import { useKeyboardNavigation } from '@/lib/hooks/useKeyboardNavigation';

interface DoubanMovie {
  id: string;
  title: string;
  cover: string;
  rate: string;
  url: string;
}

interface MovieGridProps {
  movies: DoubanMovie[];
  loading: boolean;
  hasMore: boolean;
  onMovieClick: (movie: DoubanMovie) => void;
  prefetchRef: React.RefObject<HTMLDivElement | null>;
  loadMoreRef: React.RefObject<HTMLDivElement | null>;
}

export function MovieGrid({
  movies,
  loading,
  hasMore,
  onMovieClick,
  prefetchRef,
  loadMoreRef
}: MovieGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // Calculate columns for keyboard navigation logic
  const [columns, setColumns] = useState(2);
  useEffect(() => {
    const updateColumns = () => {
      const w = window.innerWidth;
      if (w >= 1024) setColumns(5);
      else if (w >= 768) setColumns(4);
      else if (w >= 640) setColumns(3);
      else setColumns(2);
    };
    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  useKeyboardNavigation({
    enabled: true,
    containerRef,
    itemCount: movies.length,
    orientation: 'grid',
    columns,
    onNavigate: useCallback((index: number) => {
      const el = cardRefs.current[index];
      if (el) {
        el.focus();
        el.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
      }
    }, []),
    onSelect: useCallback((index: number) => {
      // Simulate click for validation (Link handles navigation)
      const el = cardRefs.current[index];
      el?.click();
    }, [])
  });

  if (movies.length === 0 && !loading) {
    return <MovieGridEmpty />;
  }

  return (
    <div ref={containerRef}>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {movies.map((movie, index) => (
          <MovieCard
            key={movie.id}
            ref={(el) => { cardRefs.current[index] = el; }}
            movie={movie}
            onMovieClick={onMovieClick}
          />
        ))}
      </div>

      {/* Prefetch Trigger - Earlier */}
      {hasMore && !loading && <div ref={prefetchRef} className="h-1" />}

      {/* Loading Indicator */}
      {loading && <MovieGridLoading />}

      {/* Intersection Observer Target */}
      {hasMore && !loading && <div ref={loadMoreRef} className="h-20" />}

      {/* No More Content */}
      {!hasMore && movies.length > 0 && <MovieGridNoMore />}
    </div>
  );
}

function MovieGridLoading() {
  return (
    <div className="flex justify-center py-12">
      <div className="flex flex-col items-center gap-3">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-[var(--accent-color)] border-t-transparent"></div>
        <p className="text-sm text-[var(--text-color-secondary)]">載入中...</p>
      </div>
    </div>
  );
}

function MovieGridNoMore() {
  return (
    <div className="text-center py-12">
      <p className="text-[var(--text-color-secondary)]">沒有更多內容了</p>
    </div>
  );
}

function MovieGridEmpty() {
  return (
    <div className="text-center py-20">
      <Icons.Film size={64} className="text-[var(--text-color-secondary)] mx-auto mb-4" />
      <p className="text-[var(--text-color-secondary)]">暫無內容</p>
    </div>
  );
}
