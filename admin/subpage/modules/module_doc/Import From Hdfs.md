# Import From Hdfs
+ Description

get csv file from a place in hdfs

| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Data Input and Output | Import | DOCKER | 1 | 0 | 2048 | deny |


# Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| output_file | False | FILE |  | False | None |
| url | True | STRING |  | False | None |
| file_path | True | STRING |  | False | None |
| root | True | STRING |  | False | None |
| proxy | True | STRING |  | False | None |
| session | True | STRING |  | False | None |
| timeout | True | STRING |  | False | None |


# Detailed Info of Parameters
## Input Parameters
### 1.url
+ Description

Hostname or IP address of HDFS namenode, prefixed with protocol, followed by WebHDFS port on namenode. You may also specify multiple URLs separated by semicolons for High Availability support.

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING |  | No | None | None |


### 2.file_path
+ Description

 Target HDFS path. If it already exists and is a directory, files will be uploaded inside.

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING |  | No | None | None |


### 3.root
+ Description

Root path, this will be prefixed to all HDFS paths passed to the client. If the root is relative, the path will be assumed relative to the user's home directory

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING |  | No | None | None |


### 4.proxy
+ Description

User to proxy as

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING |  | No | None | None |


### 5.session
+ Description

requests.Session` instance, used to emit all requests.

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING |  | No | None | None |


### 6.timeout
+ Description

 Connection timeouts, forwarded to the request handler. How long to wait for the server to send data before giving up, as a float, or a `(connect_timeout, read_timeout)` tuple. If the timeout is reached, an appropriate exception will be raised. See the requests_ documentation for details.

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING |  | No | None | None |


## Output Parameters
### 1.output_file
+ Description

file you import from hdfs

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | No | None | None |

