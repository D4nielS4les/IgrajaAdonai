-- Create storage bucket for member photos
CREATE BUCKET IF NOT EXISTS members;

-- Set up storage policies for the members bucket
-- Allow authenticated users to upload their own photos
CREATE POLICY "Users can upload their own photos"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'members' AND
    auth.role() = 'authenticated' AND
    (storage.foldername(name))[1] = 'member-photos'
  );

-- Allow authenticated users to update their own photos
CREATE POLICY "Users can update their own photos"
  ON storage.objects
  FOR UPDATE
  TO authenticated
  USING (
    bucket_id = 'members' AND
    (storage.foldername(name))[1] = 'member-photos'
  );

-- Allow public access to read member photos
CREATE POLICY "Public can view member photos"
  ON storage.objects
  FOR SELECT
  TO public
  USING (bucket_id = 'members');