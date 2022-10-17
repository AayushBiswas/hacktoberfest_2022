var task=document.getElementById("task");
var list=document.getElementById("task_list");
var l=document.querySelector('.list');
var delname='';
window.addEventListener('load',()=>{

	// To display the data on page reload
	
	var data=[];//array of task names
	existingData=JSON.parse(window.localStorage.getItem('tasks'));
	if(existingData!==null)
	for (var i = 0; i <existingData.length; i++) {
		if(existingData[i]['btn']=='off'){
			list.innerHTML+=`
			<li>
				<input type="checkbox" id='chk'> 
				<p>${existingData[i]['task']}</p>
				<button id='del'>delete</button>
			</li>`;
			data.push(existingData[i]['task']);
		}else{
			list.innerHTML+=`
			<li>
				<input type="checkbox" id='chk' checked> 
				<p>${existingData[i]['task']}</p>
				<button id='del'>delete</button>
			</li>`;
			data.push(existingData[i]['task']);
		}
	}

	// To delete a task from the list

	var d=document.querySelectorAll('#del');
	d.forEach(function(el){
		el.addEventListener('click',()=>{
			delname=el.nextSibling.parentNode.innerText.split('\n')[0];
			// console.log(delname,data);
			for (var i = 0; i < data.length; i++) {
				if(data[i]===delname){
					// console.log(i);
					existingData.splice(i,1);
					window.localStorage.setItem('tasks',JSON.stringify(existingData));
					location.reload();
				}
			}
		})
	});

	//To mark the task as completed
	var chk=document.querySelectorAll('#chk');
	chk.forEach(function(ele){
		ele.addEventListener('click',()=>{
			delname=ele.nextSibling.parentNode.innerText.split('\n')[0];
			for (var i = 0; i < data.length; i++) {
				if(data[i]===delname){
					if(existingData[i]['btn']=='off'){
						existingData[i]['btn']='on';
						window.localStorage.setItem('tasks',JSON.stringify(existingData));
					}
					else{
						existingData[i]['btn']='off';
						window.localStorage.setItem('tasks',JSON.stringify(existingData));
					}
				}
			}
		})
	})
})


//To add the new task in the list

function add() {
	if(task.value!==''){
		list.innerHTML+=`
		<li>
			<input type="checkbox" id='chk'>
			<p>${task.value}</p>
			<button id='del'>delete</button>
		</li>`;
		var val={'btn':'off','task':`${task.value}`};
		var oldData=JSON.parse(localStorage.getItem('tasks') || '[]');
		oldData.push(val);
		window.localStorage.setItem('tasks',JSON.stringify(oldData));
		location.reload();
	}else{
		alert('Task cannot be empty');
	}
}



