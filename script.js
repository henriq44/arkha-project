const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});

// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})

const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})

if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})

const menuLinks = document.querySelectorAll('.menuz a[href^="#"]');

function getDistanceFromTheTop(element) {
	const id = element.getAttribute("href");
	console.log(id);
	return document.querySelector(id).offsetTop;
}

function nativeScroll(distanceFromTheTop){
	window.scroll({
		top:distanceFromTheTop,
		behavior:"smooth",
	});
}


function scrollToSection(event) {
	event.preventDefault();
	const distanceFromTheTop = getDistanceFromTheTop(event.target);
	nativeScroll(distanceFromTheTop);
	
}

menuLinks.forEach((link)  => {
	link.addEventListener('click', scrollToSection);
});

// PROGRESSBAR
const allProgress = document.querySelectorAll('main .card .progress');

allProgress.forEach(item=> {
	item.style.setProperty('--value', item.dataset.value)
})

// APEXCHART
var options = {
	series: [{
	name: 'Encanamento instalação',
	data: [31, 40, 28, 51, 42, 95, 67]
  }, {
	name: 'Encanamento revisão',
	data: [11, 32, 45, 32, 34, 20, 17]
  }],
	chart: {
	height: 350,
	type: 'area'
  },
  dataLabels: {
	enabled: false
  },
  stroke: {
	curve: 'smooth'
  },
  xaxis: {
	type: 'datetime',
	categories: ["2023-07-04T00:00:00.000Z", "2023-07-04T01:30:00.000Z", "2023-07-04T02:30:00.000Z", "2023-07-04T03:30:00.000Z", "2023-07-04T04:30:00.000Z", "2023-07-04T05:30:00.000Z", "2023-07-04T06:30:00.000Z"]
  },
  tooltip: {
	x: {
	  format: 'dd/MM/yy HH:mm'
	},
  },
  };
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();