<frc-boolean-box>
=================

A box that's shown as one color if true and another color if false.

Example usage
=============

API
===

Slots
-----

*None*

Properties/Attributes
---------------------

+---------------+---------------+---------+-----------+---------+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Name          | Attribute     | Type    | Default   | Primary | Description                                                                                                                                                   |
+===============+===============+=========+===========+=========+===============================================================================================================================================================+
| Value         | value         | Boolean | undefined | true    | If true then the boolean box's color will be the true color. If false the color will be the false color. If undefined the color will be the default color.    |
+---------------+---------------+---------+-----------+---------+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Default Color | default-color | String  | "black"   | false   | The color that is displayed if value is undefined.                                                                                                            |
+---------------+---------------+---------+-----------+---------+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
| True Color    | true-color    | String  | "green"   | false   | The color that is displayed if value is true.                                                                                                                 |
+---------------+---------------+---------+-----------+---------+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
| False Color   | false-color   | String  | "red"     | false   | The color that is displayed if value is false.                                                                                                                |
+---------------+---------------+---------+-----------+---------+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Label         | label         | String  | ""        | false   | A text label that is shown in the center of the boolean box.                                                                                                  |
+---------------+---------------+---------+-----------+---------+---------------------------------------------------------------------------------------------------------------------------------------------------------------+

Methods
-------

*None*

Events
------

*None*

CSS Custom Properties
---------------------

*None*
