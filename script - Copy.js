/*Installing MySQL
 * Stopping MySQL database server mysqld
   ...done.
 * Starting MySQL database server mysqld
   ...done.
 * Checking for tables which need an upgrade, are corrupt or were 
not closed cleanly.

MySQL 5.5 database added.  Please make note of these credentials:

       Root User: swizzletv
   Database Name: c9

 * Starting MySQL database server mysqld
   ...done.
swizzletv:~/workspace $ mysql-ctl cli
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 55
Server version: 5.5.57-0ubuntu0.14.04.1 (Ubuntu)

Copyright (c) 2000, 2017, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> ^CCtrl-C -- exit!
Aborted
swizzletv:~/workspace $ mysql-ctl stop
 * Stopping MySQL database server mysqld
   ...done.
swizzletv:~/workspace $ mysql-ctl start
 * Starting MySQL database server mysqld
   ...done.
 * Checking for tables which need an upgrade, are corrupt or were 
not closed cleanly.
swizzletv:~/workspace $ help
GNU bash, version 4.3.11(1)-release (x86_64-pc-linux-gnu)
These shell commands are defined internally.  Type `help' to see this list.
Type `help name' to find out more about the function `name'.
Use `info bash' to find out more about the shell in general.
Use `man -k' or `info' to find out more about commands not in this list.

A star (*) next to a name means that the command is disabled.

 job_spec [&]                                                                                 history [-c] [-d offset] [n] or history -anrw [filename] or history -ps arg [arg...]
 (( expression ))                                                                             if COMMANDS; then COMMANDS; [ elif COMMANDS; then COMMANDS; ]... [ else COMMANDS; ] fi
 . filename [arguments]                                                                       jobs [-lnprs] [jobspec ...] or jobs -x command [args]
 :                                                                                            kill [-s sigspec | -n signum | -sigspec] pid | jobspec ... or kill -l [sigspec]
 [ arg... ]                                                                                   let arg [arg ...]
 [[ expression ]]                                                                             local [option] name[=value] ...
 alias [-p] [name[=value] ... ]                                                               logout [n]
 bg [job_spec ...]                                                                            mapfile [-n count] [-O origin] [-s count] [-t] [-u fd] [-C callback] [-c quantum] [array]>
 bind [-lpsvPSVX] [-m keymap] [-f filename] [-q name] [-u name] [-r keyseq] [-x keyseq:shel>  popd [-n] [+N | -N]
 break [n]                                                                                    printf [-v var] format [arguments]
 builtin [shell-builtin [arg ...]]                                                            pushd [-n] [+N | -N | dir]
 caller [expr]                                                                                pwd [-LP]
 case WORD in [PATTERN [| PATTERN]...) COMMANDS ;;]... esac                                   read [-ers] [-a array] [-d delim] [-i text] [-n nchars] [-N nchars] [-p prompt] [-t timeo>
 cd [-L|[-P [-e]] [-@]] [dir]                                                                 readarray [-n count] [-O origin] [-s count] [-t] [-u fd] [-C callback] [-c quantum] [arra>
 command [-pVv] command [arg ...]                                                             readonly [-aAf] [name[=value] ...] or readonly -p
 compgen [-abcdefgjksuv] [-o option]  [-A action] [-G globpat] [-W wordlist]  [-F function]>  return [n]
 complete [-abcdefgjksuv] [-pr] [-DE] [-o option] [-A action] [-G globpat] [-W wordlist]  [>  select NAME [in WORDS ... ;] do COMMANDS; done
 compopt [-o|+o option] [-DE] [name ...]                                                      set [-abefhkmnptuvxBCHP] [-o option-name] [--] [arg ...]
 continue [n]                                                                                 shift [n]
 coproc [NAME] command [redirections]                                                         shopt [-pqsu] [-o] [optname ...]
 declare [-aAfFgilnrtux] [-p] [name[=value] ...]                                              source filename [arguments]
 dirs [-clpv] [+N] [-N]                                                                       suspend [-f]
 disown [-h] [-ar] [jobspec ...]                                                              test [expr]
 echo [-neE] [arg ...]                                                                        time [-p] pipeline
 enable [-a] [-dnps] [-f filename] [name ...]                                                 times
 eval [arg ...]                                                                               trap [-lp] [[arg] signal_spec ...]
 exec [-cl] [-a name] [command [arguments ...]] [redirection ...]                             true
 exit [n]                                                                                     type [-afptP] name [name ...]
 export [-fn] [name[=value] ...] or export -p                                                 typeset [-aAfFgilrtux] [-p] name[=value] ...
 false                                                                                        ulimit [-SHabcdefilmnpqrstuvxT] [limit]
 fc [-e ename] [-lnr] [first] [last] or fc -s [pat=rep] [command]                             umask [-p] [-S] [mode]
 fg [job_spec]                                                                                unalias [-a] name [name ...]
 for NAME [in WORDS ... ] ; do COMMANDS; done                                                 unset [-f] [-v] [-n] [name ...]
 for (( exp1; exp2; exp3 )); do COMMANDS; done                                                until COMMANDS; do COMMANDS; done
 function name { COMMANDS ; } or name () { COMMANDS ; }                                       variables - Names and meanings of some shell variables
 getopts optstring name [arg]                                                                 wait [-n] [id ...]
 hash [-lr] [-p pathname] [-dt] [name ...]                                                    while COMMANDS; do COMMANDS; done
 help [-dms] [pattern ...]                                                                    { COMMANDS ; }
swizzletv:~/workspace $ show databases
bash: show: command not found
swizzletv:~/workspace $ show databases;
bash: show: command not found
swizzletv:~/workspace $ show databases
bash: show: command not found
swizzletv:~/workspace $ 
swizzletv:~/workspace $ show
bash: show: command not found
swizzletv:~/workspace $  databases
bash: databases: command not found
swizzletv:~/workspace $ select @@hsotname;
> select @@hostname;
bash: syntax error near unexpected token `select'
swizzletv:~/workspace $ select @@hostname;
> 
> show databases;
bash: syntax error near unexpected token `show'
swizzletv:~/workspace $ clear
swizzletv:~/workspace $ mysql-ctl start
 * Starting MySQL database server mysqld
   ...done.
swizzletv:~/workspace $ show databases;
bash: show: command not found
swizzletv:~/workspace $ mysql-ctl start
 * Starting MySQL database server mysqld
   ...done.
swizzletv:~/workspace $ mysql-ctl cli
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 52
Server version: 5.5.57-0ubuntu0.14.04.1 (Ubuntu)

Copyright (c) 2000, 2017, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> show databases
    -> 
    -> help
    -> help;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'help
help' at line 3
mysql> ^CCtrl-C -- exit!
Aborted
swizzletv:~/workspace $ mysql-ctl cli
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 54
Server version: 5.5.57-0ubuntu0.14.04.1 (Ubuntu)

Copyright (c) 2000, 2017, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| c9                 |
| mysql              |
| performance_schema |
| phpmyadmin         |
+--------------------+
5 rows in set (0.00 sec)

mysql> select @@hostname;
+--------------------------------+
| @@hostname                     |
+--------------------------------+
| swizzletv-mysql-course-6688062 |
+--------------------------------+
1 row in set (0.00 sec)

mysql> CREATE DATABASE testing_db
    -> CREATE DATABASE testing_db;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'CREATE DATABASE testing_db' at line 2
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| c9                 |
| mysql              |
| performance_schema |
| phpmyadmin         |
+--------------------+
5 rows in set (0.00 sec)

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| c9                 |
| mysql              |
| performance_schema |
| phpmyadmin         |
+--------------------+
5 rows in set (0.00 sec)

mysql> CREATE DATABASE testing_db; 
Query OK, 1 row affected (0.00 sec)

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| c9                 |
| mysql              |
| performance_schema |
| phpmyadmin         |
| testing_db         |
+--------------------+
6 rows in set (0.00 sec)

mysql> DROP DATABASE testing_db;
Query OK, 0 rows affected (0.00 sec)

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| c9                 |
| mysql              |
| performance_schema |
| phpmyadmin         |
+--------------------+
5 rows in set (0.00 sec)

mysql> CREATE DATABASE testing_db; 
Query OK, 1 row affected (0.00 sec)

mysql> USE testing_db;
Database changed
mysql> SELECT DATABASE testing_db;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'testing_db' at line 1
mysql> SELECT DATABASE() testing_db;
+------------+
| testing_db |
+------------+
| testing_db |
+------------+
1 row in set (0.00 sec)

mysql>  CREATE TABLE cats ()
    -> ^CCtrl-C -- exit!
Aborted
swizzletv:~/workspace $ mysql-ctl cli
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 56
Server version: 5.5.57-0ubuntu0.14.04.1 (Ubuntu)

Copyright (c) 2000, 2017, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> CREATE TABLE cats ( name VARCHAR(100), age INT );                                                                                                                                  
ERROR 1046 (3D000): No database selected
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| c9                 |
| mysql              |
| performance_schema |
| phpmyadmin         |
| testing_db         |
+--------------------+
6 rows in set (0.00 sec)

mysql> USE DATABASE testing_db;
ERROR 1049 (42000): Unknown database 'DATABASE'
mysql> USE testing_db;
Database changed
mysql> CREATE TABLE cats ( name VARCHAR(100), age INT );                                                                                                                                   
Query OK, 0 rows affected (0.02 sec)

mysql> show databases;                                                                                                                                                                     
+--------------------+
| Database           |
+--------------------+
| information_schema |
| c9                 |
| mysql              |
| performance_schema |
| phpmyadmin         |
| testing_db         |
+--------------------+
6 rows in set (0.00 sec)

mysql> show databases() training_db;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '() training_db' at line 1
mysql> USE testing_db;
Database changed
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| c9                 |
| mysql              |
| performance_schema |
| phpmyadmin         |
| testing_db         |
+--------------------+
6 rows in set (0.00 sec)

mysql> USE testing_db;
Database changed
mysql> SHOW COLUMNS FROM traing_db;
ERROR 1146 (42S02): Table 'testing_db.traing_db' doesn't exist
mysql> SHOW COLUMNS FROM training_db;
ERROR 1146 (42S02): Table 'testing_db.training_db' doesn't exist
mysql> SHOW COLUMNS FROM cats;
+-------+--------------+------+-----+---------+-------+
| Field | Type         | Null | Key | Default | Extra |
+-------+--------------+------+-----+---------+-------+
| name  | varchar(100) | YES  |     | NULL    |       |
| age   | int(11)      | YES  |     | NULL    |       |
+-------+--------------+------+-----+---------+-------+
2 rows in set (0.00 sec)

mysql> DESC cats;
+-------+--------------+------+-----+---------+-------+
| Field | Type         | Null | Key | Default | Extra |
+-------+--------------+------+-----+---------+-------+
| name  | varchar(100) | YES  |     | NULL    |       |
| age   | int(11)      | YES  |     | NULL    |       |
+-------+--------------+------+-----+---------+-------+
2 rows in set (0.01 sec)

mysql> SHOW TABLES
    -> cats
    -> 
    -> ^CCtrl-C -- exit!
Aborted
swizzletv:~/workspace $ mysql-ctl cli
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 58
Server version: 5.5.57-0ubuntu0.14.04.1 (Ubuntu)

Copyright (c) 2000, 2017, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> SHOW TABLES;
ERROR 1046 (3D000): No database selected
mysql> show databases;                                                                                                                                                      
+--------------------+
| Database           |
+--------------------+
| information_schema |
| c9                 |
| mysql              |
| performance_schema |
| phpmyadmin         |
| testing_db         |
+--------------------+
6 rows in set (0.00 sec)

mysql> USE testing_db;                                                                                                                                                      
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| c9                 |
| mysql              |
| performance_schema |
| phpmyadmin         |
| testing_db         |
+--------------------+
6 rows in set (0.00 sec)

mysql> SHOW TABLES;
+----------------------+
| Tables_in_testing_db |
+----------------------+
| cats                 |
+----------------------+
1 row in set (0.00 sec)

mysql> CREATE TABLE pastries(
    -> name VARCHAR(50)
    -> quantity INT
    -> );
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'quantity INT
)' at line 3
mysql> CREATE TABLE pastries( name VARCHAR(50), quantity INT );                                                                                                                            
Query OK, 0 rows affected (0.01 sec)

mysql> SHOW TABLES;
+----------------------+
| Tables_in_testing_db |
+----------------------+
| cats                 |
| pastries             |
+----------------------+
2 rows in set (0.00 sec)

mysql> DROP TABLE pastieries
    -> ;
ERROR 1051 (42S02): Unknown table 'pastieries'
mysql> DROP TABLE pastries;
Query OK, 0 rows affected (0.00 sec)

mysql> SHOW TABLES;
+----------------------+
| Tables_in_testing_db |
+----------------------+
| cats                 |
+----------------------+
1 row in set (0.00 sec)

mysql> SHOW TABLES;
+----------------------+
| Tables_in_testing_db |
+----------------------+
| cats                 |
+----------------------+
1 row in set (0.00 sec)

mysql> INSERT INTO cats(name, age)
    -> VALUES('blue' , 1);
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO cats(age, name)
    -> VALUES(11, 'Draco';
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '' at line 2
mysql> INSERT INTO cats(age, name) VALUES(11 , 'Draco');
Query OK, 1 row affected (0.01 sec)

mysql> SHOW TABLES() cats
    -> 
    -> SHOW TABLES() cats'
    '> SHOW TABLES() cats;
    '> ;
    '> 
    '> SHOW TABLES() catsx
    '> x
    '> 
    '> 
    '> 
    '> 
    '> 
    '> 
    '> clear
    '> /z
    '> /w
    '> x
    '> z
    '> exit
    '> '
    -> '>
    '> clear
    '> ^CCtrl-C -- exit!
Aborted
swizzletv:~/workspace $ mysql-ctl cli
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 60
Server version: 5.5.57-0ubuntu0.14.04.1 (Ubuntu)

Copyright (c) 2000, 2017, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| c9                 |
| mysql              |
| performance_schema |
| phpmyadmin         |
| testing_db         |
+--------------------+
6 rows in set (0.00 sec)

mysql> USE testing_db;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| c9                 |
| mysql              |
| performance_schema |
| phpmyadmin         |
| testing_db         |
+--------------------+
6 rows in set (0.00 sec)

mysql> SHOW TABLES;
+----------------------+
| Tables_in_testing_db |
+----------------------+
| cats                 |
+----------------------+
1 row in set (0.00 sec)

mysql> DESC cats;                                                                                                                                                             
+-------+--------------+------+-----+---------+-------+
| Field | Type         | Null | Key | Default | Extra |
+-------+--------------+------+-----+---------+-------+
| name  | varchar(100) | YES  |     | NULL    |       |
| age   | int(11)      | YES  |     | NULL    |       |
+-------+--------------+------+-----+---------+-------+
2 rows in set (0.01 sec)

mysql> show tables;
+----------------------+
| Tables_in_testing_db |
+----------------------+
| cats                 |
+----------------------+
1 row in set (0.00 sec)

mysql> INSERT INTO cats (name, age)
    -> VALUES ('blue' , 1);
Query OK, 1 row affected (0.00 sec)

mysql> INSERT INTO cats (age, name) VALUES ('11' , draco);                                                                                                                               
ERROR 1054 (42S22): Unknown column 'draco' in 'field list'
mysql> INSERT INTO cats (age, name) VALUES (11 , Draco);
ERROR 1054 (42S22): Unknown column 'Draco' in 'field list'
mysql> INSERT INTO cats (age, name) VALUES (11 , 'Draco');
Query OK, 1 row affected (0.00 sec)

mysql> show tables;
+----------------------+
| Tables_in_testing_db |
+----------------------+
| cats                 |
+----------------------+
1 row in set (0.00 sec)

mysql> show tables;SELECT * From cats;
+----------------------+
| Tables_in_testing_db |
+----------------------+
| cats                 |
+----------------------+
1 row in set (0.00 sec)

+-------+------+
| name  | age  |
+-------+------+
| blue  |    1 |
| Draco |   11 |
| blue  |    1 |
| Draco |   11 |
+-------+------+
4 rows in set (0.00 sec)

mysql> INSERT INTO cats(name, age)
    -> VALUES ('Peanut' , 2)
    -> ,('Butter' , 4)
    -> ,('Jelly" , 7);
    '> 
    '> ,('Jelly" , 7);
    "> ;
    "> ,('Jelly' , 7);                                                                                                                                                                     
    "> ,('Jelly' , 7);
    "> exit
    "> quit;
    "> quit
    "> quit.
    "> quit>
    "> quit:>
    "> 
    "> '
    "> ';
    "> 
    "> 
    "> 
    "> 
    "> 
    "> QUIT
    "> 
    "> 
    "> QUIT;
    "> ^CCtrl-C -- exit!
Aborted
swizzletv:~/workspace $ mysql-ctl cli
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 62
Server version: 5.5.57-0ubuntu0.14.04.1 (Ubuntu)

Copyright (c) 2000, 2017, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> showtables;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'showtables' at line 1
mysql> SHOW TABLES
    -> ;
ERROR 1046 (3D000): No database selected
mysql> SHOW TABLES;
ERROR 1046 (3D000): No database selected
mysql> USE training_db
ERROR 1049 (42000): Unknown database 'training_db'
mysql> USE training_db;
ERROR 1049 (42000): Unknown database 'training_db'
mysql> SHOW TABLES;
ERROR 1046 (3D000): No database selected
mysql> USE trainig_db;
ERROR 1049 (42000): Unknown database 'trainig_db'
mysql> USE training_db;
ERROR 1049 (42000): Unknown database 'training_db'
mysql> SHOW TABLES;
ERROR 1046 (3D000): No database selected
mysql> SHOW databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| c9                 |
| mysql              |
| performance_schema |
| phpmyadmin         |
| testing_db         |
+--------------------+
6 rows in set (0.00 sec)

mysql> USE testing_db;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
mysql> SHOW TABLES;
+----------------------+
| Tables_in_testing_db |
+----------------------+
| cats                 |
+----------------------+
1 row in set (0.00 sec)

mysql> SHOW databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| c9                 |
| mysql              |
| performance_schema |
| phpmyadmin         |
| testing_db         |
+--------------------+
6 rows in set (0.00 sec)

mysql> SELECT * FROM cats
    -> ;
+-------+------+
| name  | age  |
+-------+------+
| blue  |    1 |
| Draco |   11 |
| blue  |    1 |
| Draco |   11 |
+-------+------+
4 rows in set (0.00 sec)

mysql> SELECT * FROM cats;
+-------+------+
| name  | age  |
+-------+------+
| blue  |    1 |
| Draco |   11 |
| blue  |    1 |
| Draco |   11 |
+-------+------+
4 rows in set (0.00 sec)

mysql> INSERT INTO cats(name, age)
    -> VALUES ('Peanut', 2)
    -> ,('Butter', 4)
    -> ,('Jelly', 7);
Query OK, 3 rows affected (0.00 sec)
Records: 3  Duplicates: 0  Warnings: 0

mysql> SELECT * FROM cats
    -> ;
+--------+------+
| name   | age  |
+--------+------+
| blue   |    1 |
| Draco  |   11 |
| blue   |    1 |
| Draco  |   11 |
| Peanut |    2 |
| Butter |    4 |
| Jelly  |    7 |
+--------+------+
7 rows in set (0.01 sec)

mysql> Drop blue,Draco FROM cats;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'blue,Draco FROM cats' at line 1
mysql> Drop blue,Draco FROM cats;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'blue,Draco FROM cats' at line 1
mysql> 
mysql> CREATE TABE people(
    -> first_name VARCHAR(20),
    -> last_name VARCHAR(20),
    -> age INT
    -> );
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'TABE people(
first_name VARCHAR(20),
last_name VARCHAR(20),
age INT
)' at line 1
mysql> CREATE TABLE people( first_name VARCHAR(20), last_name VARCHAR(20), age INT );                                                                                                      
Query OK, 0 rows affected (0.02 sec)

mysql> DESC people;
+------------+-------------+------+-----+---------+-------+
| Field      | Type        | Null | Key | Default | Extra |
+------------+-------------+------+-----+---------+-------+
| first_name | varchar(20) | YES  |     | NULL    |       |
| last_name  | varchar(20) | YES  |     | NULL    |       |
| age        | int(11)     | YES  |     | NULL    |       |
+------------+-------------+------+-----+---------+-------+
3 rows in set (0.01 sec)

mysql> INSERT INTO people(first_name, last_name, age)
    -> VALUES('Tina', 'Belcher', 13);
Query OK, 1 row affected (0.01 sec)

mysql> SELEECT * FROM people;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'SELEECT * FROM people' at line 1
mysql> SELECT * FROM people;
+------------+-----------+------+
| first_name | last_name | age  |
+------------+-----------+------+
| Tina       | Belcher   |   13 |
+------------+-----------+------+
1 row in set (0.00 sec)

mysql> INSERT INTO people(age, last_name, first_name)
    -> VALUES (42, 'Belcher', 'bob');
Query OK, 1 row affected (0.01 sec)

mysql> SELECT * FROM people;
+------------+-----------+------+
| first_name | last_name | age  |
+------------+-----------+------+
| Tina       | Belcher   |   13 |
| bob        | Belcher   |   42 |
+------------+-----------+------+
2 rows in set (0.00 sec)

mysql> INSERT INTO people(first_name, last_name, age)                                      
    -> VALUES('Linda', 'Belcher', 45),
    -> ('Phillip', 'Frond', 38),
    -> ('Calvin', 'Fischoeder', 70);
Query OK, 3 rows affected (0.01 sec)
Records: 3  Duplicates: 0  Warnings: 0

mysql> SELECT * FROM people;+------------+------------+------+
| first_name | last_name  | age  |
+------------+------------+------+
| Tina       | Belcher    |   13 |
| bob        | Belcher    |   42 |
| Linda      | Belcher    |   45 |
| Phillip    | Frond      |   38 |
| Calvin     | Fischoeder |   70 |
+------------+------------+------+
5 rows in set (0.00 sec)

mysql> DROP TABLE people;
Query OK, 0 rows affected (0.01 sec)

mysql> SELECT * FROM people;                                                               
ERROR 1146 (42S02): Table 'testing_db.people' doesn't exist
mysql> show tables;
+----------------------+
| Tables_in_testing_db |
+----------------------+
| cats                 |
+----------------------+
1 row in set (0.00 sec)

mysql> DROP TABLE cats;
Query OK, 0 rows affected (0.01 sec)

mysql> CREATE TABLE cats
    -> (
    -> cat_id INT NOT NULL AUTO_INCREMENT,
    -> name VARCHAR(100),
    -> breed VARCHAR(100),
    -> age INT,
    -> PRIMARY KEY (cat_id)
    -> );
Query OK, 0 rows affected (0.04 sec)

mysql> DESC cats
    -> ;
+--------+--------------+------+-----+---------+----------------+
| Field  | Type         | Null | Key | Default | Extra          |
+--------+--------------+------+-----+---------+----------------+
| cat_id | int(11)      | NO   | PRI | NULL    | auto_increment |
| name   | varchar(100) | YES  |     | NULL    |                |
| breed  | varchar(100) | YES  |     | NULL    |                |
| age    | int(11)      | YES  |     | NULL    |                |
+--------+--------------+------+-----+---------+----------------+
4 rows in set (0.00 sec)

mysql> */

/*Angular: Load external JavaScript file dynamically
 
Zain ZafarFollow
Jul 17, 2018
If you are creating a large scale app or an enterprise application using Angular 2+, and you have components or directives that requires a certain external JavaScript dependencies like Stripe.js for payments integration, which most certainly isn't’ required on all views of course.
________________________________________
Why do you need to load JS Plugin files on demand?
Angular being a SPA(Single Page Application) loads all it’s scripts on initial page load. So if index.html contains any external JS scripts that are not required on all views, which might increase the latency time for the page to load completely, not the best practice in my opinion.
________________________________________
So, how do you solve this issue?
Let’s say you want to display a chart on your dashboard using ChartJS.
Without further ado, let’s see how it’s done.
Step 1:
Create an Angular Service called DynamicScriptLoaderService*/



/*import { Injectable } from '@angular/core';

interface Scripts {
  name: string;
  src: string;
}

export const ScriptStore: Scripts[] = [
  { name: 'chartjs', src: 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.min.js' },
  { name: 'random-gen', src: '../../../assets/js/random-num-generator.js' }
];

declare var document: any;

@Injectable()
export class DynamicScriptLoaderService {

  private scripts: any = {};

  constructor() {
    ScriptStore.forEach((script: any) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.src
      };
    });
  }

  load(...scripts: string[]) {
    const promises: any[] = [];
    scripts.forEach((script) => promises.push(this.loadScript(script)));
    return Promise.all(promises);
  }

  loadScript(name: string) {
    return new Promise((resolve, reject) => {
      if (!this.scripts[name].loaded) {
        //load script
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.scripts[name].src;
        if (script.readyState) {  //IE
            script.onreadystatechange = () => {
                if (script.readyState === "loaded" || script.readyState === "complete") {
                    script.onreadystatechange = null;
                    this.scripts[name].loaded = true;
                    resolve({script: name, loaded: true, status: 'Loaded'});
                }
            };
        } else {  //Others
            script.onload = () => {
                this.scripts[name].loaded = true;
                resolve({script: name, loaded: true, status: 'Loaded'});
            };
        }
        script.onerror = (error: any) => resolve({script: name, loaded: false, status: 'Loaded'});
        document.getElementsByTagName('head')[0].appendChild(script);
      } else {
        resolve({ script: name, loaded: true, status: 'Already Loaded' });
      }
    });
  }

}*/

/*Last Step:

Yes you read it right, all you need to do is call the service load method with keys of the scripts you want to load in DashboardComponent

Let me show you how*/

/*// Angular
import { Component, OnInit } from '@angular/core';

// Service
import { DynamicScriptLoaderService } from '../../shared/services/dynamic-script-loader.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
 

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) {}

  ngOnInit() {
    // Just call your load scripts function with scripts you want to load
    this.loadScripts();
  }
  
  private loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.dynamicScriptLoader.load('chartjs','random-num').then(data => {
      // Script Loaded Successfully
    }).catch(error => console.log(error));
  }

}*/

/*and….DONE!

Conclusion
Open your Network panel and go to the Home Page of your application, you won’t see chart-js script being fetched.

Now try opening the Dashboard view and you’ll see, a request is sent to chart js CDN.*/