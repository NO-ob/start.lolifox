var current_sp = 0;
var sp = document.createElement("searchlist");
sp.innerHTML = 
	`<provider group="1" name="Google">
		<p class="imgSrc">images/google.png</p>
		<query type="web">https://www.google.com/search?q=</query>
	</provider>
	<provider group="1" name="DuckDuckGo">
		<p class="imgSrc">images/duckduckgo.png</p>
		<query type="web">https://duckduckgo.com/?q=</query>
	</provider>
	<provider group="1" name="Yandex">
		<p class="imgSrc">images/yandex.png</p>
		<query type="web">https://yandex.com/search/?text=</query>
	</provider>
	<provider group="2" name="Nyaa">
		<p class="imgSrc">images/nyaa.png</p>
		<query type="forum">https://nyaa.si/?f=0&c=0_0&q=</query>
	</provider>
	<provider group="3" name="aniDB">
		<p class="imgSrc">images/anidb.png</p>
		<query type="forum">https://anidb.net/search/anime/?adb.search=</query>
	</provider>`;

function do_search()
{
	q = document.getElementById("query");
	if(q.value == "") {
		q.value = "You have to enter a query first.";
		return;
	}
	window.location = sp.getElementsByTagName("provider")[current_sp].getElementsByTagName("query")[0].textContent + q.value;
}
function showmenu()
{
	m1 = document.getElementById("menu1");
	m2 = document.getElementById("menu2");
	s = document.getElementById("searchprovider");
	m1.style.left = s.x + "px";
	m1.style.top = s.y + 21 + "px";
	m1.style.visibility = "visible";
	m2.style.left = s.x + "px";
	m2.style.top = s.y - m2.offsetHeight + 1 + "px";
	m2.style.visibility = "visible";
	s.style.opacity = "0.5";
}
function hidemenu()
{
	document.getElementById('menu1').style.visibility = "hidden";
	document.getElementById('menu2').style.visibility = "hidden";
	document.getElementById('searchprovider').style.opacity = "0.8";
}

function selectsearch(provider)
{
	i = document.getElementById("searchprovider");
	switch(provider) {
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			i.src = sp.getElementsByTagName("provider")[provider].getElementsByClassName("imgSrc")[0].textContent;
			current_sp = provider;
			hidemenu();
	}
}

function constructmenu(group)
{
	let provider = sp.getElementsByTagName("provider");
	for(var i = 0; i < provider.length; i++) {
		if(provider[i].getAttribute("group") ==  group) {
			document.write("<span onclick=\"selectsearch(" + i + ");\">" + provider[i].getAttribute("name") + "</span>");
		}
	}	
}

function checkClient()
{
	var agent = navigator.userAgent;
	var isLF = agent.search(/lolifox/);
	if(isLF != -1) {
		if(agent[isLF+8]<=0)
			if(agent[isLF+10]<=2)
				if(agent[isLF+12]<4)
					document.getElementById("info").style.visibility = "visible";
	}
}