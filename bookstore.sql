PGDMP      :                 |         	   bookstore    16.1    16.1     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16624 	   bookstore    DATABASE     }   CREATE DATABASE bookstore WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Mexico.1252';
    DROP DATABASE bookstore;
                postgres    false            �            1259    16635    Books    TABLE     �   CREATE TABLE public."Books" (
    id integer NOT NULL,
    author character varying(64) NOT NULL,
    isbn character varying(64) NOT NULL,
    release_date date NOT NULL,
    title character varying(64) NOT NULL,
    user_id integer NOT NULL
);
    DROP TABLE public."Books";
       public         heap    postgres    false            �            1259    16634    Books_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Books_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Books_id_seq";
       public          postgres    false    218            �           0    0    Books_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Books_id_seq" OWNED BY public."Books".id;
          public          postgres    false    217            �            1259    16626    Users    TABLE     �   CREATE TABLE public."Users" (
    email character varying(128) NOT NULL,
    id integer NOT NULL,
    name character varying(64) NOT NULL,
    password text NOT NULL
);
    DROP TABLE public."Users";
       public         heap    postgres    false            �            1259    16625    Users_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Users_id_seq";
       public          postgres    false    216            �           0    0    Users_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;
          public          postgres    false    215            V           2604    16638    Books id    DEFAULT     h   ALTER TABLE ONLY public."Books" ALTER COLUMN id SET DEFAULT nextval('public."Books_id_seq"'::regclass);
 9   ALTER TABLE public."Books" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218            U           2604    16629    Users id    DEFAULT     h   ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);
 9   ALTER TABLE public."Users" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216            �          0    16635    Books 
   TABLE DATA           Q   COPY public."Books" (id, author, isbn, release_date, title, user_id) FROM stdin;
    public          postgres    false    218   �       �          0    16626    Users 
   TABLE DATA           <   COPY public."Users" (email, id, name, password) FROM stdin;
    public          postgres    false    216   v       �           0    0    Books_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."Books_id_seq"', 3, true);
          public          postgres    false    217            �           0    0    Users_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."Users_id_seq"', 3, true);
          public          postgres    false    215            Z           2606    16640    Books Books_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Books"
    ADD CONSTRAINT "Books_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Books" DROP CONSTRAINT "Books_pkey";
       public            postgres    false    218            X           2606    16633    Users Users_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_pkey";
       public            postgres    false    216            [           2606    16641    Books Books_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Books"
    ADD CONSTRAINT "Books_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 F   ALTER TABLE ONLY public."Books" DROP CONSTRAINT "Books_user_id_fkey";
       public          postgres    false    218    216    4696            �   �   x�%�9�0 ��+�F�8�IME�D�8+��x��<���c�M1�1p�.�`��В9�0]K��6�	��Ca��Ej���G����W���
��Kd5���d�����(�uaL+�}�O�X�c��n�S��R���/�      �   �   x�m�=s�0 ���
f��[I�p�j8?�K�酠 V������;<|���+kH�բm$SZ���r9!�8�I��$)f���E�F�`��[��tZ;�#��4��N/��9QÙq��%= ��e�Hw*�_O���t�W���ڂm����u�\��~��r���z�̪=��%�t�"�?P�;���O��ud��A��w�Y�R'�H�
�єY�����L��ofd>U ��g�     