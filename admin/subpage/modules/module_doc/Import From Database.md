# Import From Database
## Detailed Info
### Description
'import data from database to csv'


| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Data Input and Output | Import | DOCKER | 1 | 0 | 2048 | deny |


### Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| output_file | False | FILE |  | False | None |
| type | True | STRING | mysql | True | None |
| host | True | STRING |  | False | None |
| user | True | STRING |  | False | None |
| password | True | STRING |  | False | None |
| port | True | STRING |  | False | None |
| db | True | STRING |  | False | None |
| sql | True | STRING |  | False | None |


# Detailed Info of Parameters
## Input Parameters
### 1.type
'database type'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | mysql | Yes | None | None |


+ choices


| choice | help |
| --- | --- |
| mysql |  |
| db2 |  |


### 2.host
'database host'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING |  | No | None | None |


### 3.user
'database user'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING |  | No | None | None |


### 4.password
'database user'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING |  | No | None | None |


### 5.port
'database port'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING |  | No | None | None |


### 6.db
'which database you want to use'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING |  | No | None | None |


### 7.sql
'sql search sentence to get the data you want from db'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING |  | No | None | None |


## Output Parameters
### 1.output_file
'csv file you import from db'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | No | None | None |


