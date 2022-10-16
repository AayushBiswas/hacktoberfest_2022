const sechand=document.querySelector('.secs');
const minhand=document.querySelector('.mins');	
const hourhand=document.querySelector('.hours');

function setDate()
{
	const now=new Date();
			
	const seconds=now.getSeconds();
	const secdeg=(seconds/60)*360 +90;
	sechand.style.transform=`rotate(${secdeg}deg)`;

	const mins=now.getMinutes();
	const mindeg=(mins/60)*360+90;
	minhand.style.transform=`rotate(${mindeg}deg)`;

	const hours=now.getHours();
	const hourdeg=(hours/12)*360 +90;
	hourhand.style.transform=`rotate(${hourdeg}deg)`;
}
setInterval(setDate, 1000);
setDate()