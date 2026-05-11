CREATE TABLE IF NOT EXISTS reviews (
  id         uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamptz DEFAULT now(),
  nombre     text NOT NULL,
  apellido   text NOT NULL,
  nps        integer NOT NULL,
  q2         text,
  q3         text,
  q4         text
);
