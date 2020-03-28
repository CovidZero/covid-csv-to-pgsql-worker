CREATE TABLE State (
  id serial primary key,
  abbreviation varchar(2),
  name varchar(25),
  long double precision,
  lat double precision
);

CREATE TABLE CasesPerCity (
  id serial primary key,
	country varchar,
	state_id integer references state(id) not null,
	ibge_id integer,
	city varchar,
	totalcases integer
);

CREATE TABLE CasesPerState (
	id serial primary key,
	country varchar,
	state_id integer references state(id) not null,
	totalcases integer,
	totalcasesms integer,
	notconfirmedbyms integer,
	deaths integer,
	url varchar
);

CREATE TABLE CasesStatePerDay (
    id serial primary key,
	"date" date,
	country varchar,
	state_id integer references state(id) not null,
	newcases integer,
	totalcases integer
);

INSERT INTO Public.State (abbreviation, name, long, lat) VALUES ('AC','Acre',-72.13278532,-8.790273369);
INSERT INTO Public.State (abbreviation, name, long, lat) VALUES ('AL','Alagoas',-36.67169365,-9.78261012);
INSERT INTO Public.State (abbreviation, name, long, lat) VALUES ('AM','Amazonas',-64.68219739,-4.181781605);
INSERT INTO Public.State (abbreviation, name, long, lat) VALUES ('AP','Amapá',-51.97549803,1.391022019);
INSERT INTO Public.State (abbreviation, name, long, lat) VALUES ('BA','Bahia',-41.73416561,-12.47128057);
INSERT INTO Public.State (abbreviation, name, long, lat) VALUES ('CE','Ceará',-39.5850178,-5.097246159);
INSERT INTO Public.State (abbreviation, name, long, lat) VALUES ('DF','Distrito Federal',-47.79584647,-15.77756387);
INSERT INTO Public.State (abbreviation, name, long, lat) VALUES ('ES','Espírito Santo',-40.67555693,-19.5962671);
INSERT INTO Public.State (abbreviation, name, long, lat) VALUES ('GO','Goiás',-49.60311111,-16.0467844);
INSERT INTO Public.State (abbreviation, name, long, lat) VALUES ('MA','Maranhão',-45.29536634,-5.047432049);
INSERT INTO Public.State (abbreviation, name, long, lat) VALUES ('MG','Minas Gerais',-44.63183484,-18.44591442);
INSERT INTO Public.State (abbreviation, name, long, lat) VALUES ('MS','Mato Grosso do Sul',-54.88071217,-20.32456331);
INSERT INTO Public.State (abbreviation, name, long, lat) VALUES ('MT','Mato Grosso',-55.9009429,-12.93153781);
INSERT INTO Public.State (abbreviation, name, long, lat) VALUES ('PA','Pará',-52.4880964,-5.292059687);
INSERT INTO Public.State (abbreviation, name, long, lat) VALUES ('PB','Paraíba',-37.77807815,-6.946955058);
INSERT INTO Public.State (abbreviation, name, long, lat) VALUES ('PE','Pernambuco',-38.05086543,-8.330994796);
INSERT INTO Public.State (abbreviation, name, long, lat) VALUES ('PI','Piauí',-43.17488463,-8.093344997);
INSERT INTO Public.State (abbreviation, name, long, lat) VALUES ('PR','Paraná',-51.63564161,-24.65625532);
INSERT INTO Public.State (abbreviation, name, long, lat) VALUES ('RJ','Rio de Janeiro',-42.89486166,-22.48289272);
INSERT INTO Public.State (abbreviation, name, long, lat) VALUES ('RN','Rio Grande do Norte',-36.68738063,-5.842578641);
INSERT INTO Public.State (abbreviation, name, long, lat) VALUES ('RO','Rondônia',-63.31891522,-10.31709036);
INSERT INTO Public.State (abbreviation, name, long, lat) VALUES ('RR','Roraima',-61.39106106,2.100328071);
INSERT INTO Public.State (abbreviation, name, long, lat) VALUES ('RS','Rio Grande do Sul',-53.33181857,-29.75305161);
INSERT INTO Public.State (abbreviation, name, long, lat) VALUES ('SC','Santa Catarina',-50.50838917,-27.24658227);
INSERT INTO Public.State (abbreviation, name, long, lat) VALUES ('SE','Sergipe',-37.44218263,-10.5944836);
INSERT INTO Public.State (abbreviation, name, long, lat) VALUES ('SP','São Paulo',-48.75933253,-22.25689629);
INSERT INTO Public.State (abbreviation, name, long, lat) VALUES ('TO','Tocantins',-48.35472734,-10.1086123);