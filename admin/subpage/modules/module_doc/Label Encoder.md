# Label Encoder
+ Description

String index converts string characteristics in a dataset into indexes.

| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Feature Engineering | Feature Conversion | DOCKER | 1 | 0 | 2048 | keep |


# Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| label | True | STRING |  | True | SINGLE |
| input_file1 | True | FILE |  | True | None |
| output_file | False | FILE |  | False | None |
| output_model | False | DIRECTORY | module | False | None |


# Detailed Info of Parameters
## Input Parameters
### 1.label
+ Description

the column you want to convert to number,it is usually used to convert label to number and then reverse the label

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING |  | Yes | SINGLE | input_file1 |


### 2.input_file1
+ Description

csv file

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | Yes | None | None |


## Output Parameters
### 1.output_file
+ Description

output dataset

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
## Desc:泰坦尼克数据集中的字符串SEX字段打上标签变成数值类型
### Input Params

| field | value | desc |
| --- | --- | --- |
| label | SEX | 选取一个连续的字段:SEX |


### Post Json Format

| PASSENGERID | SURVIVED | PCLASS | NAME | SEX | AGE | SIBSP | PARCH | TICKET | FARE | CABIN | EMBARKED |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 0 | 3 | Braund, Mr. Owen Harris | male | 22.0 | 1 | 0 | A/5 21171 | 7.25 | nan | S |


### Custom Test Report
+ Data Format Before Transform


| Before |
| --- |
| (1, 12) |


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
| CABIN | nan |
| EMBARKED | S |


+ Data Format After Transform


| After |
| --- |
| (1, 12) |


+ Data Example After Transform


| field | value |
| --- | --- |
| PASSENGERID | 1 |
| SURVIVED | 0 |
| PCLASS | 3 |
| NAME | Braund, Mr. Owen Harris |
| SEX | 1 |
| AGE | 22.0 |
| SIBSP | 1 |
| PARCH | 0 |
| TICKET | A/5 21171 |
| FARE | 7.25 |
| CABIN | nan |
| EMBARKED | S |


