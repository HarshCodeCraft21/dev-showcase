import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/lib/portfolio';
import { ProjectPreview } from './project-preview';
export function ProjectCatalog({home=false}: {home?:boolean}) {
 const [filter,setFilter] = useState('All projects');
 const visible = projects.filter(p => filter === 'All projects' || p.category === filter);
 return <section className="pb-8"><div className="mb-6 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4"><div><div className="eyebrow mb-2 text-muted-foreground">THE PROJECT COLLECTION</div><h2 className="section-heading">Selected work<span className="ml-3 align-middle text-xs font-normal text-muted-foreground">/ 06</span></h2></div>{home && <Link to="/work" className="flex items-center gap-2 pb-1 text-xs">View all projects <ArrowUpRight className="size-4"/></Link>}</div>
 <div className="mb-7 flex flex-wrap items-center gap-1">{['All projects','Web Apps','E-commerce','SaaS'].map(f=><Button key={f} variant={filter === f ? 'default':'ghost'} className="filter-button" onClick={()=>setFilter(f)} aria-pressed={filter===f}>{f}{f==='All projects' && <span className="ml-1 opacity-60">06</span>}</Button>)}<span className="ml-auto hidden text-[11px] text-muted-foreground sm:block">Designed with purpose. Built to perform.</span></div>
 <div className="grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">{(home ? visible.slice(0,3) : visible).map(p=><Link key={p.slug} to="/work/$slug" params={{slug:p.slug}} className="project-card group"><ProjectPreview project={p}/><div className="mt-5 flex justify-between items-center gap-2"><span className="eyebrow text-[9px] text-muted-foreground">{p.category}</span><ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"/></div><h3 className="mt-2">{p.name}</h3><p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.description}</p><div className="mt-4 flex flex-wrap gap-1.5">{p.stack.map(t=><span className="tech-badge" key={t}>{t}</span>)}</div></Link>)}</div>
 {home && <div className="mt-9 text-center"><Button variant="outline" asChild><Link to="/work">Explore the collection <ArrowRight/></Link></Button></div>}
 </section>;
}
