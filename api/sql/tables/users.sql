/*create_users_tables*/
CREATE TABLE IF NOT EXISTS users
(
    id SERIAL,
    firstName text COLLATE pg_catalog."default" NOT NULL,
		lastName text COLLATE pg_catalog."default" NOT NULL,
    password text COLLATE pg_catalog."default" NOT NULL,
    email text COLLATE pg_catalog."default" UNIQUE NOT NULL,
    permissions_flag integer NOT NULL,
    date_created date NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY (id)
);