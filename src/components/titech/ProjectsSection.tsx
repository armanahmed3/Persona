'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, Zap, Star, ChevronDown, Layers } from 'lucide-react';
import * as Icons from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { PROJECT_CATEGORIES, getProjects, TOTAL_PROJECTS, TOTAL_CATEGORIES, Project } from '@/data/projects';
import { SectionHeading } from './SectionHeading';

const PAGE_SIZE = 12;

const DIFFICULTY_COLORS: Record<Project['difficulty'], string> = {
  Intermediate: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
  Advanced: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
  Expert: 'text-fuchsia-400 border-fuchsia-500/30 bg-fuchsia-500/10',
};

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [search, setSearch] = useState('');
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [selected, setSelected] = useState<Project | null>(null);
  const [showAllCats, setShowAllCats] = useState(false);

  const allProjects = useMemo(() => getProjects(), []);

  const filtered = useMemo(() => {
    let result = allProjects;
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.short.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return result;
  }, [allProjects, activeCategory, search]);

  const visibleProjects = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisible(PAGE_SIZE);
  };

  const handleSearch = (val: string) => {
    setSearch(val);
    setVisible(PAGE_SIZE);
  };

  // Show first 12 categories, rest in "more" expand
  const visibleCats = showAllCats ? PROJECT_CATEGORIES : PROJECT_CATEGORIES.slice(0, 12);

  const activeCat = PROJECT_CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-600/10 blur-[120px] animate-float-orb pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 blur-[120px] animate-float-orb pointer-events-none" style={{ animationDelay: '5s' }} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          eyebrow="Project Universe"
          title={
            <>
              {TOTAL_PROJECTS.toLocaleString()}+ <span className="gradient-text-animated">Industry Projects</span>
            </>
          }
          description={`${TOTAL_CATEGORIES} categories. ${TOTAL_PROJECTS.toLocaleString()}+ production-grade projects. From AI agents to cybersecurity — explore what we build.`}
        />

        {/* Stats strip */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-10">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10">
            <Layers className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-medium">{TOTAL_CATEGORIES} Categories</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium">{TOTAL_PROJECTS.toLocaleString()}+ Projects</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10">
            <Star className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium">15 Featured</span>
          </div>
        </div>

        {/* Search bar */}
        <div className="max-w-xl mx-auto mb-8 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search 5,000+ projects..."
            className="pl-11 pr-10 h-12 bg-white/5 border-white/10 focus:border-violet-500 text-base"
          />
          {search && (
            <button
              onClick={() => handleSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full hover:bg-white/10 flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category filter — horizontal scroll on mobile, wrap on desktop */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === 'all'
                ? 'text-white'
                : 'text-muted-foreground hover:text-foreground glass border border-white/10'
            }`}
          >
            {activeCategory === 'all' && (
              <motion.span
                layoutId="cat-tab"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">All Projects</span>
          </button>
          {visibleCats.map((cat) => {
            const Icon = ((Icons as unknown) as Record<string, React.ComponentType<{ className?: string }>>)[cat.icon] || Icons.Box;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`relative px-3 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
                  isActive ? 'text-white' : 'text-muted-foreground hover:text-foreground glass border border-white/10'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="cat-tab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <Icon className="w-3.5 h-3.5 relative z-10" />
                <span className="relative z-10 hidden sm:inline">{cat.name}</span>
                <span className="relative z-10 sm:hidden">{cat.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Show more categories button */}
        {!showAllCats && PROJECT_CATEGORIES.length > 12 && (
          <div className="text-center mb-8">
            <button
              onClick={() => setShowAllCats(true)}
              className="inline-flex items-center gap-1.5 text-sm text-cyan-300 hover:text-cyan-200 transition-colors"
            >
              Show all {TOTAL_CATEGORIES} categories
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}
        {showAllCats && (
          <div className="text-center mb-8">
            <button
              onClick={() => setShowAllCats(false)}
              className="inline-flex items-center gap-1.5 text-sm text-cyan-300 hover:text-cyan-200 transition-colors"
            >
              Show less
              <ChevronDown className="w-4 h-4 rotate-180" />
            </button>
          </div>
        )}

        {/* Results count */}
        <div className="text-center text-sm text-muted-foreground mb-6">
          Showing <span className="text-foreground font-medium">{visibleProjects.length}</span> of{' '}
          <span className="text-foreground font-medium">{filtered.length.toLocaleString()}</span> projects
          {activeCat && (
            <> in <span className="gradient-text font-medium">{activeCat.name}</span></>
          )}
          {search && <> matching "<span className="text-foreground">{search}</span>"</>}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} onMore={setSelected} />
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <Search className="w-12 h-12 mx-auto text-muted-foreground/30 mb-4" />
            <p className="text-lg text-muted-foreground">No projects found. Try a different search or category.</p>
          </div>
        )}

        {/* Load more */}
        {hasMore && (
          <div className="flex justify-center mt-12">
            <Button
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              size="lg"
              variant="outline"
              className="h-14 px-8 border-white/20 bg-white/5 hover:bg-gradient-to-r hover:from-violet-600 hover:to-cyan-500 hover:border-transparent hover:text-white transition-all group"
            >
              <Layers className="w-5 h-5 mr-2" />
              Load {Math.min(PAGE_SIZE, filtered.length - visible)} More
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        )}
      </div>

      {/* Project detail modal */}
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

function ProjectCard({ project, index, onMore }: { project: Project; index: number; onMore: (p: Project) => void }) {
  const cat = PROJECT_CATEGORIES.find((c) => c.id === project.category);
  const Icon = cat ? (((Icons as unknown) as Record<string, React.ComponentType<{ className?: string }>>)[cat.icon] || Icons.Box) : Icons.Box;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
      whileHover={{ y: -4 }}
      onClick={() => onMore(project)}
      className="group relative p-5 rounded-2xl glass-strong border border-white/10 hover:border-violet-500/40 transition-all cursor-pointer overflow-hidden"
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-3 right-3 z-10">
          <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 text-[10px]">
            <Star className="w-2.5 h-2.5 mr-1 fill-white" />
            Featured
          </Badge>
        </div>
      )}

      {/* Glow on hover */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-violet-500/0 via-transparent to-cyan-400/0 group-hover:from-violet-500/5 group-hover:to-cyan-400/5 transition-all" />

      <div className="relative">
        {/* Icon */}
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 border border-white/10"
          style={{ background: `${cat?.color}15`, color: cat?.color }}
        >
          <Icon className="w-5 h-5" />
        </div>

        {/* Title */}
        <h3 className="font-[family-name:var(--font-syne)] text-base font-bold mb-1.5 leading-snug group-hover:text-cyan-300 transition-colors line-clamp-2">
          {project.title}
        </h3>

        {/* Short description */}
        <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">
          {project.short}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-foreground/60"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer: difficulty + view */}
        <div className="flex items-center justify-between">
          <span className={`text-[10px] px-2 py-0.5 rounded-full border ${DIFFICULTY_COLORS[project.difficulty]}`}>
            {project.difficulty}
          </span>
          <span className="text-[11px] text-cyan-300 group-hover:text-cyan-200 flex items-center gap-1 transition-colors">
            View
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const cat = project ? PROJECT_CATEGORIES.find((c) => c.id === project.category) : null;
  const Icon = cat ? (((Icons as unknown) as Record<string, React.ComponentType<{ className?: string }>>)[cat.icon] || Icons.Box) : Icons.Box;

  return (
    <AnimatePresence>
      {project && cat && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl glass-strong border border-white/10"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-8">
              {/* Category + difficulty */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center border border-white/10"
                  style={{ background: `${cat.color}20`, color: cat.color }}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{cat.name}</div>
                  <span className={`inline-block mt-1 text-[10px] px-2 py-0.5 rounded-full border ${DIFFICULTY_COLORS[project.difficulty]}`}>
                    {project.difficulty}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl font-bold mb-4 leading-tight">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-foreground/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
                <a href="#book">
                  <Button className="bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white border-0 glow-violet">
                    Request This Project
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <Button variant="outline" onClick={onClose} className="border-white/20 bg-white/5">
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
