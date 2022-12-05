-- TERMINAL COMMAND: pg_dump -d nameOfDatabase;
-- Purpose: pg_dump creates a back-up of your database by extracting it(database) into a script file.
-- Create nameOfFile.sql file(in db folder) on server side, paste & save pg_dump script file, need to comment out info after "SET"
-- PostgreSQL database dump
--

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: favorites; Type: TABLE; Schema: public; Owner: tpl522_10
--

CREATE TABLE public.favorites (
    id integer NOT NULL,
    city_name character varying(50),
    zip_code character varying(10),
    user_id character varying(50)
);


ALTER TABLE public.favorites OWNER TO tpl522_10;

--
-- Name: favorites_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_10
--

CREATE SEQUENCE public.favorites_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.favorites_id_seq OWNER TO tpl522_10;

--
-- Name: favorites_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl522_10
--

ALTER SEQUENCE public.favorites_id_seq OWNED BY public.favorites.id;


--
-- Name: images; Type: TABLE; Schema: public; Owner: tpl522_10
--

CREATE TABLE public.images (
    data bytea,
    image_name character varying(50)
);


ALTER TABLE public.images OWNER TO tpl522_10;

--
-- Name: users; Type: TABLE; Schema: public; Owner: tpl522_10
--

CREATE TABLE public.users (
    id integer NOT NULL,
    first_name character varying(50),
    last_name character varying(50),
    username character varying(50),
    email character varying(70)
);


ALTER TABLE public.users OWNER TO tpl522_10;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_10
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO tpl522_10;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl522_10
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: favorites id; Type: DEFAULT; Schema: public; Owner: tpl522_10
--

ALTER TABLE ONLY public.favorites ALTER COLUMN id SET DEFAULT nextval('public.favorites_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: tpl522_10
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: favorites; Type: TABLE DATA; Schema: public; Owner: tpl522_10
--

COPY public.favorites (id, city_name, zip_code, user_id) FROM stdin;
1	Los Angeles	90016	1
2	Los Angeles	90016	2
3	Los Angeles	90016	3
4	Beloit	53511	4
5	Beloit	53511	5
6	Beloit	53511	6
\.


--
-- Data for Name: images; Type: TABLE DATA; Schema: public; Owner: tpl522_10
--

COPY public.images (data, image_name) FROM stdin;
\\x2f55736572732f74706c3532325f31302f4465736b746f702f696d616765732f636c6f7564792e706e67	cloudy
\\x2f55736572732f74706c3532325f31302f4465736b746f702f696d616765732f636c6561725f736b792e706e67	clear_sky
\\x2f55736572732f74706c3532325f31302f4465736b746f702f696d616765732f7261696e792e706e67	rainy
\\x2f55736572732f74706c3532325f31302f4465736b746f702f696d616765732f7363617474657265645f636c6f7564732e706e67	scattered_clouds
\\x2f55736572732f74706c3532325f31302f4465736b746f702f696d616765732f73756e6e6e792e706e67	sunny
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: tpl522_10
--

COPY public.users (id, first_name, last_name, username, email) FROM stdin;
1	Ana	Cabello	acab	acab@email.com
2	Balto	Johnson	bjohnson	bjohnson@email.com
3	Crystal	White	bwhite	bwhite@email.com
4	John	Smith	jsmith	jsmith@gmail.com
5	Joe	Goldberg	jgoldberg	jgoldberg@gmail.com
6	Love	Quinn	lquinn	lquinn@you.com
7	Forty	Quinn	forty	fquinn@you.com
8	Ellie	Avales	Elave	eavales@you.com
9	Elena	Carmona	elecarmona	ecarmona@gmail.com
10	kimberly	dang	kim	kdang@gmail.com
11	ismael	cruz	ismacruz	isma@gmail.com
\.


--
-- Name: favorites_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_10
--

SELECT pg_catalog.setval('public.favorites_id_seq', 6, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_10
--

SELECT pg_catalog.setval('public.users_id_seq', 11, true);


--
-- Name: favorites favorites_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_10
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_10
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--