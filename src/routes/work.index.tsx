import { createFileRoute } from '@tanstack/react-router';
import { ProjectCatalog } from '@/components/portfolio/project-catalog';
import { pageHead } from '@/lib/portfolio';
export const Route = createFileRoute('/work/')({head:()=>pageHead('The project collection','Explore web application, SaaS, and e-commerce concepts, with technology stacks and detailed case studies.'),component:Work});
function Work(){return <div className="site-container reveal"><div className="page-intro"><div className="eyebrow mb-5 text-muted-foreground">IDEAS, BROUGHT TO LIFE</div><h1>Good work speaks for itself.</h1><p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">Different challenges. One commitment to getting the details right.</p><p className="mt-4 text-xs text-muted-foreground">Illustrative project concepts · Real client case studies coming soon</p></div><ProjectCatalog/></div>;}
