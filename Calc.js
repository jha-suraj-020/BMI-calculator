


function bmi_calc(a,b)
{
	var c=document.forms.bmiForm,
	d=1*c.w_v.value,
e=c.w_u.options[c.w_u.selectedIndex].value,
f=c.h_ft.options[c.h_ft.selectedIndex].value,
g=c.h_in.options[c.h_in.selectedIndex].value,
h=1*c.h_v.value,
i=c.h_u.options[c.h_u.selectedIndex].value,
j="";
if((!d||d<35||d>600)&&(j+="Weight value is missing or invalid.\n"),
h?(ccBM_is_n(h)||(j+="Height must be a number.\n"),
(f||c.h_in.selectedIndex>0)&&(j+="Please choose only one method for height (ft+in, OR inches/cm).")):ccBM_is_n(f)&&0!=c.h_in.selectedIndex||(j+="Height value is missing or invalid."),j)
return alert(j),!1;
"kg"==e&&(d*=2.20462262),
h?"cm"==i&&(h*=.393700787):h=12*f+1*g;
var k=Math.round(d/(h*h)*703*10)/10,
l="";
l=k<16.5?"severely underweight":k>=16.5&&k<18.5?"underweight":k>=18.5&&k<25?"normal":k>=25&&k<30?"overweight":"obese",l="Your Body Mass Index is "+k+". This is considered <strong>"+l+"</strong>.",document.getElementById("ccBM_lyr_bmi").innerHTML=l}
// function ccBM_is_n(a)
// {return!isNaN(a)&&null!=a&&0!=a.length&&(a+="",a.search(/\s+/)==-1)}if(document.layers&&!document.getElementById)document.write("Sorry, to view the BMI calculator you must use a newer                                                                                                                            