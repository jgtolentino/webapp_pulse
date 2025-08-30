create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  email text not null check (position('@' in email) > 1),
  name text,
  company text,
  intent text,
  ua text,
  ip inet,
  created_at timestamptz default now()
);

alter table public.leads enable row level security;

-- anyone can INSERT a lead; nobody can SELECT without auth
drop policy if exists leads_insert_public on public.leads;
drop policy if exists leads_select_none   on public.leads;

create policy leads_insert_public on public.leads
  for insert to anon with check (true);

create policy leads_select_none on public.leads
  for select using (false);

-- simple per-IP rate limit via trigger (1 per minute)
create extension if not exists pgcrypto;
create or replace function public.leads_rate_limit()
returns trigger language plpgsql as $$
begin
  if exists (
    select 1 from public.leads
    where ip = new.ip and created_at > now() - interval '60 seconds'
  ) then
    raise exception 'Rate limited';
  end if;
  return new;
end $$;

drop trigger if exists trg_leads_rate_limit on public.leads;
create trigger trg_leads_rate_limit
before insert on public.leads
for each row execute function public.leads_rate_limit();