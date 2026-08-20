-- One active consecration journey per user, plus per-day prayer logs.
create table if not exists journeys (
  id serial primary key,
  user_id text not null unique,
  feast_id text not null,
  feast_name text not null,
  start_iso text not null,
  consecration_iso text not null,
  name text not null default '',
  consecrated_at timestamptz,
  consecrated_name text,
  created_at timestamptz not null default now()
);
create index if not exists journeys_user_id_idx on journeys (user_id);

create table if not exists day_logs (
  id serial primary key,
  user_id text not null,
  day integer not null,
  prayers text not null default '[]',
  note text not null default '',
  completed boolean not null default false,
  unique (user_id, day)
);
create index if not exists day_logs_user_id_idx on day_logs (user_id);
