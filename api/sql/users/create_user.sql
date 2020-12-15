INSERT INTO public.users (firstName, lastName, password, email, permissions_flag, date_created) 
VALUES ($1, $2, $3, $4, $5, $6)
RETURNING id;