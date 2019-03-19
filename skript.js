/*
var nomber = 5;
var string = "Hellow";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4/0);
console.log('string'*8)

let arr = ['plum.png', 'orandge.jpg','apple.bmp'];

console.log(arr[0])

alert('Hellow')*/
<html>
<head><title>Факториалы</title></head>
<body>
<h2>Таблица факториалов</h2>
<script>
var fact = 1;
for(i = 1; i < 10; i++) {
fact = fact*i;
document.write(i + "! = " + fact + "<br>");
}
</script>
</body>
</html>



<TITLE>Текст программы (PRE)</TITLE>
<BODY>
<PRE>
function fact(int num):int
if (num>0)
return fact(num–1)*num;
else
return 1;
end if
end function
</PRE>
</BODY>
Текст,&nbsp;отображаемый&nbsp;без&nbsp;переноса.
<BR>
<NOBR>
        <FONT size = 7>
    Этот текст fuck отображывjhvjvhvvvjhvhjvjhvаываается в одной <BR> строке независимо от ширины окна браузера
        </FONT>
    </NOBR>


<BODY>
Это длинное-длинqweqweqweqweное жоqweqweqweqweпываываываываываываывавыаа слово отображается браузером с дефисом и переносится в месте дефиса.<BR>
Слова этого текста могут раз&shy;рывать&shy;ся в указан&shy;ных местах.<BR>
<NOBR>
А этот текст не разрывает&shy;ся несмотря на нали&shy;чие в нем символов пере&shy;носа.
</NOBR>
</BODY>