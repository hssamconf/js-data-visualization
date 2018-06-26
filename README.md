# JavaScript / Data Visualization

The task of this assignment is to investigate how modern JS technologies can be used to visualize raw data returned
from an external entity.

## Background:

Interactive notebooks are experiencing a rise in popularity. Notebooks offer an environment for Data scientists to
comfortably share research, collaborate with others and explore and visualize data. The data usually comes from
executable code that can be written in the client (e.g. Python, SQL) and is sent to the server for execution. Popular
notebook technologies which this approach are Apache Zeppelin (https://zeppelin.apache.org/) and Jupyter Notebooks
(http://jupyter.org/).

## Tasks:

1. Setup an environment with OracleJET and Knockout.js. See oraclejet.org for instructions.
2. Implement a visualization based on an input-string where the string is translated into ‘Groups’ and ‘Series’ (input
    for most charts)
3. Optional: Give the user the option to change visualization settings (e.g. selected values, colors)
4. **Challenge (1)** : Visualize the data using a Scatter-Chart
5. **Challenge (2)** : Visualize the data using a Box-Plot diagram

The data received from the external entity is a plain string with the following structure (similar to Zeppelin):

**``ColumnA\tColumnB\tColumnC\tColumnD\n1\t2\t3\t4\na\tb\tc\td``**

**\n** splits the data into rows

**\t** splits a row into columns

As an example, the sample string above could be represented in a table such as:

| ColumnA | ColumnB | ColumnC | ColumnD |
|---------|---------|---------|---------|
| 1       | 2       | 3       | 4       |
| a       | b       | c       | d       |

## Requirements:

- Use at least one visualization from:
    [http://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html?component=home&demo=rootVisualiza](http://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html?component=home&demo=rootVisualiza)
    tions_childChart
- Implement a simple input-field where a user can insert the data described earlier (a string separated by tabs and
    new lines)
- Implement a submit-button that will do the conversion
- Fill the parsed information into the chart. The less decisions the user must make before the chart is visualized,
    the better. E.g. you can do a smart selection of series/groups based on input data

# Challenges:

- How to deal with null-values?
- How to deal with incomplete datasets?
- How to group data based on common properties (e.g. id, name)
- How to detect whether a column can be used as input for series/groups in the selected chart?

As an example, this would be one acceptable result:

![alt text](https://image.ibb.co/ctuakT/Oracle_Lab_img1.png)

# Sample Data

A sample dataset is uploaded to: [http://s000.tinyupload.com/index.php?file_id=](http://s000.tinyupload.com/index.php?file_id=)

It is based on the world-database from MySQL: https://dev.mysql.com/doc/world-setup/en/

Another interesting database can be found here: https://dev.mysql.com/doc/employee/en/
