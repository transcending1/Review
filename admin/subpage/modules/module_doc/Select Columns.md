# Select Columns
+ Description

select columns from csv file

| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Data Transformation | Manipulation | DOCKER | 1 | 0 | 2048 | keep |


# Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| include_columns | True | STRING |  | False | MULTIPLE |
| exclude_columns | True | STRING |  | False | MULTIPLE |
| input_file1 | True | FILE |  | True | None |
| output_file | False | FILE |  | False | None |
| output_model | False | DIRECTORY | module | False | None |


# Detailed Info of Parameters
## Input Parameters
### 1.include_columns
+ Description

columns included

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING |  | No | MULTIPLE | input_file1 |


### 2.exclude_columns
+ Description

columns excluded

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING |  | No | MULTIPLE | input_file1 |


### 3.input_file1
+ Description

input csv file

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | Yes | None | None |


## Output Parameters
### 1.output_file
+ Description

result after select columns

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | No | None | None |


### 2.output_model
+ Description

output module

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| DIRECTORY | module | No | None | None |



# Test Case
## Case1
## Desc:泰坦尼克数据集排除一些没有用的列
### Input Params

| field | value | desc |
| --- | --- | --- |
| include_columns | [] | 无需填写,只需填写排除的列 |
| exclude_columns | ['NAME', 'TICKET', 'PASSENGERID'] | 这几列在构建预测模型的时候没有价值所以排除 |


### Post Json Format

| PASSENGERID | SURVIVED | PCLASS | NAME | SEX | AGE | SIBSP | PARCH | TICKET | FARE | EMBARKED |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 0 | 3 | Braund, Mr. Owen Harris | male | 22.0 | 1 | 0 | A/5 21171 | 7.25 | S |


### Custom Test Report
+ Data Format Before Transform


| Before |
| --- |
| (1, 11) |


+ Data Example Before Transform


| field | value |
| --- | --- |
| PASSENGERID | 1 |
| SURVIVED | 0 |
| PCLASS | 3 |
| NAME | Braund, Mr. Owen Harris |
| SEX | male |
| AGE | 22.0 |
| SIBSP | 1 |
| PARCH | 0 |
| TICKET | A/5 21171 |
| FARE | 7.25 |
| EMBARKED | S |


+ Data Format After Transform


| After |
| --- |
| (1, 8) |


+ Data Example After Transform


| field | value |
| --- | --- |
| SURVIVED | 0 |
| PCLASS | 3 |
| SEX | male |
| AGE | 22.0 |
| SIBSP | 1 |
| PARCH | 0 |
| FARE | 7.25 |
| EMBARKED | S |


## Case2
## Desc:泰坦尼克数据集选出一些有价值的列
### Input Params

| field | value | desc |
| --- | --- | --- |
| include_columns | ['AGE', 'EMBARKED'] | 需要选择哪些列出来 |
| exclude_columns | [] | 无需填写,只需填写需要选择的列即可 |


### Post Json Format

| PASSENGERID | SURVIVED | PCLASS | NAME | SEX | AGE | SIBSP | PARCH | TICKET | FARE | EMBARKED |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 0 | 3 | Braund, Mr. Owen Harris | male | 22.0 | 1 | 0 | A/5 21171 | 7.25 | S |


### Custom Test Report
+ Data Format Before Transform


| Before |
| --- |
| (1, 11) |


+ Data Example Before Transform


| field | value |
| --- | --- |
| PASSENGERID | 1 |
| SURVIVED | 0 |
| PCLASS | 3 |
| NAME | Braund, Mr. Owen Harris |
| SEX | male |
| AGE | 22.0 |
| SIBSP | 1 |
| PARCH | 0 |
| TICKET | A/5 21171 |
| FARE | 7.25 |
| EMBARKED | S |


+ Data Format After Transform


| After |
| --- |
| (1, 2) |


+ Data Example After Transform


| field | value |
| --- | --- |
| AGE | 22.0 |
| EMBARKED | S |


