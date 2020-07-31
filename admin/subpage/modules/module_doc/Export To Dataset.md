# Export To Dataset
## Detailed Info
### Description
'convert your csv file to a form in certain database'


| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Data Input and Output | Export | DOCKER | 1 | 0 | 2048 | deny |


### Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| input_file1 | True | FILE |  | True | None |
| type | True | STRING | mysql | True | None |
| host | True | STRING |  | False | None |
| user | True | STRING |  | False | None |
| password | True | STRING |  | False | None |
| port | True | STRING |  | False | None |
| db | True | STRING |  | False | None |
| table | True | STRING |  | False | None |


# Detailed Info of Parameters
## Input Parameters
### 1.input_file1
'csv file you want to store in a form of a database'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | Yes | None | None |


### 2.type
'database type'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | mysql | Yes | None | None |


+ choices


| choice | help |
| --- | --- |
| mysql |  |
| db2 |  |


### 3.host
'database host'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING |  | No | None | None |


### 4.user
'database user'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING |  | No | None | None |


### 5.password
'database user'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING |  | No | None | None |


### 6.port
'database port'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING |  | No | None | None |


### 7.db
'which database you want to use'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING |  | No | None | None |


### 8.table
'which table you want to put your data to'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING |  | No | None | None |


