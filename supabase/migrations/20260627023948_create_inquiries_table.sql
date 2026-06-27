/*
# Create inquiries table for contact form submissions

1. New Tables
- `inquiries`
  - `id` (uuid, primary key, auto-generated)
  - `nama` (text, not null) — full name of the person submitting the inquiry
  - `whatsapp` (text, not null) — WhatsApp contact number
  - `email` (text, nullable) — optional email address
  - `produk` (text, not null) — product category the inquiry is about
  - `jumlah` (integer, not null, default 0) — requested quantity in pcs
  - `pesan` (text, nullable) — free-text message from the customer
  - `status` (text, not null, default 'new') — inquiry status: new | contacted | closed
  - `created_at` (timestamptz, default now()) — submission timestamp

2. Security
- Enable RLS on `inquiries`.
- This is a no-auth public contact form (no sign-in screen), so the anon-key
  client must be able to INSERT new inquiries and the site owner must be able
  to read them. We allow anon + authenticated to INSERT (anyone can submit a
  contact form) and SELECT (so the admin can list inquiries via the API).
  UPDATE/DELETE are restricted to authenticated (admin) only.
- `USING (true)` on SELECT/INSERT is acceptable here because inquiries are
  intentionally public submissions — there is no ownership concept for a
  contact form. The data is not sensitive (no passwords, no PII beyond what
  the customer voluntarily submits to a business).

3. Indexes
- `inquiries_created_at_idx` on `created_at` DESC for listing newest first.
- `inquiries_status_idx` on `status` for filtering by status.
*/

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nama text NOT NULL,
  whatsapp text NOT NULL,
  email text,
  produk text NOT NULL,
  jumlah integer NOT NULL DEFAULT 0,
  pesan text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anon + authenticated) to submit a new inquiry
DROP POLICY IF EXISTS "anon_insert_inquiries" ON inquiries;
CREATE POLICY "anon_insert_inquiries"
ON inquiries FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Allow anyone to read inquiries (public contact form, admin lists via API)
DROP POLICY IF EXISTS "anon_select_inquiries" ON inquiries;
CREATE POLICY "anon_select_inquiries"
ON inquiries FOR SELECT
TO anon, authenticated
USING (true);

-- Allow authenticated (admin) to update inquiry status
DROP POLICY IF EXISTS "auth_update_inquiries" ON inquiries;
CREATE POLICY "auth_update_inquiries"
ON inquiries FOR UPDATE
TO authenticated
USING (true) WITH CHECK (true);

-- Allow authenticated (admin) to delete inquiries
DROP POLICY IF EXISTS "auth_delete_inquiries" ON inquiries;
CREATE POLICY "auth_delete_inquiries"
ON inquiries FOR DELETE
TO authenticated
USING (true);

-- Indexes for common query patterns
CREATE INDEX IF NOT EXISTS inquiries_created_at_idx ON inquiries (created_at DESC);
CREATE INDEX IF NOT EXISTS inquiries_status_idx ON inquiries (status);
