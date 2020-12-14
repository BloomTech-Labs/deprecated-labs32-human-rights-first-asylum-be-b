INSERT INTO public.users (firstName, lastName, password, email, permissions_flag, date_created) 
VALUES ('Test001', 'Test', 'test', 'test@test.com', 0, '01/01/2020') 
ON CONFLICT (email)
DO NOTHING;