-- TERMINAL COMMAND: pg_dump -d nameOfDatabase; 
-- Purpose: pg_dump creates a back-up of your database by extracting it(database) into a script file.
-- Create nameOfFile.sql file(in db folder) on server side, paste & save pg_dump script file, need to comment out info after "SET"
-- PostgreSQL database dump

-- Dumped from database version 14.5 (Homebrew)
-- Dumped by pg_dump version 14.5 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: citext; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS citext WITH SCHEMA public;


--
-- Name: EXTENSION citext; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION citext IS 'data type for case-insensitive character strings';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: contacts; Type: TABLE; Schema: public; Owner: tpl522_10
--

CREATE TABLE public.contacts (
    id integer NOT NULL,
    first_name character varying(50) NOT NULL,
    last_name character varying(50),
    email character varying(50),
    phone_number text,
    notes character varying(200)
);


ALTER TABLE public.contacts OWNER TO tpl522_10;

--
-- Name: contactlist_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_10
--

CREATE SEQUENCE public.contactlist_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.contactlist_id_seq OWNER TO tpl522_10;

--
-- Name: contactlist_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl522_10
--

ALTER SEQUENCE public.contactlist_id_seq OWNED BY public.contacts.id;


--
-- Name: contacts id; Type: DEFAULT; Schema: public; Owner: tpl522_10
--

ALTER TABLE ONLY public.contacts ALTER COLUMN id SET DEFAULT nextval('public.contactlist_id_seq'::regclass);


--
-- Data for Name: contacts; Type: TABLE DATA; Schema: public; Owner: tpl522_10
--

COPY public.contacts (id, first_name, last_name, email, phone_number, notes) FROM stdin;
3	Love	Quinn	lquinn@you.com	(646)555-5683	Last seen in Madre Linda, CA
11	Candance	Stone	cstone@you.com	(213)226-3223	Last seen in storage locked in Los Angeles, CA
12	Delilah	Aviles	daviles@you.com	(323)335-4524	Last seen in storage locked in Los Angeles, CA
14	Natalie	Engler	negler@you.com	(530)628-2543	Last Seen in A Frest Tart
17	Joslyn	Olivas	bsmith@gmail.com	(213)5673346	Trying to filter through email
18	Michael	Johnson	mjohnson@gmail.com	4352352	Testing the Search Capability
\.


--
-- Name: contactlist_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_10
--

SELECT pg_catalog.setval('public.contactlist_id_seq', 3, true);


--
-- Name: contacts contactlist_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_10
--

ALTER TABLE ONLY public.contacts
    ADD CONSTRAINT contactlist_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete