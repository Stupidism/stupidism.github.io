###	Alternatives
####1. Considering the business model, C/S should be more suitable.
- Reinvent the wheel in my familiar architecture maybe faster, stronger and easier.
####2. <span style="background-color:#ACD55D;color:black;">The “pfl” format sucks. Save xml files just as xml files.</span>
- We only need a transfer between xml files to our models.
<table style="margin-left:27px">
  <td>xml files</td>
  <td style="border:0px"><==></td>
  <td>data model</td>
  <td style="border:0px;"><=<span style="size:3;color:red;">X</span>=></td>
  <td>pfl files</td>
</table>
####3. <span style="background-color: #FFC0CB;color:black;">Use data models generated from xsd files to auto serialize and deSerialize XML files</span>
<table style="margin-left:27px">
  <td>xsd files</td>
  <td style="border:0px">=auto=></td>
  <td>data model</td>
  <td style="border:0px"><=auto=></td>
  <td>xml files</td>
</table>
####4. <span style="background-color:#ACD55D;color:black;">Use Generic classes to refactor data models to make serialize and deSerialize to be easier</span>