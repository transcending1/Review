# Replace Missing Data
+ Description

fill the missing value in your dataset with a certain value

| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Data Transformation | Manipulation | DOCKER | 1 | 0 | 2048 | keep |


# Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| columns1 | True | STRING |  | True | MULTIPLE |
| input_file1 | True | FILE |  | True | None |
| filling_method | True | STRING | zero | True | None |
| value | True | STRING |  | False | None |
| output_file | False | FILE |  | False | None |
| output_model | False | DIRECTORY | module | False | None |


# Detailed Info of Parameters
## Input Parameters
### 1.columns1
+ Description

column selector for field input_file1

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING |  | Yes | MULTIPLE | input_file1 |


### 2.input_file1
+ Description

csv file

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | Yes | None | None |


### 3.filling_method
+ Description

the strategy used for filling missing data who's type is number

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | zero | Yes | None | None |


+ choices


| choice | help |
| --- | --- |
| zero | filling with zero |
| minimum | filling with minimum value |
| maximum | filling with maximum value |
| average | filling with average value |
| median | filling with median value |
| value | filling with a certain value to category type |


### 4.value
+ Description

replace with a certain value

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING |  | No | None | None |


## Output Parameters
### 1.output_file
+ Description

merged csv file

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
## Desc:泰坦尼克实验,字符串按值填充缺失值,默认用频率最高的词来填充,可以发现里面的EMBARKED这一列有一个缺失值
### Input Params

| field | value | desc |
| --- | --- | --- |
| columns1 | ['EMBARKED'] | 选择一个字符串的列 |
| filling_method | value | 填充方式选择为按值填充,需要选择自己想要填充的值 |
| value | C | 按照值C进行填充 |


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
| SEX | male |
| AGE | 22.0 |
| SIBSP | 1 |
| PARCH | 0 |
| TICKET | A/5 21171 |
| FARE | 7.25 |
| CABIN | nan |
| EMBARKED | S |


## Case2
## Desc:泰坦尼克实验,数值类型的数据按照均值填充,可以发现年龄里面有相关缺失值.
### Input Params

| field | value | desc |
| --- | --- | --- |
| columns1 | ['AGE'] | 一个数值类型的列,里面包含缺失值 |
| filling_method | average | 填充方式选择为按均值填充 |
| value |  | 无需填写 |


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
| SEX | male |
| AGE | 22.0 |
| SIBSP | 1 |
| PARCH | 0 |
| TICKET | A/5 21171 |
| FARE | 7.25 |
| CABIN | nan |
| EMBARKED | S |


